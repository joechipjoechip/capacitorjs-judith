<template>
	<div class="philosophy-container">
		<h3>{{ title }}</h3>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
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
		

		h3 {
			color: white;
			font-size: 50px;
		}

	}

</style>
