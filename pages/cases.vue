<template>

	<div class="cases-wrapper">	

		<transition name="transition-case-viewer">

			<case-viewer v-if="viewerIsActive" :item="currentProjet"/>

		</transition>
		
		<transition name="transition-case-viewer">

			<case-listing v-if="!viewerIsActive" :cases="cases"/>

		</transition>
		
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
				currentProjet: null,
				viewerIsActive: false,
				cases: wording.cases,
				pageIsArrived: false
			}
		},

		created() {
		
			this.$nuxt.$on('open-viewer', this.openViewerHandler)
			
			this.$nuxt.$on('close-viewer', this.closeViewerHandler)
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
		// 
	}

</style>