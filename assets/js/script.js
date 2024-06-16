var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: -50,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const menu = document.querySelector('.menu')
menu.addEventListener('click', myFunction);

function myFunction() {
  var nav = document.querySelector(".navigation");
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}