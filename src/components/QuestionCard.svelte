<script>
    import ProfileIcon from "./ProfileIcon.svelte";

    let { item } = $props();

    function displayDate(date) {
        const TODAY = new Date().getDate();
        const MONTH = new Date().getMonth()
        
        if (MONTH != date.slice(3, 5) - 1) return date;

        const DIFFERENCE = TODAY - date.slice(0, 2);
        if (DIFFERENCE >= 7 && DIFFERENCE < 14) {
            return "Una settimana fa";
        } else if (DIFFERENCE == 0) {
            return "Oggi"
        } else if (DIFFERENCE < 7) {
            return DIFFERENCE + " giorni fa";
        } else {
            return date;
        }
    }
</script>

<div class="card text-bg-dark shadow-lg h-100">
    <div class="card-body">
        <div class="d-flex align-items-center gap-2 mb-2">
            <ProfileIcon name={item.nome}/>
            <div class="d-flex flex-column">
                <h6 class="card-title m-0">{item.nome}</h6>
                <small class="text-secondary">{displayDate(new Date(item.created_at).toLocaleDateString())}</small>
            </div>
        </div>
        <p class="card-text fw-light">{item.domanda}</p>
    </div>
</div>