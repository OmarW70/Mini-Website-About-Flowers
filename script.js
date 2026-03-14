const menu = document.querySelector("#menu-btn");
const navbar = document.querySelector("nav ul");

menu.onclick = () => {
navbar.classList.toggle("active");
};
