import Vue from "vue";


const tags = {
	template: '#works__tags',
	props: {
		tags: Array
	}


}

const arrows = {
	template: '#works__arrows',
	props: {
		dataPags: Array,
		currentslide: Object
	}

}

const paggination = {
	template: '#works__paggination',
	props: {
		dataPags: Array,
		currentslide: Object
	},
	data() {
		return {
			dataUrl: 'https://webdev-api.loftschool.com/',

		}
	}


}

const bigImg = {
	template: '#works__image',
	props: {
		currentImg: String
	},
	data() {
		return {
			dataUrl: 'https://webdev-api.loftschool.com/'
		}
	}
}

const sideLeft = {
	template: '#works__left',
	props: {
		dataWorks: Array,
		currentImg: String,
		currentslide: {}

	},
	components: {
		bigImg,
		paggination,
		arrows
	}

}
const sideRight = {
	template: '#works__right',
	components: {
		tags
	},
	props: {
		currentInfo: Object
	},


	computed: {

		tagsArray() {
			return this.currentInfo.techs.split(',');
		}



	}
}


new Vue({
	el: '#works-block',
	template: '#works__row',
	components: {
		sideLeft,
		sideRight
	},
	data() {
		return {
			dataWorks: [],
			currentItem: 0,
			currentslide: {}
		}
	},
	created() {
		fetch('https://webdev-api.loftschool.com/works/303')
			.then(resp => resp.json())
			.then(resp => {

				this.dataWorks = resp;

				this.currentslide = this.dataWorks[this.currentItem]
			
				for (let item of this.dataWorks) {
					item.number = this.dataWorks.indexOf(item) + 1
				}
			})

	},
	computed: {
		watchCurItem() {

			return this.currentslide = this.dataWorks[this.currentItem];

		}


	},
	methods: {

		btnSlide(direction) {
			direction == 'next' ? this.currentItem++ : this.currentItem--
			this.currentItem < 0 ? this.currentItem = 0 : this.currentItem;

			this.currentItem > this.dataWorks.length - 1 ? this.currentItem = this.dataWorks.length - 1 : this.currentItem;



			this.watchCurItem;


			const items = this.$children[0].$children[1].$refs.pagItem;
			
			

			if (direction == 'next' && this.currentItem != this.dataWorks.length - 1) {
				items.appendChild(items.firstElementChild);
			} else if (direction == 'prev' && this.currentItem != 0) {
				items.insertBefore(items.lastElementChild, items.firstElementChild);
			}
		}



	}

	//	wathICons() {

	//			console.log(pagSlide)

	//			for (let pagItem of pagSlide ) {
	//				if (pagItem.classList.contains('active')) {
	//				pagItem.parentNode.appendChild(pagItem);
	//			}
	//			}
	//	}
	//}


})
