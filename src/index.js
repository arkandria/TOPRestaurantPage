import "./styles.css"



const container = document.getElementById("content");
const tabBar = document.createElement("div");
tabBar.classList.add("tab-bar");
container.appendChild(tabBar);
const tabOne = document.createElement("div");
tabOne.classList.add("tab");
tabOne.textContent = "Home";
const tabTwo = document.createElement("div");
tabTwo.classList.add("tab");
tabTwo.textContent = "Menu";
const tabThree = document.createElement("div");
tabThree.classList.add("tab");
tabThree.textContent = "Locations";
tabBar.appendChild(tabOne);
tabBar.appendChild(tabTwo);
tabBar.appendChild(tabThree);

