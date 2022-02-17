<template>
	<div>
	
		<mobile-nav class="mobile-nav"/>

		<desktop-nav class="desktop-nav" :design="design"/>
		

	</div>
</template>

<script>

	import mobileNav from "@/components/nav-mobile.vue";
	import desktopNav from "@/components/nav-desktop.vue";

	export default {
		
		components: {
			"mobile-nav": mobileNav,
			"desktop-nav": desktopNav

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


	.desktop-nav {
		@media #{$mobile} {
				display:none;
			}
	}
	

</style>
