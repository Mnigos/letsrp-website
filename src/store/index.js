import Vuex from 'vuex';
import Axios from 'axios';

export default Vuex.createStore({
  state: {},
  mutations: {},
  actions: {
    retrieveToken(context, credentials) {
      Axios.post('/admin', { name: credentials.name, pass: credentials.pass })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    },
  },
  modules: {},
});
