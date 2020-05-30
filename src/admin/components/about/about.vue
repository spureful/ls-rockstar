<template lang="pug">
.container
	.about__row
		h1.admin__title Блок "Обо мне"
		
		button(type="button" @click.prevent="toggleAddForm" v-if="!isShowNewBlock").about__add-group Добавить группу
		
	ul.about__list
		li.about__item(v-if="isShowNewBlock")
			aboutAddComp(@toggleAddForm="toggleAddForm")
		li.about__item(v-for="category in categories" :key="category.id")
			aboutItemComp(
				:category="category"
				:skills="filterCategorySkills(category.id)"
				)


</template>


<script>
	import aboutItemComp from './aboutItem.vue';
	import aboutAddComp from './aboutAdd.vue';

	import {mapActions, mapState} from 'vuex';
	
	export default {
		components: {
			aboutItemComp,
			aboutAddComp

		},
		data() {
			return{
			isShowNewBlock:false,
						
			}
		}, 
		
		computed: {
			 ...mapState('about', {
			categories: state => state.categories
			}),
    		...mapState('skills', {
      		skills: state => state.skills
			})
		
			
		} ,
		
		methods: {
			...mapActions('about', ['getCategories']),
			...mapActions('skills', ['getSkills']),			
			
			filterCategorySkills(catid) {
		  		return this.skills.filter(skill => skill.category === catid);
		},
		toggleAddForm() {
				this.isShowNewBlock = !this.isShowNewBlock
			}		
			
		}, 
		async created() {
			
			try {
			await this.getCategories();
    		} catch (e) {
			}
			
			try {
      			await this.getSkills();
    		} catch (e) {
      
				}
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



