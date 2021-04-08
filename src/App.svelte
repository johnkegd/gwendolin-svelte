<script>
	import ComponentInit from "./Components/componentTest.svelte";
	import {onMount} from 'svelte';
	import Initiador from './initiador';
	import Footer from "./Components/Footer.svelte";
	import Header from "./Components/Header.svelte";
	import Landing from "./pages/Landing.svelte";

	onMount(() => { 
		Initiador();
	});
</script>
<main>
	<Header />
	<Landing />
	<Footer />
</main>
<style>
	main {
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
