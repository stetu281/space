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
