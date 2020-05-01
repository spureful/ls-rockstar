const about = {
	//данные
	state: {
		groupSkills: [],
		skills: [],
		isEdit: false,
		groupTitle: ""
	},

	///методы, которые описывают, что происходит с данными
	actions: {
		fetchGroup(ctx) {

			fetch(`https://webdev-api.loftschool.com/categories?token=${localStorage.token }`)
				.then(resp => resp.json())
				.then(resp => {

					ctx.commit('updateGruops', resp)


				})
		},

		addNewGroup(ctx) {
			const group = {
				title: "gbfg",

			}

			fetch(`https://webdev-api.loftschool.com/categories?token=${localStorage.token }`, {
					method: "POST",
					mode: "cors",
					cache: "no-cache",
					credentials: "same-origin",
					headers: {
						"Content-Type": "application/json; charset=utf-8",
						"Content-Type": "application/json; charset=ascii",

					},
					redirect: "follow",
					referrer: "no-referrer",
					body: JSON.stringify(group)
				})
				.then(resp => resp.json())
				.then(resp => {
					
					ctx.commit('updateGruops', resp);

				})

		},

		deleteGroup(ctx, item) {
			fetch(`https://webdev-api.loftschool.com/categories/${item}?token=${localStorage.token }`, {
					method: "DELETE",
					mode: "cors",
					cache: "no-cache",
					credentials: "same-origin",
					headers: {
						"Content-Type": "application/json; charset=utf-8",
						"Content-Type": "application/json; charset=ascii",

					},
					redirect: "follow",
					referrer: "no-referrer",
					body: JSON.stringify({
						"title": item
					})
				})
				.then(resp => resp.json())
				.then(resp => {

				})

		},

		changeEdit(ctx, item) {



			fetch(`https://webdev-api.loftschool.com/categories?token=${localStorage.token }`, {
					method: "POST",
					mode: "cors",
					cache: "no-cache",
					credentials: "same-origin",
					headers: {
						"Content-Type": "application/json; charset=utf-8",
						"Content-Type": "application/json; charset=ascii",

					},
					redirect: "follow",
					referrer: "no-referrer",
					body: JSON.stringify({
						"title": item
					})
				})
				.then(resp => resp.json())
				.then(resp => {
					ctx.commit('toggleEdit');
					ctx.commit('changeEdit', resp);

				})


		},
//		toggleEdit(ctx, item) {
//			ctx.commit('toggleEdit', item);
//		}


	},

	//вытаскивать нужные данные из state
	getters: {
		allGroups(state) {

			return state.groupSkills
		},
		isEdit(state) {
			return state.isEdit;


		},

		groupTitle(state) {
			return state.groupTitle
		}
	},

	//описывают методы, которые будут изменять данные нашего приложения
	mutations: {
		updateGruops(state, groups) {
			state.groupSkills = groups;

			for (let group of state.groupSkills) {
				if (group.category) {
					group.edit = false
				} else {
					group.edit = true
				}
			}
		},


		deleteGroup(state, item) {

			state.groupSkills.splice(index - 1, index - 1)

		},
		changeEdit(state, item) {

			state.groupSkills.push(item);


		},

//		toggleEdit(state, item) {
//			item = !item;
//			console.log(item)
//		}
	}

}

export default about;
