<template>
	<div class="manifesto">

		<micro-title class="manifesto-title" text="manifesto"/>

		<div class="wording-container">

			<div class="punchline-container">

				<p class="punchline-1">{{ wording.punchlineOne }}</p>

				<span class="punchline-square"></span>

				<p class="punchline-2">{{ wording.punchlineTwo }}</p>

			</div>

			<div class="concrete-container">

				<div class="concrete-first">

					<p v-for="(text, index, id) in wording.text.first" :key="id"
						class="concrete-cell"
					>
						{{ text }}
					</p>
					
				</div>

				<div class="concrete-second">

					<p v-for="(text, index, id) in wording.text.second" :key="id"
						class="concrete-cell"
					>
						{{ text }}
					</p>

					<span class="concrete-signature">Judith</span>

				</div>


			</div>

		</div>

	</div>
</template>

<script>

	import wording from "@/assets/data/wording.js";

	import MicroTitle from "@/components/micro/title.vue";

	export default {

		components: {
			"micro-title": MicroTitle
		},

		data(){
			return {
				wording: wording.manifesto
			}
		}

	}

</script>

<style lang="scss" scoped>

	.manifesto {

		$squareSize: 300px;
		$squareSizeMobile: 200px;


		background-color: var(--color-primary);
		color: var(--color-white);

		&-title {
			display: block;
			padding-top: 22px;
		}

		.wording {

			&-container {
				display: block;
				width: 90%;
				max-width: 835px;
				margin: 0 auto;
				margin-top: 114px;
				padding-bottom: 176px;

				.punchline {

					&-container {
						position: relative;

						> * {
							text-align: center;
							font-family: "PresicavRg";
							font-size: 42px;
							line-height: 50px;
							margin-bottom: 80px;

							@media #{$mobile} {
								font-size: 32px;
								line-height: 40px;
							}
						}

					}

					&-1 {
						font-weight: bold;
					}
					
					&-2 {
						font-family: "PresicavXl";
						width: 80%;
						margin: 0 auto;
					}

					&-square {
						position: absolute;
						width: $squareSize;
						height: $squareSize;
						border: solid 1px var(--color-white);
						transform: rotate(45deg);
						top: calc(50% - ($squareSize / 2));
						left: calc(50% - ($squareSize / 2));

						@media #{$mobile} {
							width: $squareSizeMobile;
							height: $squareSizeMobile;
							top: calc(50% - ($squareSizeMobile / 2));
							left: calc(50% - ($squareSizeMobile / 2));
						}

					}

				}

				.concrete {

					&-container {
						display: flex;
						flex-flow: row nowrap;
						align-items: flex-start;
						margin-top: 176px;
						justify-content: space-between;

						@media #{$mobile} {
							flex-flow: column nowrap;
						}
					}

					&-first,
					&-second {
						width: calc(50% - 8px);

						@media #{$mobile} {
							width: 100%;
						}
					}
					&-second p:last-of-type {
						font-weight: bold;
					}

					&-cell {
						margin-top: 40px;

						&:first-of-type {
							margin-top: 0;
						}

					}

					&-signature {
						display: block;
						margin-top: 25px;
						padding-top: 15px;
						border-top: solid 1px var(--color-white);
					}

					// font
					&-cell,
					&-signature {
						font-family: "AktivGrotesk";
						font-size: 24px;
						line-height: 31px;
						letter-spacing: 0.24px;
						font-weight: 300;
					}

				}

			}

		}

	}

</style>
