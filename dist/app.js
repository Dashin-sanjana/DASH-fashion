const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxTitle = lightbox?.querySelector(".lightbox-caption strong");
const lightboxMeta = lightbox?.querySelector(".lightbox-caption span");
const closeButton = lightbox?.querySelector(".close-lightbox");

document.querySelectorAll(".look").forEach((button) => {
  button.addEventListener("click", () => {
    if (!lightbox || !lightboxImage || !lightboxTitle || !lightboxMeta) return;

    const image = button.getAttribute("data-image");
    const title = button.getAttribute("data-title") || "Dash Fashion style";
    const meta = button.getAttribute("data-meta") || "Message Dash Fashion to ask about size and availability.";

    lightboxImage.src = image || "";
    lightboxImage.alt = title;
    lightboxTitle.textContent = title;
    lightboxMeta.textContent = meta;

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
