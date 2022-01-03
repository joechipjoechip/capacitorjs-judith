<template>
	<div class="micro-title">

		<h4>{{ text }}</h4>

	</div>
</template>

<script>
	export default {
		props: {
			text: {
				type: String,
				required: true
			}
		}
	}
</script>

<style lang="scss" scoped>

	.micro-title {
		border: solid 1px green;
		width: 100%;
		text-align: center;

		h4 {
			color: white;
			font-size: 50px;
		}

	}

</style>
