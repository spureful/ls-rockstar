<template lang="pug">
.container
	.about__row
		h1.admin__title Блок "Обо мне"
		
		button(type="button" @click.prevent="addNewCategory").about__add-group Добавить группу
		
	ul.about__list
		
		li.about__item(v-for="skill in allGroups" :key="skill.id")
			aboutItemComp(:skill="skill")
//
//		li(v-for="group in allGroups :key="group.id")
//			aboutItemComp


</template>


<script>
	import aboutItemComp from './aboutItem.vue';
	import aboutItemRowComp from './abuotItemRow.vue';
	import {mapGetters, mapActions} from "vuex";
	
	export default {
		components: {
			aboutItemComp,
			aboutItemRowComp
		},
		data() {
			return{
				title: "",
				groupEditBtn: true,
				allGroups: [
					{id: 1, title: 'title1', perc: 20},
					{id: 2, title: 'title2', perc: 50},
					{id: 3, title: 'title3', perc: 60},
					{id: 4, title: 'title4', perc: 70},
					{id: 5, title: 'title5', perc: 80}
					
				]
			
			}
		}, 
		
		created() {
//			this.fetchGroup();
//			console.log(this.allGroups)		
			
		},
		computed: {
//			...mapGetters(['allGroups',  'groupTitle']),
		
			
		} ,
		
		methods: {
//		
//			deleteThisGroup(item) {
//				this.deleteGroup(item);
//				this.fetchGroup();
//			},
//			
//			addNewCategory() {
//				this.allGroups.unshift(this.newGroup)
//			},
//			
//			toggleEdit(item) {
//				item = !item
//				console.log(this.allGroups)
//			},
//			...mapActions(['fetchGroup', 'addNewGroup', 'changeEdit', 'deleteGroup'])
			
		
			
		}, 
		mounted() {
//			this.fetchGroup();
		}
	}

</script>


<style lang="pcss" scoped>
	
	.test {
		width: 150px;
		height: 150px;
		background-color: red;
	}
	.about__row {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		-ms-align-items: center;
		align-items: center;
		margin-bottom: 50px;
		
		.admin__title {
			margin-right: 50px;
		}
	}
	
	.about__add-group {
		background-color: transparent;
		color: #383bcf;
		border: none;
		font-size: 18px;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		
		
		&:before {
			content: '+';
			color: #fff;
			width: 21px;
			height: 21px;
			border-radius: 50%;
			background: linear-gradient(to right, #1d51dd, #3f35cb);
			display: -webkit-flex;
			display: -moz-flex;
			display: -ms-flex;
			display: -o-flex;
			display: flex;
			justify-content: center;
			-ms-align-items: center;
			align-items: center;
			margin-right: 10px;
		}
		
		
	}
	.about__list {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		flex-wrap: wrap;
		padding: 0;
	}
	
	.about__item {
		background-color: #fff;
		padding: 30px;
		box-shadow: 0 0 1px 1px #ccc;
		width: 42%;
		margin-bottom: 50px;
		
		&:nth-child(2n+1){
			margin-right: 4%;
		}
	}
	
		
	

</style>



