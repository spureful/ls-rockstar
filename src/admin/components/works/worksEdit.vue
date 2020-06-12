<template lang="pug">
.add
	h3.add__title Редактирование работы
	form.add-work__block(@submit.prevent="editCurrentWork")

		.add-work__left
			label.add-work__img(ref='inputFile')
				span.add-work__file-text(ref="inputFileText") Перетащите или загрузите для загрузки изображения
				input(type="file" @input="handleFile").add-work__input-file
				span.admin-btn Загрузить
		.add-work__right
			label.add-work__row
				span.add-work__title Название
				input(type="text" placeholder="Дизайн сайта для авто салона Porsche" v-model="workCurrent.title").add-work__input


			label.add-work__row
				span.add-work__title Ссылка
				input(type="text" placeholder="https://www.porsche-pulkovo.ru" v-model="workCurrent.link").add-work__input

			label.add-work__row
				span.add-work__title Описание
				textarea(type="text" placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей" v-model="workCurrent.description").add-work__input.add-work__input--ta

			label.add-work__row
				span.add-work__title Добавление тэга
				input(type="text" placeholder="Добавление тэга" v-model="workCurrent.techs" @input="addTag").add-work__input

			ul.tags__row
				li.tags__item(v-for='tag in tags')
					worksTagComp(:tag="tag" @deleteTag="deleteTag")
			.btns__row
				button(type="button" @click.prevent="toggleEdit").btn-add-cancel Отмена
				button(type="submit").btn-add-ok.admin-btn Сохранить
		
</template>


<script>
	import { mapActions, mapGetters, mapState } from 'vuex';
	import worksTagComp from './worksTag.vue'
	export default {
		components: {
			worksTagComp
		},
		data() {
			return {
				workCurrent: {},
				tags: []
			}
		},
		
		props: {
			workToEdit: Object
		},
	
		methods: {
		...mapActions('works', ['toggleEditMode', 'editWork']),
			toggleEdit() {
			this.toggleEditMode(this.getEditModeState);
			
		},
		addTag() {
			this.tags = this.workCurrent.techs.split(', ')
		},
		deleteTag(tag) {
				let index = parseInt(this.tags.indexOf(tag));
				
				this.tags.splice(index, 1);
				this.workCurrent.techs = this.tags.join(', ')
			},
		validForm() {
				for (let key in this.work) {
					if (!this.work[key])
						return false
				}		
							
				return true
			},
			
			handleFile(e) {
				const file = e.target.files[0];
			  	this.workCurrent.photo = file;
			  	const img = this.$refs.inputFile;
				const text = this.$refs.inputFileText;
				text.textContent = file.name;
				
			  		const reader = new FileReader();
					return new Promise((resolve, reject) => {
					try {
						reader.readAsDataURL(file);
      					reader.onloadend = () => {
        					resolve(reader.result);
      				};
    				} catch (error) {
					      throw new Error("Ошибка при чтении файла");
    					}
  			})
				.then(result => img.style.background = `url(${result})`)	
				},
			async editCurrentWork() {
				
				
				if(this.validForm() ) {
					 const formData = new FormData();
					formData.set('title', this.workCurrent.title);
					formData.set('techs', this.workCurrent.techs);

					formData.set('link', this.workCurrent.link);
					formData.set('description', this.workCurrent.description);
					
					if (this.workCurrent.photo.name) {
						formData.set('photo', this.workCurrent.photo);
					}
					
					const sendData = {
						id: this.workCurrent.id,
						data: formData
					}
					
					await this.editWork(sendData);
					this.toggleEditMode(this.getEditModeState);

				} else {alert('empty form')}
			},
	},
		
		created() {
		this.workCurrent = this.workToEdit;
		this.tags = this.workCurrent.techs.split(', ');
		
	}, 
		computed: {
		...mapGetters('works', ['getEditModeState'])
	} , 
		
	}

</script>


<style lang="pcss" scoped>
	
	.add-work__block {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		justify-content: space-between;
		margin-top: 50px;
	
		
		
	}
	.add-work__left, .add-work__right {
		width: 49%;
		
	}
	
	.add-work__left {
		margin-right: 2%;
	}
	.add-work__img {
		padding: 60px 20px;
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
		-ms-align-items: center;
		align-items: center;
		justify-content: center;
		background-color: #dee4ed;
		border: 1px dashed  #414c63;
	}
	.add-work__input-file {
		font-size: 0;
		background-color: transparent;
		border: none;
		width: 0;
		
	}
	
	.add-work__file-text  {
		line-height: 1.8;
		color: #414c63;
		width: 40%;
		text-align: center;
		margin-bottom: 50px;
		
	}
	
	.add-work__right {
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
	}

	
	.add-work__row, .tags__row, .btns__row {
		margin-bottom: 30px;
	}
	
	.add-work__row {
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
	}
	
	.add-work__title  {
			color: #414c63;
		margin-bottom: 15px;
	}
	
	.add-work__input {
		border: none;
		background-color: transparent;
		border-bottom: 2px solid #414c63;
		color: #414c63;
		padding-bottom: 15px;
		width: 100%;
	
	}
	
	.add-work__input--ta {
		min-height: 150px;
		border: 1px solid #ccc;
		padding: 15px;
		resize: none;
		width: 100%;
		box-sizing: border-box;
	}
	
	.tags__row {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
	}
	
	.tags__item {
		margin-right: 15px;
		
		&:last-child {
			margin-right: 0;
		}
		
		background-color: #f4f4f4;
		
		
		text-transform: uppercase;
		color: #283340;
		padding: 10px;
		border-radius: 20px;
		
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		-ms-align-items: center;
		align-items: center;
		justify-content: space-between;
		
		
		
	}
	
	.tags__close {
		width: 13px;
		height: 13px;
		position: relative;
		border: none;
		background-color: transparent;
		margin-left: 10px;
		
			&:before, &:after {
			content: '';
			width: 13px;
			height: 2px;
			background-color: #283342;
			position: absolute;
			top: 50%;
			right: 0;
			
		}
		
		&:before {
			transform: translateY(-50%) rotate(-45deg);
		}
		
		
		&:after {
			transform: translateY(-50%) rotate(45deg);
		
		}
		}
	

</style>
