<template>

	<div class="team-wrapper">

		<cards :teammates="teammates" />
	
		<mate-listing :teammates="teammates" />

		<transition name="arrowToTop">

			<div id="arrow-to-top" v-show="displayScroll" @click="toTop">
				
				<arrow-up />

			</div>

		</transition>
		
	</div> 
		

</template>

<script>

	import wording from "@/assets/data/wording.js";
	import Cards   from "@/components/cards";
	import Listing from "@/components/listing";
	import ArrowUp from "@/assets/svg/arrowUp.svg";

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
	
			this.$nuxt.$on('click-on-artist', artistName => {

				this.goToArtistSelected(artistName)

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

			goToArtistSelected(artistName){

				// Récupére l'obj artist
				this.currentArtist = this.teammates.find( artist => artist.name === artistName);

				// Selection de l'artist dans le dom
				const elementToReach    =  document.querySelector(`[data-artist='${this.currentArtist.name}']`);

				const topElementToReach =  elementToReach.getBoundingClientRect().top;

				// Scroll jusqu'a l'élèment data-artist
				window.scrollTo({ top: topElementToReach, behavior: 'smooth' });

			},

			handleScroll() {

				if(window.scrollY >= this.galeryBottom) {

					this.displayScroll = true;

				} else {

					this.displayScroll = false;

				}
	
			},

			toTop() {

				window.scrollTo({

					top: 0,
					behavior: "smooth"

				});
			},
		}
	}

</script>

<style  lang="scss" scoped>

	#arrow-to-top {
		right: 50px;
		bottom: 50px;
		position: fixed;
		color: var(--color-primary);
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
		transition: all .5s;
	}

	.arrowToTop-enter {
		opacity: 0;
	}

	.arrowToTop-enter-to {
		opacity: 0.80;
	}

	.arrowToTop-leave {
		opacity: 0.80;
	}

	.arrowToTop-leave-to {
		opacity: 0;
	}


</style>