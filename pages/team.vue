<template>
    <div class="team-wrapper">


        <cards-container :teammates="teammates" />
        <br>
        <micro-title :text="mainTitle" :sub-text="subTitle"/>
        <br>
        <listing-container :teammates="teammates" />
      
        
    </div>   
        

</template>

<script>
import wording from "@/assets/data/wording.js";
import cards from "@/components/cards";
import listing from "@/components/listing";

export default {
	layout: "mainLayout",
    components: {
        "cards-container": cards,
        "listing-container": listing,

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


</style>