import data from "../../data/data.json" assert { type: "json" };

export const crew = () => {
  document.querySelector(".crewpage__nav").addEventListener("click", (e) => {
    if (e.target && e.target.matches("button")) {
      document
        .querySelector(".crewpage__text")
        .classList.remove("crewpage__text--fadein");
      document
        .querySelectorAll(".crewpage__btn")
        .forEach((item) => (item.dataset.active = "false"));
      e.target.dataset.active = "true";

      document.querySelectorAll(".crewpage__img").forEach((img) => {
        img.classList.remove("crewpage__img--show");

        if (img.dataset.crewid === e.target.dataset.btnid) {
          img.classList.add("crewpage__img--show");
          renderContent(e.target.dataset.btnid);
        }
      });
    }
  });
};

function renderContent(id) {
  let member = data.crew[id];
  document.querySelector(".crewpage__h3").textContent = member.role;
  document.querySelector(".crewpage__h2").textContent = member.name;
  document.querySelector(".crewpage__p").textContent = member.bio;

  setTimeout(() => {
    document
      .querySelector(".crewpage__text")
      .classList.add("crewpage__text--fadein");
  }, 100);
}
