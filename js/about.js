const menu = document.querySelector(".menu");
const navbarLinks = document.querySelector(".navbar-links");

menu.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  menu.classList.toggle("animate");
});



var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 80,
  loop: true,
  speed: 6000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  freeMode: true,
  freeModeMomentum: false,
});
