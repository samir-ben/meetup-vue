<template>
  <v-container>
    <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-3">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-container fluid>
                <v-layout row>
                    <v-flex xs5 sm4 md3>
                <v-img
                  :src="meetup.imageURL"
                  height="130px"
                ></v-img>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h3>{{meetup.title}}</h3>
                  <span>{{meetup.date | moment}}</span>
                  </div>
              </v-card-title>
              <v-card-actions>
                <v-btn :to="'/meetups/' + meetup.id" dark>Voir</v-btn>
              </v-card-actions>
              </v-flex>
                </v-layout>
              </v-container>
            </v-card>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as moment from 'moment';
moment.locale('fr');
  export default {
    computed: {
      meetups() {
        return this.$store.getters.loadMeetups
      }
    },
    methods: {
      moment: function () {
        return moment();
    }
  },
    filters: {
      moment: function (date) {
        return moment(date).format('Do MMMM YYYY, H:mm');
      }
    },
  }
</script>

<style>

</style>
