<template lang="pug">
form.add__block
	.add__left
		label.add__img
			
			input(type="file").add__input-file
			span.btn-add-cancel Добавить фото
	.add__right
		.add__row
			label.add__lbl
				span.add__title Имя автора
				input(type="text" placeholder="Ковальчук Дмитрий").add__input
			
			
			label.add__lbl
				span.add__title Титул автора
				input(type="text" placeholder="Основатель Лофтскул").add__input
			
		label.add__lbl
			span.add__title Отзыв
			textarea(type="text" placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей").add-work__input.add-work__input--ta
			
		
		.btns__row
			button(type="button").btn-add-cancel Отмена
			button(type="submit").btn-add-ok.admin-btn Сохранить
		
</template>


<script>
	export default {
		components: {

		},
		data() {
			return {

			}
		}
	}

</script>


<style lang="pcss" >
	
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
</style>
