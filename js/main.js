document.addEventListener("DOMContentLoaded", () => {
  renderNavbar(); renderCurrentPage(); renderFooter();
  document.querySelectorAll("[data-site-logo]").forEach(img => img.src = SITE_CONFIG.assets.logo);
  document.querySelectorAll("[data-department-logo]").forEach(img => img.src = SITE_CONFIG.assets.departmentLogos[img.dataset.departmentLogo]);
  document.querySelectorAll("[data-background]").forEach(el => el.style.backgroundImage = `url('${SITE_CONFIG.assets.backgrounds[el.dataset.background]}')`);
  document.querySelector("link[rel='icon']").href = SITE_CONFIG.assets.favicon;
  initializeNavigation(); initializeFAQ(); initializeAnimations();
});
