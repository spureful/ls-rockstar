<template lang="pug">
.work-item
	.work-item__img-wrap
		img(:src="baseURL + dataWork.photo").work-item__img
		ul.tags
			li.tag__item(v-for="tag in tags") {{tag}}
			
	.work-item__container
		h3.work-item__title {{dataWork.title}}
		p.work-item__text {{dataWork.description}}
		a(:href="dataWork.link").work-item__link {{dataWork.link}}
	
		.work-item__row
			button(type="btn" @click.prevent='toggleEdit' :disabled="getEditModeState || addMode" ).admin-edit-w.admin-btn-w Править
			button(type="btn" @click.prevent="removeThisWork").admin-delete-w.admin-btn-w Удалить
		
	
		
</template>


<script>
	import { mapActions, mapGetters, mapState } from 'vuex';
	export default {
		components: {
			
		},
		props: {
			addMode: Boolean,
			work: Object
		},
		data() {
			return {
				baseURL: "https://webdev-api.loftschool.com/",
				tags: [],
				dataWork: {}
				
			}
		},
		 created() {
			 this.tags =  this.work.techs.split(', ');
			 this.dataWork = this.work;
	}, 		
		 computed: {
			...mapGetters('works', ['getEditModeState']),
			 
			...mapState('works', {works: state => state.works}),
				
//		 fetchWorks() {
//			return	this.dataWork = this.work
//				
//				return this.tags = this.dataWork.techs.split(', ');
//				
//					
//			}
		
			
			
		
	} , 
		methods: {
		...mapActions('works', ['toggleEditMode', 'removeWork']),
			toggleEdit() {
			this.toggleEditMode(this.getEditModeState);
			this.$emit(`getCurrentWork`, this.work)
			
		},
		
		async removeThisWork() {
			await this.removeWork(this.work.id)
		},
			
		
	}
	}

</script>


<style lang="pcss">
	
	
	.work-item__img-wrap {
		position: relative;
		height: 190px;
		width: 100%;
		padding: 10px;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		-webkit-flex-direction: column;
		-moz-flex-direction: column;
		-ms-flex-direction: column;
		-o-flex-direction: column;
		flex-direction: column;
		justify-content: flex-end;
		-ms-align-items: flex-end;
		align-items: flex-end;
		background-color: #ccc;
	}
	
	.work-item__img {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
	}
	
	.tags {display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	flex-wrap: wrap;
		position: relative;
		z-index: 1;
	
	}
	
	.tag__item {
		color: $text-color;
		background-color: #fff;
		border-radius: 20px;
		padding: 9px 14px;
		margin-right: 15px;
	
		&:last-child {
			margin-right: 0;
		}
	}
	
	
	.work-item__container {
		padding: 20px;
		color: #414c63;
	}
	.work-item__title {
		padding-top: 50px;
		margin-bottom: 30px;
		
		font-weight: 700;
		font-size: 18px;
	}
	
	.work-item__text {
		line-height: 1.6;
		margin-bottom: 30px;
	}
	

	.work-item__link {
		color: #383bcf;
		text-decoration: none;
		margin-bottom: 50px;
		display: block;
		
		
		%:hover {
			text-decoration: underline;
		}
		
	}
	
	.work-item__row {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		-ms-align-items: center;
		align-items: center;
		justify-content: space-between;
	}
</style>
