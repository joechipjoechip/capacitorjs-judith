<template>
	<div class="work">

		<div class="work-wrapper">

			<div class="work-description-wrapper">

				<div v-for="(item, index, id) in wording" :key="id"
					class="work-description-container"
				>

					<transition name="transition-description-y-up">

						<h3 v-if="currentKey === item.key"
							class="work-description-subtitle"
						>
							{{ item.subtitle }}
						</h3>

					</transition>

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
						<h4>{{ item.section.replace(" ", " &nbsp; ") }}</h4>
					</li>

				</ul>

			</div>

		</div>

	</div>
</template>

<script>

	import wording from "@/assets/data/wording.js";

	console.log("a limport : wording : ", wording);

	export default {

		layout: "mainLayout",

		data(){
			return {
				wording: wording.workWithUs,
				currentKey: wording.workWithUs[0].key
			}
		},

		methods: {

			sectionClickHandler( event ){

				console.log("event.target : ", event.target.dataset.key);
				this.currentKey = event.target.dataset.key;

			}

		}
		
	}

</script>

<style lang="scss" scoped>

	.work {

		$sideWidth: 673px;
		$animDuration: 0.4s;


		width: 90%;
		max-width: $columnMaxWith;
		margin: 0 auto;
		margin-top: calc($headerHeight + 90px);
		margin-bottom: calc(100px);

		* {
			color: var(--color-white);
		}

		&-wrapper {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-content: flex-start;
		}

		&-description {

			&-wrapper {
				width: calc(100% - $sideWidth);
				border: solid 1px orange;
				color: var(--color-white);
			}
			
			&-container {
				// border: solid 5px rebeccapurple;
				position: relative;
			}

			&-subtitle {
				position: absolute;
				font-family: "AktivGrotesk";
				font-weight: bold;
				font-size: 26px;
				line-break: 33px;
				color: currentColor;

				height: 133px;
			}

			&-text {
				position: absolute;
				top: 200px;

				p {
					font-family: "AktivGrotesk";
					font-weight: normal;
					font-size: 24px;
					line-height: 31px;
				}

			}

		}

		&-section {
			
			&-container {
				width: $sideWidth;
				border: solid 1px red;

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
				}

				> * {
					pointer-events: none;
					font-family: "PresicavXl";
					font-size: 48px;
					font-weight: normal;
					line-height: 58px;
					letter-spacing: 4.8px;
					color: var(--color-white);

					transition: color calc($animDuration / 2);

					margin: 40px 0;

				}

				&.item-active {
					opacity: 1;

					&::before {
						background-color: var(--color-primary);
						border-color: var(--color-primary);
					}

					&::after {
						background-color: var(--color-primary);
					}

					> * {
						color: var(--color-primary);
					}

				}

			}

		}

	}

</style>
