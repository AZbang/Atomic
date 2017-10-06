const database = require('./clientDataBase');
const substance = require('./substanceData');
const errors = require('./errors.json');

module.exports = {
  modules: {
    substance,
    database
  },
  state: {
    loading: false,
    errorLog: "",
    lang: "ru",
    standartLang: "en"
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
      commit('errorLog', errors[obj.type][state.lang || state.standartLang]);
      console.log(obj.error);
    }
  }
};
