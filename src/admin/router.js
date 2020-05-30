import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import worksComp from "./components/works/works.vue"
import aboutComp from "./components/about/about.vue"
import rewComp from "./components/rew/rew.vue"
import loginComp from "./components/login/login.vue"

const routes = [
	{
		path: "/works",
		component: worksComp
	},
		{
		path: "/",
//		path: "/about",
		component: aboutComp
	},
		{
		path: "/rew",
		component: rewComp
	},
			{
		path: "/login",
//		path: "/admin",
		component: loginComp
	}
];



export default new  VueRouter({routes});

//mode: 'history'