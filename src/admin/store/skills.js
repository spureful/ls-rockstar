//import { generateStdError } from "@/helpers/errorHandler";


export default {
  namespaced: true,
  state: {
    skills: []
  },
  mutations: {
    SET_SKILLS: (state, skills) => {
      state.skills = skills;
    },
    ADD_SKILL: (state, newSkill) => {
      state.skills.push(newSkill);
    },
    REMOVE_SKILL: (state, skillId) => {
      state.skills = state.skills.filter(skill => skill.id !== skillId);
    },
    EDIT_SKILL: (state, editedSkill) => {
      state.skills = state.skills.map(skill => skill.id === editedSkill.id ? editedSkill : skill);
    }

  },
  actions: {
    async addSkill({commit}, skill) {
      try {
        const response = await this.$axios.post('/skills', skill);
        commit('ADD_SKILL', response.data);
        return response
      } catch (e) {
//        generateStdError(e);
      }
    },
    async getSkills({commit}, skill) {
      try {
		const getUserId = await this.$axios.get('/user')
	 	const userID = getUserId.data.user.id;
        const response = await this.$axios.get(`/skills/${userID}`, skill);
        commit('SET_SKILLS', response.data);
		return response
      } catch (e) {
//        generateStdError(e);
      }
    },
    async removeSkill({commit}, skillId) {
      try {
		
        const response = await this.$axios.delete(`/skills/${skillId}`);
        commit('REMOVE_SKILL', skillId);
        return response
      } catch (e) {
//        generateStdError(e);
      }
    },
    async editSkill({commit}, skill) {
      try {
        const response = await this.$axios.post(`/skills/${skill.id}`, skill);
        commit('EDIT_SKILL', response.data.skill);
        return response
      } catch (e) {
//        generateStdError(e);
      }
    }
  }
}