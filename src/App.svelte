<script>
	import ComponentInit from "./Components/componentTest.svelte";
	import {onMount} from 'svelte';
	import Initiador from './initiador';
	import Footer from "./Components/Footer.svelte";
	import Header from "./Components/Header.svelte";
	import HomeLayout from "./pages/Home.svelte";
	import Card from './Components/materialize/Card.svelte';

	onMount(() => { 
		Initiador();
	});
</script>

<Header />
<main>
	<HomeLayout />
</main>
<Footer />

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
