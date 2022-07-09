import html from "./tabs-menu.html";
import "./tabs-menu.css";

export function createTabsMenu() {
  const main = document.createElement("ol");
  main.innerHTML = html;
  main.classList.add("tabs-menu-container");
  const tabs = Array.from(main.getElementsByClassName("tabs-menu-item"));
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tab.scrollIntoView({ behavior: "smooth", inline: "center" });
      document
        .getElementsByClassName("tabs-menu-item-selected")[0]
        .classList.remove("tabs-menu-item-selected");
      tab.classList.add("tabs-menu-item-selected");
    });
  });
  // mouseMOveScroll(main);
  return main;
}

/* Code to make the container scroll with mouse movement.
function mouseMOveScroll(main) {
  const wdx = window.innerWidth;
  const mainx = main.clientWidth;
  main.addEventListener("mousemove", (e) => {
    main.scroll({
      left: ((wdx - mainx) * (e.pageX / wdx).toFixed(3)).toFixed(1),
      behavior: "smooth",
    });
  });
}
*/
