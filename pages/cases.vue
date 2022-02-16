<template>

	<div class="cases-wrapper">	

		<transition name="transition-caseviewer">
			<case-viewer v-if="viewerIsActive" :item="currentProjet"/>
		</transition>
		
		<case-listing v-if="!viewerIsActive" :cases="cases"/>
		
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

		created() {
		
			this.$nuxt.$on('open-viewer', this.openViewerHandler)
			
			this.$nuxt.$on('close-viewer', this.closeViewerHandler)
		},

		data(){
			return {
				currentProjet: null,
				viewerIsActive: false,
				cases: wording.cases

			}
		},

	
		beforeDestroy(){
			this.$nuxt.$off('open-viewer');
			this.$nuxt.$off('close-viewer');
		},

		methods: {
			openViewerHandler( event ) {

				this.currentProjet = this.cases.find( project => project.id === event);

				this.viewerIsActive = true;

			},

			closeViewerHandler() {

				this.currentProjet = null;

				this.viewerIsActive = false;
			}
		},

	
	}


</script>

<style lang="scss">

	.cases-wrapper {
		color: white;
	}

</style>