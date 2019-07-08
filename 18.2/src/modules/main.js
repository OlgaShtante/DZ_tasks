let cardSlideIndex = 0;
let switcher;

function switchSlidesAutomatically() {
  const cardSlide = document.getElementsByClassName("slide");
  let i;
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

const carouselArea = document.getElementById("carousel-area");
const leftChevron = document.getElementById("arrow-left");
const rightChevron = document.getElementById("arrow-right");

carouselArea.addEventListener("mouseover", showChevrons);
carouselArea.addEventListener("mouseleave", hideChevrons);

let slideSwitcherIndex = 1;
let slideShow;
showSlideSwitcher(slideSwitcherIndex);

function switchSlidesByChevrons(slideShow) {
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

function showChevrons() {
  clearTimeout(switcher);
  leftChevron.style.display = "inline-block";
  rightChevron.style.display = "inline-block";
}

function hideChevrons() {
  switchSlidesAutomatically();
  leftChevron.style.display = "none";
  rightChevron.style.display = "none";
}
