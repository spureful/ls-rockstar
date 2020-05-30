import $axios from '../requests';

export const userId = (async function() {
	const response = await $axios.get('/user')
	 const userID = response.data.user.id;
	return userID;
})()