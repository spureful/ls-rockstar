<template lang="pug">
.about-root
	.about__title-row
			
		input(type="text" :disabled="!groupEditBtn" v-model="editedCategory.category" ).input__title-group.admin__input
		.btn__row(v-if="groupEditBtn")
			button(type="button"  @click.prevent="updateSkillCategory").btn-ok
			button(type="button"  @click.prevent="groupEditBtn = false").btn-cancel
		.btn__row(v-else)
			button(type="button" @click.prevent="groupEditBtn = true").btn-edit
			button(type="button" @click.prevent="removeSkillCategory").btn-delete
		
	ul.about__content
		li.about__content-item(v-for='skill in skills')
			aboutItemRowComp(:key="skill.id" :skill="skill")
	
					
	.about__new-skill(v-if="addBtn")
		input(type="text" placeholder="Новый навык" :disabled="groupEditBtn" v-model="skill.title").admin__input.about__skill
		label.abuot__percent
			input(placeholder="100" min="0" max="100" type="number" :disabled="groupEditBtn" v-model="skill.percent").admin__input
		button(type="button" :disabled="groupEditBtn" @click="addNewSkill").admin__add.about__add +
		
			
</template>


<script>
	
import aboutItemRowComp from './abuotItemRow.vue';
import { mapActions } from 'vuex';
export default {
	props: {
		category: Object,
		skills: Array
	},

	data() {
		return {
			groupEditBtn: false,
			addBtn: true,	
			editedCategory: {...this.category},
			skill: {
				category: this.category.id,
				title: "",
				precent: ""
		}


		}
	}, 
		components: {
			aboutItemRowComp
	},
methods: {
//    ...mapActions("tooltips", ["showTooltip"]),
...mapActions('skills', ['addSkill' , 'getSkills']),
...mapActions('about', ['updateCategory', 'removeCategory']),
  async addNewSkill() {
	try {
			const { response } = await this.addSkill(this.skill);
//			this.skill.title = "";
//			this.skill.percent = "";
//        this.showTooltip({
//          type: "success",
//          text: response.message
//        });
  } catch (e) {
			//generateStdError(e);
//        this.showTooltip({
//          type: "error",
//          text: e.message
//        });
  }
	},
	async updateSkillCategory() {
	//console.log(this.editedCategory.category);
		this.editedCategory.title = this.editedCategory.category;
	try {
	  const {response} = await this.updateCategory(this.editedCategory);
		this.groupEditBtn  = false;
//	      this.toggleInput();
//        this.showTooltip({
//          type: "success",
//          text: response.message
//        });
		} catch (e) {
	//generateStdError(e);
//        this.showTooltip({
//          type: "error",
//          text: e.message
//        });
  }
	},
	async removeSkillCategory() {
	try {
			const { response} = await this.removeCategory(this.editedCategory.id);
//        this.showTooltip({
//          type: "success",
//          text: response.message
//        });
  } catch (e) {
	//generateStdError(e);
//        this.showTooltip({
//          type: "error",
//          text: e.message
//        });
	}
	}
},
	
async created() {
	try {
		await this.getSkills();

	} catch(e) {console.log(e)}
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
