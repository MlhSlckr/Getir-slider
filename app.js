const slides = document.querySelectorAll('.slider');

let counter = 0;

slides.forEach(function (slider, index) {
  slider.style.left = `${index * 100}%`
})

function carousel() {
  if (counter > slides.length - 1) {
    counter = 0
  }
  slides.forEach(function (slider) {
    slider.style.transform = `translateX(-${counter * 100}%)`
  })

}

function next() {
  counter++;
  carousel();
}

setInterval(() => {
  next()
}, 4000);