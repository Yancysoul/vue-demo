import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken()
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      setToken(token)
      state.token = token
    }
  },
  actions: {
    SetToken({ commit }, token) {
      console.log(token)
      commit('SET_TOKEN', token)
    }
  }
}

export default user