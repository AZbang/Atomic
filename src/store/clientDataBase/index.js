import types from './types.json'
import foundations from './foundations.json'
import oxides from './oxides.json'
import acids from './acids.json'
import salts from './salts.json'

export default {
  state: {
    types,
    substances: [].concat(oxides, foundations, acids, salts),
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  },
  getters: {
    isFavotite: (state) => (title) => {
      return state.favorites.find((sub) => (sub.title.search(title) !== -1 || sub.title === title));
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
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFavorite(state, sub) {
      state.favorites.forEach((item, i) => {
        if(item.title.search(sub.title) !== -1 || item.title === sub.title) state.favorites.splice(i, 1);
      });
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }
  }
}
