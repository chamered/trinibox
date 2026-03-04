<script>
    let { name } = $props();

    function randomBgColor() {
        // Generate a random hue (0 to 360)
        const h = Math.floor(Math.random() * 360);
        // Set saturation between 60% and 90% for vibrant colors
        const s = Math.floor(Math.random() * 30) + 60;
        // Set lightness between 40% and 60% to ensure readability of white text
        const l = Math.floor(Math.random() * 20) + 40;

        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    function setupProfileIcon(name) {
        const NAMES = name.split(" ");
        let result = "";

        let length = 0;
        NAMES.forEach((element) => {
            if (length >= 2) return result;
            result += element.charAt(0);
            length++;
        });

        return result;
    }
</script>

<div
    class="rounded-circle d-flex justify-content-center align-items-center text-white shadow-sm"
    style="width: 45px; height: 45px; background-color: {randomBgColor()};"
>
    <span class="fw-bold">{setupProfileIcon(name)}</span>
</div>
