<script>
    let { item } = $props();
</script>

<div class="card shadow-sm border-0 h-100">
    <div class="card-body">
        <h5 class="card-title m-0">{item.nome}</h5>
        <p class="text-secondary mb-2"><small>{new Date(item.created_at).toLocaleDateString()}</small></p>
        <p class="card-text">{item.domanda}</p>
    </div>
</div>