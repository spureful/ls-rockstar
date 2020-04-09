import Vue from "vue";

const rewSlide = {
	template: "#rew-slide", 
	data() {
		return {
			dataUrl: "https://raw.githubusercontent.com/spureful/jsno_for_test/master/imgs/"
		}
	},
	props: {
		slideInfo: Object
	}
}

const rewSlider = {
	template: "#rew-slider", 
	components: {
		rewSlide
	},
	props: {
		slidesInfo: Array
	}
	
}

const btnsComp = {
	template: "#rew-btns"

}

new Vue({
	el: "#rew-block",
	template: "#rew-main", 
	components: {
		btnsComp, rewSlider
	}, 
	data() {
		return {
			slidesInfo: [],
			currentSlides: [],
			slidesIndex: 0
		}
	},
	
	created() {
		fetch("https://raw.githubusercontent.com/spureful/jsno_for_test/master/jsons/rew.json")
		.then(resp => resp.json())
		.then(resp => {

			this.slidesInfo = resp;
			
	})
	}, 
	
	computed: {
		
	}, 
	methods: {
		checkBtn(dir) {		
			const defineDir = dir;
			const defineSlider = this.$children[1].$refs.moveSlider;
			const currentIndex = 0;
			const sliderWidth = parseInt(getComputedStyle(this.$refs.sliderBlock).width) + 'px'
			console.log(sliderWidth);
			
			
			defineSlider.style.transform = `translateX(-${sliderWidth})`;
			return {
				defineDir
			}
		
		}
	}
			  
			  
});