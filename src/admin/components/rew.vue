<template lang="pug">
	.container
		h2.admin__title Блок «Отзывы»
		.add
			h3.add__title Новый отзыв
			rewAddComp
		ul.works__list
</template>


<script>
import rewAddComp from './rewAdd.vue';	
	export default {
		components: {
			rewAddComp
		},
		data() {
			return{
				
			}
		}
	}
 the end
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
	
	.test {
		width: 150px;
		height: 150px;
		background-color: green;
	}

</style>



