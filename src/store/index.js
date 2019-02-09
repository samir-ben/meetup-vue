import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadMeetups: [
      {
        imageURL:
          'https://static.cnews.fr/sites/default/files/styles/image_640_360/public/ville_lumiere.jpg?itok=uk627TUt',
        id: 'feizj21',
        title: 'Meetup à Paris',
        date: new Date(),
        description: 'Paris !!!',
        location: 'Paris'
      },
      {
        imageURL:
          'https://static.latribune.fr/full_width/607553/londre-demographie.jpg',
        id: 'efizjf3',
        title: 'Meetup à Londre',
        date: new Date(),
        description: 'Londre mon ami !',
        location: 'Londre'
      },
      {
        imageURL:
          'https://i.f1g.fr/media/eidos/805x453_crop/2017/07/21/XVM17e6e88a-66df-11e7-a206-95aa27b386e9.jpg',
        id: 'oegir65',
        title: 'Meetup à Berlin',
        date: new Date(),
        description: 'Ich Bin Berliner ahah',
        location: 'Berlin'
      }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedMeetups(state, payload) {
      state.loadedMeetups = payload;
    },
    createAMeetup(state, payload) {
      state.loadMeetups.push(payload);
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    loadMeetups({ commit }) {
      commit('setLoading', true);
      firebase
        .database()
        .ref('meetups')
        .once('value')
        .then(data => {
          const meetups = [];
          const obj = data.val();
          for (let key in obj) {
            meetups.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
            });
          }
          commit('setLoadedMeetups', meetups);
          commit('setLoading', false);
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log(error);
          commit('setLoading', false);
        });
    },
    createAMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageURL: payload.imageURL,
        description: payload.description,
        date: payload.date.toISOString(),
      };
      firebase
        .database()
        .ref('meetups')
        .push(meetup)
        .then(data => {
          const key = data.key;
          commit('createAMeetup', {
            ...meetup,
            id: key
          });
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log(error);
        });
      // Reach out to firebase and store it
    },
    userSignUp({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setLoading', false);
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          };
          commit('setUser', newUser);
        })
        .catch(error => {
          commit('setLoading', false);
          commit('setError', error);
          // eslint-disable-next-line
          console.log(error);
        });
    },
    userSignIn({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setLoading', false);
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          };
          commit('setUser', newUser);
        })
        .catch(error => {
          commit('setLoading', false);
          commit('setError', error);
          // eslint-disable-next-line
          console.log(error);
        });
    },
    clearError({ commit }) {
      commit('clearError');
    }
  },
  getters: {
    loadMeetups(state) {
      return state.loadMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date ? -1 : meetupA < meetupB ? 1 : 0;
      });
    },
    featuredMeetups(state, getters) {
      return getters.loadMeetups.slice(0, 5);
    },
    loadMeetup(state) {
      return meetupId => {
        return state.loadMeetups.find(function(meetup) {
          return meetup.id === meetupId;
        });
      };
    },
    user(state) {
      return state.user;
    },
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    }
  }
});
