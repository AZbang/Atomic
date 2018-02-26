import database from './clientDataBase'
import substance from './substanceData'
import Model from '../model'

export default {
  modules: {
    substance,
    database
  },
  state: {
    loading: false,
    message: {},
    model: new Model(window.innerWidth, window.innerHeight/2),
    title: 'Molecules',
    lang: 'ru',
    isHeader: true,
    defaultLang: 'en'
  },
  mutations: {
    loading(state, v) {
      state.loading = v;
    },
    setMessage(state, log) {
      state.message = log;
    },
    changeLang(state, lang) {
      state.lang = lang;
    },
    setTitle(state, title) {
      state.title = title;
    },
    setHeader(state, isHeader) {
      state.isHeader = isHeader;
    }
  }
}
