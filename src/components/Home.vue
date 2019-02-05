<template>
  <v-container>
    <v-layout row wrap class="mb-3">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn light large router to="/meetups" class="info">Explorer un meetup</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info" >Ajouter un meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :key="meetup.id"
            :src="meetup.imageURL"
          >
            <div class="title text-xs-center">{{meetup.title}}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap  class="mt-2">
      <v-flex xs12 class="text-xs-center">
       <p>Participe à cet événement !</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data(){
      return {
        meetups: [
          {imageURL: 'https://static.cnews.fr/sites/default/files/styles/image_640_360/public/ville_lumiere.jpg?itok=uk627TUt', id: 'feizj21', title: 'Meetup à Paris'},
          {imageURL: 'https://static.latribune.fr/full_width/607553/londre-demographie.jpg', id: 'efizjf3', title: 'Meetup à Londre'},
          {imageURL: 'https://i.f1g.fr/media/eidos/805x453_crop/2017/07/21/XVM17e6e88a-66df-11e7-a206-95aa27b386e9.jpg', id: 'oegir65', title: 'Meetup à Berlin'}
        ]
      }
    }
  }
</script>

<style scoped>
.title{
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgba(0,0,0,0.5);
  color: #fff;
  padding: 20px;
  font-size: 2em;
}

</style>
