import css from "../scss/main.scss";
import { crew } from "./pages/crew";
import { technology } from "./pages/technology";

import closeIcon from "../images/shared/icon-close.svg";
import hamburgerIcon from "../images/shared/icon-hamburger.svg";
import data from "../data/data.json" assert { type: "json" };
import moonImg from "../images/destination/image-moon.png";
import marsImg from "../images/destination/image-mars.png";
import europaImg from "../images/destination/image-europa.png";
import titanImg from "../images/destination/image-titan.png";

if (document.body.id === "crew") {
  crew();
}

if (document.body.id === "technology") {
  technology();
}

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
