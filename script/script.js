const contain = document.querySelector(".contain");

document.querySelector("#menu").onclick = () => {
  contain.classList.toggle("active");
};

const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !contain.contains(e.target)) {
    contain.classList.remove("active");
  }
});

const main1 = document.querySelector(".main-1");
firstImg = main1.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".button button");

let firstImgWidth = firstImg.clientWidth + 4;

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    main1.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  });
});
