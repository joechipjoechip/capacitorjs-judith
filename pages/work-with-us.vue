<template>
	<div class="work">

		<div class="work-wrapper">

			<div class="work-description-wrapper">

				<span class="work-description-wrapper-border"></span>

				<div v-for="(item, index, id) in wording" :key="id"
					class="work-description-container"
				>

					<div class="work-description-subtitle-container">

						<transition name="transition-description-y-up">

							<h3 v-if="currentKey === item.key" 
								class="work-description-subtitle-content"
							>
								{{ item.subtitle }}
							</h3>
							
						</transition>

					</div>

					<transition name="transition-description-y-down">

						<div v-if="currentKey === item.key"
							class="work-description-text"
						>

							<p v-for="sentence in item.description">
								{{ sentence }}
							</p>

						</div>

					</transition>

				</div>

			</div>


			<div class="work-section-container">

				<ul class="work-section-list">

					<li v-for="(item, indexx, id) in wording" :key="id"
						:class="[
							'work-section-item',
							{'item-active': currentKey === item.key}
						]"
						:data-key="item.key"
						@click.stop="sectionClickHandler"
					>

						<h4 class="section-title">

							<span v-for="(word, index, id) in item.section.split(' ')" :key="id">
								{{ word }}
							</span>

						</h4>

					</li>

				</ul>

			</div>

		</div>

		<manifesto />

	</div>
</template>

<script>

	import wording from "@/assets/data/wording.js";
	import Manifesto from "@/components/manifesto.vue";

	export default {

		layout: "mainLayout",

		components: {
			"manifesto": Manifesto
		},

		data(){
			return {
				wording: wording.workWithUs,
				currentKey: wording.workWithUs[0].key
			}
		},

		methods: {

			sectionClickHandler( event ){

				this.currentKey = event.target.dataset.key;

			}

		}
		
	}

</script>

<style lang="scss" scoped>

	.work {

		$sideWidth: 42%;
		$animDuration: 0.4s;

		* {
			color: var(--color-white);
		}

		&-wrapper {
			width: 90%;
			max-width: $columnMaxWith;
			margin: 0 auto;
			margin-top: calc($headerHeight + 90px);
			margin-bottom: calc(100px);

			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-content: flex-start;
		}

		&-description {

			&-wrapper {
				// border: solid 1px orange;
				position: relative;
				width: calc(100% - $sideWidth);
				color: var(--color-white);

				&-border {
					display: block;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 135px;
					border-bottom: solid 1px rgba(255,255,255,0.4);
				}
			}
			
			&-container {
				// border: solid 5px rebeccapurple;
				position: relative;
				display: flex;
				flex-flow: column nowrap;
				justify-content: center;
				align-items: center;
			}

			&-subtitle {

				&-container {

					position: absolute;
					font-family: "AktivGrotesk";
					font-weight: bold;
					font-size: 26px;
					line-height: 33px;
					color: currentColor;
					// max-width: 200px;
					padding-right: calc(100% - 200px);
					left: 0;
					top: 0;
	
					text-transform: uppercase;
	
					height: 135px;

				}

				&-content {

				}
			}

			&-text {
				position: absolute;
				top: 233px;
				max-width: 400px;

				p {
					font-family: "AktivGrotesk";
					font-weight: 300;
					font-size: 24px;
					line-height: 31px;
				}

			}

		}

		&-section {
			
			&-container {
				// border: solid 1px red;
				width: $sideWidth;

			}

			&-list {
				list-style: none;
				display: flex;
				flex-flow: column nowrap;
			}

			&-item {
				position: relative;
				width: 100%;
				height: auto;

				opacity: .4;

				transition: opacity $animDuration;

				&::before {
					// little square
					content: "";
					position: absolute;
					display: block;
					top: calc(50% - 12.5px);
					right: 0;
					width: 25px;
					height: 25px;

					transform: rotate(45deg);

					border: solid 1px var(--color-white);
					background-color: transparent;

					transition: 
						border-color $animDuration, 
						background-color $animDuration;

				}

				&::after {
					// underline
					content: "";
					position: absolute;
					display: block;
					bottom: 0;
					width: 100%;
					max-width: 260px;
					height: 1px;
					background-color: var(--color-white);

					transition: background-color $animDuration;
				}

				&:first-of-type {
					> * {
						margin-top: 0;
					}
				}

				&:last-of-type {
					> * {
						margin-bottom: 0;
					}

					&::after {
						display: none;
					}
				}

				> * {
					pointer-events: none;
					font-family: "PresicavXl";
					// font-size: 48px;
					font-size: 38px;
					font-weight: normal;
					// line-height: 58px;
					line-height: 48px;
					letter-spacing: 4.8px;
					color: var(--color-white);
					text-transform: capitalize;

					transition: color calc($animDuration / 2);

					margin: 40px 0;
					// margin: 5vh 0;

				}

				&.item-active {
					opacity: 1;

					&::before {
						background-color: var(--color-primary);
						border-color: var(--color-primary);
					}

					// &::after {
					// 	background-color: var(--color-primary);
					// }

					> * {
						color: var(--color-primary);
					}

				}

				.section-title {

					span {
						display: block;
					}

				}

			}

		}

	}

</style>
