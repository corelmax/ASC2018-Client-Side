export default {
  state: {
    places: [],
    user: localStorage.getItem('user') || {}
  },
  logout() {
    localStorage.clear()
    this.state.user = {}
  }
}
