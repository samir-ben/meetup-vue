<template>
 <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="primary--text">{{meetup.title}}</h3>
          </v-card-title>
          <v-img
            :src="meetup.imageURL"
            height="400px"
          ></v-img>
          <v-card-text>
            <div class="info--text">{{meetup.date | moment }} - {{meetup.location}}</div>
            <div>{{meetup.description}}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">Participer</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import * as moment from 'moment';
moment.locale('fr');
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadMeetup(this.id)
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
