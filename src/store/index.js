import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadMeetups: [
      {imageURL: 'https://static.cnews.fr/sites/default/files/styles/image_640_360/public/ville_lumiere.jpg?itok=uk627TUt', id: 'feizj21', title: 'Meetup à Paris', date: '11/02/2019'},
      {imageURL: 'https://static.latribune.fr/full_width/607553/londre-demographie.jpg', id: 'efizjf3', title: 'Meetup à Londre', date: '05/02/2019'},
      {imageURL: 'https://i.f1g.fr/media/eidos/805x453_crop/2017/07/21/XVM17e6e88a-66df-11e7-a206-95aa27b386e9.jpg', id: 'oegir65', title: 'Meetup à Berlin', date: '21/02/2019'}
    ],
    user: {
      id: 'ajaldslfalsk12',
      registeredMeetups: ['feizj21']
    }
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    loadMeetups(state) {
      return state.loadMeetups.sort((meetupA, meetupB)=>{
        return meetupA.date > meetupB.date ? -1 : meetupA < meetupB ? 1: 0
      })
    },
    featuredMeetups(state, getters) {
      return getters.loadMeetups.slice(0, 5)
    },
    loadMeetup(state) {
      return (meetupId) => {
        return state.loadMeetups.find(function(meetup){
          return meetup.id === meetupId
        })
      }
    }
  }
})
