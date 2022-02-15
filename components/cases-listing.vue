<template>
	<div class="project-listing-container">
		<div v-for="(project, index) in this.cases" :key="project.id">

			<div :class="['project-container',{ 'active' : currentProject === project.id}] ">

				<div class="project-id-container">

					<p>{{index + 1}}</p>

				</div>

				<div class="project-name-container">

					<p 
						@mouseenter="enterNameHandler" 
						@mouseleave="leaveNameHandler" 
						@click="clickHandler"
						:data-index-project="project.id"
					>
						{{ project.name }}
					</p>

				</div>


				<div class="project-year-container">

					<p>{{ project.year }}</p>

				</div>

				<div class="project-medias-container">

					<div class="project-image-container" v-for="image in project.thumbnails" :key="image.id">

						<img class="project-image-content" :src="'/images/cases/' + project.id + '/' + image.assetName + '.' + image.extension" alt="">

					</div>

				</div>

			</div>


		</div>
		
	</div>
</template>

<script>
export default {
	layout: "mainLayout",


	data(){
		return {
			currentProject: ''

		}
	},


	props: {

		cases: {
			type: Array,
			required: true
		}

	},

	methods: {
		enterNameHandler(event) {
			this.currentProject =  event.target.getAttribute('data-index-project');
		},

		leaveNameHandler() {
			this.currentProject =  "";
		},
		clickHandler(event) {
			const projectId = event.target.dataset.indexProject
			$nuxt.$emit('open-viewer', projectId)
		}
	}

}
</script>

<style lang="scss" scoped>

	.project-listing-container {
		width: 100%;
		height:100%;
		left: 0;
		position: absolute;
	}

	.project-container {
		color: var(--color-type-smooth-plus);
		transition: all 0.45s;
		height: 5%;
		padding: 10px 0;
		padding-left: 25px;
		position: relative;
		display: flex;
		justify-content: row;
		align-items: center;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: baseline;
		&.active {
			background-color: rgba(255, 251, 251, 0.795);


			.project-image-container {

				&:nth-of-type(2) {
					opacity:1;
				}
			
				&:nth-of-type(3) {
					opacity:1;
				}
			}
		}
	}

	.project-id-container,
	.project-year-container {
		font-family: "AktivGrotesk";
		font-weight: 300;
		display: flex;
		flex-direction: column;
	  
	}

	.project-id-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		font-size: 1vw;
		height: 100%;
		padding-right: 10px;
		width: 1vh;

	}

	.project-name-container {
		font-family: "AktivGrotesk";
		text-transform: uppercase; 
		font-weight: 300;
		font-size: 5vw;
		margin-right: 15px;
		cursor: pointer;
		p {
			color: rgba(255, 255, 255, 0.74);

			white-space: nowrap;

		}
	}

	.project-year-container {

		font-size: 1vw;

	}

	.project-medias-container {
		height: 100%;
		display: flex;
		align-items: center;

		.project-image-container {
			padding-right: 2%;
			width: 9%;
			height: auto;         
			&:nth-of-type(2) {
				transition: all 0.75s;
				opacity:0
			}
		
			&:nth-of-type(3) {
				transition: all 0.45s;
				opacity:0
			}
		}
		
		.project-image-content {
			object-fit: cover;
			display: block;
			padding-right: 20px;
			height: 100%;
			width: 100%;
	
	
		}


	}





</style>