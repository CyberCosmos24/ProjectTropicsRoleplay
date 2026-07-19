/* Reusable renderers for all shared and repeated interface elements. */
const escapeHTML = value => String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
const internalButton = (href, label, className = "button button--primary") => `<a class="${className}" href="${href}">${label}</a>`;
function externalButton(url, label, className = "button button--primary") {
  return url ? `<a class="${className}" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${label}</a>` : `<span class="${className} button--disabled" aria-disabled="true">${label} — Coming Soon</span>`;
}
const discordButton = label => externalButton(SITE_CONFIG.links.discord, label, "button button--discord");
const cadButton = label => externalButton(SITE_CONFIG.links.cad, label, "button button--cad");
const applicationButton = (key, label = "Apply to Join") => SITE_CONFIG.applications[key] ? externalButton(SITE_CONFIG.applications[key], label) : `<span class="button button--primary button--disabled" aria-disabled="true">Applications Coming Soon</span>`;
function hero({ key, eyebrow = "Project Tropics Roleplay", title, text, logo, actions = "" }) {
  return `<section class="hero" data-background="${key}"><div class="hero__overlay"></div><div class="container hero__content reveal">${logo ? `<img class="hero__logo" data-department-logo="${logo}" width="180" height="180" alt="${SITE_CONFIG.departments[logo].name} logo placeholder">` : ""}<p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="hero__lead">${text}</p><div class="button-row">${actions}</div></div></section>`;
}
function featureCard(item) { return `<article class="card feature-card reveal"><span class="card__icon" aria-hidden="true">${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p>${item[3] ? `<ul>${item[3].map(x => `<li>${x}</li>`).join("")}</ul>` : ""}</article>`; }
const cardGrid = (items, type = "feature") => `<div class="card-grid card-grid--${type}">${items.map(featureCard).join("")}</div>`;
function departmentCard(key) { const d = SITE_CONFIG.departments[key]; return `<article class="card department-card reveal"><img data-department-logo="${key}" width="112" height="112" loading="lazy" alt="${d.name} logo placeholder"><p class="eyebrow">${d.abbr}</p><h3>${d.name}</h3><p>${d.description}</p>${internalButton(`${key}.html`, `View ${d.abbr}`)}</article>`; }
function cta(title, text, actions) { return `<section class="section"><div class="container cta reveal"><p class="eyebrow">Your next chapter starts here</p><h2>${title}</h2><p>${text}</p><div class="button-row">${actions}</div></div></section>`; }
function renderNavbar() {
  const page = document.body.dataset.page;
  const dropdown = (label, items) => `<div class="nav-dropdown"><button class="nav-dropdown__toggle" type="button" aria-expanded="false">${label}<span aria-hidden="true">⌄</span></button><div class="nav-dropdown__menu">${items.join("")}</div></div>`;
  const link = (href, label, active = "") => `<a href="${href}"${page === active ? ' aria-current="page"' : ""}>${label}</a>`;
  const social = key => SITE_CONFIG.links[key] ? `<a href="${escapeHTML(SITE_CONFIG.links[key])}" target="_blank" rel="noopener noreferrer">${key[0].toUpperCase() + key.slice(1)}</a>` : `<span class="nav-disabled">${key[0].toUpperCase() + key.slice(1)} — Coming Soon</span>`;
  document.querySelector("#global-navbar").innerHTML = `<nav class="navbar" aria-label="Primary navigation"><div class="container navbar__inner"><a class="brand" href="index.html"><img data-site-logo width="48" height="48" alt="Project Tropics Roleplay logo placeholder"><span><strong>PROJECT TROPICS</strong><small>ROLEPLAY</small></span></a><button class="menu-toggle" type="button" aria-controls="nav-panel" aria-expanded="false"><span class="sr-only">Open navigation</span><span></span><span></span><span></span></button><div class="nav-panel" id="nav-panel">${link("index.html", "Home", "home")}${dropdown("Departments", Object.entries(SITE_CONFIG.departments).map(([k,d]) => link(`${k}.html`, d.name, k)))}${link("civilian.html", "Civilian", "civilian")}${dropdown("Resources", [link("rules.html", "Server Rules", "rules"), link("faq.html", "FAQ", "faq"), link("how-to-join.html", "How to Join", "join")])}${dropdown("Social Media", [social("tiktok"), social("youtube")])}<div class="nav-actions">${discordButton("Discord")}${cadButton("CAD")}</div></div></div></nav>`;
}
function renderFooter() {
  const quick = [["index.html","Home"],["civilian.html","Civilian"],["rules.html","Server Rules"],["faq.html","FAQ"],["how-to-join.html","How to Join"]];
  document.querySelector("#global-footer").innerHTML = `<div class="container footer-grid"><div><h2>Quick Links</h2>${quick.map(x=>`<a href="${x[0]}">${x[1]}</a>`).join("")}</div><div><h2>Departments</h2>${Object.entries(SITE_CONFIG.departments).map(([k,d])=>`<a href="${k}.html">${d.name}</a>`).join("")}</div><div><h2>Connect</h2>${discordButton("Join Discord")}${cadButton("Open CAD")}</div></div><div class="container footer-bottom"><strong>${SITE_CONFIG.community.name}</strong><p>${SITE_CONFIG.community.tagline}</p><p>© ${SITE_CONFIG.community.copyrightYear} ${SITE_CONFIG.community.name}. All Rights Reserved.</p><p class="disclaimer">Project Tropics Roleplay is an independent FiveM roleplay community and is not affiliated with Rockstar Games, Take-Two Interactive, Cfx.re, or FiveM.</p></div>`;
}
window.UI = { hero, featureCard, cardGrid, departmentCard, cta, discordButton, cadButton, applicationButton };
