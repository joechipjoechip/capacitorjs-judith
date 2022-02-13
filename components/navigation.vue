<template>
	<div :class="[
		'nav-wrapper',
		design
	]">

		<nav>

			<JudithLogo class="logo" />

			<ul class="links-container">

				<li class="link-wrapper active">
					<NuxtLink to="/">
						Home
					</NuxtLink>
				</li>

				<li class="link-wrapper">
					<NuxtLink to="/team">
						Team
					</NuxtLink>
				</li>

				<li class="link-wrapper">
					<NuxtLink to="/work-with-us">
						Work with us
					</NuxtLink>
				</li>

				<li class="link-wrapper">
					<NuxtLink to="/cases">
						Cases
					</NuxtLink>
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
		},

		props: {

			design: {
				type: String,
				required: true
			}

		}

	}
	
</script>

<style lang="scss" scoped>

	.nav-wrapper {

		z-index: 500;
		position: fixed;
		background-color: var(--color-bg);
		width: 100%;
		top: 0;
		right: 0;

		@media #{$mobile} {
			right: unset;
			left: 0;
			width: 100vw;
		}

		nav {
			display: block;
			width: 100%;
			margin: 0 auto;
			text-align: center;
		}

		.links-container {
			list-style: none;
			padding: 0;

			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;

			.link-wrapper {

				display: inline-block;
				margin: 0 15px;

				&:first-of-type {
					margin-left: 0;
				}

				&:last-of-type {
					margin-right: 0;
				}

				a {
					text-transform: uppercase;
					font-family: 'AktivGrotesk';
					font-weight: 300;
					letter-spacing: 0.32px;

					color: var(--color-white);
					text-decoration: none;
					font-size: 16px;

					-webkit-tap-highlight-color: transparent;

					&.nuxt-link-exact-active {
						color: var(--color-primary);
					}

				}

			}

		}

		&.primary {
			height: $headerHeightPrimary;

			.logo {
				width: 100%;
				max-width: $logoSizeMax;
				margin-top: 40px;
				margin-bottom: 28px;
			}
	
			.links-contrainer {
				width: 85%;
				margin: 0 auto;
			}
	
		}

		&.secondary {
			height: $headerHeightSecondary;
			
			nav {
				// display: flex;
				// flex-flow: row nowrap;
			}

			.logo {
				max-width: $logoSizeMaxSecondary;
			}

			.links-container {
				position: absolute;
				top: 17px;
				right: 17px;

				.link-wrapper {

					a {
						font-size: 12px;
					}

				}

			}

		}


	}


</style>
