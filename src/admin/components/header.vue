<template lang="pug">
	header.header-admin
		.container.container--header
			.hero
				.hero__img-wrap
					img(alt="ava" src="../../images/content/about/ava.JPG").hero__img
				.hero__name Анна Сысоева
				.hero__text Панель администрирования
			.exit
				a(href="#").exit__link Выйти

</template>


<script>
	export default {
		data() {
			return {

			}
		}
	}

</script>


<style lang="pcss">
	.header-admin {
		background-color: #424267;

	}

	.container--header {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		justify-content: space-between;
		-ms-align-items: center;
		align-items: center;
		padding: 15px 0;
	}

	.hero {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		-ms-align-items: center;
		align-items: center;
	}


	.hero__img-wrap {
		border-radius: 50%;
		width: 37px;
		height: 37px;
		overflow: hidden;
		margin-right: 15px;
	}

	.hero__img {
		max-width: 100%;
	}

	.hero__name {
		font-size: 18px;
		color: #fff;
		margin-right: 50px;
	}
	
	.hero__text {
		color: #ccc;
	}
	
	.exit__link {
		-webkit-transition: .7s;
		-o-transition: .7s;
		transition: .7s;
		color: #CCC;
		
		&:hover {
			color: #FFF;
		}
	}

</style>
