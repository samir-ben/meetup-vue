<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 md6 offset-md3>
        <h1 class="secondary--text">Ajouter un meetup</h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 md6 offset-md3>
               <v-text-field
                label="Titre"
                name="title"
                id='title'
                v-model="title"
                required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 md6 offset-md3>
               <v-text-field
                label="Lieu"
                name="location"
                id='location'
                v-model="location"
                required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 md6 offset-md3>
               <v-text-field
                label="Image URL"
                name="imageURL"
                id='imageURL'
                v-model="imageURL"
                required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 md6 offset-md3>
               <img :src="imageURL" alt="image du lieu" width="100%">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 md6 offset-md3>
               <v-textarea
                label="Description"
                name="description"
                id='description'
                v-model="description"
                required>
              </v-textarea>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 md6 offset-md3>
               <h4>Choisir la date et l'heure</h4>
            </v-flex>
          </v-layout>
          <v-layout row class="mb-3">
            <v-flex xs12 md6 offset-md3>
                <v-date-picker v-model="date" locale='fr'></v-date-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 md6 offset-md3>
                <v-time-picker v-model="time" format="24hr" locale="fr"></v-time-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 md6 offset-md3>
               <v-btn  :disabled="!formIsValid" class="primary" type="submit">Ajouter</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as moment from 'moment';
  export default {
    data() {
      return {
        title: '',
        location: '',
        imageURL: '',
        description: '',
        date: new Date(),
        time: new Date()
      }
    },
    created: function () {
    const dateTime = moment()
    this.date = dateTime.format('YYYY-MM-DD')
    this.time = dateTime.format('HH:mm')
    },
    computed: {
      formIsValid () {
        return this.title !== '' &&
          this.location !== '' &&
          this.imageURL !== '' &&
          this.description !== ''
      },
      submittableDateTime () {
        const date = new Date(this.date)
        if (typeof this.time === 'string') {
          let hours = this.time.match(/^(\d+)/)[1]
          const minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
        } else {
          date.setHours(this.time.getHours())
          date.setMinutes(this.time.getMinutes())
        }
        return date
      }
    },
    methods: {
      onCreateMeetup () {
        if (!this.formIsValid) {
          return
        }
        const meetupData = {
          title: this.title,
          location: this.location,
          imageURL: this.imageURL,
          description: this.description,
          date: this.submittableDateTime
        }
        this.$store.dispatch('createAMeetup', meetupData)
        this.$router.push('/meetups')
      }
    }
  }
</script>

<style>

</style>
