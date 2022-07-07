import { createDropDownMenu } from "./Components/drop-down-menu/drop-down-menu.js";

document.body.appendChild(createDropDownMenu());
const separator1 = document.createElement("h1");
separator1.textContent = "element that shouldnt be pushed.";
document.body.appendChild(separator1);
