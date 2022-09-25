import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    todos: []
  },
  
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload
    },
    storeTodo(state, payload) {
      const index = state.todos.findIndex(todo => todo.id === payload.id)
      if (index >= 0) {
        state.todos.splice(index, 1, payload)
      }else{
      state.todos.unshift(payload) //'unshift' adiciona na primeira posicao, 'push' adiciona no final
    }
  },
    storeTodoCheck(){

    },

    deleteTodo(state, id) {
       const index = state.todos.findIndex(todo => todo.id === id)
      
      if (index >= 0 ) {
        state.todos.splice(index, 1)
      }
    },

  },
  actions: {
    getTodos({ commit }) {
      //return new Promise( (resolve)=>{
        //setTimeout( () => {
          return axios.get('./api/todos')
            .then((response) => {
              commit('storeTodos',response.data)
              //resolve()
            })
         // }, 200)
       // })
      },

      addTodo({commit}, data) {
        return axios.post('./api/todos', data).then ((response) => {
          commit('storeTodo', response.data)
        })
      },

      updateTodo({commit}, {id, data}) {
        return axios.put(`./api/todos/${id}`, data).then ((response) => {
          commit('storeTodoCheck', response.data)
        })
      },
      deleteTodo( {commit}, id) {
        return axios.delete(`./api/todos/${id}`).then (() => {
          commit('deleteTodo', id)
       })
      },
      
    },
  getters: {
    },
  modules: {
  }
})
