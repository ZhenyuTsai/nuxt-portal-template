const URL = process.env.VUE_APP_BASEURL || ''
export default function ({ $axios }, inject) {
  const user = {
    login (params) {
      return $axios.post(URL + '/users/login', params)
    },
    getUserInfo (params) {
      return $axios.get(URL + '/users/getInfo', params)
    }
  }
  inject('user', user)
}
