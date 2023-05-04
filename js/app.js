const toggle = document.querySelector(".toogle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});