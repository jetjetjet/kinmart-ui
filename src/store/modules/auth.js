//store/modules/auth.js
import config from '../../config/config'
import instance from '../../config/axios'
import Vue from 'vue'

const state = {
  user: null,
  token: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StateUser: (state) => state.user,
  StateToken: (state) => state.token,
};

const actions = {
  async handleLogin({commit}, user){
    let dataUser, token
    const sanctum = config.endpoint + 'sanctum/csrf-cookie'
    await instance.get(sanctum).then( () => {

    })

    await instance.post('login', user).then(response => {
      if(response.data.success){
        Vue.$toast.success('Berhasil Login! Tunggu sebentar')
        token = response.data.data.token
        dataUser = response.data.data
      } else {
        Vue.$toast.error(response.data.messages[0],{})
      }
    })
    
    await commit("setToken", token)
    await commit("setUser", dataUser)
  },

  async LogOut({ commit }) {
    await instance.post('logout')
    commit("logout", null, null);
  },
};

const mutations = {
  setUser(state, username) {
    state.user = username;
  },

  setToken(state, token) {
    state.token = token;
  },

  logout(state, user, token) {
    state.user = user;
    state.token = token;
  },
};
export default {
  state,
  getters,
  actions,
  mutations
};