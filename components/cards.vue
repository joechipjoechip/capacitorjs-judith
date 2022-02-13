<template>
    <div class="cards-container">

            <div v-for="mate in teammates" :key="mate.id" class="card">
              
                <img  class="card-image" :srcset="mate.photo" :alt="mate.prenom">
                <h1 class="card-prenom">{{mate.prenom}}</h1>
        
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

<style  lang="scss" scoped>
.cards-container {
 
    display: flex;
    justify-content: center;
    flex-flow:row wrap;
}


.card {
    cursor:pointer;
    position: relative;
    width: 24%;
    border: solid  2px transparent;
    overflow: hidden;
 
    &:hover {
        // border: solid 2px red; 
        .card-prenom {
            transition: all 0.25s;
            opacity:1;
            bottom: 15px;
            left:15px;
        }
        .card-image {
            transition:0.25s;
            filter: opacity(1);
        }
    }

    .card-image {
        object-fit:cover;
        object-position: center;
        width: 100%;
        height: 100%;
        filter: opacity(0.5);
        transition: all 0.45s;
    }

    .card-prenom {
        font-family: "PresicavRg";
        transition: all 0.45s;
        width: 100%;
        bottom: 5px;
        left:15px;
        position: absolute;
        opacity: 0;
    }


}
</style>