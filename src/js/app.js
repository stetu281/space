import css from "../scss/main.scss";
import closeIcon from "../images/shared/icon-close.svg";
import hamburgerIcon from "../images/shared/icon-hamburger.svg";

document.querySelector(".header__hamburger").addEventListener("click", (e) => {
  e.preventDefault();
  e.target.nextElementSibling.classList.toggle("nav--open");
  if (e.target.nextElementSibling.classList.contains("nav--open")) {
    e.target.children[0].src = closeIcon;
  } else {
    e.target.children[0].src = hamburgerIcon;
  }
});
