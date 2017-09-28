const types = require('./types.json');
const substances = require('./substances.json');

module.exports = {
  state: {
    types,
    substances
  },
  getters: {
    types(state) {
      return state.types;
    },
    substances(state, type) {
      return state.substances[type];
    }
  }
};
