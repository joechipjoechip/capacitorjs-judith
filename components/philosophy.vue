<template>
	<div class="philosophy-container">

		<micro-title :text="mainTitle" />

		<div class="philosophy-wrapper">

			<div class="philosophy-inner">

				<div class="big-square">

					<div class="little-square-outside-1"></div>

					<div class="little-square-outside-2"></div>

					<div class="little-square-inside-1"></div>

					<div class="little-square-inside-2"></div>

					<div class="little-square-outside-3"></div>

					<div class="little-square-outside-4"></div>

				</div>

			</div>

		</div>

	</div>
</template>

<script>

	import Title from "@/components/micro/title.vue";

	export default {
		components: {
			"micro-title": Title
		},
		props: {
			mainTitle: {
				type: String,
				required: true
			}
		},
		mounted(){

			// $nuxt.$on("hookFolio", this.onHookFolioHandler);

		},

		methods: {
			// 
		}
	}
</script>

<style lang="scss" scoped>

	.philosophy {

		$innerSize: 700px;
		$bigSquareSize: 500px;
		$littleSquareSize: 10%;


		$calcDecayInside: calc($littleSquareSize / 2);
		$calcDecay1: calc(-50% - ($littleSquareSize / 2));
		$calcDecay2: calc(50% - ($littleSquareSize / 2));

		&-container {
			display: block;
			position: relative;

			margin-top: 150px;
			margin-bottom: 550px;

		}

		&-wrapper {
			display: block;
			// here : if we need a global margin-top or bottom
		}

		&-inner {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;

			width: $innerSize;
			height: $innerSize;
			margin: 25% auto;

			transform-origin: center;
			transform: rotate(45deg);

			// border: solid 1px white;

			.big-square {
				position: relative;
				border: solid 1px green;

				display: block;
				width: $bigSquareSize;
				height: $bigSquareSize;
				margin: 0 auto;
			}

			*[class^="little-square"] {
				width: $littleSquareSize;
				height: $littleSquareSize;
				border: solid 1px transparent;
			}

			*[class^="little-square-inside"] {
				border-color: yellow;
				position: absolute;

				&[class*="-1"] {
					top: $calcDecayInside;
					left: $calcDecayInside;
				}

				&[class*="-2"] {
					bottom: $calcDecayInside;
					right: $calcDecayInside;
				}

			}

			*[class^="little-square-outside"] {
				border-color: rebeccapurple;
				position: absolute;

				transform-origin: center;
				transform: rotate(-45deg);

				&[class*="-1"] {
					top: $calcDecay1;
					left: $calcDecay2;
					border-color: red;
				}

				&[class*="-2"] {
					top: $calcDecay2;
					left: $calcDecay1;
					border-color: green;
				}

				&[class*="-3"] {
					bottom: $calcDecay1;
					right: $calcDecay2;
					border-color: orange;
				}

				&[class*="-4"] {
					bottom: $calcDecay2;
					right: $calcDecay1;
					border-color: blue;
				}

			}

			

		}

	}

</style>
