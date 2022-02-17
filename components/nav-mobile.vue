<template>

	<div class="nav-mobile-container">

		<transition name="transition-nav-mobile">

			<div v-if="displayMenuMobile" class="panel-wrapper">

				<div class="panel-logo-container">

					<JudithLogo class="mobile-logo" @click="closeHandler"/>

				</div>

				<div v-on:click="closeHandler" class="panel-nav-container" >

					<nav>

						<ul>

							<li v-for="link in  allLinks" :key="link.id">

								<NuxtLink  :to="link.to">

									{{ link.label }}

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

				<div  @click="openHandler" class="toggle-menu-mobile">

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

		openHandler(){

			this.displayMenuMobile = true

		},

		closeHandler(){

			this.displayMenuMobile = false

		}

	}

}
</script>

<style lang="scss" scoped>

	.nav-mobile-container {

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

			.panel-wrapper {

			
				z-index: 510;
				position: fixed;
				right:0;
				width: 100%;
				height: 100vh;

				display: flex;
				flex-direction: row;
				justify-content: flex-end;


				// background-color:rgba(0, 0, 0, 0.75);

				.panel-logo-container {
					z-index: 600;

					position: absolute;
					height: 90px;
					width: 80%;

					svg {
						width: 40%;
						display: block;
						margin: 0 auto;
					}

				}

				.panel-nav-container {
					justify-content: space-around;
					flex-flow: column;
					display: flex;
					height: 100%;
					width: 80%;

					nav {
						border-left: solid 1px rgba(255,255,255, 0.4);
						display: flex;
						justify-content: center;
						flex-direction: column;
						width: 100%;
						height: 100%;
						background-color: #000;

						a {
							color:white;
							font-family: 'AktivGrotesk';
							text-decoration: none;
							text-transform: uppercase;

						}

						ul {
							margin-left: 40px;
							margin-left: 40px;
							height: 20%;
							display: flex;
							flex-flow: column nowrap;
							justify-content: space-between;

							li {
								// 
							}

						}

					
					}

				}
	

			}
	}

</style>