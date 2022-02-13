<template>
	<div :class="[
			'home-wrapper',
			{ 'active3d': active3d }
		]"
		@mousemove="onMouseMoveHandler"
		@mousewheel="onMouseWheelHandler"
	>

		<losange 
			ref="losange" 
			text="dare to care"
		/>

		<folio 
			ref="folio" 
			path-name="home" 
			:mouse-pos="mousePos"
		/>

		<philosophy
			ref="philosophy"
			main-title="our philosophy"
		/>

		<ethic
			ref="ethic"
			main-title="Collaborative ethic"
			sub-title="We not only care about who we are working for"
		/>

	</div>
</template>

<script>

	import Folio from "@/components/folio.vue";
	import Losange from '@/components/losange.vue';
	import Philosophy from '@/components/philosophy.vue';
	import Ethic from '@/components/ethic.vue';

	export default {

		layout: "mainLayout",

		components: {
			"folio": Folio,
			"losange": Losange,
			"philosophy": Philosophy,
			"ethic": Ethic
		},

		data(){
			return {
				mousePos: {
					x: 0,
					y: 0
				},
				active3d: false
			}
		},

		methods: {

			onMouseWheelHandler(){

				const { top, bottom } = this.$refs.folio?.$el.getBoundingClientRect();

				if( top && bottom ){

					this.$refs.folio.isActive = (top <= window.innerHeight && bottom > 0);

				}

			},

			onMouseMoveHandler( event ){

				this.mousePos = {
					x: event.x / window.innerWidth - 0.5,
					y: event.y / window.innerHeight - 0.5
				}

			}

		}

	}

</script>

<style lang="scss" scoped>

	.home-wrapper {
		position: relative;

		&.active3d {

			perspective: 3000px;
			
		}

		.hooked-content {

			opacity: 0;

			&.hooked-displayed {

				opacity: 1;

			}

		}

	}

</style>
