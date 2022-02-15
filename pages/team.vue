<template>

    <div class="team-wrapper">

        <cards :teammates="teammates" />
    
        <mate-listing :teammates="teammates" />

        <transition name="arrowToTop">
            <div id="pagetop" v-show="displayScroll" @click="toTop">
            	<!-- &#8593; -->
				<arrow-up />
            </div>
        </transition>
        
    </div> 
        

</template>

<script>

    import wording from "@/assets/data/wording.js";
    import Cards   from "@/components/cards";
    import Listing from "@/components/listing";
	import ArrowUp from "@/assets/svg/arrowup.svg";

    export default {
        layout: "mainLayout",
        components: {
            "cards": Cards,
            "mate-listing": Listing,
			"arrow-up": ArrowUp

        },

        data() {
            return {
                teammates: wording.teammates,
                mainTitle: 'Team',
                displayScroll: false,
                galeryBottom: 0,
            }
        },

        created() {
    
            this.$nuxt.$on('click-on-artiste', artistName => {

                // Récupére l'obj artiste
                this.currentArtiste = this.teammates.find( artist => artist.name === artistName);

                // Selection de l'artiste dans le dom
                let elementToReach    =  document.querySelector("[data-artiste='" + this.currentArtiste.name + "']");
                let topElementToReach =  elementToReach.getBoundingClientRect().top;

                // Scroll jusqu'a l'élèment data-artiste
                window.scrollTo({ top: topElementToReach, behavior: 'smooth' });

    
            })
            
        },

        mounted() {
			const el = document.querySelector('.cards-container');
            const galeryTop = el.offsetTop;
            const galeryHeight = el.offsetHeight;
            this.galeryBottom = galeryTop + galeryHeight;
            window.addEventListener('scroll', this.handleScroll)
      

        },

        methods: {
            handleScroll: function () {
                if(window.scrollY >= this.galeryBottom) {
                    this.displayScroll = true;
                } else {
                    this.displayScroll = false;
                }
     
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
        font-size: 40px;
        cursor: pointer;
    }

    .team-wrapper {
        overflow: hidden;
    }

    .title-team {
        padding-top: 50px;
    }

    .arrowToTop-enter-active, .arrowToTop-leave-active {
    	transition: opacity .5s;
    }
    .arrowToTop-enter {
    	opacity: 0;
    }
	.arrowToTop-enter-to {
		opacity: 1;
	}
    .arrowToTop-leave {
    	opacity: 1;
    }
    .arrowToTop-leave-to {
    	opacity: 0;
    }


</style>