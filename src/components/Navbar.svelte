<script>
    import UserMenu from "./UserMenu.svelte";
    import logo from "$lib/assets/trinitalk-word-logo.png";
</script>

<nav class="navbar navbar-expand-lg bg-custom border-bottom border-custom-2 border-2">
    <div class="container-fluid">
        <a href="/" class="navbar-brand d-flex align-items-center">
            <img src={logo} alt="Trinitalk" width="100">
        </a>
        <div class="d-flex align-items-center ms-auto">
            <UserMenu />
        </div>
    </div>
</nav>