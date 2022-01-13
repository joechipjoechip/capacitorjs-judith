<template>
	<div class="anim-colors">
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
		// --color-bg: ##FFF;
		// --color-white: #0f0f0f;

		--color-primary: #bc4342;
		// --color-secondary: #F6FF1A;
		--color-secondary: #1aff8d;
		--color-ternary: #5942BC;

		// some widths
		--width-folio: 810px;
		--width-folio-ref-picture: 536px;
		--width-carousel-text: 260px;

	}

	body {
		background-color: var(--color-bg);
		// color: var(--color-white);
	}

</style>
