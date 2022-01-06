<template>
	<div class="edge"
		:style="{
			'margin-top': cssDecayValue
		}"
	>
	</div>
</template>

<script>
	export default {
		props: {
			relativeRef: {
				type: String,
				required: true
			}
		},
		data(){
			return {
				cssDecayValue: ""
			}
		},
		mounted(){

			$nuxt.$on("hookFolio", this.onHookFolioHandler);

		},

		methods: {

			onHookFolioHandler( event ){

				if( event.pleaseHook ){

					// const { bottom, height } = this.$parent.$refs[this.relativeRef].$el.getBoundingClientRect();

					// const value = Math.floor(bottom + height);

					const value = this.$parent.$refs[this.relativeRef].$el.offsetTop + 200;

					this.cssDecayValue = `${value}px`;

					this.$parent.hookedDisplayed = true;
	

				} else {

					this.$parent.hookedDisplayed = false;
					
					this.cssDecayValue = "";

				}

			}

		}
	}
</script>

<style lang="scss" scoped>

	.edge {
		display: block;
		position: relative;
		top: 0;

		h3 {
			color: white;
			font-size: 50px;
		}

	}

</style>
