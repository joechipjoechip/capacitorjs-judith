<template>

	<div class="cases-wrapper">	

		<case-viewer v-if="viewerIsActive" :item="cases[0]"/>
		
		kkkkk
	</div>

</template>

<script>

	import CaseViewer from "@/components/case-viewer.vue"

	import wording from "@/assets/data/wording.js";

	export default {

		layout: "mainLayout",

		components: {
			"case-viewer": CaseViewer
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