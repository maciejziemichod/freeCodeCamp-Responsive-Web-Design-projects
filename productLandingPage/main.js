"use strict";
const images = document.querySelectorAll(".animation");

const animation = () => {
  setTimeout(() => {
    images[0].style.display = "none";
  }, 1000);

  setTimeout(() => {
    images[1].style.display = "none";
  }, 1200);

  setTimeout(() => {
    images[2].style.display = "none";
  }, 1400);

  setTimeout(() => {
    images[3].style.display = "none";
  }, 1600);

  setTimeout(() => {
    images[3].style.display = "block";
  }, 1800);

  setTimeout(() => {
    images[2].style.display = "block";
  }, 2000);

  setTimeout(() => {
    images[1].style.display = "block";
  }, 2200);

  setTimeout(() => {
    images[0].style.display = "block";
  }, 2400);
};

animation();

setInterval(animation, 2600);
