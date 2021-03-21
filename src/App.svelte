<script>
	import ComponentInit from './Components/componentTest.svelte';
	import HomeLayout from './Views/Home.svelte';
	let count = 0;
	function handleClick() {
		count += 10;

	}
</script>

<main>
	<HomeLayout />
	<ComponentInit />

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>