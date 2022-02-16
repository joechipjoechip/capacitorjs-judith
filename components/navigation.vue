<template>
	<div :class="[
		'nav-wrapper',
		design
	]">
	
		<div v-if="displayMenuMobile" class="mobile-links-wrapper">

			<div v-on:click="clickOnMobileNav">


				<nav class="mobile-menu-wrapper">

					<JudithLogo class="mobile-logo-desktop" />

					<ul class="mobile-links-container">

						<li class="mobile-link-wrapper active">
							<NuxtLink  to="/">
								Home
							</NuxtLink>
						</li>

						<li class="mobile-link-wrapper">
							<NuxtLink  to="/team">
								Team
							</NuxtLink>
						</li>

						<li class="mobile-link-wrapper">
							<NuxtLink to="/work-with-us">
								Work with us
							</NuxtLink>
						</li>

						<li class="link-wrapper">
							<NuxtLink  to="/cases">
								Cases
							</NuxtLink>
						</li>

					</ul>

				</nav>

			</div>
		</div>

		<div v-if="!displayMenuMobile" class="mobile-wrapper">

			<div class="logo-j-mobile">

				<menu-logo-j  />

			</div>

			<div  @click="clickOnToggleMobileMenu" class="toggle-menu-mobile">

				<menu-lines  />

			</div>

		</div>

		<nav class="destkop-menu-wrapper">

			<JudithLogo class="logo-desktop" />

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
	import logoJ from "@/assets/svg/logoJ.svg";
	import menuLines from "@/assets/svg/menuLines.svg";

	export default {
		
		components: {
			JudithLogo,
			"menu-lines": menuLines,
			"menu-logo-j": logoJ
		},

		data() {
			return {
				displayMenuMobile: false
			}
		},

		props: {

			design: {
				type: String,
				required: true
			}

		},
		methods: {
			clickOnMobileNav() {
				console.log('yeeeet NAV');
				this.displayMenuMobile = false
			},
			clickOnToggleMobileMenu(){
				console.log('yeeeet SVG');
				this.displayMenuMobile = true
			}
		}

	}
	
</script>

<style lang="scss" scoped>

	.nav-wrapper {

		.mobile-wrapper {
			
			display:flex;
			flex-direction: row;
		
			@media #{$desktop} {
				display:none;
			}

			.logo-j-mobile {
				width: 100%;
				justify-content: center;
				display:flex;
				padding: 20px 0;
				margin: 0 auto;
			}
		
			.toggle-menu-mobile{
				position:absolute;
				top:0;
				right:0;
			}
		}
		.mobile-links-wrapper {
			@media #{$desktop} {
				display:none;
			}
			// display: none;
			display: flex;
			justify-content: center;
			width: 100%;
			height: 100vh;
			background-color:rgba(14, 14, 14, 0.6);

			.mobile-menu-wrapper {
			    display: flex;
    			justify-content: center;
				flex-direction: column;
				a {
					
					font-family: 'AktivGrotesk';
					text-decoration: none;
					text-transform: uppercase;

				}

				.mobile-logo-desktop {
					width: 200px;
					margin:0 auto;
				}
			}
		}

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
