<template>
	<div class="edge"
		:style="{
			'margin-top': cssDecayValue
		}"
	>
		<h3>EDGE EDGE EDGE</h3>
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

					const { bottom, height } = this.$parent.$refs[this.relativeRef].$el.getBoundingClientRect();

					const value = Math.floor(bottom + height);

					this.cssDecayValue = `${value}px`;
	

				} else {
					
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
