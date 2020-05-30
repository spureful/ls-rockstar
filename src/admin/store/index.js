import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import login from "./login.js"
import skills from "./skills.js"
import works from "./works.js"
import about from "./about.js"
import rew from "./rew.js"

export const store = new Vuex.Store({
	modules: {
		login,
		works, 
		about,
		skills, 
		rew
	}
});