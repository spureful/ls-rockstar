<template lang="pug">
	.container
		h2.admin__title Блок «Работы»
		.add
			h3.add__title Редактирование работы
			worksAddComp
		ul.works__list
			li.works__item.works__item--add
				addItemComp
			li.works__item
				worksItemComp
			li.works__item
				worksItemComp
			li.works__item
				worksItemComp
			li.works__item
				worksItemComp
			li.works__item
				worksItemComp
			li.works__item
				worksItemComp
			
			
</template>


<script>
	
	import worksAddComp from './worksAdd.vue';
	import addItemComp from './add.vue';
	import worksItemComp from './worksItem.vue';
	export default {
		components: {
			worksAddComp,addItemComp, worksItemComp
		},
		data() {
			return{
				
			}
		}
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



