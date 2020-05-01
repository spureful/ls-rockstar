<template lang="pug">
.container
	.about__row
		h1.admin__title Блок "Обо мне"
		
		button(type="button" @click.prevent="addNewCategory").about__add-group Добавить группу
		
	ul.about__liist
		li.about__item(v-for="group in allGroups")
			.about__title-row(v-if="group.edit")
			
				input(type="text" placeholder="Название новой группы" v-model="group.title" ).input__title-group.admin__input
				.btn__row
					button(type="button" @click.prevent="changeEdit(group.title)" ).btn-ok
					button(type="button" @click.prevent="deleteThisGroup(group.id)").btn-cancel
			.about__title-row(v-else)
					input(type="text" :value="group.category" disabled).input__title-group.admin__input
					button(type="button" @click.prevent="toggleEdit(group.edit)").btn-edit
			ul.about__content
				li.about__content-item()
					aboutItemComp
			.about__new-skill(v-if="!group.edit")
				input(type="text" placeholder="Новый навык" disabled).admin__input.about__skill
				label.abuot__percent
					input(placeholder="100" min="0" max="100" disabled).admin__input
				button(type="button" disabled).admin__add.about__add +
			.about__new-skill(v-else)
				input(type="text" placeholder="Новый навык" ).admin__input.about__skill
				label.abuot__percent
					input(placeholder="100" min="0" max="100"  ).admin__input
				button(type="button" ).admin__add.about__add +
	
		
	
</template>


<script>
	import aboutItemComp from './abuotItem.vue';
	import {mapGetters, mapActions} from "vuex";
	
	export default {
		components: {
			aboutItemComp
		},
		data() {
			return{
				title: "",
				newGroup: {	
					edit: true
			}
			}
		}, 
		
		created() {
			this.fetchGroup();
			console.log(this.allGroups)		
			
		},
		computed: {
			...mapGetters(['allGroups',  'groupTitle']),
		
			
		} ,
		
		methods: {
		
			deleteThisGroup(item) {
				this.deleteGroup(item);
				this.fetchGroup();
			},
			
			addNewCategory() {
				this.allGroups.unshift(this.newGroup)
			},
			
			toggleEdit(item) {
				item = !item
				console.log(this.allGroups)
			},
			...mapActions(['fetchGroup', 'addNewGroup', 'changeEdit', 'deleteGroup'])
			
		
			
		}, 
		mounted() {
			this.fetchGroup();
		}
	}

</script>


<style lang="pcss" scoped>
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
	.about__liist {
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
	
		.about__title-row {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		justify-content: space-between;
		margin-bottom: 30px;
	}

	.input__title-group {
		width: 70%;


	}

	.btn-ok {
		margin-right: 20px;
	}

	.about__new-skill {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		justify-content: flex-end;
		-ms-align-items: center;
		align-items: center;
	}

	.abuot__percent {
		width: 53px;
		position: relative;
		margin-right: 20px;

		input {
			width: 100%;
		}

		&:after {
			content: '%';
			color: #000;
			opacity: .3;
			position: absolute;

			right: 0;
		}
	}

	.about__skill {
		margin-right: 10px;
	}

	

</style>



