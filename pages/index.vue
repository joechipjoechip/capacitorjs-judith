<template>
	<div class="home-wrapper" :class="{ 'active3d': active3d }">

		<losange 
			ref="losange" 
			text="dare to care"
		/>

		<folio 
			ref="folio" 
			path-name="home" 
			:mouse-pos="mousePos"
		/>

		<div 
			class="hooked-content"
			:class="{'hooked-displayed': hookedDisplayed}"
		>

			<edge 
				ref="edge" 
				relative-ref="folio" 
			/>

			<philosophy
				ref="philosophy"
				main-title="our philosophy"
			/>

		</div>




	</div>
</template>

<script>

	import Folio from "@/components/folio.vue";
	import Losange from '@/components/losange.vue';
	import Edge from '@/components/edge.vue';
	import Philosophy from '@/components/philosophy.vue';

	export default {

		layout: "mainLayout",

		components: {
			"folio": Folio,
			"losange": Losange,
			"edge": Edge,
			"philosophy": Philosophy
		},

		data(){
			return {
				mousePos: {
					x: window.innerWidth / 2,
					y: window.innerHeight / 2
				},
				active3d: false,
				hookedDisplayed: false
			}
		},
		mounted(){

			this.initSomeValues();

			window.addEventListener("resize", this.initSomeValues);

			window.addEventListener("scroll", this.onWheelHandler);

			window.addEventListener("mousemove", this.onMouseMoveHandler);

		},
		methods: {

			initSomeValues(){

				// 30vh
				this.triggerLine = ((window.innerHeight / 100) * 30);

				// 70vh
				this.yTrigger = window.innerHeight - this.triggerLine;

			},

			onWheelHandler(){

				const wordingBottomPosition = this.$refs.losange.$refs.losangeText.getBoundingClientRect().bottom;

				if( wordingBottomPosition <= this.yTrigger ){

					const hookCustomPosition = window.scrollY + wordingBottomPosition - this.yTrigger;

					$nuxt.$emit("hookFolio", { 
						pleaseHook: true,
						hookCustomPosition
					});

				} else {

					$nuxt.$emit("hookFolio", { 
						pleaseHook: false
					});

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
		// padding-top: $headerHeight;

		&.active3d {
			perspective: 4000px;
		}

		.hooked-content {
			opacity: 0;

			will-change: opacity;

			transition: opacity .01s;

			&.hooked-displayed {
				opacity: 1;
			}

		}

	}

</style>
