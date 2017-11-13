import data from './data'

export default {
  CHANGELANG (state, lang) {
    state.lang = lang
    state.data = data[lang]
    window.localStorage.setItem('x-language', lang)
    document.title = data[lang].title
  }
}
