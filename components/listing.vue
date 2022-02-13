<template>

    <div class="listing-container">


        <div v-for="mate in teammates" :key="mate.id" class="list-artiste">
            
            <div class="artiste-bandeau">
                <img  class="artiste-image" :srcset="mate.photo" :alt="mate.prenom">

                <h1 class="artiste-identity">{{mate.nom}} {{mate.prenom}}</h1>

            </div>
          
        </div>
        

    </div>

</template>

<script>
export default {
    layout:'mainLayout',

    props: {
        
        teammates: {
            type: Array,
            required: true
        },

    },
}
</script>

<style lang="scss" scoped>

.listing-container {
    display:flex;
    flex-direction: column;
    
}

.artiste-bandeau {
        display:flex;
        justify-content: row;
        height: 500px;
        width: 100%;
        border: solid 2px red;
        .artiste-identity {
            font-family: "PresicavRg";
            width: 90%;
            height: 100px;
            font-size: 100%;
            font-size: 5em;
        }
        .artiste-image {
            width:200px;
            object-fit: cover;

        }
}


</style>