import html from "./drop-down-menu.html";
import "./drop-down-menu.css";

export function createDropDownMenu(){
const main = document.createElement("div");
main.innerHTML = html;
const menu = main.getElementsByClassName("menu")[0];
menu.addEventListener("mouseenter", turnVisible);
menu.addEventListener("mouseleave", turnInvisible);
    
return main;
}


function turnVisible() {
  const menuItems = Array.from(document.getElementsByClassName("menu-item"));
  menuItems.forEach((element) => {
    element.classList.add("menu-item-show");
  });
}

function turnInvisible() {
  const menuItems = Array.from(document.getElementsByClassName("menu-item"));
  menuItems.forEach((element) => {
    element.classList.remove("menu-item-show");
  });
}
