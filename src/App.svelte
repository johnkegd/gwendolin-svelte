<script>
	import ComponentInit from './componentTest.svelte';
	export let name;
	let count = 0;
	function handleClick() {
		count += 10;

	}
</script>

<main>
	<h1>Start {name}!</h1>
	<button on:click={handleClick}>clicked {count} times</button>
	<ComponentInit/>

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	button {
		margin-top: count;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	

</style>