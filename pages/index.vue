<template>
	<div class="home-wrapper">

		<div>

			<losange text="dare to care"/>

			<folio path-name="home"/>

		</div>


	</div>
</template>

<script>

	import Folio from "@/components/folio.vue";
	import Losange from '@/components/losange.vue';

	export default {

		layout: "mainLayout",

		components: {
			"folio": Folio,
			"losange": Losange
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
