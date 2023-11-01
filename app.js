
const slideshow = document.querySelector(".slideshow_container")
const slides = slideshow.querySelectorAll(".slideshow-slide")
const controls = slideshow.querySelectorAll(".slideshow-controls_button")
const dots  = slideshow.querySelectorAll(".slideshow-dot")
let index = 0;
const totalSlides = slides.length
const lastIndex = slides.length - 1

const goPreviousSlide = () => {
	if(index === 0) {
		index = lastIndex
	} else {
		index = index - 1
	}

	console.log(index);

	addVisibleClass()
}

const goNextSlide = () => {
	if(index < lastIndex) {
		index = index + 1
	} else {
		index = 0
	}


	console.log(index);

	addVisibleClass()
}

const addVisibleClass = () => {
	slides.forEach(slide => {
		slide.classList.remove("slideshow_slide-visible")
	})
	slides[index].classList.add("slideshow_slide-visible")
}

const changeSlide = (event) => {
	const button = event.currentTarget

	if(button.dataset.direction === "previous") {
		goPreviousSlide()
	} else {
		goNextSlide()
	}
}

controls.forEach(button => {
	button.addEventListener("click", changeSlide)
})

dots.forEach(dot => {
	dot.addEventListener("click", changeSlide)
})