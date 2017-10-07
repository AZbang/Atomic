const types = require('./types.json');
const substances = require('./substances.json');
const atoms = require('./atoms.json');

module.exports = {
  state: {
    types,
    substances,
    atoms,
    history: [],
    stars: [],
    currentData: {}
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
      subs.isStar = true;
      state.stars.push(subs);
    },
    removeStar(state, subs) {
      subs.isStar = false;
      for(let i = 0; i < state.stars.length; i++) {
        if(state.stars[i].label === subs.label) {
          state.stars.splice(i, 1);
          break;
        }
      }
    },
    addHistory(state, subs) {
      state.history.push(subs);
    }
  }
}
