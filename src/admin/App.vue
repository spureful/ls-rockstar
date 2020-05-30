<template lang="pug">
	.wrap-admin
		headerComp
		main.main
			.container
				tabsComp
			.main__block
				router-view

</template>


<script>
	import headerComp from './components/common/header.vue'
	import tabsComp from './components/common/tabs.vue'
	export default {
		//		name: "app-root",
		components: {
			headerComp,
			tabsComp
		},
		data() {
			return {

			}
		}
	}

</script>


<style lang="pcss" src="./default.pcss">


</style>
