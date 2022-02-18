<template>
	<div>
	
		<nav-mobile class="only-mobile" />

		<nav-desktop class="only-desktop" :design="design"/>
		

	</div>
</template>

<script>

	import navMobile from "@/components/nav-mobile.vue";
	import navDesktop from "@/components/nav-desktop.vue";

	export default {
		
		components: {
			"nav-mobile": navMobile,
			"nav-desktop": navDesktop

		},

		props: {
			design: {
				type: String,
				required: true
			}

		},
	}
	
</script>

<style lang="scss" scoped>
	
	// 

</style>
