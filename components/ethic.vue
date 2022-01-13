<template>
	<div>
		<micro-title :text="mainTitle" :sub-text="subTitle"/>
	</div>
</template>

<script>

	import MicroTitle from "@/components/micro/title.vue";

	export default {

		components: {
			"micro-title": MicroTitle
		},

		props: {
			
			mainTitle: {
				type: String,
				required: true
			},

			subTitle: {
				type: String,
				default: ""
			}

		}

	}

</script>

<style lang="scss" scoped>

</style>