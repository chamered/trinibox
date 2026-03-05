<script>
    import QuestionBox from "../components/QuestionBox.svelte";
    import UserMenu from "../components/UserMenu.svelte";
</script>
<svelte:head>
	<title>TriniBox</title>
</svelte:head>

<UserMenu />
<div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
    <QuestionBox/>
</div>