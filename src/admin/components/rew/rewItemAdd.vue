<template lang="pug">
	.add-item
		button(type="button" @click="toggleEditItem" :disabled="getEditModeState").add-item__btn
		.add-item__text(ref="add-item") Добавить
</template>


<script>
	import { mapGetters , mapActions} from 'vuex';
	export default {
		
		components: {

		},
		data() {
			return {

			}
		},
			computed: {
			...mapGetters('rew', ['getEditModeState'])
		},
		methods: {
			...mapActions('rew', ['toggleEditMode']),
			toggleEditItem() {
		
//				this.toggleEditMode(this.getEditModeState);
				this.$emit('toggleAddMode');

			}
		}
	}

</script>


<style lang="pcss">

	.add-item {
		
		
		background: linear-gradient(to right, #1a54df, #3f35cb );
		color: #fff;
		font-size: 18px;
		font-weight: 700;
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
		
		-ms-align-self: stretch;
		align-self: stretch;
		
		height: 100%;
padding: 50px 0;	
		
	}
	
	.add-item__btn {
		width: 160px;
		height: 160px;
		border-radius: 50%;
		border: 3px solid  #fff;
		position: relative;
		background-color: transparent;
		margin-bottom: 50px;
		
		&:before, &:after {
			content: '';
			
			background-color: #ccc;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		
		&:before {
			width: 35px;
			height: 4px;
		}
		
		&:after {
			width: 4px;
			height: 35px;
		}
	}
</style>
