import css from "../scss/main.scss";
import { hamburger } from "./components/hamburger";

import { destination } from "./pages/destination";
import { crew } from "./pages/crew";
import { technology } from "./pages/technology";

hamburger();

//run code for specific pages
if (document.body.id === "destination") {
  destination();
} else if (document.body.id === "crew") {
  crew();
} else if (document.body.id === "technology") {
  technology();
}

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
