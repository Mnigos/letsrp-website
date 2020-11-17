import Vuex from 'vuex';
import axios from 'axios';

export default Vuex.createStore({
  state: {},
  mutations: {},
  actions: {
    retrieveToken(context, credentials) {
      axios
        .post('/admin/login', {
          name: credentials.name,
          pass: credentials.pass,
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    },
  },
  modules: {},
});
