<template lang="pug">
.item
	input(type="text" v-model="item.title").item__title.admin__input
	input( v-model="item.number").item__number.admin__input
	button(type="button").btn-edit
	button(type="button").btn-delete
	

	
</template>


<script>
	export default {
		components: {

		},
		data() {
			return {
				item: {}
			}
		}
	}

</script>


<style lang="pcss" scoped>

	.item {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		justify-content: space-between;
		-ms-align-items: center;
		align-items: center;
	}
	.item__title {
		margin-right: 15px;
		width: 70%;
	}
</style>
