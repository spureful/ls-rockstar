<template lang="pug">
.item
	input(type="text" v-model="item.title" placeholder="title" :disabled="!btnsEdit" ).item__title.admin__input
	input( v-model="item.number" placeholder="10" :disabled="!btnsEdit" ).item__number.admin__input
	.btns__row(v-if="btnsEdit")
		button(type="button").btn-ok
		button(type="button" @click="btnsEdit = false").btn-cancel
	.btns__row(v-else)
		button(type="button" @click="btnsEdit = true").btn-edit
		button(type="button").btn-delete
	

	
</template>


<script>
	export default {
		components: {

		},
		data() {
			return {
				item: {},
				btnsEdit: false
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
		width: 80%;
	}
	
	.item__number {
		width: 20%;
		margin-right: 2%;
		text-align: center;
		&:disabled {
			border-bottom: none;
		}
	}
	
	.btn-edit, .btn-ok {
		margin-right: 20px;
	}
</style>
