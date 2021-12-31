<template>
	<div>
		<navigation />
		<Nuxt />
	</div>
</template>

<script>

	import navigation from "@/components/navigation.vue";

	export default {
		components: {
			navigation
		}
	}
</script>

<style lang="scss">

	// here are transversal styles
	// (fonts, mq, etc)

	body {
		background-color: #000;
		color: #FFF;
	}




	.layoutTest {
		border: solid 5px rebeccapurple;
	}

</style>