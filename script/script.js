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

// Rotate

const rotate1 = document.getElementById("rotate1");
const rotate2 = document.getElementById("rotate2");
const rotate3 = document.getElementById("rotate3");
const rotate4 = document.getElementById("rotate4");
const rotate5 = document.getElementById("rotate5");
const photo = document.getElementById("photo");

rotate1.addEventListener("click", () => {
  photo.classList.add("animate__animated", "animate__flash");
  photo.addEventListener("animationend", () => {
    photo.classList.remove("animate__animated", "animate__flash");
  });
});

rotate2.addEventListener("click", () => {
  photo.classList.add("animate__animated", "animate__pulse");
  photo.addEventListener("animationend", () => {
    photo.classList.remove("animate__animated", "animate__pulse");
  });
});

rotate3.addEventListener("click", () => {
  photo.classList.add("animate__animated", "animate__flipInX");
  photo.addEventListener("animationend", () => {
    photo.classList.remove("animate__animated", "animate__flipInX");
  });
});

rotate4.addEventListener("click", () => {
  photo.classList.add("animate__animated", "animate__zoomInDown");
  photo.addEventListener("animationend", () => {
    photo.classList.remove("animate__animated", "animate__zoomInDown");
  });
});

rotate5.addEventListener("click", () => {
  photo.classList.add("animate__animated", "animate__slideInDown");
  photo.addEventListener("animationend", () => {
    photo.classList.remove("animate__animated", "animate__slideInDown");
  });
});

// hidden p

const p = document.querySelector(".main-container-child");

document.querySelector("#hidden").onclick = () => {
  p.classList.toggle("hidden");
  console.log("some");
};
