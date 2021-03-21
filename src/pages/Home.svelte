<script>
    import ContentBox from '../Components/ContentBox.svelte';
    import ProductsJson from '../productsTest.js';
    // import NavBtn from '../Components/NavigatorBtn.svelte';
    import { onMount } from 'svelte';
    import Gallery from '../Components/materialize/Gallery.svelte';
  
    let products
  
  
    onMount(() => {
      products = ProductsJson
    })
  </script>
  
  <div class="container-home">
<!--     <ContentBox products={products} />
 -->   <!--  <NavBtn/> -->
  </div>
  <Gallery/>
  