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
  ol.classList.add("drop-down-menu-container");
  return ol;
}

function turnVisible() {
  const menuItems = Array.from(document.getElementsByClassName("drop-down-menu-item"));
  menuItems.forEach((element) => {
    element.classList.add("drop-down-menu-item-show");
  });
  document.getElementsByClassName("header")[0].classList.add("header-lock");
}

function turnInvisible() {
  const menuItems = Array.from(document.getElementsByClassName("drop-down-menu-item"));
  menuItems.forEach((element) => {
    element.classList.remove("drop-down-menu-item-show");
  });
  document.getElementsByClassName("header")[0].classList.remove("header-lock");
}
