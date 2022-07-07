import html from "./drop-down-menu.html";
import "./drop-down-menu.css";

export function createDropDownMenu() {
  const main = document.createElement("div");
  main.className = "header";
  main.textContent = "Drop-Down-Menu";
  main.appendChild(createList());

  main.addEventListener("mouseenter", turnVisible);
  main.addEventListener("mouseleave", turnInvisible);

  return main;
}

function createList() {
  const ol = document.createElement("ol");
  ol.innerHTML = html;
  ol.classList.add("list-container");
  return ol;
}

function turnVisible() {
  const menuItems = Array.from(document.getElementsByClassName("menu-item"));
  menuItems.forEach((element) => {
    element.classList.add("menu-item-show");
  });
  document.getElementsByClassName("header")[0].classList.add("header-lock");
}

function turnInvisible() {
  const menuItems = Array.from(document.getElementsByClassName("menu-item"));
  menuItems.forEach((element) => {
    element.classList.remove("menu-item-show");
  });
  document.getElementsByClassName("header")[0].classList.remove("header-lock");
}
