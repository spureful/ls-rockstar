<template lang="pug">
.rew
	.rew__header
		.rew__img-wrap
			img(:src="baseURL+rew.photo" alt ="").rew__img
		.rew__info
			h4.rew__name {{rew.author}}
			h4.rew__position {{rew.occ}}
	.rew__main
		p.rew__text {{rew.text}}
	.rew__btns
		button(type="button" @click.prevent="toggleEditItem" :disabled="getEditModeState || addMode" ).rew__btn-edit Править
		button(type="button" :disabled="getEditModeState" @click.prevent="deleteItem").rew__btn-delete Удалить

</template>


<script>
import {pictures} from '../../helpers/pictures.js'
	
import { mapGetters, mapActions } from 'vuex';
	
	export default {
		components: {

		},
		
		props: {
			addMode: Boolean,
			rew: Object,
			rewId: Number
		},
		data() {
			return {
				baseURL: "https://webdev-api.loftschool.com/",
				imgUrl: ''
				
			}
		},
		methods: {
			...mapActions('rew', ['toggleEditMode', 'removeRew']),
			toggleEditItem() {
//				
				this.toggleEditMode(this.getEditModeState);
//				this.rewId = this.rew.id
				this.$emit('rewIdGet', this.rew.id);

			},
		async deleteItem() {
			try {
				await this.removeRew(this.rew.id);
			} catch (e) {
				alert('error')
			}
		}
		},
		
		computed: {
			...mapGetters('rew', ['getEditModeState']),
//			photoWatch() {
//				this.imgUrl = this.rew.photo
//			}
		},
		async created() {
//				this.imgUrl = this.rew.photo
			}
	}

</script>


<style lang="pcss" scoped>

	.rew {
		padding: 20px;
		background-color: #fff;
		box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.55);
		height: 100%;
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
		
	
	}
		
	.rew__header {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		padding-bottom: 20px;
		border-bottom: 2px solid  #ccc;
	}
	.rew__img-wrap {
		width: 55px;
		height: 55px;
		background-color: #ccc;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 15px;
		
		
	}

	.rew__img {
		width: 100%;
	}
	.rew__name {
		font-size: 18px;
		color: #414c63;
		font-weight: 700;
		margin-bottom: 7px;
	}
	
	.rew__position {
		color: #d2d5da;
	}
	.rew__main {
		padding: 15px 0;
		color: $text-color;
		font-weight: 700;
		line-height: 1.6;
	}
	
	.rew__btns {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		justify-content: space-between;
		-ms-align-items: center;
		align-items: center;
		padding: 15px;	
		
	}
	
	.rew__btn-delete, .rew__btn-edit {
		color: #d2d5da;
			font-weight: 700;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		-ms-align-items: center;
		align-items: center;
		
		
		&:after {
			content: '';
			width: 20px;
			height: 20px;
			display: inline-block;
/*			background-color: #ccc;*/
			margin-left: 10px;
			align-self: center;
			-webkit-transition: .7s;
			-o-transition: .7s;
			transition: .7s;
		}
		
		&:hover {
			color: $text-color;
		}
	}
	
	.rew__btn-edit{
		
		&:after {
			background: svg-load('tick.svg', fill='#ccc', width=100%, height=100%) center center no-repeat;
		}
		
		&:hover {
			&:after {
				background: svg-load('tick.svg', fill='$text-color', width=100%, height=100%) center center no-repeat;
			}
		}
		
	}
	.rew__btn-delete{
		&:after {
			background: svg-load('trash.svg', fill='#ccc', width=100%, height=100%) center center no-repeat;
		}
		
			&:hover {
				&:after {
				background: svg-load('trash.svg', fill='$text-color', width=100%, height=100%) center center no-repeat;
			}
		}
	}
</style>
