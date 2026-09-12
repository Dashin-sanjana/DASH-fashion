const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxTitle = lightbox?.querySelector(".lightbox-caption strong");
const lightboxMeta = lightbox?.querySelector(".lightbox-caption span");
const closeButton = lightbox?.querySelector(".close-lightbox");

document.querySelectorAll(".look").forEach((button) => {
  button.addEventListener("pointermove", (event) => {
    const bounds = button.getBoundingClientRect();
    button.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
    button.style.setProperty("--my", `${event.clientY - bounds.top}px`);
  });

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

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
