//import {generateStdError} from '@/helpers/errorHandler';
export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    GET_CATEGORIES: (state, payload) => {
      state.categories = payload;
    },
    ADD_CATEGORY: (state, skillCategory) => {
      state.categories.unshift(skillCategory);
    },
    UPDATE_CATEGORY: (state, changedCategory) => {
      state.categories = state.categories.map(category => {
        return category.id === changedCategory.id ? changedCategory : category;
      });
    },
    REMOVE_CATEGORY: (state, removedCategoryId) => {
      state.categories = state.categories.filter(
          category => category.id !== removedCategoryId
      );
    },
  },
  actions: {
    async addCategory({commit}, categoryTitle) {
      try {
        const response = await this.$axios.post("/categories", {
          title: categoryTitle
        });
        commit("ADD_CATEGORY", response.data);
        return response
      } catch(e) {
//        generateStdError(e);
      }
    },
    async getCategories({commit}) {
      try {
        const response = await this.$axios.get("/categories/303");
        commit('GET_CATEGORIES', response.data);
        return response
      } catch(e) {
		  console.log(e);
//        generateStdError(e);
      }
    },
    async updateCategory({ commit }, category) {
      try {
        const response = await this.$axios.post(`/categories/${category.id}`, category);
        commit("UPDATE_CATEGORY", response.data.category);
        return response;
      } catch (e) {
		   console.log(e);
//        generateStdError(e);
      }
    },
    async removeCategory({ commit }, categoryId) {
      try {
        const response = await this.$axios.delete(`/categories/${categoryId}`);
        commit("REMOVE_CATEGORY", categoryId);
        return response;
      } catch (e) {
		   console.log(e);
//        generateStdError(e);
      }
    },
  }
}