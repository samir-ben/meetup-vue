<template>
  <v-app>
  <v-navigation-drawer app v-model="sideNav">
    <v-list v-for="item in itemsMenu" :key="item.title">
        <v-list-tile :to=item.link>
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
  </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link tag="span" to="/" style="cursor:pointer">Meetup</router-link>
        </v-toolbar-title>
    <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in itemsMenu" :key="item.title" :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
           {{item.title}}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      sideNav: false,
    }
  },
  created() {
    this.$store.dispatch('loadMeetups')
  },
  computed: {
    itemsMenu() {
      let itemsMenu = [
        {icon: 'input', title: 'Connexion', link: '/signin'},
        {icon: 'lock', title: 'Inscription', link: '/signup'},
      ]
      if(this.userIsAuthenticated) {
        itemsMenu = [
        {icon: 'event', title: 'Voir les Meetups', link: '/meetups'},
        {icon: 'location_on', title: 'Organisation', link: '/meetup/new'},
        {icon: 'person', title: 'Profil', link: '/profile'},
      ]
      }
       return itemsMenu
    },
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
}
</script>


<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
