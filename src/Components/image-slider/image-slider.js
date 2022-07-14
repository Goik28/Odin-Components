import html from "./image-slider.html";
import "./image-slider.css";

export function createImageSlider() {
  const main = document.createElement("ol");
  main.innerHTML = html;
  main.classList.add("image-slider");
  selectImage(main);
  nextImage(main);
  previousImage(main);
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

function nextImage(main) {
  const inputs = Array.from(
    main
      .getElementsByClassName("image-selector")[0]
      .getElementsByTagName("input")
  );
  const images = main.getElementsByClassName("image-item");
  main.getElementsByClassName("next-item")[0].addEventListener("click", () => {
    const activeIndex = inputs.findIndex((element) => {
      return element.checked == true;
    });
    if (activeIndex == inputs.length - 1) {
      inputs[0].checked = true;
      document
        .getElementsByClassName("image-item-selected")[0]
        .classList.remove("image-item-selected");
      images[0].classList.add("image-item-selected");
    } else {
      inputs[activeIndex + 1].checked = true;
      document
        .getElementsByClassName("image-item-selected")[0]
        .classList.remove("image-item-selected");
      images[activeIndex + 1].classList.add("image-item-selected");
    }
  });
}

function previousImage(main) {
  const inputs = Array.from(
    main
      .getElementsByClassName("image-selector")[0]
      .getElementsByTagName("input")
  );
  const images = main.getElementsByClassName("image-item");
  main
    .getElementsByClassName("previous-item")[0]
    .addEventListener("click", () => {
      const activeIndex = inputs.findIndex((element) => {
        return element.checked == true;
      });
      if (activeIndex == 0) {
        inputs[inputs.length - 1].checked = true;
        document
          .getElementsByClassName("image-item-selected")[0]
          .classList.remove("image-item-selected");
        images[inputs.length - 1].classList.add("image-item-selected");
      } else {
        inputs[activeIndex - 1].checked = true;
        document
          .getElementsByClassName("image-item-selected")[0]
          .classList.remove("image-item-selected");
        images[activeIndex - 1].classList.add("image-item-selected");
      }
    });
}
