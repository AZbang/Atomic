import types from './types.json'
import substances from './substances.json'
import atoms from './atoms.json'

export default {
  state: {
    types,
    substances,
    atoms,
    favorites: [],
    currentData: {}
  },
  getters: {
    isFavotite: (state) => (title) => {
      return state.favorites.find((sub) => sub.title === title);
    },
    getType: (state) => (type) => {
      return state.types.find((item) => item.type === type);
    },
    getSubstances: (state) => (type) => {
      let subs = [];
      state.substances.forEach((item) => {
        if(item.type === type) subs.push(item);
      });
      return subs;
    }
  },
  mutations: {
    addFavorite(state, sub) {
      state.favorites.push(sub);
    },
    removeFavorite(state, sub) {
      state.favorites.forEach((item, i) => {
        if(item.formula === sub.formula) state.favorites.splice(i, 1);
      });
    }
  }
}
