<script>
    import Icon from "@iconify/svelte";
    import ProfileIcon from "./ProfileIcon.svelte";

    let { item, index, currentUser, onToggleUpvote } = $props();

    let hasUpvoted = $derived(currentUser && item.upvotes?.some(v => v.user_id === currentUser.id));
    
    function formatDate(date) {
        const creationDate = new Date(date)
        const today = new Date()
        const secondsPassed = Math.floor((today - creationDate) / 1000);
        
        const minutes = Math.floor(secondsPassed / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (secondsPassed < 60) {
            return "Pochi secondi fa";
        } else if (minutes < 60) {
            return `${minutes} minut${minutes === 1 ? 'o' : 'i'} fa`;
        } else if (hours < 24) {
            return `${hours} or${hours === 1 ? 'a' : 'e'} fa`;
        } else if (days < 7) {
            return `${days} giorn${days === 1 ? 'o' : 'i'} fa`;
        } else {
            return creationDate.toLocaleDateString('it-IT');
        }
    }
</script>

<div class="card text-bg-dark border-custom shadow-lg h-100">
    <div class="card-body">
        <div class="d-flex align-items-center gap-2 mb-2">
            <ProfileIcon name={item.name}/>
            <div class="d-flex flex-column">
                <h6 class="card-title m-0">{item.name}</h6>
                <small class="text-secondary">{formatDate(item.created_at)}</small>
            </div>
        </div>
        <p class="card-text fw-light m-0 mb-2">{item.question}</p>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div 
            class="d-flex align-items-center gap-1" 
            style="cursor: pointer; width: fit-content;"
            onclick={onToggleUpvote}>
            <Icon class="upvotes {hasUpvoted ? 'upvotes-clicked' : ''}" icon="uil:arrow-up" width="22" height="22" />
            {item.upvotes?.length || 0}
        </div>
    </div>
</div>