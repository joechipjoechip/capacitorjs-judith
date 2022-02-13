<template>

	<div class="cases-wrapper">	

		<case-viewer v-if="viewerIsActive" :item="cases[0]"/>

	</div>

</template>

<script>

	import CaseViewer from "@/components/case-viewer.vue"

	export default {

		layout: "mainLayout",

		components: {
			"case-viewer": CaseViewer
		},

		data(){
			return {

				viewerIsActive: true,

				cases: [
					{
						id: "toyota",
						name: "Toyota Yaris",
						year: 2021,
						thumbnails: [
							{
								extension: "png",
								assetName: "toyota-thumb-01"
							},
							{
								extension: "png",
								assetName: "toyota-thumb-02"
							},
							{
								extension: "gif",
								assetName: "toyota-thumb-03"
							}
						],
						content: {
							cta: {
								wording: "watch clip",
								link: "http://www.toyota.com"
							},
							description: [
								"My own goal was to represent the path of life within the lushness. I achieved this through the representation of the circle of life. The fertilisation and exuberance beside the chaotic birth of a garden.",
								"Banjo soundscapes has drawn the sound of this garden led by a post-romantic piano music piece. Kaleidoscopic arpeggios and hammering noises illustrate the blossoming and climbing flowers and plants."
							],
							credits: {
								type: "CGI Animation",
								entities: [
									{
										name: "Madarin Oriental Ritz Madrid",
										whichIs: "client"
									},
									{
										name: "Cannes",
										whichIs: "creative direction"
									},
									{
										name: "Sol 1 grand prix",
										whichIs: "3d artist"
									},
									{
										name: "OJO",
										whichIs: "sound"
									}
								]
							},
							medias: {
								cover: {
									extension: "jpg",
									assetName: "toyota-cover"
								},
								parallax: {
									extension: "jpg",
									assetName: "toyota-parallax"
								},
								lines: [
									[
										{
											extension: "jpg",
											assetName: "toyota-line-1-visu-1"
										},
										{
											extension: "png",
											assetName: "toyota-line-1-visu-2"
										}
									],
									[
										{
											extension: "jpg",
											assetName: "toyota-line-1-visu-1"
										},
										{
											extension: "png",
											assetName: "toyota-line-1-visu-2"
										}
									]
								],
								bottom: "toyota-bottom"
							}
						}
					}
				]
			}
		}	

	}
</script>

<style lang="scss" scoped>

	.cases-wrapper {
		color: white;
	}

</style>