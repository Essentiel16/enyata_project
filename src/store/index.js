import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usersDetail: [],
  },
  mutations: {
    setRegister: (state, payload) => {
      state.usersDetail.push(payload);
    },
  },
  actions: {
    async getUserDetail({ commit }, payload) {
      const formdata = new FormData();
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/apply', payload, formdata);
      commit('setRegister', response.data);
      console.log(response);
    },

    async onUpload() {
      // eslint-disable-next-line no-undef
      const fd = new FormFile();
      fd.append('cv', this.selectedPhoto, this.selectedPhoto.name);
      fd.append('upload_preset', 'lpgw3gby');
      axios.post('https://api.cloudinary.com/v1_1/dm2d24176/image/upload', fd, {
        onUploadProgress: (uploadEvent) => {
          // eslint-disable-next-line no-mixed-operators
          console.log(`Upload Progress: ${Math.round((uploadEvent.loaded / uploadEvent.total * 100))}%`);
        },
      })
        .then((res) => {
          console.log(res);
        });
    },
  },
  modules: {
  },
});
