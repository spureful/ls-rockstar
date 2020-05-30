<template lang="pug">
.login-root
	h1.login__title Авторизация
	button(type="btn" @click="activeForm = true").login__btn-wrap.auth__btn Открыть форму авторизации
	.login__wrapper(v-if='activeForm')
		
		form.login__form.auth(@submit.prevent="toLogin")
			button(type='button' @click.prevent="activeForm = false").login__close
			h2.auth__title
			label.auth__lbl
				span.auth__input-title Логин
				input(type="text"   v-model="user.name" required).auth__input.auth__input--login
			label.auth__lbl
				span.auth__input-title Пароль
				input(type="password" v-model="user.password" ).auth__input.auth__input--password
			button(type="submit").auth__btn.auth__submit Авторизоваться

</template>


<script type="module">
import { mapActions, mapGetters } from "vuex";
import $axios from "../../requests"

	export default {
		components: {

		},
		data() {
			return {
				activeForm: true, 
				user: {
					name: '',
					password: ''
				}
			
			}
		},
		methods: {
		...mapActions( ["loginUser"]),
			async toLogin() {
				if (this.validForm()) {
					try {
						const {data: {token}} = await this.loginUser(this.user);
					
						localStorage.setItem("token", token);
					  	this.$router.replace('/about');
					} 
					catch (error) {
						console.log(error.message)
					}
				}		
			},
			validForm() {
				if (!this.user.name || !this.user.password) {
				
					return false
				} else {
					return true
				}
				
				
			}
		}
	}

</script>



<style lang="pcss" scoped>
	.login-root {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 50px;
		background-image: url(../../../images/content/promo/promo-bg.jpg);
		-webkit-background-size: cover;
		background-size: cover;
	}
	
	.login__title {
		color: #fff;
		margin-bottom: 20px;
	}
	
	.login__wrapper {
		position: absolute;
		top: ;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0, .6);
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		justify-content: center;
		-ms-align-items: center;
		align-items: center;
	}
	
	.login__form  {
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
		background-color: #fff;
		padding: 30px;
	}
	
	.login__close {
		-ms-align-self: flex-end;
		align-self: flex-end;
		background: svg-load('remove.svg', fill='#000', width=100%, height=100%); 
		width: 15px;
		height: 15px;
		border: none;
	}
	
	.auth__lbl {
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
		-ms-align-items: flex-start;
		align-items: flex-start;
		margin: 15px;
	}
	
	.auth__input-title {
		color: $text-color;
		margin-bottom: 10px;
		padding-left: 20px;
	}
	
	
	.auth__input {
		border: none;
		border-bottom: 1px solid  $text-color;
		padding-bottom: 10px;
		padding-left: 30px;
	}
	
	.auth__input--login {
		background: svg-load('user.svg', fill='$text-color', width=20, height=20) no-repeat; 
	}
	
	.auth__input--password {
		background: svg-load('key.svg', fill='$text-color', width=20, height=20) no-repeat; 
	}
	.auth__btn {
		background: linear-gradient(to right, #1d51dd, #3f35cb);
		padding: 10px;
		border: none;
		border-radius: 20px 5px;
		color: #fff;
		-webkit-transition: .7s;
		-o-transition: .7s;
		transition: .7s;
		text-transform: uppercase;
		font-weight: 700;
		
		&:hover {
			background: linear-gradient(to right,  #3f35cb, #1d51dd);
		}
	}
	


</style>
