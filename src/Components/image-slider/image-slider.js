import html from "./image-slider.html";
import "./image-slider.css";

export function createImageSlider() {
  const main = document.createElement("ol");
  main.innerHTML = html;
  main.classList.add("image-slider");
  selectImage(main);
  return main;
}

function selectImage(main) {
  const inputs = Array.from(
    main
      .getElementsByClassName("image-selector")[0]
      .getElementsByTagName("input")
  );
  const images = main.getElementsByClassName("image-item");
  inputs.forEach((element, index) => {
    element.addEventListener("click", () => {
      element.checked = true;
      document
        .getElementsByClassName("image-item-selected")[0]
        .classList.remove("image-item-selected");
      images[index].classList.add("image-item-selected");
    });
  });
}
