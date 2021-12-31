<template>
	<div class="home-wrapper">
		<p>hey</p>
		<p class="layoutTest">ici lindex</p>
	</div>
</template>

<script>

	export default {

		layout: "mainLayout",

		data(){
			return {
				// 
			}
		}

	}

</script>

<style lang="scss" scoped>

	@import "@/static/style/variables.scss";


	.home-wrapper {
		margin-top: $headerHeight;
	}

</style>