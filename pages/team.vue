<template>

    <div class="team-wrapper">

        <cards :teammates="teammates" />
    
        <mate-listing :teammates="teammates" />
        
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
            "mate-listing": Listing,

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

    .team-wrapper {
        overflow: hidden;
    }

    .title-team {
        padding-top: 50px;
    }


</style>