const arrowleft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slideshow = document.querySelector(".slideshow");

let position = 0;

arrowRight.addEventListener("click", () => {
  position -= 56;
  if (position > 0) position = 0;
  if (position <= -168) position = 0;

  slideshow.style.left = position + "rem";

});

arrowleft.addEventListener("click", () => {
  if (position < 0)   position += 56;
   slideshow.style.left = position + "rem";
});


