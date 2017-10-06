const pubchem = require('pubchem-access').domain('compound');
const axios = require('axios');

const key = require('./key.json');

module.exports = {
  state: {
    data: {}
  },
  mutations: {
    changeData(state, data) {
      state.data = data;
    }
  },
  actions: {
    async loadSubstance({commit, dispatch, rootState}, props) {
      commit('loadingStart');

      try {
        let enReq = await dispatch('translateReq', props.req);
        dispatch('getPubchemData', {
          req: enReq,
          cb: async (data) => {
            let structure = await dispatch('getStructureData', data.CID);
            commit('changeData', {...structure, ...data});
            props.cb(structure);
          }
        });
      } catch(e) {
        dispatch('error', {
          type: 'NOT_LOADED_SUBSTANCE',
          error: e
        });
      }

      commit('loadingEnd');
    },

  	async translateReq({commit}, req) {
  		let translate = 'https://translate.yandex.net/api/v1.5/tr.json/translate?' +
  			'key=' + key.yat +
  			'&text=' + encodeURIComponent(req) +
  			'&lang=ru-en';

    	let response = await axios.get(translate);
    	return response.data.text[0].replace('the ', '');
  	},

  	getPubchemData(context, props) {
      pubchem
  			.setName(props.req)
  			.getProperties(["IUPACName", "MolecularFormula", "MolecularWeight"])
  			.execute((data, status) => {
    		  if(status !== 1) throw Error();
          else props.cb(data);
  			});
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
