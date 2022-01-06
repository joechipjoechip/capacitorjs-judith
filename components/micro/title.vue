<template>
	<div class="micro-title">
		<span class="faded">{{ text }}</span>
		<h4 class="consistent">{{ text }}</h4>
		<span class="faded">{{ text }}</span>

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
		position: relative;
		border: solid 1px green;
		width: 100%;
		text-align: center;

		* {
			font-family: "PresicavRg";
			font-size: 18px;
			color: $colorWhite;
			display: inline-block;
			text-transform: uppercase;
			line-height: 22px;
			letter-spacing: 7.2px;
		}

		.faded {
			opacity: .3;
		}

		.consistent {

			&::after {
				content: "";
				display: block;
				height: 1px;
				background-color: $colorWhite;
				width: 80%;
				margin: 0 auto;
				margin-top: 13px;
			}

		}


	}

</style>
