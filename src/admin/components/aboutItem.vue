<template lang="pug">
.about-root
	.about__title-row(v-if="groupEditBtn")
			
		input(type="text" placeholder="Название новой группы"  ).input__title-group.admin__input
		.btn__row
			button(type="button"  ).btn-ok
			button(type="button"  @click.prevent="groupEditBtn = false").btn-cancel
	.about__title-row(v-else)
		input(type="text"  disabled :placeholder="skill.title").input__title-group.admin__input 
		button(type="button" @click.prevent="groupEditBtn = true").btn-edit
		
	ul.about__content
		li.about__content-item(v-if="groupEditBtn")
			aboutItemRowComp
		li.about__content-item(v-else)
			aboutItemRowComp
			aboutItemRowComp
			aboutItemRowComp
					
		.about__new-skill(v-if="someBtn")
			input(type="text" placeholder="Новый навык" ).admin__input.about__skill
			label.abuot__percent
				input(placeholder="100" min="0" max="100" disabled).admin__input
			button(type="button" disabled).admin__add.about__add +
		.about__new-skill(v-else)
			input(type="text" placeholder="Новый навык"  ).admin__input.about__skill
			label.abuot__percent
				input(placeholder="100" min="0" max="100"  ).admin__input
			button(type="button" ).admin__add.about__add +
</template>


<script>
	
	import aboutItemRowComp from './abuotItemRow.vue';
	export default {
		components: {
				aboutItemRowComp
		},
		
		props: { skill: Object},
		data() {
			return {
				groupEditBtn: false,
				someBtn: true,
				
			}
		}
	}

</script>


<style lang="pcss">

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
