const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxCaption = lightbox?.querySelector("p");
const closeButton = lightbox?.querySelector(".close-lightbox");

document.querySelectorAll(".look").forEach((button) => {
  button.addEventListener("click", () => {
    if (!lightbox || !lightboxImage || !lightboxCaption) return;

    const image = button.getAttribute("data-image");
    const title = button.getAttribute("data-title") || "Dash Fashion style";

    lightboxImage.src = image || "";
    lightboxImage.alt = title;
    lightboxCaption.textContent = title;

    if (typeof lightbox.showModal === "function") {
      lightbox.showModal();
    }
  });
});

closeButton?.addEventListener("click", () => {
  lightbox?.close();
});

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});
