export const destination = () => {
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
};
