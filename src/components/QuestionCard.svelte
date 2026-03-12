<script>
    import Icon from "@iconify/svelte";
    import ProfileIcon from "./ProfileIcon.svelte";

    let { item, index, currentUser, onToggleUpvote } = $props();

    // Determine if the current user has upvoted this specific question
    let hasUpvoted = $derived(currentUser && item.upvotes?.some(v => v.user_id === currentUser.id));

    let isAnimating = $state(false);

    function handleUpvote() {
        onToggleUpvote();
        isAnimating = true;
        setTimeout(() => {
            isAnimating = false;
        }, 300);
    }
    
    // Calculate and format the time elapsed since the question was created.
    // Returns relative time for recent dates, or absolute date for older questions.
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
        <p class="card-text fw-light m-0 mb-3">{item.question}</p>
        <button 
            class="btn btn-outline-custom rounded-pill fw-bold d-flex justify-content-center align-items-center gap-1 {isAnimating ? 'animate-pop' : ''}"
            style="min-width: 60px;"
            onclick={handleUpvote}>
            <Icon class="me-1" icon={hasUpvoted ? 'iconamoon:like-fill' : 'iconamoon:like'} width="18" height="18" />
            {item.upvotes?.length || 0}
        </button>
    </div>
</div>

<style>
    @keyframes pop {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
    :global(.animate-pop) {
        animation: pop 0.3s ease-in-out;
    }
</style>