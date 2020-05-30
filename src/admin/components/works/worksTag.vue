<template lang="pug">
.tags
	.tags__text {{tag}}
	button(type="button" @click.prevent="$emit('deleteTag', tag)").tags__close
</template>


<script>
	export default {
		components: {

		},
		props: {
			tag: String
		},
		data() {
			return {

			}
		}
	}

</script>


<style lang="pcss" scoped>
	.tags__close {
		width: 13px;
		height: 13px;
		position: relative;
		border: none;
		background-color: transparent;
		margin-left: 10px;
		
			&:before, &:after {
			content: '';
			width: 13px;
			height: 2px;
			background-color: #283342;
			position: absolute;
			top: 50%;
			right: 0;
			
		}
		
		&:before {
			transform: translateY(-50%) rotate(-45deg);
		}
		
		
		&:after {
			transform: translateY(-50%) rotate(45deg);
		
		}
		}

</style>
