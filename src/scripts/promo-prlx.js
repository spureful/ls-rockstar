function promoPrlx() {
	
	const parallax = (function() {
		const bg1 = document.querySelector('.promo-wrap__img-1');
		const bg2 = document.querySelector('.promo-wrap__img-2');
		const bg3 = document.querySelector('.promo-wrap__img-3');
		const bg4 = document.querySelector('.promo-wrap__img-4');
		const bg5 = document.querySelector('.promo-wrap__img-5');
		const bg6 = document.querySelector('.promo-wrap__img-6');
		const bg7 = document.querySelector('.promo-wrap__img-7');
		const bg8 = document.querySelector('.promo-wrap__img-8');
		const bg9 = document.querySelector('.promo-wrap__img-9');
		const title = document.querySelector('.hero__title');
		
		return {
			move: function(block, scroll, eq) {
				let strafe = scroll / -eq + '%';
				
				const style = block.style;
				
				style.transform = 	`translateY(${strafe})`;
			},
			init: function(wScroll) {
				this.move(bg1, wScroll, 45);
				this.move(bg2, wScroll, 40);
				this.move(bg3, wScroll, 35);
				this.move(bg4, wScroll, 30);
				this.move(bg5, wScroll, 25);
				this.move(bg6, wScroll, 20);
				this.move(bg7, wScroll, 20);
				this.move(bg8, wScroll, 50);
				this.move(bg9, wScroll, 50);
				this.move(title, wScroll, 50);
			}
		}
	}());
	
	window.onscroll = function() {
		let wScroll = window.pageYOffset;
		parallax.init(wScroll);
		
	}
	
}

promoPrlx();