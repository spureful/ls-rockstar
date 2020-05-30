//import { generateStdError } from "@/helpers/errorHandler";

export default {
  namespaced: true,
  state: {
    rews: [],
	editMode: false
	  
  },
  mutations: {
	  
	  SET_REW: (state, rew) => {
		  state.rews = rew
	  },
	  
	  ADD_REW: (state, rew) => {
		  state.rews.push(rew)
	  },
	  
	  REWOVE_REW: (state, rew) => {
	  state.rews = state.rews.filter(item => item.id !== rew)
  },
	EDIT_REW: (state, rew ) => {
	state.rews = state.rews.map(item => item.id === rew.id ? rew : item)
}, 
	  EDIT_MODE(state, mode) {
		  state.editMode = mode
	  }
	  


  },
  actions: {
	  
	  async addRew({commit}, rew) {
		  try {
			  const response = await this.$axios.post('/reviews', rew);
			  commit ('ADD_REW', response.data);
			  return response;
		  } catch (e) {
			  console.log(e);
		  }
	  },
	  
	  async removeRew({commit}, rew) {
		  try {
			  const response = await this.$axios.delete(`/reviews/${rew}`); 
			  commit ('REWOVE_REW', rew)
			  return response;
		  } catch (e) {
			  console.log(e);
		  }
	  },
	  
	  async getRew({commit}) {
		  const response = await this.$axios.get(`/reviews/303`);
		  commit('SET_REW', response.data)
		  return response
	  },
	  
	   async editRew({commit}, rew) {
		  const response = await this.$axios.post(`/reviews/${rew.id}/`, rew.data);
		  commit('EDIT_REW', response.data.review)
		  return response
	  },
	  
	  toggleEditMode({commit}, mode) {
		  mode = !mode;
		  commit('EDIT_MODE', mode)
	  }
	  
	

  },
getters: {
	getEditModeState: state =>  state.editMode,
	
}
}