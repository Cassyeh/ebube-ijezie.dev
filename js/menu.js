/* ─────────────────────────────────────────────────────────────
   menu.js  —  Menu toggle · Overlay · Escape key · Navbar scroll
   ───────────────────────────────────────────────────────────── */

(function initMenu() {
  const menuBtn     = document.getElementById('menuBtn');
  const menuOverlay = document.getElementById('menu-overlay');
  const menuLabel   = menuBtn?.querySelector('.mlabel');

  if (!menuBtn || !menuOverlay) return;

  let isOpen = false;

  function toggleMenu(force) {
    isOpen = force !== undefined ? force : !isOpen;

    menuBtn.classList.toggle('open', isOpen);
    menuOverlay.classList.toggle('open', isOpen);
    menuLabel.textContent = isOpen ? 'Close' : 'Menu';
    menuBtn.setAttribute('aria-expanded', isOpen);

    /* Lock body scroll while overlay is open */
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  /* Toggle on button click */
  menuBtn.addEventListener('click', () => toggleMenu());

  /* Close when a nav link is clicked */
  menuOverlay.querySelectorAll('.ov-link').forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  /* Close on Escape key */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) toggleMenu(false);
  });
})();


(function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('sc', window.scrollY > 40);
  }, { passive: true });
})();
