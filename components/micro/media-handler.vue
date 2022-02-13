<template>

	<div class="media-handler">

		<div v-if="imagesExtensions.includes(media.extension.toLowerCase())"
			class="image-container"
		>

			<img class="content-image"
				:src="`@/static/${media.from}/${media.folder}/${media.assetName}.${media.extension}`" 
				alt=""
			>

		</div>

		<div v-if="videosExtensions.includes(media.extension.toLowerCase())"
			class="image-container"
		>

			<!-- @TODO : à tester -->
			<video playsinline muted autoplay loop
				class="content-video"
				:src="`@/static/${media.from}/${media.folder}/${media.assetName}.${media.extension}`" 
			></video>

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
		
		.content {

			// &-container {}

			&-image {
				width: 100%;
				object-fit: cover;
				object-position: center;

				background-color: rgba(255,0,0, 0.1);
			}

		}

	}

</style>
