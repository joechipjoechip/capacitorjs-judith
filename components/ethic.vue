<template>
	<div class="ethic-container">

		<micro-title :text="mainTitle" :sub-text="subTitle"/>

		<carousel-text class="carousel" :wording="ethicWording"/>

	</div>
</template>

<script>

	import MicroTitle from "@/components/micro/title.vue";
	import CarouselText from "@/components/carousel-text.vue";

	export default {

		components: {
			"micro-title": MicroTitle,
			"carousel-text": CarouselText
		},

		props: {
			
			mainTitle: {
				type: String,
				required: true
			},

			subTitle: {
				type: String,
				default: ""
			}

		},

		data(){
			return {
				ethicWording: [
					{
						text: "One We identify only the best, most resourceful creative minds and follow an agile management.",
						icon: "iconStringOne"
					},
					{
						text: "Two We identify only the best, most resourceful creative minds and follow an agile management.",
						icon: "iconStringTwo"
					},
					{
						text: "Three We identify only the best, most resourceful creative minds and follow an agile management.",
						icon: "iconStringThree"
					},
					{
						text: "Four We identify only the best, most resourceful creative minds and follow an agile management.",
						icon: "iconStringFour"
					},
				]
			}
		}

	}

</script>

<style lang="scss" scoped>

	.ethic {

		&-container {
			// 

			.carousel {
				margin-top: 90px;
			}

		}

	}

</style>
