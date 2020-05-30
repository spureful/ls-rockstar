const login = {
//	namespaced: true,
	//данные
	state: {
		user: {
		
		}

	},
	mutations: {

		SET_USER: (state, user) => {
			state.user = user
		},
		CLEAR_USER: state => (state.user = {})


	},

	///методы, которые описывают, что происходит с данными
	actions: {

		async loginUser({commit}, user) {
			try {
				const response = await this.$axios.post('/login', user);
				return response;
			} catch (error) {
				console.log(error)
			}
		},
		
		 logout({ commit }) {
            commit("CLEAR_USER");
//            removeToken();
            location.href = "/ls-advanced-portfolio"
        },
		



	}

	//вытаскивать нужные данные из state


	//описывают методы, которые будут изменять данные нашего приложения

}

export default login;
