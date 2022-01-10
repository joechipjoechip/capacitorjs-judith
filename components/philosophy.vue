<template>
	<div class="philosophy-container">

		<micro-title :text="mainTitle" />

		<div class="philosophy-wrapper">

			<div class="philosophy-inner">

				<div class="big-square anim-shadow">

					<!-- WORDINGS -->
					<div v-for="(notion, index, id) in notions" :key="id" 
						:class="[
							'wording-' + (index + 1), 
							{ 'is-active': currentKey === notion }
						]"
						@mouseenter="letterEventHandler"
						:data-text="notion"
					>
						{{notion}}
					</div>


					<div class="description-wrapper">

						<div 
							v-for="(notion, index, id) in  notions" :key="id"
							class="description-container">

							<transition name="transition-description">

								<div v-if="notion === currentKey"
									class="description">
									{{ descriptionText[currentKey] }}
								</div>

							</transition>
							
						</div>

					</div>

					

					<!--  SQUARES -->
					<!-- Inside -->
					<div v-for="index in 2" :key="index"
						:class="[
							'little-square-inside-' + index
						]">
						{{ currentKey ? currentKey.substring(0, 1) : "" }}
					</div>

					<!-- Outside -->
					<div v-for="(notion, index, id) in notions" :key="id" 
						:class="[
							'little-square-outside-' + (index + 1), 
							{ 'is-active': currentKey === notion }
						]"
						@mouseenter="letterEventHandler"
						:data-text="notion"
					>
						{{ notion.substring(0,1) }}
					</div>

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
		data(){
			return {
				descriptionDisplayed: false,
				descriptionText: {
					transparency: "transparencyy Our mission is no longer to make people dream, but to lead them to an informed consent.",
					advocacy: "advocacyy Our mission is no longer to make people dream, but to lead them to an informed consent.",
					insightfullness: "insightfullnessss Our mission is no longer to make people dream, but to lead them to an informed consent.",
					accountability: "accountabilityyy Our mission is no longer to make people dream, but to lead them to an informed consent."
				},
				notions: ["transparency", "advocacy", "insightfullness", "accountability"],
				currentKey: ""
			}
		},

		methods: {

			letterEventHandler( event ){

				this.currentKey = event.target.dataset.text;

			}

		}

	}

</script>

<style lang="scss" scoped>


	.philosophy {
		
		// $innerSize: 700px;

		// only css property (which can be override with an inline-style)
		$bigSquareSize: 40vh;

		// all relatives variables
		$littleSquareSize: 10%;
	
		$wordingFontSize: 18px;
		$wordingDecay: 40px;
		$calcWordingMargin: calc($wordingFontSize * -1 - $wordingDecay);
	
	
		$calcDecayInside: calc($littleSquareSize / 2);
		$calcDecay1: calc(-50% - ($littleSquareSize / 2));
		$calcDecay2: calc(50% - ($littleSquareSize / 2));

		$borderColorWhiteFaded: rgba(255,255,255, 0.4);

		$delayTransition1: .3s;
		$delayTransition2: .5s;

		&-container {
			display: block;

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

			// width: $innerSize;
			// height: $innerSize;
			margin: 25% auto;

			transform-origin: center;
			transform: rotate(45deg);

			// border: solid 1px white;

			.big-square {
				position: relative;
				border: solid 1px currentColor;
				font-size: 20px;

				width: $bigSquareSize;
				height: $bigSquareSize;
				margin: 0 auto;

				display: flex;
				flex-flow: column nowrap;
				justify-content: center;
				align-items: center;
			}

			// font styles
			.description,
			*[class^="wording"],
			*[class^="little-square"] {
				font-family: "AktivGrotesk";
				font-size: $wordingFontSize;
				text-transform: uppercase;
				letter-spacing: 2.4px;
				color: $borderColorWhiteFaded;
			}

			*[class^="wording"]{
				position: absolute;
				width: 100%;
				text-align: center;
				cursor: pointer;

				will-change: color;

				transition: color $delayTransition1;

				&.is-active {
					color: currentColor;
				}

				&[class*="-1"]{
					top: $calcWordingMargin;
				}

				&[class*="-2"]{
					transform-origin: left;
					transform: rotate(-90deg);

					left: $calcWordingMargin;
					bottom: calc($wordingFontSize / -2);
				}

				&[class*="-3"]{
					bottom: $calcWordingMargin;
				}

				&[class*="-4"]{
					transform-origin: right;
					transform: rotate(-90deg);

					right: $calcWordingMargin;
					top: calc($wordingFontSize / -2);
				}

			}

			.description {
				text-align: center;
				color: var(--color-white);
				font-size: 1.5vh;
				line-height: 3vh;

				&-container {
					transform-origin: center;
					transform: rotate(-45deg);
					position: absolute;
					width: 50%;
					height: 50%;
					top: 25%;
					left: 25%;
				}

				&-wrapper {
					width: 100%;
					height: 100%;

					font-size: 1.8vh;
					line-height: 30px;
					color: var(--color-white);
					text-transform: none;
				}


			}

			*[class^="little-square"] {
				width: $littleSquareSize;
				height: $littleSquareSize;
				border: solid 1px $borderColorWhiteFaded;

				display: flex;
				justify-content: center;
				align-items: center;

				transform-origin: center;
				transform: rotate(-45deg);
			}

			*[class^="little-square-inside"] {
				position: absolute;
				border-color: currentColor;
				color: currentColor;

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
				position: absolute;
				cursor: pointer;

				will-change: color, border-color;

				transition: color $delayTransition1,
							border-color $delayTransition2;

				&.is-active {
					color: currentColor;
					border-color: currentColor;
				}

				&[class*="-1"] {
					top: $calcDecay1;
					left: $calcDecay2;
				}

				&[class*="-2"] {
					top: $calcDecay2;
					left: $calcDecay1;
				}

				&[class*="-3"] {
					bottom: $calcDecay1;
					right: $calcDecay2;
				}

				&[class*="-4"] {
					bottom: $calcDecay2;
					right: $calcDecay1;
				}

			}

		}

	}

	.transition-description-enter-active, 
	.transition-description-leave-active {
		// top: -20vh;
		// position: absolute;

		transform: translateY(0);
		opacity: 1;

		will-change: transform, opacity;


	}

	.transition-description-enter-active {

		transition: 
			transform 1.35s,
			opacity 2.5s;

	} 

	.transition-description-leave-active {

		transition: 
			transform .85s,
			opacity .45s;

	}

	.transition-description-enter, 
	.transition-description-leave-to {

		transform: translateY(-50%);
		opacity: 0;

	}

	.transition-description-leave-to {

		transform: translateY(50%);

	}

</style>
