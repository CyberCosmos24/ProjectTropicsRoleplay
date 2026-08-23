function initializeGallery() {
  const lightbox = document.querySelector(".lightbox");
  if (!lightbox) return;

  const cards = [...document.querySelectorAll(".gallery-card")];
  const image = lightbox.querySelector(".lightbox__image");
  const caption = lightbox.querySelector(".lightbox__caption");
  const closeButton = lightbox.querySelector(".lightbox__close");
  let currentIndex = 0;
  let lastFocusedElement;

  function showImage(index) {
    currentIndex = (index + cards.length) % cards.length;
    const thumbnail = cards[currentIndex].querySelector("img");
    image.src = thumbnail.src;
    image.alt = thumbnail.alt;
    caption.textContent = `${thumbnail.alt} — ${currentIndex + 1} of ${cards.length}`;
  }

  function openLightbox(index) {
    lastFocusedElement = document.activeElement;
    showImage(index);
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
    lastFocusedElement?.focus();
  }

  cards.forEach((card, index) => card.addEventListener("click", () => openLightbox(index)));
  closeButton.addEventListener("click", closeLightbox);
  lightbox.querySelector(".lightbox__nav--previous").addEventListener("click", () => showImage(currentIndex - 1));
  lightbox.querySelector(".lightbox__nav--next").addEventListener("click", () => showImage(currentIndex + 1));
  lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", event => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") showImage(currentIndex - 1);
    if (event.key === "ArrowRight") showImage(currentIndex + 1);
  });
}
