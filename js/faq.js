function initializeFAQ() {
  document.querySelectorAll(".faq__question").forEach(button => button.addEventListener("click", () => {
    const opening = button.getAttribute("aria-expanded") !== "true";
    document.querySelectorAll(".faq__question").forEach(other => { other.setAttribute("aria-expanded", "false"); document.getElementById(other.getAttribute("aria-controls")).hidden = true; });
    if (opening) { button.setAttribute("aria-expanded", "true"); document.getElementById(button.getAttribute("aria-controls")).hidden = false; }
  }));
}
