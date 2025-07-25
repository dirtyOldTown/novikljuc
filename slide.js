const arrowleft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slideshow = document.querySelector(".slideshow");

let position = 0;

arrowRight.addEventListener("click", () => {
  position -=100;
  if (position > 0) position = 0;
  if (position <= -300) position = 0;

  slideshow.style.left = position + "%";

});

arrowleft.addEventListener("click", () => {
  if (position < 0)   position += 100;
   slideshow.style.left = position + "%";
});


