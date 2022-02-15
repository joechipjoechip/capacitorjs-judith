<template>

	<div class="case-viewer-wrapper">

		<div class="case-viewer-inner">

			<section class="head">

				<div class="head-cross" @click="handleCloseClick" >

					<cross  />

				</div>

				<h2 class="head-title">{{ item.name }}</h2>

				<a v-if="item.content.cta" class="head-cta" target="blank">

					{{ item.content.cta.wording }}

				</a>

			</section>

			<section class="cover-container">

				<img class="cover-image" src="http://placehold.it/1840x1227" :alt="'cover ' + item.name">

			</section>

			<section class="content-container">

				<div class="description-container">

					<p v-for="(sentence, index, id) in item.content.description" :key="id"
						class="description-paragraph"
					>
						{{ sentence }}
					</p>

				</div>

				<div class="side-container">

					<div class="parallax-coontainer">

						<!-- src: item.content.medias.parallax.assetName + item.content.medias.parallax.extension -->
						<img class="parallax-image" src="http://placehold.it/603x858" alt="parallax">

					</div>

					<div class="credits-container">

						<div class="credits-year">

							<p class="title">
								year:
							</p>

							<p class="info">
								<span class="slash">/</span>{{ item.year }}
							</p>

						</div>

						<div class="credits-type">

							<p class="title">
								type:
							</p>

							<p class="info">
								<span class="slash">/</span>{{ item.content.credits.type }}
							</p>

						</div>

						<div class="credits-entities-container">

							<p class="title">
								credits:
							</p>

							<div v-for="(entity, index, id) in item.content.credits.entities" :key="id"
								class="entity"
							>
								<span class="slash">/</span>
								<span class="info">{{ entity.name }}</span>
								<span class="which-is">{{ entity.whichIs }}</span>
							</div>

						</div>

					</div>

				</div>

			</section>

			<section class="lines-container">

				<div v-for="(line, index, id) in item.content.medias.lines" :key="id"
					class="line"
				>

					<media-handler 
						v-for="(media, index, id) in line" :key="id"
						class="line-media"
						:media="{
							from: 'case',
							folder: item.id,
							assetName: media.assetName,
							extension: media.extension
						}"
					/>

				</div>

			</section>

			<section class="bottom-container">

				<media-handler 
					class="bottom-media"
					:media="{
						from: 'case',
						folder: item.id,
						assetName: item.content.medias.bottom.assetName,
						extension: item.content.medias.bottom.extension
					}"
				/>

			</section>

			<section class="next-project">
				<!-- button -->
				<button>Next Project</button>
			</section>

		</div>

	</div>

</template>

<script>

	import MediaHandler from "@/components/micro/media-handler.vue";
	import Cross from "@/assets/svg/cross.svg";

	export default {

		components: {
			"media-handler": MediaHandler,
			"cross": Cross
		},

		props: {

			item: {
				type: Object,
				required: true
			}

		},

		mounted(){

			console.log("on a bien recu la props item : ", this.item);

		},

		methods:{

			handleCloseClick() {
				
				$nuxt.$emit('close-viewer');

				window.scrollTo(0,0)
			}
		}

	}
</script>

<style lang="scss" scoped>

	$marginBeewteenElements: 80px;

	.case-viewer {

		&-wrapper {
			position: absolute;
			width: 100%;
			top: $headerHeightSecondary;
			left: 0;
	
			background-color: var(--color-bg);
	
		}

		&-inner {
			width: 95%;
			margin: 0 auto;

			& > * {
				margin-top: $marginBeewteenElements;
			}

			.head {
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				align-items: center;

				&-title {
					font-family: "PresicavRg";
					font-size: 70px;
					text-transform: uppercase;
				}

				&-cta {
					font-family: "PresicavLt";
					font-size: 40px;
					text-transform: capitalize;
					padding: 25px 65px;

					color: var(--color-type-smooth);

					border: solid 1px var(--color-type-smooth);
					border-radius: 999px;
				}
				&-cross {
					color: var(--color-primary);
					position: fixed;
					top: 102px;
					right: 59px;
					cursor: pointer;

				}
				
			}

			.cover {

				&-container {
					// 
				}

				&-image {
					width: 100%;
				}
			}

			.content {

				&-container {
					display: flex;
					flex-flow: row nowrap;
					padding-bottom: $marginBeewteenElements;
					border-bottom: solid 1px var(--color-type-smooth-plus);
				}

			}

			.description {

				&-container {
					width: 60%;
					display: flex;
					flex-flow: column nowrap;
				}

				&-paragraph {
					width: 80%;
					font-family: "AktivGrotesk";
					font-size: 67px;
					line-height: 1.3;
					font-weight: 300;
					color: var(--color-type-smooth);

					margin-top: $marginBeewteenElements;

					&:first-of-type {
						margin-top: 0;
					}

				}

			}

			.side {

				&-container {
					width: 40%;
					display: flex;
					flex-flow: column nowrap;
					justify-content: space-between;
				}

			}

			.parallax {

				&-container {
					// 
				}

				&-image {
					width: 100%;
				}

			}

			.credits {

				&-container {

					$bigType: 20px;
					$smallType: 15px;

					* {
						text-transform: uppercase;
					}

					& > * {
						margin-top: 35px;
					}

					.title {
						font-family: "AktivGrotesk";
						font-size: $smallType;
						font-weight: 100;
						margin-block: 15px;

						color: var(--color-type-smooth-max);
					}

					.info,
					.which-is {
						font-family: "AktivGrotesk";
						font-size: $bigType;
						font-weight: 100;
					}

					.info {

						color: var(--color-type-smooth-plus);
					}

					.slash {
						font-size: $bigType;
						margin-right: 10px;
						color: var(--color-type-smooth-max);
					}
				}

				&-year {}

				&-type {}

				&-entities {

					&-container {

						.entity {
							display: flex;
							flex-flow: row wrap;
							justify-content: flex-start;
							align-items: center;
							margin-top: 4px;

							&:first-of-type {
								margin-top: 0;
							}

							.which-is {
								font-size: 18px;
								margin-left: 4px;
								color: var(--color-type-smooth-max);
							}

						}

					}
				}

			}

			.lines {

				&-container {

					$lineCellSizeBig: 60%;

					$lineCellSizeSmal: 32%;

					.line {
	
						margin-top: $marginBeewteenElements;
	
						display: flex;
						flex-flow: row nowrap;
						justify-content: space-between;
						align-items: flex-start;

						&:first-of-type {
							margin: 0;
						}
	
						// impairs
						&:nth-of-type(odd) {
							// border: solid 5px orange;
	
							.line-media {
	
								&:first-of-type {
									width: $lineCellSizeBig;
								}
	
								&:last-of-type {
									width: $lineCellSizeSmal;
								}
	
							}
	
						}
	
						// pairs
						&:nth-of-type(even) {
							// border: solid 5px pink;
	
							.line-media {
	
								&:first-of-type {
									width: $lineCellSizeSmal;
								}
	
								&:last-of-type {
									width: $lineCellSizeBig;
								}
								
							}
	
						}
	
					}

				}

			}

			.bottom {

				&-container {
					// 
				}

				&-media {
					border: solid 1px orange;
				}

			}

			.next-project {
				width: 100%;
				padding-bottom: $marginBeewteenElements * 2;

				button {
					display: block;
					text-align: center;
					margin: 0 auto;
				}

			}

		}



	}

</style>
