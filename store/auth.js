

export const state = () => ({
  user: null
})

export const actions = {
  login({commit}, loginData) {
    return this.$axios.$post('/api/v1/users/login', loginData)
    .then(user => {
        commit('setAuthUser', user)
      })
      .catch(error => {
        return Promise.reject(error)
      })
  }
}

export const mutations = {
  setAuthUser(state, user) {
    return state.user = user
  }
}