function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("active");
  icon.classList.toggle("active");
}

function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}
