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
		btnsComp,
		rewSlider
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
			let currentIndex = this.slidesIndex;
			let screenSlides = 0;
			let sumSlidesWidth = 0;
			let numberToMove = 0

			const defineSlider = this.$children[1].$refs.moveSlider;
			const sliderBlock = this.$refs.sliderBlock;
			let slidesArr = this.$children[1].$refs.moveSlider.children;


			let sliderBlockWidth = parseInt(window.getComputedStyle(sliderBlock).width);

			for (let slide of slidesArr) {
				let slideWidth = parseInt(window.getComputedStyle(slide).width);
				let marginWidth = parseInt(window.getComputedStyle(slide).marginRight);
				let pleinWidth = slideWidth + marginWidth;
				sumSlidesWidth += pleinWidth;

			}

			screenSlides = Math.ceil(sumSlidesWidth / sliderBlockWidth);



			if (dir === 'next') {

				currentIndex++;
				indexTest();
				this.slidesIndex = currentIndex;

				defineSlider.style.transform = `translateX(-${numberToMove} )`;

			}

			if (dir === 'prev') {
				currentIndex--;
				indexTest();
				this.slidesIndex = currentIndex;

				defineSlider.style.transform = `translateX( -${numberToMove} )`;
			}

			function indexTest() {
				if (currentIndex >= screenSlides) {
					currentIndex = 0
				}
				if (currentIndex < 0) {
					currentIndex = 0
				}
				
				console.log(currentIndex)
				numberToMove = 100 * currentIndex + '%';
				
			}





		}
	}


});
