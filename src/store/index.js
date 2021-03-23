import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    setRegister(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    getUserDetail({ commit }) {
      axios.post()
        .then((response) => {
          commit('setRegister', response.data);
        });
    },
  },
  modules: {
  },
});
