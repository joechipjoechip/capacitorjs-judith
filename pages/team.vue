<template>

    <div class="team-wrapper">

        <cards :teammates="teammates" />

        <micro-title class="title-team" :text="mainTitle" />
    
        <listing :teammates="teammates" />
        
    </div>   
        

</template>

<script>

    import wording from "@/assets/data/wording.js";
    import Cards from "@/components/cards";
    import Listing from "@/components/listing";

    export default {
        layout: "mainLayout",
        components: {
            "cards": Cards,
            "listing": Listing,

        },

        data() {
            return {
                teammates: wording.teammates,
                mainTitle: 'Team'
            }
        }
    }

</script>

<style  lang="scss" scoped>

.title-team {
        padding: 20px 0;
}


</style>