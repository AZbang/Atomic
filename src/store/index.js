import database from './clientDataBase'
import substance from './substanceData'
import errors from './errors.json'

export default {
  modules: {
    substance,
    database
  },
  state: {
    loading: false,
    errorLog: "",
    lang: "ru",
    defaultLang: "en"
  },
  mutations: {
    loadingStart(state) {
      state.loading = true;
    },
    loadingEnd(state) {
      state.loading = false;
    },
    errorLog(state, log) {
      state.errorLog = log;
    },
    changeLang(state, lang) {
      state.lang = lang;
    }
  },
  actions: {
    error({commit, state}, obj) {
      commit('errorLog', errors[obj.type][state.lang || state.defaultLang]);
      console.log(obj.error);
    }
  }
}
