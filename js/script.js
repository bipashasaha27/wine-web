const menu = document.querySelector(".menu");
const navbarLinks = document.querySelector(".navbar-links");

menu.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  menu.classList.toggle("animate");
});
