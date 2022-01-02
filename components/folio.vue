<template>
	<div class="folio-wrapper" :class="{ 'isActive': isActive }">

		<div ref="folioContainer" class="folio-container">

			<div v-for="index of 4" :class="'item item-num-' + index">

				<div :class="'wording-num-' + index">
					<h4 class="title">Project Name</h4>
					<p class="description">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
				</div>

				<picture :class="'picture-num-' + index">

					<!-- high res -->
					<source 
						:media="$store.state.variables.mqDesktopLarge" 
						:srcset="'/images/' + pathName + '/image-' + index + '@3x.jpg'"
					>

					<!-- med res -->
					<source 
						:media="$store.state.variables.mqDesktop" 
						:srcset="'/images/' + pathName + '/image-' + index + '@2x.jpg'"
					>

					<!-- low res -->
					<source 
						:media="$store.state.variables.mqDesktop" 
						:srcset="'/images/' + pathName + '/image-' + index + '.jpg'"
					>

					<!-- base -->
					<img
						:src="'/images/' + pathName + '/image-' + index + '.jpg'" 
						alt="illustration picture"
					>

				</picture>

			</div>

		</div>

	</div>
</template>

<script>
	export default {
		name: "folio",
		props: {
			pathName: {
				type: String,
				required: true
			}
		},
		data(){
			return {
				isActive: false
			}
		},
		mounted(){

			this.initEvents();

		},
		methods: {

			initEvents(){

				this.$nuxt.$on("activateFolio", this.onActivateFolioHandler);

			},

			onActivateFolioHandler( event ){

				const escapedFromTop = event.intersectionRect.top < (Math.abs(event.rootMargin) + 10);

				// console.log("escapedFromTop : ", escapedFromTop, event.isIntersecting, event.intersectionRatio);
				// console.log("- - - - - - - - ");

				if( escapedFromTop ){

					if( event.isIntersecting ){

						if( !this.isActive ){

							this.isActive = true;

						}

					}

				} else {

					this.isActive = event.isIntersecting;

				}

			}

		}

	}
	
</script>

<style lang="scss" scoped>

	$firstPictureWidth: 536px;
	$folioWidth: 810px;
	$innerMargin: calc(($folioWidth - $firstPictureWidth)/2);

	.folio-wrapper {
		position: fixed;
		display: block;
		width: 100%;
		height: 1036px;
		top: 50vw;
		// padding-top: 70vh;
		margin-bottom: 150px;

		&.isActive {
			position: relative;
			top: 0;
			margin-top: -35vw;
		}

		.folio-container {
			position: relative;
			max-width: $folioWidth;
			display: block;
			margin: 0 auto;

			*[class^="item"] {
				position: absolute;

				*[class^="wording"] {
					opacity: 0;
					transform: translateY(-10px);
				}

				*[class^="picture"] {
					opacity: 0.45;
				}

				&:hover {

					*[class^="wording"] {
						opacity: 1;
						transform: translateY(0);
					}

					*[class^="picture"] {
						opacity: 1;
					}
					
				}
				
				&.item-num {

					&-1 {
						top: 0;
						left: $innerMargin;
					}

					&-2 {
						top: 255px;
						right: 0;
					}

					&-3 {
						top: 450px;
						left: 0;
					}

					&-4 {
						top: 536px;
						right: $innerMargin;
					}

				}

			}

			*[class^="wording"] {
				z-index: 20;
				position: absolute;
				width: 264px;

				will-change: opacity, transform;
				transition: opacity .3s,
							transform .6s;

				.title {
					text-transform: uppercase;
					font-family: "PresicavRg";
					font-size: 14px;
					font-weight: bold;
					line-height: 1.21;
					letter-spacing: 5.6px;
					opacity: .9;
				}

				.description {
					font-family: "AktivGrotesk";
					font-size: 12px;
					font-weight: 300;
					line-height: 15px;
					letter-spacing: 0.24px;
					opacity: .7;

					max-height: 90px;
					overflow: hidden;
				}

				&.wording-num {

					&-1 {
						left: -140px;
						top: 115px;
					}

					&-2 {
						left: -192px;
						top: 105px;
					}

					&-3 {
						top: -155px;
					}

					&-4 {
						top: 200px;
						right: -210px;
					}

				}

			}

			*[class^="picture"] {
				z-index: 10;
				display: block;

				will-change: opacity;
				transition: opacity .8s;

				img {
					width: 100%;
				}

				&.picture-num {

					&-1 {
						width: $firstPictureWidth;
					}

					&-2 {
						width: 260px;
					}

					&-3 {
						width: 260px;
					}

					&-4 {
						width: 400px;
					}


				}

			}

		}


	}
</style>