import css from "../scss/main.scss";
import { hamburger } from "./components/hamburger";

import { destination } from "./pages/destination";
import { crew } from "./pages/crew";
import { technology } from "./pages/technology";

hamburger();

//run code for specific pages
if (document.body.id === "destination") {
  document.querySelector(".destination").dataset.active = "true";
  destination();
} else if (document.body.id === "crew") {
  document.querySelector(".crew").dataset.active = "true";
  crew();
} else if (document.body.id === "technology") {
  document.querySelector(".technology").dataset.active = "true";
  technology();
} else {
  document.querySelector(".home").dataset.active = "true";
}
