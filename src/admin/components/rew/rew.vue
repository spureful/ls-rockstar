<template lang="pug">
	.container
		h2.admin__title Блок «Отзывы»
		
		rewEditComp(v-if="getEditModeState" :rewId="rewId")
		rewAddComp(v-if="addMode" @toggleAddMode='toggleAddMode')
		ul.works__list
			li.works__item.works__item--add(v-if="!addMode")
				rewItemAddComp(@toggleAddMode='toggleAddMode')
			
			li.works__item.works__item--rew(v-for="rew in rews" )
				rewItemComp(:addMode="addMode" :rew="rew" @rewIdGet="rewIdGet")
			
</template>


<script>
import rewAddComp from './rewAdd.vue';	
import rewEditComp from './rewEdit.vue';	
import rewItemComp from './rewItem.vue';	
import rewItemAddComp from './rewItemAdd.vue';
	
import { mapActions, mapGetters, mapState } from 'vuex';
	
	export default {
		components: {
			rewAddComp,
			rewEditComp,
			rewItemComp,
			rewItemAddComp
		},
		data() {
			
			return{

				addMode: false,
				rewId: 1				
			}
		}, 
		methods: {
			...mapActions('rew', ['getRew']),
			toggleAddMode() {
				this.addMode = !this.addMode
			},
			
			toggleEditMode() {
				this.editMode = !this.editMode
			},
		rewIdGet(id) {
			this.rewId = id
		}
		}, 
		computed: {
			...mapGetters('rew', ['getEditModeState']),
			...mapState('rew', {
			rews: state => state.rews
			}),
		},
		async created() {
			await this.getRew();
		}
	}

</script>


<style lang="pcss" scoped>
	.add {
		margin-top: 30px;
		background-color: #fff;
		margin-bottom: 50px;
		background-color: #f8fafe;
		padding: 20px;
		box-sizing: border-box;
		background-color: #fff;
		box-shadow:  2px 1px 3px 0px rgba(80, 50, 50, 0.75);
	}
	
	
	.test {
		width: 150px;
		height: 150px;
		background-color: green;
	}

	
	.rews {
		background-color: #fff;
		padding: 25px;
		box-shadow: 0 0 1px 1px 2px #000;
		margin-bottom: 30px;
	}
	
	.btns__row {
		justify-content: flex-end;
	}
	
	.btn-add-cancel {
		margin-right: 30px;
	}
	
	.works__list {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
	
	.works__item {
/*		width: 32%;*/
		margin-right: 2%;
		margin-bottom: 2%;
			width: 32%;
		&:nth-child(3n) {
			margin-right: 0;
		}
	}
	
	.works__item--add {
	
	}
</style>



