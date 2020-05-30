<template lang="pug">
.item
	input(type="text" v-model="editedSkill.title" :disabled="!btnsEdit" ).item__title.admin__input
	input( 
		:disabled="!btnsEdit"
		type="number"
		min="0"
		max="100"
		v-model="editedSkill.percent"
		).item__number.admin__input
	.btns__row(v-if="btnsEdit")
		button(type="button" @click.prevent="saveSkill").btn-ok
		button(type="button" @click="btnsEdit = false").btn-cancel
	.btns__row(v-else)
		button(type="button" @click="btnsEdit = true").btn-edit
		button(type="button"  @click.prevent="removeThisSkill").btn-delete
	

	
</template>


<script>
//import { generateStdError } from '@/helpers/errorHandler';
import {mapActions} from 'vuex';
export default {
	 props: {
		skill: Object
		},

	data() {
		return {

			btnsEdit: false,
			editedSkill: {...this.skill}
		}
	},

	 methods: {
//    ...mapActions("tooltips", ["showTooltip"]),
		...mapActions('skills', ['removeSkill', 'editSkill']),
		async removeThisSkill() {
		  try {
					const response = await this.removeSkill(this.skill.id);
		//				console.log(response);
		//        this.showTooltip({
		//          type: "success",
		//          text: response.data.message
		//        });
		  } catch (e) {
		//        this.showTooltip({
		//          type: "error",
		//          text: e.message
		//        });
		  }

			},
			async saveSkill() {
			try {
			  const {response} = await this.editSkill(this.editedSkill);

				this.btnsEdit = false
		//  		  this.toggleSkillEdit();
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
}
}

</script>


<style lang="pcss" scoped>

	.item {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
		justify-content: space-between;
		-ms-align-items: center;
		align-items: center;
	}
	.item__title {
		margin-right: 15px;
		width: 80%;
	}
	
	.item__number {
		width: 20%;
		margin-right: 2%;
		text-align: center;
		&:disabled {
			border-bottom: none;
		}
	}
	
	.btn-edit, .btn-ok {
		margin-right: 20px;
	}
</style>
