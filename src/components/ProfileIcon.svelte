<script>
    let { name } = $props();

    function randomBgColor() {
        const COLORS = [
            "bg-primary",
            "bg-secondary",
            "bg-success",
            "bg-danger",
            "bg-warning",
            "bg-info"
        ]

        return COLORS[Math.floor(Math.random() * COLORS.length)];
    }
</script>

<div class={`${randomBgColor()} rounded-circle d-flex justify-content-center align-items-center`} style="width: 45px; height: 45px;">
    <span class="fw-bold">{name.charAt(0)}</span>
</div>