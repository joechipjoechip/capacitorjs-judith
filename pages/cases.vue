<template>

	<div class="cases-wrapper">	

		<case-viewer v-if="viewerIsActive" :item="cases[0]"/>
		
		<case-listing :cases="cases"/>
		
	</div>

</template>

<script>

	import CaseViewer from "@/components/case-viewer.vue"
	import CaseListing from "@/components/cases-listing.vue"

	import wording from "@/assets/data/wording.js";

	export default {

		layout: "mainLayout",

		components: {
			"case-viewer": CaseViewer,
			"case-listing": CaseListing
		},

		data(){
			return {

				viewerIsActive: false,
				cases: wording.cases

			}
		}	

	}
</script>

<style lang="scss" scoped>

	.cases-wrapper {
		color: white;
	}

</style>