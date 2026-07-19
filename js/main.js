document.addEventListener("DOMContentLoaded", () => {
  const currentDepartment = SITE_CONFIG.departments[document.body.dataset.page];
  if (currentDepartment) {
    document.documentElement.style.setProperty("--department-accent", currentDepartment.accentColor);
    document.documentElement.style.setProperty("--department-contrast", contrastColor(currentDepartment.accentColor));
    document.body.classList.add("department-page");
  }
  renderNavbar(); renderCurrentPage(); renderFooter();
  document.querySelectorAll("[data-site-logo]").forEach(img => img.src = SITE_CONFIG.assets.logo);
  document.querySelectorAll("[data-department-logo]").forEach(img => img.src = SITE_CONFIG.departments[img.dataset.departmentLogo].logo);
  document.querySelectorAll("[data-background]").forEach(el => { const key = el.dataset.background; el.style.backgroundImage = `url('${SITE_CONFIG.departments[key]?.background || SITE_CONFIG.assets.backgrounds[key]}')`; });
  document.querySelector("link[rel='icon']").href = SITE_CONFIG.assets.favicon;
  initializeNavigation(); initializeFAQ(); initializeAnimations();
});
