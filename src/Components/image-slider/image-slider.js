import html from "./image-slider.html";
import "./image-slider.css";

export function createImageSlider() {
  const main = document.createElement("ol");
  main.innerHTML = html;
  main.classList.add("image-slider");

  return main;
}