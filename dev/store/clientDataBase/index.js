const types = require('./types.json');
const substances = require('./substances.json');

module.exports = {
  state: {
    types,
    substances,
    history: [],
    stars: [],
  },
  getters: {
    types(state) {
      return state.types;
    },
    substances: (state) => (type) => {
      return state.substances[type];
    }
  },
  mutations: {
    addStar(state, subs) {
      state.stars.push(subs);
    },
    addHistory(state) {
      state.history.push(state.currentSubstance);
    }
  }
}
