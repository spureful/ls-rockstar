import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import worksComp from "./components/works.vue"
import aboutComp from "./components/about.vue"
import rewComp from "./components/rew.vue"

const routes = [
	{
		path: "/admin/works",
		component: worksComp
	},
		{
		path: "/admin",
		component: aboutComp
	},
		{
		path: "/admin/rew",
		component: rewComp
	}
];

export default new  VueRouter({routes, mode: 'history'});