import data from "../../data/data.json" assert { type: "json" };

export const technology = () => {
  document.querySelector(".tecpage__nav").addEventListener("click", (e) => {
    if (e.target && e.target.matches("button")) {
      document
        .querySelectorAll(".tecpage__btn")
        .forEach((btn) => (btn.dataset.active = "false"));

      e.target.dataset.active = "true";

      document.querySelectorAll(".tecpage__img").forEach((img) => {
        img.dataset.img = "hide";
        if (img.dataset.imgid === e.target.dataset.btnid) {
          img.dataset.img = "show";
          renderContent(e.target.dataset.btnid);
        }
      });
    }
  });
};

function renderContent(id) {
  document
    .querySelector(".tecpage__textContainer")
    .classList.remove("tecpage__textContainer--fadein");
  let tec = data.technology[id];
  document.querySelector(".tecpage__h2").textContent = tec.name;
  document.querySelector(".tecpage__p").textContent = tec.description;

  setTimeout(() => {
    document
      .querySelector(".tecpage__textContainer")
      .classList.add("tecpage__textContainer--fadein");
  }, 100);
}
