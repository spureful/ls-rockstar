import Vue from "vue";

const skill = {
	template: '#skill',
	props: {skill},
	methods: {
		drawCircle() {
			const circle = this.$refs['svg-circle'];
			 const dashArray = parseInt(getComputedStyle(circle).getPropertyValue("stroke-dasharray"));
			
      const percent = (dashArray / 100) * (100 - this.skill.percent);
	

      circle.style.strokeDashoffset = percent;
			
		}
	}, 
	mounted() {
		this.drawCircle()
	}
}

const skillItem = {
	template: '#skills-item',
	props: {
		dataSkill: Object
	},
	components: {skill}
}



new Vue({
	el: '#skills-block',
	template: '#skills-list',
	components: {skillItem},
	data() {
		return {
			dataSkills: []
		}
	},
	created() {
		fetch('https://raw.githubusercontent.com/spureful/jsno_for_test/master/jsons/skills.json')
		.then(resp => resp.json())
		.then(resp => {

			this.dataSkills = resp;
		})

	}
});
