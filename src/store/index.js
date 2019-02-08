import Vue from 'vue';
import Vuex from 'vuex';

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
    user: {
      id: 'ajaldslfalsk12',
      registeredMeetups: ['feizj21']
    }
  },
  mutations: {
    createAMeetup(state, payload) {
      return state.loadMeetups.push(payload);
    }
  },
  actions: {
    createAMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageURL: payload.imageURL,
        description: payload.description,
        id: 'dezdzedezd423',
        date: payload.date
      };
      commit('createAMeetup', meetup);
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
    }
  }
});
