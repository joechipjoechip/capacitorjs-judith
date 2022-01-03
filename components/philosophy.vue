<template>
	<div class="philosophy-container">

		<micro-title :text="mainTitle" />

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

		border: solid 1px red;
	}

</style>
