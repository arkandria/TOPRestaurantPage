import menu from './img/MENU.png';

const menuDisplay = () => {
    let container = document.getElementById("content");
    if (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
      }; 
    let display = document.createElement("div");
    display.classList.add("display");
    container.appendChild(display);
    let title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "Menu";
    display.appendChild(title);
    const photo = new Image();
    photo.src = menu;
    photo.alt ='Menu';
    photo.setAttribute('class', 'hero-img');
    display.appendChild(photo);
    let text = document.createElement("div");
    text.setAttribute('class', 'home-text');
    text.textContent = "Donec nunc odio, mattis sed tempor quis, molestie non justo. Aenean ut ante quis ex commodo hendrerit in ut metus. Vestibulum mi lectus, consequat a placerat in, porttitor et urna. Nunc sed rutrum nisi. Pellentesque eleifend efficitur sapien. Pellentesque tempor ex sed dapibus bibendum. Aliquam eu risus vel nisi ullamcorper placerat.";
    display.appendChild(text);
}

export { menuDisplay };