<template>
	<div class="nav-wrapper">
		<nav>
			<JudithLogo class="logo" />
			<ul class="links">
				<li class="link-wrapper active">
					<nuxt-link to="">
						Home
					</nuxt-link>
				</li>
				<li class="link-wrapper">
					<nuxt-link to="">
						Team
					</nuxt-link>
				</li>
				<li class="link-wrapper">
					<nuxt-link to="">
						Work with us
					</nuxt-link>
				</li>
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
		background-color: $colorBlack;
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
				width: 100%;
				margin-top: 40px;
				margin-bottom: 28px;
			}
	
			.links {
				width: 85%;
				margin: 0 auto;
				list-style: none;
				padding: 0;
	
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				align-items: center;

				.link-wrapper {

					&.active {

						a {
							color: $colorRed;
						}

					}

					a {
						text-transform: uppercase;
						font-family: 'Aktiv Grotesk Corp';
						font-weight: 300;
						letter-spacing: 0.32px;
						
						color: $colorWhite;
						text-decoration: none;
						font-size: 16px;
					}

				}

			}

		}

	}


</style>
