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

    function setupProfileIcon(name) {
        const NAMES = name.split(" ");
        let result = "";
        
        let length = 0;
        NAMES.forEach(element => {
            if (length >= 2) return result;
            result += element.charAt(0);
            length++;
        });

        return result;
    }
</script>

<div class={`${randomBgColor()} rounded-circle d-flex justify-content-center align-items-center`} style="width: 45px; height: 45px;">
    <span class="fw-bold">{setupProfileIcon(name)}</span>
</div>