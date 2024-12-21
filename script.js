document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector("nav ul");
  const menuItems = document.querySelectorAll("nav ul li a");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      navMenu.classList.remove("show");
      hamburgerMenu.classList.remove("open");
    });
  });
});
