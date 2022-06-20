const btnRight = document.querySelector(".slide-right");
const btnLeft = document.querySelector(".slide-left");
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const numberOfImages = document.querySelectorAll(".slide").length;
const p = document.querySelector(".img-nmbr");
const body = document.body;
let root = document.documentElement;
let index = 1;
let transX = 0;

btnLeft.addEventListener("click", slideLeft);
btnRight.addEventListener("click", slideRight);
btnLeft.addEventListener("click", newBg);
btnRight.addEventListener("click", newBg);

function slideLeft() {
  if (index !== 1) {
    index--;
    transX += 500;
    slide.forEach((im) => {
      im.style.transform = `translateX(${transX}px)`;
    });
  }
}

function slideRight() {
  if (index !== numberOfImages) {
    index++;
    transX -= 500;
    slide.forEach((im) => {
      im.style.transform = `translateX(${transX}px)`;
    });
  }
}

function newBg() {
  if (transX === 0) {
    body.style.background = `linear-gradient(45deg, #692ded, #00ffff)`;
    root.style.setProperty("--sheesh", "#77ff6a");
    p.innerHTML = "1";
  } else if (transX === -500) {
    body.style.background = `linear-gradient(45deg, #FAB644, #CFD1D3)`;
    root.style.setProperty("--sheesh", "#00ffff");
    p.innerHTML = "2";
  } else if (transX === -1000) {
    body.style.background = `linear-gradient(45deg, #18A569, #181818)`;
    root.style.setProperty("--sheesh", "#ff00b7");
    p.innerHTML = "3";
  }
}
