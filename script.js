const carousel = document.getElementById('carousel'),
	  carouselButtons = document.getElementsByClassName('carousel-button'),
	  items = carousel.getElementsByClassName('assorti__card'),
	  itemWidth = document.getElementById('card').offsetWidth;
let index = 0;


window.onload = function() {

	for (button of carouselButtons) {
		button.onclick = function() {
			carouselScroll(this.getAttribute('scroll-index'));
		}
	}

}

function carouselScroll(buttIndex) {

	if ((buttIndex == "-1" && index == 0) || (buttIndex == "1" && index == (items.length - 1))) {
		return 0;
	}

	index += Number(buttIndex);
	carousel.style.right = index*itemWidth + 'px';

}