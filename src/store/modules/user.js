import { getToken, setToken, removeToken } from '@/utils/auth'
import { setStore, getStore, removeStore } from '@/utils/store'
import { setRouter } from '@/utils/router'
import router from '@/router'

const user = {
  state: {
    token: getToken(),
    menus: getStore({name: 'menus'})
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      setToken(token)
      state.token = token
    },
    SET_MENU: (state, menus) => {
      var routerMenu = setRouter(menus)
      state.menus = routerMenu
      setStore({
        name: 'menus',
        content: routerMenu,
        type: true
      })
      router.options.routes.push(...routerMenu)
    }
  },
  actions: {
    SetToken({ commit }, token) {
      console.log(token)
      commit('SET_TOKEN', token)
    },
    SetMenu({ commit }, menus) {
      commit('SET_MENU', menus)
    }
  }
}

export default user