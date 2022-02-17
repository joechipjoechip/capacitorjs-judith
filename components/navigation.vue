<template>
	<div>
	
		<mobile-nav class="mobile-nav"/>

		<desktop-nav class="desktop-nav" :design="design"/>
		


	</div>
</template>

<script>


	import mobileNav from "@/components/mobile-nav.vue";
	import desktopNav from "@/components/desktop-nav.vue";
    

	export default {
		
		components: {
			"mobile-nav": mobileNav,
			"desktop-nav": desktopNav

		},

		data() {
			return {
				displayMenuMobile: false
			}
		},

		created() {
		
		},

		props: {

			design: {
				type: String,
				required: true
			}

		},
		methods: {
		
		}

	}
	
</script>

<style lang="scss" scoped>


	.desktop-nav {
		@media #{$mobile} {
				display:none;
			}
	}
	

</style>
