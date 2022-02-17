<template>

	<div class="mobile-nav-container">
		
			
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

	</div>
	
</template>

<script>

	import JudithLogo from "@/assets/svg/logoFull.svg";
	import logoJ from "@/assets/svg/logoJ.svg";
	import menuLines from "@/assets/svg/menuLines.svg";
	import mobileNav from "@/components/mobile-nav.vue";

export default {

	components: {
		JudithLogo,
		"menu-lines": menuLines,
		"menu-logo-j": logoJ,
		"mobile-nav": mobileNav
	},
	data() {
			return {
				displayMenuMobile: false
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

	.mobile-wrapper {
			z-index:501;
			display:flex;
			flex-direction: row;
		
	
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


</style>