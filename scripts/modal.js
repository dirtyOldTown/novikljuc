const modalLinks = document.querySelectorAll(".modal-link");
const modal = document.getElementById("modal");
const modalImage = document.querySelector("#modal img");
const modalCloseButton = document.querySelector(".modal-close-button");

 document.addEventListener("click", (e) => {
   let target = e.target.closest(".modal-link");
   if (!target) return;
   src = target.dataset.linkImage;
   modalImage.src = src;
   modal.style.display = "flex";
});

modalCloseButton.addEventListener("click", () => {
  modal.style.display = "none";
});