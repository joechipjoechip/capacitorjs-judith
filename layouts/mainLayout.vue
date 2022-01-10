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

	$colorRed: #bc4342;

	:root {

		// colors
		--color-bg: #0f0f10;
		--color-white: #fff;

		--color-primary: #bc4342;
		--color-secondary: #F6FF1A;
		--color-ternary: #5942BC;

	}

	body {
		background-color: var(--color-bg);
		color: var(--color-white);
	}

	.anim {

		&-shadow {
	
			will-change: box-shadow;
	
			animation: anim-shadow-keyframes 7s infinite;
	
		}

		&-colors {

			animation: anim-colors-keyframes 4s infinite;

		}

	}
	

	@keyframes anim-shadow-keyframes {

		$blurSize: 10vh;

		0% {
			box-shadow: 
				0 0 ($blurSize / 10) 5px transparent inset,
				0px 0px $blurSize 0px transparent;
		}

		30% {
			box-shadow: 
				0px 0px $blurSize 0 currentColor inset,
				0px 0px $blurSize ($blurSize / 2) currentColor;
		}

		100% {
			box-shadow: 
				0px 0px $blurSize 0 transparent inset,
				0 0 $blurSize ($blurSize / 2) transparent;
		}

	}

	@keyframes anim-colors-keyframes {

		0%, 100% {
			color: var(--color-primary);
		}

		33% {
			color: var(--color-secondary);
		}

		66% {
			color: var(--color-ternary);
		}

	}


</style>