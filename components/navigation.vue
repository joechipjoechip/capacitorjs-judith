<template>
	<div class="nav-wrapper">
		<nav>
			<JudithLogo class="logo" />
			<ul class="links">
				<li>Home</li>
				<li>Team</li>
				<li>Work with us</li>
			</ul>
		</nav>
	</div>
</template>

<script>

	import JudithLogo from "@/assets/svg/logoFull.svg";

	export default {
		components: {
			JudithLogo
		}
	}
</script>

<style lang="scss" scoped>

	@import "@/static/style/variables.scss";

	.nav-wrapper {

		position: fixed;
		background-color: red;
		width: 100%;
		height: $headerHeight;
		top: 0;
		right: 0;

		nav {
			display: block;
			width: $navWidth;
			margin: 0 auto;
			text-align: center;

			.logo {
				margin-top: 40px;
			}
	
			.links {
				list-style: none;
	
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				align-items: center;
				background-color: rebeccapurple;
			}
		}

	}


</style>
