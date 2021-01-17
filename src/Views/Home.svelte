<script>
    import Header from '../Components/Header.svelte';
    import ContentBox from '../Components/ContentBox.svelte';
    import ProductsJson from '../productsTest.js';
    import NavBtn from '../Components/NavigatorBtn.svelte';
    import { onMount } from 'svelte';
  
    let products
  
  
    onMount(() => {
      products = ProductsJson
    })
  </script>
  
  <div class="container-home">
    <Header />
    <ContentBox products={products} />
    <NavBtn/>
  </div>
  