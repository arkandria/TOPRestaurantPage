import pizza from './img/pizza.png';

const homeDisplay = () => {
    let container = document.getElementById("content");
    let display = document.createElement("div");
    display.classList.add("display");
    container.appendChild(display);
    let title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "The Food Forge";
    display.appendChild(title);
    const photo = new Image();
    photo.src = pizza;
    photo.alt ='Pizza';
    photo.setAttribute('class', 'hero-img');
    display.appendChild(photo);
    let text = document.createElement("div");
    text.setAttribute('class', 'home-text');
    text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc odio, mattis sed tempor quis, molestie non justo. Aenean ut ante quis ex commodo hendrerit in ut metus. Vestibulum mi lectus, consequat a placerat in, porttitor et urna. Nunc sed rutrum nisi. Pellentesque eleifend efficitur sapien. Pellentesque tempor ex sed dapibus bibendum. Aliquam eu risus vel nisi ullamcorper placerat.";
    display.appendChild(text);
}

export { homeDisplay };