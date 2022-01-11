<template>
	<div class="folio-wrapper" :class="{ 'isActive': isActive }" 
		:style="{
			'top': topCssString,
			'transform': transformString
		}"
	>

		<div class="particles-container"
			:style="{
				'transform': transformStringParticles
			}"
		>

			<span 
				v-for="(index, id) of 7" :key="id"
				:class="[
					'particle-' + index,
					'particle-anim-' + (index % 2 === 0 ? '2' : '1')
				]"
			></span>

		</div>

		<div ref="folioContainer" class="folio-container">

			<div v-for="index of 4" :class="'item item-num-' + index">

				<div :class="'wording-num-' + index">
					<h4 class="title">Project Name</h4>
					<p class="description">Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
				</div>

				<picture :class="[
					'picture-num-' + index
				]">

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
	
		props: {

			pathName: {
				type: String,
				required: true
			},

			mousePos: {
				type: Object,
				required: true
			}

		},

		data(){
			return {
				isActive: false,
				topCssString: "",
				ratioTransform: 0.05,
				transformString: `rotate3d(${this.mousePos.x}, ${this.mousePos.y}, 0, 0deg) translate3d(0,0,0)`,
				transformStringParticles: `rotate3d(${this.mousePos.x}, ${this.mousePos.y}, 0, 0deg) translate3d(0,0,0)`
			}
		},

		mounted(){
			
			// 
			$nuxt.$on("hookFolio", this.onHookHandler);

		},

		watch: {

			mousePos(){

				this.setRotate();

			}

		},

		methods: {

			onHookHandler( event ){

				this.isActive = event.pleaseHook;

				this.setRotate();

				if( this.isActive ){

					this.topCssString = `calc(80vh + ${event.hookCustomPosition}px)`;

				} else {

					this.topCssString = "";

				}

			},

			setRotate(){

				if( this.isActive ){

					this.$parent.active3d = true;

					this.transformString = `rotate3d(
						${(this.mousePos.y) * this.ratioTransform * 2},
						${(this.mousePos.x) * this.ratioTransform * 2}, 
						0,
						10deg) 
						translate3d(
							${this.mousePos.x * 250}px,
							${this.mousePos.y * 150}px,
							0
						)`;

					this.transformStringParticles = `rotate3d(
						${(this.mousePos.y + 0.5) * this.ratioTransform * 1.5},
						${(this.mousePos.x + 0.5) * this.ratioTransform * 1.5}, 
						0,
						10deg) 
						translate3d(
							${this.mousePos.x * 50}px,
							${this.mousePos.y * 20}px,
							150px
						)`;

				} else {

					this.$parent.active3d = false;

					this.transformString =  `rotate3d(${this.mousePos.x}, ${this.mousePos.y}, 0, 0deg) translate3d(0,0,0)`;

					this.transformStringParticles =  `rotate3d(${this.mousePos.x}, ${this.mousePos.y}, 0, 0deg) translate3d(0,0,0)`;

				}

			}

		}

	}
	
</script>

<style lang="scss" scoped>

	$firstPictureWidth: 536px;
	$folioWidth: 810px;
	$innerMargin: calc(($folioWidth - $firstPictureWidth)/2);
	$borderTransitionDuration: 40;

	.folio-wrapper {
		position: fixed;
		display: block;
		width: 100%;
		height: 1036px;

		max-width: 800px;
		margin: 0 auto;

		left: calc((100% - 800px)/2);
		top: calc(80vh);

		transform-origin: center center;

		will-change: transform;
		transition: transform .1s;

		&.isActive {
			position: relative;
			left: unset;

			.particles-container {
				opacity: 1;
				top: 0;
			}

		}

		.folio-container {
			z-index: 5;
			position: relative;
			max-width: $folioWidth;
			display: block;
			margin: 0 auto;
			// height: 1040px;

			*[class^="item"] {
				position: absolute;

				*[class^="wording"] {
					opacity: 0;
					transform: translateY(-10px);
				}

				*[class^="picture"] {
					opacity: 0.45;
					border-top-left-radius: 0px;
					border-top-right-radius: 0px;
					border-bottom-right-radius: 0px;
					border-bottom-left-radius: 0px;
				}

				&:hover {

					*[class^="wording"] {
						opacity: 1;
						transform: translateY(0);
					}

					*[class^="picture"] {
						opacity: 1;
						border-top-left-radius: 999px;
						border-top-right-radius: 999px;
						border-bottom-right-radius: 999px;
						border-bottom-left-radius: 999px;
						box-shadow: 0 5px 0 currentColor;
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
				color: var(--color-white);

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
				overflow: hidden;
				box-shadow: 0 -5px 5px rgba(0,0,0,0);

				will-change: 
					opacity, 
					border-top-left-radius,
					border-top-right-radius,
					border-bottom-right-radius,
					border-bottom-left-radius,
					box-shadow;

				transition: opacity .8s, 
							border-top-left-radius calc($borderTransitionDuration * 1.7) + s, 
							border-top-right-radius calc($borderTransitionDuration / 1.7) + s, 
							border-bottom-right-radius calc($borderTransitionDuration / 1.7) + s, 
							border-bottom-left-radius calc($borderTransitionDuration / 1.7) + s, 
							box-shadow 2s;

				// transition-timing-function: cubic-bezier(.12,.98,.78,1);

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

		.particles-container {
			pointer-events: none;
			z-index: 10;
			position: absolute;
			width: 100%;
			height: 100%;
			top: -30vh;

			opacity: 0;

			will-change: opacity, top;

			transition: 
				opacity 3s,
				top 2s;

			*[class^="particle"] {
				display: block;
				position: absolute;
				width: 10px;
				height: 10px;

				animation-iteration-count: infinite;


				transform-origin: center center;
				transform: rotate(45deg);

				background-color: currentColor;

				&.particle-anim {

					&-1{
						animation-name: anim-particles-1;
					}

					&-2{
						animation-name: anim-particles-2;
					}

				}
			}

			.particle {

				&-1 {
					top: 13%;
					left: 89%;

					animation-duration: 25s;
				}

				&-2 {
					top: 27%;
					left: 75%;

					width: 15px;
					height: 15px;

					animation-duration: 20s;
				}

				&-3 {
					top: 26%;
					left: 12%;

					animation-duration: 45s;
				}

				&-4 {
					top: 47%;
					left: 62%;

					width: 7px;
					height: 7px;

					animation-duration: 15s;
				}

				&-5 {
					top: 68%;
					left: 90%;

					animation-duration: 20s;
				}

				&-6 {
					top: 82%;
					left: 40%;

					animation-duration: 18s;
				}

				&-6 {
					top: 84%;
					left: 18%;

					width: 7px;
					height: 7px;

					animation-duration: 24s;
				}

				&-7 {
					top: 83.5%;
					left: 24%;

					width: 10px;
					height: 10px;

					animation-duration: 32s;
				}

				&-2,
				&-7 {
					border: solid 2px currentColor;
					background-color: transparent;
				}

			}

		}

	}

</style>