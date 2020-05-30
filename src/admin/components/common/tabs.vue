<template lang="pug">

ul.tabs
	li.tabs__Item
		router-link(
		tag = "a",
		class="tabs__link"
		to="/"
		) Обо мне

	li.tabs__Item
		router-link(
		tag = "a",
		class="tabs__link"
		to="/works"
		) Работы

	li.tabs__Item

		router-link(
		tag = "a",
		class="tabs__link"
		to="/rew"
		) Отзывы
		
			
</template>



<script>
	

	export default {
		components: {
		
			
		},
		data() {
			return{
				
			}
		}
	}

</script>


<style lang="pcss">
	.main {
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
		height: 100%;
	}
	.tabs {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		list-style: none ;
		padding: 20px 0;
	}
	
	.tabs__link {
		padding: 15px;
		text-decoration: none;
		color: #414c63;
	}

	.router-link-exact-active  {
		color: #383bcf;
		border-bottom: 3px solid #383bcf;
		
	}
	
	.main__block {
		background-color: #f8fafe;
		flex: 1;
	}
</style>



