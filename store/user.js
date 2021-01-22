
export const state = () => ({
  token: null
})

export const mutations = {
  SETTOKEN (state, { token }) {
    state.token = token
  },
  REMOVETOKEN (state) {
    state.token = null
  }
}

export const actions = {
  setToken ({ commit }, { token }) {
    commit('SETTOKEN', { token })
  },
  removeToken ({ commit }) {
    commit('REMOVETOKEN', null)
  }
}
