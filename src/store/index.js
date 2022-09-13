import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload
    }
  },
  actions: {
    getTodos({ commit }) {
      return axios.get('http://localhost:3000/todos')
        .then((response) => {
          this.$store.commit('storeTodos',response.data)
        })
  },
},
  modules: {
  }
})
