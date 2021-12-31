<template>
	<div class="nav-wrapper">
		<nav>
			<JudithLogo class="logo" />
			<ul class="links">
				<li class="link-wrapper">Home</li>
				<li class="link-wrapper">Team</li>
				<li class="link-wrapper">Work with us</li>
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

				.link-wrapper {

					&:nth-of-type(2) {
						font-family: 'PresicavRg';
					}

				}

			}

		}

	}


</style>
