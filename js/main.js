var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--prev",
    prevEl: ".hotel-slider__button--next",
  },
   keyboard: {
    enabled: true,
    onlyInViewport: false
  },
  effect: "coverflow",
});
var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
   keyboard: {
    enabled: true,
    onlyInViewport: false
  },
});

let newsletter=document.getElementById('newsletter');
this.addEventListener("scroll",function(){
newsletter.style["backgroundPositionY"]=100-1913/1842*this.scrollY/1842*100+'%';
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function() {
console.log("Клик по кнопке");
document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visible');
});