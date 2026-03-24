<script>
    import Icon from '@iconify/svelte';
    import ProfileIcon from '../../components/ProfileIcon.svelte';
    let { data } = $props();
    let questions = $state(data.answeredQuestions);
</script>
<svelte:head>
	<title>TriniBox - Risposte</title>
</svelte:head>

<div class="container py-3">
    <div class="d-md-flex justify-content-between align-items-center mb-3">
        <div>  
            <h2 class="text-white">Archivio Risposte</h2>
            <p class="text-light m-0">Riascolta le puntate in cui abbiamo risposto alle vostre domande.</p>
        </div>
        <div class="d-flex flex-column flex-md-row align-items-md-center gap-3 my-3 my-md-0">
            <a class="btn btn-outline-light d-flex justify-content-center align-items-center gap-1 text-nowrap" href="/questions">
                <Icon icon="mdi:arrow-left" width="18" height="18" />
                Torna alle Domande
            </a>
        </div>
    </div>
    
    <div class="row g-3 h-100">
        {#each questions as item}
            <div class="col-12">
                <div class="card text-bg-dark border-custom shadow-lg h-100">
                    <div class="card-body">
                        <div class="d-flex align-items-center gap-2 mb-2">
                            <ProfileIcon name={item.name}/>
                            <div class="d-flex flex-column">
                                <h6 class="card-title m-0">{item.name}</h6>
                                <small class="text-secondary">{item.created_at.substring(0, 10)}</small>
                            </div>
                        </div>
                        <p class="card-text fw-light m-0 mb-2">{item.question}</p>
                        <p class="fw-light d-flex align-items-center gap-1 m-0 ms-3">
                            <Icon icon="mdi:play-circle" width="18" height="18" />
                            Trovi la risposta a questa domanda <a class="text-custom" href={item.episode_url}>QUI</a>
                        </p>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>