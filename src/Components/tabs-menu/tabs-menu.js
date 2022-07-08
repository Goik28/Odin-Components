import html from "./tabs-menu.html";
import "./tabs-menu.css";

export function createTabsMenu() {
  const main = document.createElement("ol");
  main.innerHTML = html;
  main.classList.add("tabs-menu-container");
  const tabs = Array.from(main.getElementsByClassName("tabs-menu-item"));
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
