<template>

	<div ref="losangesContainer" class="losanges-container">

		<div ref="losangeExt" class="losange-ext anim-shadow">

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

	.losanges-container {
		position: absolute;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		width: 100%;
		top: 70vh;
		// overflow: hidden;

		.losange {

			&-ext {

				display: flex;
				justify-content: center;
				align-items: center;
				transform: rotate(45deg);
				margin-top: 390px;
	
				border-top: solid 1px var(--color-primary);
				border-left: solid 1px var(--color-primary);

				box-shadow: 0px 0px 10vh transparent inset;

				// animation: animLosangeExt 3s alternate-reverse infinite;
				// box-shadow: 0px 0px 10vh color.scale(var(--color-primary), $alpha: -20%) inset;
				box-shadow: 0px 0px 10vh var(--color-primary) inset;
				// box-sizing: content-box;
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
	
				border: solid 1px var(--color-primary);

				&-text {
					position: absolute;
					display: flex;
					justify-content: space-between;
					width: 80vw;

					max-width: $columnMaxWith;
					text-transform: uppercase;
					transform: rotate(-45deg);

					font-family: "PresicavRg";
					font-weight: bold;
					font-size: $fontSize;
					letter-spacing: 124px;

					span {
						width: $fontSize;
						text-align: center;
					}
				}

			}

		}

	}

</style>
