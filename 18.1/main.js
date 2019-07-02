let cardSlideIndex = 0;

function showSlides() {
  const cardSlide = document.getElementsByClassName("slide");

  for (i = 0; i < cardSlide.length; i++) {
    cardSlide[i].style.display = "none";
  }
  cardSlideIndex++;
  if (cardSlideIndex > cardSlide.length) {
    cardsSlideIndex = 1;
  }
  cardSlide[cardSlideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000);
}

showSlides();
