<template>
	<div class="home-wrapper">

		<losange ref="losange" text="dare to care"/>

		<folio ref="folio" path-name="home" :mouse-pos="mousePos"/>


	</div>
</template>

<script>

	import Folio from "@/components/folio.vue";
	import Losange from '@/components/losange.vue';

	export default {

		layout: "mainLayout",

		components: {
			"folio": Folio,
			"losange": Losange
		},

		data(){
			return {
				mousePos: {
					x: window.innerWidth / 2,
					y: window.innerHeight / 2
				}
			}
		},
		mounted(){

			this.initSomeValues();

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
						hook: true,
						hookCustomPosition
					});

				} else {

					$nuxt.$emit("hookFolio", { 
						hook: false
					});

				}

			},

			onMouseMoveHandler( event ){

				this.mousePos = {
					x: event.x / window.innerWidth - 0.5,
					y: event.y / window.innerHeight - 0.5
				}

				console.log("mousePos : ", this.mousePos.x, this.mousePos.y);

			}

		}

	}

</script>

<style lang="scss" scoped>

	.home-wrapper {
		position: relative;
		// padding-top: $headerHeight;
	}

</style>
