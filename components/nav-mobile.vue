<template>

	<div class="mobile-nav-container">



		<transition name="transition-mobile-nav">

			<div v-if="displayMenuMobile" class="mobile-links-wrapper">

				<JudithLogo class="mobile-logo" />
				<div v-on:click="clickOnMobileNav" class="menu-container" >


					<nav class="mobile-menu-wrapper">

						<ul class="mobile-links-container">

							<li v-for="link in  allLinks" :key="link.id"  class="mobile-link-wrapper active">

								<NuxtLink  :to="link.to">

									{{link.label}}

								</NuxtLink>

							</li>

						</ul>

					</nav>

				</div>

			</div>

		</transition>

		<transition name="transition-logo-j">
			<div v-if="!displayMenuMobile" class="mobile-wrapper">

					<div class="logo-j-mobile">

						<menu-logo-j  />

					</div>

				<div  @click="clickOnToggleMobileMenu" class="toggle-menu-mobile">

					<menu-lines  />

				</div>

			</div>
		</transition>

	</div>
	
</template>

<script>

	import JudithLogo from "@/assets/svg/logoFull.svg";
	import logoJ from "@/assets/svg/logoJ.svg";
	import menuLines from "@/assets/svg/menuLines.svg";
	import wording from "@/assets/data/wording"

export default {

	components: {
		JudithLogo,
		"menu-lines": menuLines,
		"menu-logo-j": logoJ,
		wording
	},
	data() {
		return {
			displayMenuMobile: true,
			allLinks: wording.links
		}
	},

	methods: {
		clickOnMobileNav() {
				this.displayMenuMobile = false
			},
		clickOnToggleMobileMenu(){
				this.displayMenuMobile = true
		}

	}

}
</script>

<style lang="scss" scoped>

	.mobile-nav-container {
		.mobile-logo {
				position: absolute;
				width: 200px;
				margin:0 auto;
		}

		.menu-container {
			justify-content: space-around;
			flex-flow: column;
			display: flex;
		}
		

		.mobile-wrapper {
				z-index:501;
				display:flex;
				flex-direction: row;
				height: 90px;
		
				.logo-j-mobile {
					
					display:flex;
					padding: 20px 0;
					margin: 0 auto;
				}
			
				.toggle-menu-mobile{
					color: var(--color-primary);
					position: absolute;
					height: auto;
					height: 90px;
					right: 4px;
					top: -5px;
					display: flex;
					align-items: center;
				}
			}
			.mobile-links-wrapper {
			
				backdrop-filter: blur(2px);
				z-index: 510;
				display: flex;
				justify-content: center;
				width: 100%;
				height: 100vh;
				background-color:rgba(0, 0, 0, 0.6);
				position: absolute;
				right:0;
				width: 80%;
	

				.mobile-menu-wrapper {

					display: flex;
					justify-content: center;
					flex-direction: column;

					a {
						color:white;
						font-family: 'AktivGrotesk';
						text-decoration: none;
						text-transform: uppercase;

					}

				
				}
			}
	}

</style>