<template>
	<div class="philosophy-container">

		<micro-title :text="mainTitle" />

		<div class="philosophy-wrapper">

			<div class="little-square-outside-1"></div>

			<div class="little-square-outside-2"></div>

			<div class="big-square">

				<div class="little-square-inside-1"></div>

				<div class="little-square-inside-2"></div>

			</div>

			<div class="little-square-outside-3"></div>

			<div class="little-square-outside-4"></div>

		</div>

	</div>
</template>

<script>

	import Title from "@/components/micro/title.vue";

	export default {
		components: {
			"micro-title": Title
		},
		props: {
			mainTitle: {
				type: String,
				required: true
			}
		},
		mounted(){

			// $nuxt.$on("hookFolio", this.onHookFolioHandler);

		},

		methods: {
			// 
		}
	}
</script>

<style lang="scss" scoped>

	.philosophy-container {
		display: block;
		position: relative;

		margin-top: 150px;
		margin-bottom: 550px;

		border: solid 1px red;

		*[class*="square"] {
			border: solid 1px green;
		}

		.big-square {
			display: block;
			width: 500px;
			height: 500px;
			margin: 0 auto;
		}
	}

</style>
