$(document).ready(function(){
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


var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function() {
console.log("Клик по кнопке");
document.querySelector(".navbar-bottom").classList.toggle('navbar-bottom--visible');
});

var modalButton = $('[data-toggle=modal]')
var closeModalButton = $(".modal__close")
modalButton.on("click", openModal);
closeModalButton.on('click', closeModal);

$(document).on('keyup',function(event){
     if (event.keyCode === 27) {closeModal(event)};
});

$(document).on('click',function(event){
 var target=$(event.target)
     if (target.is('.modal__overlay.modal__overlay--visible')){closeModal(event)};
});

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible');
  if ($(window).height()<modalDialog.height()){
    $(".modal__dialog.modal__dialog--visible")[0].style.overflow='auto';
    $(".modal__dialog.modal__dialog--visible")[0].style.height='96vh';
  };
}
function closeModal(event) {
  event.preventDefault ();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
  
}
$("#phone").mask("+7(999) 999-9999");
$("#phone-2").mask("+7(999) 999-9999");
//Обработка форм
$(".form").each(function () {
  $(this).validate({
  errorClass: "invalid",
  messages: {
    name: {
      required: "Укажите имя",
      minlength: "Имя должно быть не короче 2 букв"
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com ",
    },
    phone: {
      required: "Телефон обязателен",
    },
  },
});
})
});
  AOS.init({
      disable: 'mobile'
    });
AOS.init();
let newsletter=document.getElementById('newsletter');
this.addEventListener("scroll",function(){
newsletter.style["backgroundPositionY"]=100-1913/1842*this.scrollY/1842*100+'%';
});

  