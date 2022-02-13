<template>

	<div class="media-handler">

		<div v-if="imagesExtensions.includes(media.extension)"
			class="image-container"
		>

			<img class="image-content"
				:src="`@/static/${media.type}/${media.folder}/${media.assetName}.${media.extension}`" 
				alt=""
			>

		</div>
		
	</div>

</template>

<script>
	export default {
		
		props: {
			media: {
				type: Object,
				required: true
			}
		},

		data(){

			return {
				imagesExtensions: ["png", "jpg"],
				videosExtensions: ["mp4"]
			}
		}

	}
</script>

<style lang="scss" scoped>

	.media-handler {
		
		.image {

			// &-container {}

			&-content {
				width: 100%;
				object-fit: cover;
				object-position: center;

				background-color: rgba(255,0,0, 0.1);
			}

		}

	}

</style>
