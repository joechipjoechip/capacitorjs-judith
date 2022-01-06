<template>
	<div class="philosophy-container">

		<micro-title :text="mainTitle" />

		<div class="philosophy-wrapper">

			<div class="philosophy-inner">

				<div ref="big-square" class="big-square">

					<!-- WORDINGS -->
					<div 
						class="wording-1" 
						:class="{ 'is-active': currentKey === 'transparency' }"
						@mouseenter="letterEventHandler"
						data-text="transparency">Transparency</div>

					<div 
						class="wording-2" 
						:class="{ 'is-active': currentKey === 'advocacy' }"
						@mouseenter="letterEventHandler"
						data-text="advocacy">Advocacy</div>

					<div 
						class="wording-3" 
						:class="{ 'is-active': currentKey === 'insightfullness' }"
						@mouseenter="letterEventHandler"
						data-text="insightfullness">Insightfullness</div>

					<div 
						class="wording-4" 
						:class="{ 'is-active': currentKey === 'accountability' }"
						@mouseenter="letterEventHandler"
						data-text="accountability">Accountability</div>


					<!--  SQUARES -->

					<!-- Inside -->
					<div ref="square-inside-1" class="little-square-inside-1">
						{{ singleLetter }}
					</div>

					<div ref="square-inside-2" class="little-square-inside-2">
						{{ singleLetter }}
					</div>

					<!-- Outside -->
					<div 
						class="little-square-outside-1"
						:class="{ 'is-active': currentKey === 'transparency' }"
						@mouseenter="letterEventHandler"
						data-text="transparency">T</div>

					<div 
						class="little-square-outside-2"
						:class="{ 'is-active': currentKey === 'advocacy' }"
						@mouseenter="letterEventHandler"
						data-text="advocacy">A</div>

					<div 
						class="little-square-outside-3"
						:class="{ 'is-active': currentKey === 'insightfullness' }"
						@mouseenter="letterEventHandler"
						data-text="insightfullness">I</div>

					<div 
						class="little-square-outside-4"
						:class="{ 'is-active': currentKey === 'accountability' }"
						@mouseenter="letterEventHandler"
						data-text="accountability">A</div>

					<div 
						class="wording-description"
						ref="wording-description" 
						v-if="descriptionText[currentKey]">
						{{ descriptionText[currentKey] }}
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
				currentKey: "",
				singleLetter: ""
			}
		},

		watch: {

			currentKey( newVal ){

				this.singleLetter = newVal.substring(0,1);

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
		$delayTransition2: .8s;


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

			// width: $innerSize;
			// height: $innerSize;
			margin: 25% auto;

			transform-origin: center;
			transform: rotate(45deg);

			// border: solid 1px white;

			.big-square {
				position: relative;
				border: solid 1px $colorRed;
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
			*[class^="wording"],
			*[class^="little-square"] {
				font-family: "AktivGrotesk";
				font-size: $wordingFontSize;
				text-transform: uppercase;
				letter-spacing: 2.4px;
				color: $borderColorWhiteFaded;
			}

			*[class^="wording"] {
				position: absolute;
				width: 100%;
				text-align: center;
				cursor: pointer;

				will-change: color;

				transition: color $delayTransition1;

				&.is-active {
					color: $colorRed;
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

			.wording-description {
				width: 60%;
				font-size: 1em;
				line-height: 30px;
				color: $colorWhite;
				transform: rotate(-45deg);
				text-transform: none;
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
				border-color: $colorRed;
				color: $colorRed;

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
					color: $colorRed;
					border-color: $colorRed;
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

</style>
