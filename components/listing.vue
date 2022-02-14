<template>

    <div class="listing-container">


        <div v-for="mate in teammates" :key="mate.id" class="list-artiste">
            
            <div class="artiste-bandeau">

				<div class="artiste-image-container">

                	<img  class="artiste-image-content" :srcset="mate.photo" :alt="mate.prenom">

				</div>

                <div class="artiste-identity-container">

					<div class="artiste-identity-head">

						<h1 class="surname">{{mate.prenom}}</h1>
						<h1 class="name">{{mate.nom}}</h1>

						<p class="discipline">{{mate.discipline}}</p>

					</div>

					<div class="artiste-identity-body" >

						<p class="information" v-for="info in mate.description" :key="info.id" >{{info}}</p>

					</div>

					<div class="artiste-identity-footer">

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
		
	}

	.artiste-bandeau {
		font-family: "AktivGrotesk";
		position: relative;
		display: flex;
		justify-content: row;
		height: 700px;
		width: 100%;
		max-width: 700px;
		// border: solid 2px red;
		justify-content: space-between;
		margin: 0 auto;
		margin-top: 100px;

		.artiste-image-container {
			overflow: hidden;
			width: 45%;
			background-color: rgba(255,0,0,0.1);

			.artiste-image-content {
				height: 100%;
				width: 100%;
				object-fit: cover;
				width: 100%;
			}

		}

		

		.artiste-identity-container {
			display: flex;
			width: 50%;
			justify-content: space-between;
			flex-direction: column;
			color: white;
			
		}

		.artiste-identity-head {
		
			.name,
			.surname, 
			.discipline {
				text-transform: uppercase;
				font-family: "PresicavRg";
			}

			.surname, .name {
				letter-spacing: 1.36px;
				width: 90%;
				font-size: 2em;
			
			}
			

			.surname {
				color: var(--color-white)
			}

			.name {
				color: var(--color-type-smooth-plus);
				&::after {
					content: "";
					border-bottom: solid 1px white;
					display: block;
					width: 90%;
					height: 1px;
					margin-top: 14px;
				}

			}
			.discipline {
				letter-spacing: 0.36px;
				font-size: 0.8em;
				text-transform: uppercase;
				color: var(--color-type-smooth);
				margin-top:20px;
				
			}
		}

		.artiste-identity-body {

			.information {
				font-family: "AktivGrotesk";
				letter-spacing: 0.36px;
				line-height:1.28;
				font-size: 15px;
				font-weight: normal;
				text-align: left;
				padding-bottom:15px;
			}
		}

	

	
	
		.artiste-identity-footer {
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
				padding-left:20px;
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