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
               <v-btn  :disabled="!formIsValid" class="primary" type="submit">Ajouter</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        location: '',
        imageURL: '',
        description: ''
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' &&
          this.location !== '' &&
          this.imageURL !== '' &&
          this.description !== ''
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
          date: new Date()
        }
        this.$store.dispatch('createAMeetup', meetupData)
        this.$router.push('/meetups')
      }
    }
  }
</script>

<style>

</style>
