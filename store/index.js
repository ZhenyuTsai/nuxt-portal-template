
const cookieparser = process.server ? require('cookieparser') : undefined

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let token = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        token = parsed.token
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('user/SETTOKEN', { token })
  }
}
