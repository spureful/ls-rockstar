//import { generateStdError } from "@/helpers/errorHandler";

export default {
  namespaced: true,
  state: {
    works: [],
	editMode: false
	  
  },
  mutations: {
	  
	  SET_WORK: (state, work) => {
		  state.works = work
	  },
	  
	  ADD_WORK: (state, work) => {
		  state.works.push(work)
	  },
	  
	  REMOVE_WORK: (state, work) => {
	  state.works = state.works.filter(item => item.id !== work)
  },
	EDIT_WORK: (state, work ) => {
	 state.works = state.works.map(item => item.id === work.id ? work : item)
}, 
	  EDIT_MODE(state, mode) {
		  state.editMode = mode
	  }
	  

  },
  actions: {
	  
	  async addWork({commit}, work) {
		  try {
			  const response = await this.$axios.post('/works', work);
			  commit ('ADD_WORK', response.data);
			  return response;
		  } catch (e) {
			  console.log(e);
		  }
	  },
	  
	  async removeWork({commit}, work) {
		  try {
			  const response = await this.$axios.delete(`/works/${work}`); 
			  commit ('REMOVE_WORK', work)
			  return response;
		  } catch (e) {
			  console.log(e);
		  }
	  },
	  
	  async getWork({commit}) {
		  const response = await this.$axios.get(`/works/303`);
		  commit('SET_WORK', response.data)
		  return response
	  },
	  
	   async editWork({commit}, work) {
		  const response = await this.$axios.post(`/works/${work.id}/`, work.data);
		  commit('EDIT_WORK', response.data.work)
		  return response
	  },
	  
	  toggleEditMode({commit}, mode) {
		  mode = !mode;
		  commit('EDIT_MODE', mode)
	  }
	  
	

  },
getters: {
	getEditModeState: state =>  state.editMode	
	
}
}