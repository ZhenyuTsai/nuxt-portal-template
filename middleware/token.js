export default function ({ store, redirect, route }) {
  if (route.path !== '/login') {
    if (!store.state.user.token) {
      redirect('/login')
    }
  }
}
