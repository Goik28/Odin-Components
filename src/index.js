import { createDropDownMenu } from "./Components/drop-down-menu/drop-down-menu.js";
import { createImageSlider } from "./Components/image-slider/image-slider.js";
import { createTabsMenu } from "./Components/tabs-menu/tabs-menu.js";

document.body.appendChild(createDropDownMenu());
const separator1 = document.createElement("h1");
separator1.textContent = "----------------------------------------------";
document.body.appendChild(separator1);
document.body.appendChild(createTabsMenu());
const separator2 = document.createElement("h1");
separator2.textContent = separator1.textContent;
document.body.appendChild(separator2);
document.body.appendChild(createImageSlider());
