<template>
  <div class="project-listing-container">
      <div v-for="(project, index) in this.cases" :key="project.id">

          <div class="project-container" :class="'project-'+ project.id">

              <div class="project-id">

                  <p>{{index + 1}}</p>

              </div>

              <div class="project-name">

                  <p @mouseover="mouseTitre">{{ project.name }}</p>

              </div>


              <div class="project-year">

                  <p>{{ project.year }}</p>

              </div>

              <div class="project-images">

                  <div v-for="image in project.thumbnails" :key="image.id">

                      <img class="project-image" :src="'/images/cases/' + project.id + '/' + image.assetName + '.' + image.extension" alt="">

                  </div>

              </div>

          </div>


      </div>
      
  </div>
</template>

<script>
export default {
    layout: "mainLayout",

    props: {

        cases: {
            type: Array,
            required: true
        }

    },

    methods: {
        mouseTitre(event) {
            console.log('bien enter', event.target)
    
        }
    }

}
</script>

<style lang="scss" scoped>

    .project-listing-container {
        width: 100%;
        height:100%;
        left: 25px;
        position: absolute;
    }

    .project-container {
        cursor:pointer;

        transition: all 0.45s;
      
        border: solid 1px red;

        position: relative;
        display: flex;
        justify-content: row;
        align-items: center;
    }
    .project-id,
    .project-year {
        font-family: "AktivGrotesk";
        display: flex;
        flex-direction: column;
        align-self: flex-end;
        margin-bottom:18px;
    }

    .project-id {
       
        font-size: 1vw;
        padding-right: 10px;
        height: 100%;

    }
    .project-name {
        align-self: flex-end;
        margin-bottom: 1vh;
        font-family: "AktivGrotesk";
        font-weight: 300;
        font-size: 5vw;
        text-transform: uppercase; 
        margin-right:15px;
    }

    .project-year {
        font-size: 1vw;
 
    }

    .project-images {
        border: solid 1px blue;
        justify-content: flex-start;
        width: 30%;
        align-items: center;
        object-fit: cover;
        display: flex;
        img {
            padding-right:20px;
        }

    }


    .project-image {
        width: 10vw;
    }

</style>