let cardSlideIndex = 0;
let switcher;
const carouselArea = document.getElementById("carousel-area");
const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");

function switchSlidesAutomatically() {
  const cardSlide = document.getElementsByClassName("slide");
  let i = 0;
  for (i = 0; i < cardSlide.length; i++) {
    cardSlide[i].style.display = "none";
  }
  cardSlideIndex++;
  if (cardSlideIndex >= cardSlide.length) {
    cardSlideIndex = 0;
  }
  cardSlide[cardSlideIndex].style.display = "block";
  switcher = setTimeout(switchSlidesAutomatically, 3000);
}

switchSlidesAutomatically();

let slideSwitcherIndex = 1;
let slideShow;
showSlideSwitcher(slideSwitcherIndex);

function switchSlidesByArrows(slideShow) {
  showSlideSwitcher((slideSwitcherIndex += slideShow));
}

function showSlideSwitcher(slideShow) {
  let i = 0;
  const slides = document.getElementsByClassName("slide");
  if (slideShow > slides.length) {
    slideSwitcherIndex = 1;
  }
  if (slideShow < 1) {
    slideSwitcherIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideSwitcherIndex - 1].style.display = "block";
}

function showArrows() {
  clearTimeout(switcher);
  leftArrow.style.display = "inline-block";
  rightArrow.style.display = "inline-block";
}

function hideArrows() {
  switchSlidesAutomatically();
  leftArrow.style.display = "none";
  rightArrow.style.display = "none";
}

carouselArea.addEventListener("mouseover", showArrows);
carouselArea.addEventListener("mouseleave", hideArrows);
leftArrow.addEventListener("click", () => {
  switchSlidesByArrows(-1);
});
rightArrow.addEventListener("click", () => {
  switchSlidesByArrows(1);
});
