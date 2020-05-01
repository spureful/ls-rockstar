<template lang="pug">
	.wrap-admin
		headerComp
		tabsComp

</template>


<script>
	import headerComp from './components/header'
	import tabsComp from './components/tabs'
	export default {
		//		name: "app-root",
		components: {
			headerComp,
			tabsComp
		},
		data() {
			return {

			}
		}
	}

</script>


<style lang="pcss">
	html,
	body {
		margin: 0;
		height: 100%;
		background-color: #fff;
	}

	a {
		cursor: pointer
	}
	
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.container {

		width: 95%;
		margin: 0 auto;
	}

	.admin-wrapper {
		height: 100%;
	}

	.maincontent {
		height: 100%;
	}

	.wrap-admin {
		height: 100%;
	}

	.admin__title {
		font-size: 21px;
		font-weight: 700;
		color: #414c63;
	}


	.admin__add {
		color: #fff;
		width: 40px;
		height: 40px;
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
		font-size: 20px;
		border: none;
	}

	.admin__input {
		border: none;
		border-bottom: 1px solid #000;
		font-size: 18px;
		color: #414c63;
		padding-bottom: 10px;
	}


	.btn-ok,
	.btn-cancel,
	.btn-edit,
	.btn-delete {
		width: 16px;
		height: 16px;
		background-position: center center;
		background-repeat: no-repeat;
		background-color: transparent;
		border: none;
		-webkit-transition: .7s;
		-o-transition: .7s;
		transition: .7s;
		
		&:hover {
			opacity: 1;
		}
	}

	.btn-ok {
		background-image: url(../images/content/admin/ok.png);
	}

	.btn-cancel {
		background-image: url(../images/content/admin/cancel.png);
	}

	.btn-edit {
		background-image: url(../images/content/admin/edit.png);
		opacity: .6;
	}

	.btn-delete {
		background-image: url(../images/content/admin/delete.png);
		opacity: .6;
	}

</style>
