<template>
	<div class="edge"
		:style="{
			'margin-top': cssDecayValue
		}"
	>
		&nbsp;
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

					const value = this.$parent.$refs[this.relativeRef].$el.offsetTop;

					this.cssDecayValue = `${value}px`;

					setTimeout(() => {

						this.$parent.hookedDisplayed = true;

					}, 100);
	

				} else {

					this.cssDecayValue = "";

					this.$parent.hookedDisplayed = false;

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
