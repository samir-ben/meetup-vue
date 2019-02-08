<template>
  <v-container>
    <v-layout row class="mt-''">
      <v-flex xs12 md6 offset-md3>
         <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignup">
                <v-layout row>
                  <v-flex xs12 md6 offset-md3>
                    <h1 class="secondary--text">Inscription</h1>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 md6 offset-md3>
                    <v-text-field
                      label="Email"
                      name="email"
                      id='email'
                      v-model="email"
                      required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 md6 offset-md3>
                    <v-text-field
                      label="Mot de passe"
                      name="password"
                      id='password'
                      type="password"
                      v-model="password"
                      required>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 md6 offset-md3>
                    <v-text-field
                      label="Confirmation"
                      name="confirmPassword"
                      id='confirmPassword'
                      type="password"
                      v-model="confirmPassword"
                      :rules="[comparePasswords]">
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12 md6 offset-md3>
                    <v-btn class="primary" type="submit">Inscription</v-btn>
                  </v-flex>
                </v-layout>
              </form>
              </v-container>
            </v-card-text>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Le mot de passe n\'est pas identique' : ''
      },
      user () {
        return this.$store.getters.user
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      onSignup () {
        this.$store.dispatch('userSignUp', {email: this.email, password: this.password})
      }
    }
  }
</script>

<style>
</style>
