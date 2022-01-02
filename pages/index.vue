<template>
	<div class="home-wrapper">

		<losange ref="losange" text="dare to care"/>

		<folio ref="folio" path-name="home"/>


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
				// 
			}
		},
		mounted(){

			this.initSomeValues();

			window.addEventListener("scroll", this.wheelHandler);

		},
		methods: {

			initSomeValues(){

				// 20vh
				this.triggerLine = ((window.innerHeight / 100) * 20);

				// 80vh
				this.yTrigger = window.innerHeight - this.triggerLine;

			},

			wheelHandler(){

				const wordingBottomPosition = this.$refs.losange.$refs.losangeText.getBoundingClientRect().bottom;

				if( wordingBottomPosition <= this.yTrigger ){

					
					this.$refs.folio.isActive = true;

				} else {
					
					this.$refs.folio.isActive = false;

				}

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
