import html from "./tabs-menu.html";
import "./tabs-menu.css";

export function createTabsMenu() {
  const main = document.createElement("ol");
  main.innerHTML = html;
  main.classList.add("tabs-menu-container");
  const tabs = Array.from(main.getElementsByClassName("tabs-menu-item"));
  main.addEventListener("mousedown", (e) => {
    grabScroll(e, main);
  });
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .getElementsByClassName("tabs-menu-item-selected")[0]
        .classList.remove("tabs-menu-item-selected");
      tab.classList.add("tabs-menu-item-selected");
    });
  });

  return main;
}

function grabScroll(event, element) {
  let left = element.scrollLeft;
  let x = event.clientX;
  element.style.cursor = "grabbing";

  element.addEventListener("mousemove", function move(e) {
    moveScroll(e, left, x);
  });
  element.addEventListener("mouseup", mouseUpHandler);
}

function moveScroll(event, left, x) {
  // How far the mouse has been moved
  const dx = event.clientX - x;

  // Scroll the element
  event.target.scrollLeft = left - dx;
}

function mouseUpHandler(element) {
  element.removeEventListener("mousemove", move);
  element.removeEventListener("mouseup", mouseUpHandler);

  element.style.cursor = "grab";
}
