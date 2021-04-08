<!-- <script context="module">
    export async function preload(page, session) {
        const res = await this.fetch('/gallery-items.json');
        const Items = await res.json();
        return {Items};
            }
</script> -->

<script>
/* import GalleryItem from './GalleryItem.svelte';
export let Items; */
</script>
<svelte:head>
    <title>Gwendolin Gallery</title>
</svelte:head>
 <!-- Gallery -->
 <div id="portfolio" class="section">
    <div class="container">
  <!--     <div class="gallery row">

        {#each Items as item}
        <GalleryItem 
        title={item.title} 
        description={item.description} 
        price={item.price} 
        image={item.image}
        category={item.category}
        />
        {/each}

      </div> -->
      Here go the gallery!!
    </div>
    <!-- /.container -->
  </div>