import css from "../scss/main.scss";
import closeIcon from "../images/shared/icon-close.svg";
import hamburgerIcon from "../images/shared/icon-hamburger.svg";
import data from "../data/data.json" assert { type: "json" };
import moonImg from "../images/destination/image-moon.png";
import marsImg from "../images/destination/image-mars.png";
import europaImg from "../images/destination/image-europa.png";
import titanImg from "../images/destination/image-titan.png";

document.querySelector(".header__hamburger").addEventListener("click", (e) => {
  e.preventDefault();
  e.target.nextElementSibling.classList.toggle("nav--open");
  if (e.target.nextElementSibling.classList.contains("nav--open")) {
    e.target.children[0].src = closeIcon;
  } else {
    e.target.children[0].src = hamburgerIcon;
  }
});

window.onload = () => {
  let navItems = document.querySelectorAll(".navitem");
  navItems.forEach((item) => {
    item.classList.remove("active");
  });
  const page = document.body.id;
  switch (page) {
    case "home":
      document.querySelector(".home").classList.add("active");
      break;
    case "crew":
      document.querySelector(".crew").classList.add("active");
      break;
    case "destination":
      document.querySelector(".destination").classList.add("active");
      break;
    case "technology":
      document.querySelector(".technology").classList.add("active");
      break;
  }
};

//destination page
console.log(data);

const btns = document.querySelectorAll(".destpage__btn");
renderPlanet("0");

document
  .querySelector(".destpage__btnContainer")
  .addEventListener("click", (e) => {
    if (e.target && e.target.matches("button")) {
      renderPlanet(e.target.dataset.id);
      btns.forEach((btn) => {
        btn.classList.remove("destpage__btn--active");
      });
      e.target.classList.add("destpage__btn--active");
    }
  });

function renderPlanet(dataId) {
  const imgs = document.querySelectorAll(".destpage__img");
  imgs.forEach((img) => {
    img.classList.remove("destpage__img--show");
    if (img.dataset.id === dataId) {
      img.classList.add("destpage__img--show");
    }
  });

  const text = document.querySelector(".destpage__text");
  const distText = document.querySelector(".destpage__distText");
  const timeText = document.querySelector(".destpage__timeText");

  text.innerHTML = "";
  distText.textContent = "";
  timeText.textContent = "";

  text.innerHTML = `
  <h2>${data.destinations[dataId].name}</h2>
  <p>${data.destinations[dataId].description}</p>
`;
  distText.textContent = data.destinations[dataId].distance;
  timeText.textContent = data.destinations[dataId].travel;
}
