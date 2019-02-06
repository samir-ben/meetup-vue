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
        <v-carousel style="cursor: pointer;">
          <v-carousel-item
            v-for="meetup in meetups"
            :key="meetup.id"
            :src="meetup.imageURL"
            @click="onLoadMeetup(meetup.id)"
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
    computed: {
      meetups() {
        return this.$store.getters.featuredMeetups
      }
    },
    methods: {
      onLoadMeetup(id) {
        this.$router.push(('/meetups/') + id)
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
