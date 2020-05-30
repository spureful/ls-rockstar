<template lang="pug">
	.container
		h2.admin__title Блок «Работы»
		
			
			worksAddComp(v-if="addMode" @toggleAdddMode='toggleAdddMode')
			worksEditComp(v-if="getEditModeState" :workToEdit="workToEdit")
		ul.works__list
			li.works__item.works__item--add(v-if="!addMode")
				addItemComp(@toggleAdddMode='toggleAdddMode' )
			li.works__item(v-for="work in works")
				worksItemComp(:addMode="addMode" :work="work" @getCurrentWork="getCurrentWork")
					
			
</template>


<script>
	import { mapActions, mapGetters, mapState } from 'vuex';
	import worksAddComp from './worksAdd.vue';
	import worksEditComp from './worksEdit.vue';
	import addItemComp from './worksItemAdd.vue';
	import worksItemComp from './worksItem.vue';
	
	export default {
		components: {
			worksAddComp,addItemComp, worksItemComp, worksEditComp
		},
		data() {
			return{
				addMode: false,
				workToEdit: {}
			}
		},
		methods: {
			...mapActions('works', ['getWork']),
			toggleAdddMode() {
			this.addMode = !this.addMode
		},
		
		getCurrentWork(work) {
			this.workToEdit = this.works.find(item => item.id === work.id)
		},
		
	
		},
		
				
		
		computed: {
			...mapGetters('works', ['getEditModeState']),
			...mapState('works', {works: state => state.works})
			
		}, 
		async created() {
			await this.getWork();
		},
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
	

	
	.add__title  {
		padding-bottom: 30px;
		border-bottom: 1px solid  #ccc;
		
	}
	
	.works__list {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		flex-wrap: wrap;
		
/*		background-color: #f8fafe;*/
		
		
	}
	
	.works__item {
		width: 32%;
		margin-right: 2%;
		background-color: #fff;
		box-shadow:  2px 1px 3px 0px rgba(80, 50, 50, 0.75);
		margin-bottom: 2%;
		
		&:nth-child(3n) {
			margin-right: 0;
		}
	}
</style>



