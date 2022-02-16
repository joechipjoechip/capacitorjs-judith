<template>

	<div class="listing-container">


		<div	:data-artist="mate.name" 
				v-for="mate in teammates" 
				:key="mate.id" 
				class="list-artist">
			
			<div class="artist-bandeau">

				<div class="artist-image-container">

					<img  class="artist-image-content" :src="mate.picture" :alt="mate.surname">

				</div>

				<div class="artist-identity-container">

					<div class="artist-identity-head">

						<h1 class="surname">{{mate.surname}}</h1>

						<h1 class="name">{{mate.name}}</h1>

						<p class="discipline">{{mate.role}}</p>

					</div>

					<div class="artist-identity-body" >

						<p class="information" v-for="info in mate.descriptions" :key="info.id" >{{info}}</p>

					</div>

					<div class="artist-identity-footer">

						<a href="#" target="_blank" class="learnmore">LEARN MORE</a>

						<a :href="mate.website" target="_blank" class="website">+ WEBSITE</a>

					</div>

				</div>


			</div>

		</div>


	</div>

</template>

<script>
export default {
	layout:'mainLayout',

	props: {

		teammates: {
			type: Array,
			required: true
		},

	},
	
}
</script>

<style lang="scss" scoped>

	.listing-container {
		display:flex;
		flex-direction: column;
		padding-bottom: 90px;
		@media #{$mobile} {
			margin-bottom: -100px;
		}

	}

	.artist-bandeau {
		font-family: "AktivGrotesk";
		position: relative;
		display: flex;
		justify-content: space-between;
		height: 700px;
		width: 100%;
		max-width: $alternateColumnMaxWith;
		margin: 0 auto;
		margin-top: 100px;
		@media #{$mobile} {
			display: inline-block;
			width: 100%;
			margin-top: 35px;
		}

		.artist-image-container {
			overflow: hidden;
			// width: 45%;
			width: 534px;
			background-color: rgba(255,0,0,0.1);
			@media #{$mobile} {
			    height: 40%;
    			width: 100%;
				
			}

			.artist-image-content {
				height: 100%;
				width: 100%;
				object-fit: cover;
				width: 100%;
				@media #{$mobile} {
					width: 100%;
				}
			}

	
			
		}

	


		.artist-identity-container {
			display: flex;
			width: calc(100% - 584px);
			justify-content: space-between;
			flex-direction: column;
			color: white;
			@media #{$mobile} {
				display: inline-block;
				width: 100%;
				margin-top: 5px;
			}

		}

		.artist-identity-head {
		
			.name,
			.surname, 
			.discipline {
				text-transform: uppercase;
				font-family: "PresicavRg";
			}

			.surname, .name {
				letter-spacing: 1.36px;
				width: 90%;
				font-size: 28px;

			}
			

			.surname {
				color: var(--color-white);
				font-family: "PresicavRg";
			}

			.name {
				color: var(--color-type-smooth-plus);
				font-family: "PresicavLt";
				&::after {
					content: "";
					border-bottom: solid 1px white;
					display: block;
					width: 90%;
					height: 1px;
					margin-top: 20px;
					@media #{$mobile} {
						margin-top: 9px;
					}
				}

			}
			.discipline {
				font-family: "AktivGrotesk";
				letter-spacing: normal;
				line-height: 1.31px;
				font-size: 16px;
				text-transform: uppercase;
				color: var(--color-type-smooth);
				margin-top:13px;
				@media #{$mobile} {
					margin-top:15px;
					margin-bottom:20px;
				}
				
				
			}
		}

		.artist-identity-body {

			@media #{$mobile} {
				margin-top:10px;	
				

			}

			.information {
				font-family: "AktivGrotesk";
				letter-spacing: 0.36px;
				line-height:1.28;
				font-size: 15px;
				font-weight: normal;
				text-align: left;
				padding-bottom:15px;
				@media #{$mobile} {
		
					font-weight: 100;

				}
			}
		}


		.artist-identity-footer {
			justify-content: flex-end;
			width: 100%;
			right: 0;
			display: flex;
			padding-top: 20px;
			border-top: solid 1px;
			bottom: 0;
			a {
				font-family: "AktivGrotesk";
				text-decoration: none;
				padding-left: 36px;
				letter-spacing: 0.36px;
				&.website {
					color:var(--color-primary)
				}
				&.learnmore {
					color:var(--color-type-smooth-max)

				}
			}

		}

	}



</style>