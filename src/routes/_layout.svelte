<script>
/* 	import Nav from '../components/Nav.svelte';
 *//* 	import Footer from '../components/Footer.svelte'; */

	export let segment;
</script>

<style>
	main {
		margin: 0 auto;
		padding: 1em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<!-- <Nav {segment}/> -->
<main>
	<slot></slot>
</main>
<!-- <Footer/> -->