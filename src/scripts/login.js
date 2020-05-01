import Vue from "vue";


new Vue({
	el: "#login-form",
	template: "#login",
	components: {

	},
	data() {
		return {
			user: {
				name: "",
				password: ""
			}
		}
	},

	created() {

	},

	computed: {

	},
	methods: {

		enterLogin() {
		
			fetch('https://webdev-api.loftschool.com/login', {
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
					body: JSON.stringify(this.user)
				})
				.then(resp => resp.json())
				.then(resp => {
					localStorage.token = resp.token;
					window.location.href = `./admin`;
				})
		}
	}



});
