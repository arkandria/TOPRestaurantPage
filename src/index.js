import "./styles.css"
import { homeDisplay } from "./hometab";
import { menuDisplay } from "./menutab";
import { locationDisplay } from "./locationtab";

const container = document.getElementById("content");
const tabBar = document.createElement("div");
tabBar.classList.add("tab-bar");
container.appendChild(tabBar);
const tabOne = document.createElement("div");
tabOne.classList.add("tab");
tabOne.setAttribute('id', 'one');
tabOne.textContent = "Home";
const tabTwo = document.createElement("div");
tabTwo.classList.add("tab");
tabTwo.setAttribute('id', 'two');
tabTwo.textContent = "Menu";
const tabThree = document.createElement("div");
tabThree.classList.add("tab");
tabThree.setAttribute('id', 'three');
tabThree.textContent = "Location";
tabBar.appendChild(tabOne);
tabBar.appendChild(tabTwo);
tabBar.appendChild(tabThree);
const disp = document.createElement("div");
disp.classList.add("disp");
container.appendChild(disp);

homeDisplay();

tabOne.addEventListener('click', homeDisplay);
tabTwo.addEventListener('click', menuDisplay);
tabThree.addEventListener('click', locationDisplay);