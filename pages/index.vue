<template>
	<div class="home-wrapper">

		<folio-losange path-name="home"/>

	</div>
</template>

<script>

	import FolioLosange from "@/components/folio-losange.vue";

	export default {

		layout: "mainLayout",

		components: {
			"folio-losange": FolioLosange
		},

		data(){
			return {
				// 
			}
		}

	}

</script>

<style lang="scss" scoped>

	.home-wrapper {
		margin-top: $headerHeight;
	}

</style>
