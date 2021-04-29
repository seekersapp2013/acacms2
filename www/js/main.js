const e = (selector) => document.querySelector(selector);
const es = (selector) => document.querySelectorAll(selector);

window.onload = () => {
  es('[data-action="dropdown"]').forEach((element) => {
    element.onclick = (event) => {
      event.preventDefault();
      if (e(`#${element.dataset.target}`).classList.contains("open")) {
        e(`#${element.dataset.target}`).classList.remove("open");
      } else {
        e(`#${element.dataset.target}`).classList.add("open");
      }
    };
  });

  es('[data-target="foldable-menu"]').forEach((element) => {
    let menu = e('.foldable-menu');

    element.onclick = (event) => {
      menu.dataset.toggled = element.dataset.toggle == "open" ? true : false;
    }
  });
};
