import { createStore } from 'vuex';

export default createStore({
  state: {
    showMyCard: true, 
  },
  mutations: {
    setShowMyCard(state, value) {
      state.showMyCard = value;
    },
  },
  actions: {
    updateShowMyCard({ commit }, value) {
      commit('setShowMyCard', value);
    },
  },
});
