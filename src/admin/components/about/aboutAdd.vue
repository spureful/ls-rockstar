<template lang="pug">
.about-root
	.about__title-row
			
		input(type="text" placeholder="Название новой группы" :disabled="!groupEditBtn" v-model="categoryTitle" ).input__title-group.admin__input
		.btn__row(v-if="groupEditBtn")
			button(type="button" @click.prevent="addSkillCategory"  ).btn-ok
			button(type="button"  @click.prevent="$emit('toggleAddForm')").btn-cancel
		.btn__row(v-else)
			button(type="button" @click.prevent="groupEditBtn = true").btn-edit
			button(type="button").btn-delete
		
	.about__content
		.about__new-skill
			input(type="text" placeholder="Новый навык" disabled).admin__input.about__skill
			label.abuot__percent
				input(placeholder="100" min="0" max="100" disabled).admin__input
			button(type="button" disabled).admin__add.about__add +
		
</template>


<script>
	import {mapActions} from 'vuex';
	import aboutItemRowComp from './abuotItemRow.vue';
	export default {
		components: {
				aboutItemRowComp
		},
		
		props: { skill: Object,
			   isShowNewBlock: Boolean},
		data() {
			return {
				groupEditBtn: true,				
				categoryTitle: []
				
			}
		}, 
		methods: {
			...mapActions('about', ['addCategory']),
			async addSkillCategory() {
		  		try {
        			const {response} = await this.addCategory(this.categoryTitle);
        				this.categoryTitle = "";
        				this.$emit('toggleAddForm');
//        				this.showTooltip({
//          					type: "success",
//          					text: response.message
//        				});
						} catch (e) {
				//generateStdError(e);
//        					this.showTooltip({
//							type: "error",
//          					text: e.message
//								});
//      }
						}			
					}		
				}
			}

</script>


<style lang="pcss" scoped>
	.about-root, .about__content {
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
	
	.about__content { 
		align-items: flex-end;
		justify-content: flex-end;
	}
	
	.about__content-item {flex: 1}
	.about__title-row {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		justify-content: space-between;
		margin-bottom: 30px;
	}

	.input__title-group {
		width: 70%;


	}

	.btn-ok {
		margin-right: 20px;
	}

	.about__new-skill {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		justify-content: flex-end;
		-ms-align-items: center;
		align-items: center;
	}

	.abuot__percent {
		width: 53px;
		position: relative;
		margin-right: 20px;

		input {
			width: 100%;
		}

		&:after {
			content: '%';
			color: #000;
			opacity: .3;
			position: absolute;

			right: 0;
		}
	}

	.about__skill {
		margin-right: 10px;
	}

</style>
