import map from './img/map.png';

const locationDisplay = () => {
    let container = document.getElementById("content");
    if (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
      };
    let display = document.createElement("div");
    display.classList.add("display");
    container.appendChild(display);
    let title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "Location";
    display.appendChild(title);
    const photo = new Image();
    photo.src = map;
    photo.alt ='Map';
    photo.setAttribute('class', 'hero-img');
    display.appendChild(photo);
    let text = document.createElement("div");
    text.setAttribute('class', 'home-text');
    text.textContent = "1715 Randolph Street, Natick, Massachusetts(MA), 01760";
    display.appendChild(text);
}

export { locationDisplay };