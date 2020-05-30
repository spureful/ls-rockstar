import login from './login.vue';
import "../../default.pcss"

export default {
	title: "Login"
}

export const defaultLogin = () => ({
	components: {login},
	template: `
		<login />
	`
})