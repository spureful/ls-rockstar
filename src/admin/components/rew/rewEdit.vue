<template lang="pug">
.rews
	h3.add__title-main  Редактировать отзыв
	form.add__block(@submit.prevent="editRewSend")

		.add__left
			label.add__img

				input(type="file" ref="imgFile" @input="handleFile").add__input-file
				span.btn-add-cancel(ref="inputFileText") Изменить фото
		.add__right
			.add__row
				label.add__lbl
					span.add__title Имя автора
					input(type="text" placeholder="Ковальчук Дмитрий" v-model="rew.author" ref="inputName").add__input


				label.add__lbl
					span.add__title Титул автора
					input(type="text" placeholder="Основатель Лофтскул" v-model="rew.occ").add__input

			label.add__lbl
				span.add__title Отзыв
				textarea(type="text" placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей" v-model="rew.text").add-work__input.add-work__input--ta


			.btns__row
				button(type="button" @click="CancelEditMode").btn-add-cancel Отмена
				button(type="submit" ).btn-add-ok.admin-btn Сохранить
		
</template>


<script>
import { mapGetters, mapActions, mapState } from 'vuex';
	export default {
		components: {

		},
		props: {
			rewId: Number
		},
		data() {
			return {
				rew: {
					
				}
			}
		},
		computed: {
			...mapGetters('rew', ['getEditModeState']),
			...mapState('rew', {
			rews: state => state.rews
			}),
//			findItem() {
//				this.rew = this.rews.find(item => item.id === this.rewId);
//				this.rew.photo = {}
//			
//		}
		}, 
		methods: {
			...mapActions('rew', ['toggleEditMode']),
			...mapActions('rew', [ 'editRew']),
			CancelEditMode() {
				this.toggleEditMode(this.getEditModeState);
				const img = this.$refs.imgFile;
				

			},
			validForm() {
				for (let key in this.rew) {
					if (!this.rew[key]) {
						return false
					}
				}
				
				return true
			},
			handleFile(e) {
			  const file = e.target.files[0];
			  this.rew.photo = file;
			  const img = this.$refs.imgFile;
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
			async editRewSend() {	
			  
				
				const formData = new FormData();

				formData.set("author", this.rew.author);
				formData.set("occ", this.rew.occ);
				formData.set("text", this.rew.text);
				if(this.rew.photo) {
					formData.set("photo", this.rew.photo);
				}
				
				const sendData = {
					id: this.rew.id,
					data: formData
				}
				
				if (this.validForm()) {
						try {
					await this.editRew(sendData);
					this.$emit('toggleAddMode');
					this.toggleEditMode(this.getEditModeState);
						} catch (e) {
						alert(e.message)
						}
					} else { alert('Заполните все поля')}
				}
			
		}, 
			created() {
				this.rew = this.rews.find(item => item.id === this.rewId);
//				this.rew.photo = {}
			}
		
	}

</script>


<style lang="pcss" >
	.add__title-main  {
		padding-bottom: 30px;
		border-bottom: 1px solid  #ccc;
		
	}
	.add__img {
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
		justify-content: center;
		-ms-align-items: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	
	.add__input-file {
		margin-bottom: 20px;
		font-size: 0;
		background-color: transparent;
		background: svg-load('user.svg', fill='#fff', width=50%, height=50%);
		background-position: center center;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background-color: #dee4ed;
		
		
	}
	.add__block {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		justify-content: space-between;
		color: $text-color;
	}
	
	.add__left {
		width: 30%;
		margin-right: 3%;
	}
	
	.add__row  {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
		
		.add__lbl {
			width: 49%;
			margin-right: 2%;
			&:last-child {margin-right: 0;}
		}
	}
	
	.add__lbl {
		display: block;
		margin-bottom: 30px;
		width: 100%;
	}
	.add__title {
		margin-bottom: 20px;
		display: block;
	}
	.add__right {
		width: 67%;
	}
	
	.add__input {
		background: transparent;
		border: none;
		border-bottom: 1px solid  $text-color;
		padding: 10px 0;
		width: 100%
	}
	
	.add-work__input--ta  {
		resize: none;
		min-height: 115px;
		border: 1px solid rgba($text-color, .6);
		width: 100%;
		
	}
	
	.btns__row {
		justify-content: flex-end;
	}
	
	.btn-add-cancel {
		margin-right: 30px;
	}
</style>
