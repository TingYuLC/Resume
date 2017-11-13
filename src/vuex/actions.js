export default {
  changeLanguage ({commit, state}, lang) {
    if (state.lang !== lang) {
      commit('CHANGELANG', lang)
    }
  }
}
