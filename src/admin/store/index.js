import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import works from "./works.js"
import about from "./about.js"

export const store = new Vuex.Store({
	modules: {
		works, 
		about
	}
});