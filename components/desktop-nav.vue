<template>
	<div :class="[
			'nav-wrapper',
			design
		]">
		

		<nav class="destkop-menu-wrapper">

				<JudithLogo class="logo-desktop" />

				<ul class="links-container">
					
					<li v-for="link in  allLinks" :key="link.id"  class="link-wrapper active">

						<NuxtLink  :to="link.to">

							{{link.label}}

						</NuxtLink>

					</li>


				</ul>

		</nav>
	</div>
</template>

<script>
	import JudithLogo from "@/assets/svg/logoFull.svg";
	import wording from "@/assets/data/wording"
	
export default {
	components: {
		JudithLogo,
		},

	props: {
		
		design: {
			type: String,
			required: true
		}

	},
	data() {
			return {
			
				allLinks: wording.links
			}
	},


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
			@media #{$mobile} { 
				display: none; // temporaire, le temps de dev
				}
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

			.logo-desktop {
				max-width: $logoSizeMaxPrimary;
				margin-top: 40px;
				margin-bottom: 28px;
			}
	
		}

		&.secondary {
			height: $headerHeightSecondary;

			.logo-desktop {
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