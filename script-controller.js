"use strict";

const toggleMenu = document.querySelector(".js-bar-button");
const menu = document.querySelector(".js-menu");

toggleMenu.addEventListener("click", () => {
  menu.classList.toggle("header-menu--toggling");
});
