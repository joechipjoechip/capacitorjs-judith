<template>
	<div>
		<div class="losanges-container">
			<div class="losange-ext">
				<div class="losange-in"></div>
			</div>
		</div>
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

	.losanges-container {
		display: block;
		position: absolute;
		margin-top: 50vh;

		.losange {

			&-ext {
				display: block;
				width: 100vw;
				height: 100vw;
				transform: rotate(45deg);
	
				border: solid 1px red;
			}

		}

	}

</style>