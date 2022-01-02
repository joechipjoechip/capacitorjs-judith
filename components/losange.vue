<template>
	<div>
		<div class="losanges-container">

			<div class="losange-ext">

				<div ref="losangeIn" class="losange-in"></div>

				<h3 ref="losangeText" class="losange-in-text">

					<span v-for="letter in letters">
						{{ letter }}
					</span>

				</h3>

			</div>

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
		},
		mounted(){

			this.initSomeValues();

			this.initIntersectionObserver();

		},
		methods: {

			initSomeValues(){

				this.rootMargin = -100;

				this.intersectionOptions = {
					rootMargin: `${this.rootMargin}px`,
					threshold: [0.25, 0.5, 0.75, 1.0]
					// threshold: 1.0
				};

			},

			initIntersectionObserver(){

				this.observer = new IntersectionObserver(this.intersectionHandler, this.intersectionOptions);

				this.observer.observe(this.$refs.losangeText);

			},

			intersectionHandler( intersects ){

				const { isIntersecting, intersectionRatio, intersectionRect } = intersects[0];

				// console.log("ca intersect han : ", intersects);

				$nuxt.$emit("activateFolio", { 
					isIntersecting, 
					intersectionRatio, 
					intersectionRect, 
					rootMargin: this.rootMargin
				});

			}

		}

	}

</script>

<style lang="scss" scoped>

	$fontSize: 31px;

	.losanges-container {
		position: relative;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		margin-top: 70vh;

		.losange {

			&-ext {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 84vw;
				height: 84vw;
				transform: rotate(45deg);
	
				border: solid 1px $colorRed;
			}

			&-in {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 20vw;
				height: 20vw;
				max-width: 400px;
				max-height: 400px;
	
				border: solid 1px $colorRed;

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