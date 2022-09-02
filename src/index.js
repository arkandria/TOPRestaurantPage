import "./styles.css"
import { homeDisplay } from "./hometab";

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
tabThree.textContent = "Locations";
tabBar.appendChild(tabOne);
tabBar.appendChild(tabTwo);
tabBar.appendChild(tabThree);

homeDisplay();

