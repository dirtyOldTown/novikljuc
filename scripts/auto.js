const phoneCall = document.querySelector(".phone-call");
const detail = document.querySelector(".detail");
const mainHeader = document.getElementById("main-header");

detail.addEventListener("mouseover", () => {
  detail.style.backgroundColor = "#feba3e";
  phoneCall.style.backgroundColor = "#fffbd2";
});
detail.addEventListener("mouseout", () => {
  phoneCall.style.backgroundColor = "#feba3e";
  detail.style.backgroundColor = "#fffbd2";
});

detail.addEventListener("click", () => {
  mainHeader.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

