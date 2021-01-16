
<style>
    .optionsContainer .heladosFlavours {
        background:rgb(161, 91, 91);
        width: 50%;
        float:right;
    }
    .optionsContainer .heladosSize {
        background:rgb(153, 185, 143);
        width: 50%;
        float:left;
    }
    .heladosResults {
        height: 10em;
        background:rgb(223, 214, 210);
    }
    .heladosResults p{
        padding-top: 8em;
    }

</style>

<div class="mainContainer">
    <div class="mainTitle">
        <h1>Heladeria Svelte</h1>
    </div>-
    <div class="optionsContainer">
        <div class="heladosSize">
            <h3>Helado size</h3>
            {#each scoops as scoop,i}
            <label>
                <input type="radio" bind:group={counter} value={++i}>
                {scoop}
            </label>
            {/each}
        </div>
       
        <div class="heladosFlavours">
            <h3>Helado Flavours</h3>
            {#each menu as flavour}
            <label>
                <input type=checkbox bind:group={flavours} value={flavour}>
                {flavour}
            </label>
            {/each}
        </div>
    </div>
    
    <div class="heladosResults">
            {#if flavours.length === 0} 
            <p>Please select at least one Flavour</p>
            {:else if flavours.length > counter}
            <p>Can't order more flavours that scoops!.</p>
            {:else}
            You ordered {counter} {counter === 1 ?  'scoop' : 'scoops'}
            of {join(flavours)}
            {/if}
    </div>

</div>

<script>
    let counter = 0;
	let scoops = ["One scoop", "Two scoops", "Three scoops"];
    let flavours = ["Mint choc chip"];
    let menu = ['Cookies and cream','Mint choc chip','Raspberry ripple'];
    const join = () => {
        if (flavours.length === 1) return flavours[0];
        return `${flavours.slice(0, -1).join(', ')} and  ${flavours[flavours.length - 1]}`;
    }
</script>