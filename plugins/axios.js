export default function ({ $axios, redirect, store }) {
  $axios.onRequest((config) => {
    if (store.state.user.token) {
      config.headers.token = store.state.user.token
    }
    return config
  })
  $axios.onResponse((response) => {
    if (response.data.code === -999) {
      redirect('/login')
    }
    return response.data
  })
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
