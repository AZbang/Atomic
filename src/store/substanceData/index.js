import pubchemAccess from 'pubchem-access'
import axios from 'axios'
import key from './key.json'

const pubchem = pubchemAccess.domain('compound');

export default {
  state: {
    structure: {},
    info: {}
  },
  mutations: {
    structure(state, structure) {
      state.structure = structure;
    },
    info(state, info) {
      state.info = info;
    }
  },
  actions: {
    async loadSubstance({commit, dispatch, rootState}, props) {
      commit('loadingStart');

      try {
        let enReq = await dispatch('translateReq', {req: props.formula || props.label, translate: 'ru-en'});
        let data = await dispatch('getPubchemData', enReq);

        let info = await dispatch('wikiData', props.label);
        commit('info', {...info, formula: data.MolecularFormula});

        let structure = await dispatch('getStructureData', data.CID);
        commit('structure', structure);
        props.cb(structure);

        commit('addHistory', props);
      } catch(e) {
        dispatch('error', {
          type: 'NOT_LOADED_SUBSTANCE',
          error: e
        });
      }

      commit('loadingEnd');
    },

    async wikiData({rootState}, req) {
      let wiki = 'https://' + rootState.lang + '.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&origin=*&titles=' + req;

      let response = await axios.get(wiki, {headers: {"Content-Type": "application/json; charset=UTF-8"}});
      let pages = response.data.query.pages;
    	return pages[Object.keys(pages)[0]];
    },

  	async translateReq({commit}, props) {
  		let translate = 'https://translate.yandex.net/api/v1.5/tr.json/translate?' +
  			'key=' + key.yat +
  			'&text=' + encodeURIComponent(props.req) +
  			'&lang=' + props.translate;

    	let response = await axios.get(translate);
    	return response.data.text[0].replace('the ', '');
  	},

  	async getPubchemData(context, req) {
      let pubchem = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/' + encodeURIComponent(req) + '/property/IUPACName,MolecularFormula,MolecularWeight,/JSON';
      let response = await axios.get(pubchem);
      return response.data.PropertyTable.Properties[0];
  	},

  	async getStructureData(context, CID) {
  		let url3d = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${CID}/record/JSON/?record_type=3d&response_type=display`;
  		let url2d = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/${CID}/record/JSON/?record_type=2d&response_type=display`;

      let response;
      try {
        response = await axios.get(url3d);
        response.data.typeStructure = '3d';
      } catch(e) {
        response = await axios.get(url2d);
        response.data.typeStructure = '2d';
      }
      return response.data;
    }
  }
}
