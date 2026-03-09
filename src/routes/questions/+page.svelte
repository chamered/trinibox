<script>
    import Icon from "@iconify/svelte";
    import QuestionCard from '../../components/QuestionCard.svelte';
    import { supabase } from "$lib/supabaseClient";
    import { goto } from "$app/navigation";
    
    let { data } = $props();

    let currentUser = $state(null);

    $effect(() => {
        supabase.auth.getSession().then(({ data }) => {
            currentUser = data.session?.user ?? null;
        });
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
            currentUser = session?.user ?? null;
        });
        return () => subscription.unsubscribe();
    });

    let questions = $state(data.questions);
    async function toggleUpvote(questionIndex, questionId) {
        if (!currentUser) {
            alert("Devi accedere per poter votare una domanda!");
            goto('/login');
            return;
        }

        const question = questions[questionIndex];
        const hasUpvoted = question.upvotes.some(v => v.user_id === currentUser.id);

        if(hasUpvoted) {
            questions[questionIndex].upvotes = question.upvotes.filter(v => v.user_id !== currentUser.id);
            
            await supabase.from('upvotes')
                .delete()
                .match({ question_id: questionId, user_id: currentUser.id });
        } else {
            questions[questionIndex].upvotes.push({ user_id: currentUser.id });

            await supabase.from('upvotes')
                .insert({ question_id: questionId, user_id: currentUser.id });
        }
    }
</script>
<svelte:head>
	<title>TriniBox - Domande</title>
</svelte:head>

<div class="container py-3">
    <div class="d-md-flex justify-content-between align-items-center mb-3">
        <div>  
            <h2 class="text-white">Tutte le Domande</h2>
            <p class="text-light m-0">Naviga tra tutte le domande fatte dalla nostra community.</p>
        </div>
        <div>
            <a class="btn btn-custom d-flex justify-content-center align-items-center gap-1 my-3" href="/">
                <Icon icon="icon-park-outline:write" width="18" height="18" />
                Fai una Domanda
            </a>
        </div>
    </div>
    
    <div class="row g-3 h-100">
        {#each questions as item, index}
            <div class="col-12">
                <QuestionCard {item} {index} {currentUser} onToggleUpvote={() => toggleUpvote(index, item.id)} />
            </div>
        {/each}
    </div>
</div>