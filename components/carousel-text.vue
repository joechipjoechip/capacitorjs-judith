<template>
	<div class="carousel-container">

		<div class="little-square-container">

			<span ref="little-square-content" class="little-square-content">
				{{ (currentIndex + 1) }}
			</span>

		</div>

		<div class="wording-container">
			
			<div 
				v-for="(wordingObj, index, id) in wording" :key="id"
				class="wording-content-wrapper"
			>
				<transition name="transition-description">

					<p 
						v-if="currentIndex === index"
						class="wording-content-text"
					>
						{{ wording[index].text }}
					</p>

				</transition>

			</div>

		</div>
		
		<ul class="slider-container">

			<li 
				v-for="(item, index, id) of wording" :key="id"
				:class="[
					'slider-item',
					{ 'item-active': index === currentIndex }
				]"
				:data-index="index"
				:style="{
					width: `calc(100% / ${wording.length} - 5px)`
				}"
				@click.stop="sliderItemClickHandler"
			></li>

		</ul>
		
	</div>
</template>

<script>

	export default {

		props: {
			wording: {
				type: Array,
				required: true
			}
		},

		data(){
			return {
				currentIndex: 0
			}
		},

		methods: {

			sliderItemClickHandler( event ){

				this.currentIndex = parseInt(event.target.dataset.index);

			}
		}

	}

</script>

<style lang="scss" scoped>

	.carousel {

		&-container {
			// 
		}

	}

	.little-square {

		&-container {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 50px;
			height: 50px;
			margin: 0 auto 60px auto;
			transform: rotate(45deg);
			transform-origin: center;


			border: solid 1px currentColor;
		}

		&-content {
			display: block;
			transform: rotate(-45deg);
			transform-origin: center;
			color: var(--color-white);

			font-family: "PresicavRg";
		}

	}

	.wording {

		&-container {
			position: relative;
			display: block;
			max-width: var(--width-carousel-text);
			margin: 0 auto 90px auto;
			height: 100px;
			margin-bottom: 76px;
		}

		&-content {
			
			&-wrapper {
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
			
			&-text {
				font-family: "AktivGrotesk";
				font-size: 18px;
				line-height: 23px;
				text-align: center;
				color: var(--color-white);
			}

		}

	}

	.slider {

		$sliderHeight: 45px;
			
		&-container {
			width: 100%;
			max-width: var(--width-carousel-text);
			margin: 0 auto 70px auto;
			height: $sliderHeight;
			list-style: none;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
		}

		&-item {
			position: relative;
			display: block;
			height: 100%;
			cursor: pointer;

			&::after {
				content: "";
				display: block;
				position: absolute;
				left: 0;
				width: 100%;
				bottom: 0;
				top: calc($sliderHeight - 6px);

				transition: top .4s;

				background-color: var(--color-white);
			}

			&:hover {

				&::after {
					top: calc($sliderHeight - 16px);
				}

			}

			&.item-active {

				&::after {
					top: 0 !important;
					background-color: currentColor;
				}

			}

		}

	}

</style>
