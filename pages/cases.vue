<template>

	<div class="cases-wrapper">	

		<case-viewer v-if="viewerIsActive" :item="currentProjet"/>
		
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

		data(){
			return {
				currentProjet: null,
				viewerIsActive: false,
				cases: wording.cases

			}
		},

		created() {
		
			this.$nuxt.$on('click-on-project', projectId => {
			
				this.currentProjet = this.cases.find( project => project.id === projectId);
				this.viewerIsActive = true;
			})
			
			this.$nuxt.$on('click-on-cancel', () => {
			
				this.currentProjet = null;
				this.viewerIsActive = false;
			})
		}
	}


</script>

<style lang="scss" scoped>

	.cases-wrapper {
		color: white;
	}

</style>