<template>

    <div class="team-wrapper">

        <cards :teammates="teammates" />
    
        <mate-listing :teammates="teammates" />

        <div id="pagetop" v-show="scY > 200" @click="toTop">
          &#8593;
        </div>
        
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
                mainTitle: 'Team',
                scTimer: 0,
                scY: 0,
            }
        },

        created() {
    
            this.$nuxt.$on('click-on-artiste', artisteName => {

                // Récupére l'obj artiste
                this.currentArtiste = this.teammates.find( artiste => artiste.nom === artisteName);

                // Selection de l'artiste dans le dom
                let elementToReach    =  document.querySelector("[data-artiste='" + this.currentArtiste.nom + "']")
                let topElementToReach =  elementToReach.getBoundingClientRect().top

                // Scroll jusqu'a l'élèment data-artiste
                window.scrollTo({ top: topElementToReach, behavior: 'smooth' })

    
            })
            
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleScroll: function () {
                if (this.scTimer) return;
                this.scTimer = setTimeout(() => {
                    this.scY = window.scrollY;
                    clearTimeout(this.scTimer);
                    this.scTimer = 0;
                }, 300);
            },
            toTop: function () {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            },
        }
    }

</script>

<style  lang="scss" scoped>

    #pagetop {
        right: 50px;
        bottom: 50px;
        position: fixed;
        color: red;
        font-size: 100px;
        cursor: pointer;
    }

    .team-wrapper {
        overflow: hidden;
    }

    .title-team {
        padding-top: 50px;
    }


</style>