<template>

	<div ref="losangesContainer" class="losanges-container">

		<div ref="losangeExt" class="losange-ext">

			<div ref="losangeIn" class="losange-in"></div>

			<h3 ref="losangeText" class="losange-in-text">

				<span v-for="letter in letters">
					{{ letter }}
				</span>

			</h3>

		</div>

	</div>

</template>

<script>
	export default {
		props: {
			text: {
				type: String,
				required: true
			}
		},
		data(){
			return {
				letters: this.text.split("")
			}
		}
	}

</script>

<style lang="scss" scoped>

	$fontSize: 31px;
	$borderSize: 2px;

	.losanges-container {
		position: relative;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		width: 100%;
		top: 10vh;

		@media #{$mobile} {
			top: 0;
			margin-top: 33vh;
		}
		
		.losange {

			&-ext {

				display: flex;
				justify-content: center;
				align-items: center;
				transform: rotate(45deg);
				margin-top: 390px;
	
				border-top: solid $borderSize var(--color-primary);
				border-left: solid $borderSize var(--color-primary);

				@media #{$mobile} {
					margin-top: 0;
				}
			}

			&-in {
				display: flex;
				justify-content: center;
				align-items: center;
				// width: 20vh;
				// height: 20vh;
				width: 250px;
				height: 250px;
				margin: 800px;
				max-width: 400px;
				max-height: 400px;
	
				border: solid $borderSize var(--color-primary);

				@media #{$mobile} {
					margin: 200px;
					max-width: 100px;
					max-height: 100px;
				}

				&-text {
					position: absolute;
					display: flex;
					justify-content: space-between;
					width: 80vw;
					color: var(--color-white);

					max-width: $columnMaxWith;
					text-transform: uppercase;
					transform: rotate(-45deg);

					font-family: "PresicavRg";
					font-weight: bold;
					font-size: $fontSize;
					letter-spacing: 124px;

					@media #{$mobile} {
						width: 95vw;
					}

					span {
						width: $fontSize;
						text-align: center;
					}
				}

			}

		}

	}

</style>
