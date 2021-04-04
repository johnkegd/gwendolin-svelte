<script>
    var titles = ["Gwendolin", "John","Perrito"];
</script>

{#each titles as title,i}
<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class="activator" src="images/office.jpg" />
    </div>
    <div class="card-content">
        <span class="card-title activator grey-text text-darken-4"
            >{title}<i class="material-icons right">more_vert</i></span
        >
        <p><a href="#">This is a link</a></p>
    </div>
</div>
{/each}

