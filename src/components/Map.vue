<template>
  <div class="map-wrapper">
    <img src="../assets/map.svg"/>
    <ul class="overlay">

      <li v-for="place in places" v-bind:style="{left: place.x + 'px', top: place.y + 'px'}">{{place.name}}</li>
    </ul>
  </div>
</template>

<script>
    import axios from 'axios'
    import dataStore from '../store/data'
    export default {
        name: "Map",
        data: function() {
          return {
            places: [],
            sharedState: dataStore.state
          }
        },
        mounted: function() {
          console.log("mounted")
          this.fetchAllPlaces()
        },
        methods: {
          fetchAllPlaces: function() {


            axios.get( `http://localhost:8000/v1/place?token=${this.sharedState.user.token}`)
              .then(response => {
                this.places = response.data
                this.sharedState.places = response.data
              })
              .catch(err => {


              })

          }
        }
    }
</script>

<style scoped>
.map-wrapper {
  position: relative;
}
  .overlay li {
    position: absolute;
    left: 100px;
    top: 100px;
  }
</style>
