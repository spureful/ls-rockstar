<template lang="pug">
.work-item
	.work-item__img-wrap
		img(src="../../images/content/works/work-1.jpg").work-item__img
		ul.tags
			li.tag__item html
			li.tag__item css
	.work-item__container
		h3.work-item__title Сайт школы образования
		p.work-item__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
		a(href="#").work-item__link http://loftschool.ru
	
		.work-item__row(v-if="!buttonsEdit")
			button(type="btn").admin-edit-w.admin-btn-w Править
			button(type="btn").admin-delete-w.admin-btn-w Удалить
		.work-item__row(v-else)
			button(type="btn").admin-edit-w.admin-btn-w Править
			button(type="btn").admin-delete-w.admin-btn-w Удалить
	
		
</template>


<script>
	
	export default {
		components: {
			
		},
		data() {
			return {
				dataWorks: {},
				buttonsEdit: false
			}
		},
		created() {
		
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
	}
	
	.tags {display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	flex-wrap: wrap}
	
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
