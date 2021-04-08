<script>
import { each } from 'svelte/internal';
import GalleryItem from './GalleryItem.svelte';
import Items from '../../gallery-items';
</script>
 <!-- Gallery -->
 <div id="portfolio" class="section">
    <div class="container">
      <div class="gallery row">

        {#each Items as item}
        <GalleryItem 
        title={item.title} 
        description={item.description} 
        price={item.price} 
        image={item.image}
        category={item.category}
        />
        {/each}

      </div>
    </div><!-- /.container -->
  </div>