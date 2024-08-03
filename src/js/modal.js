(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const sharedContainer = document.querySelector('.sharedContainer');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.style.display = isMenuOpen ? 'none' : 'flex';
    // if (isMenuOpen) {
    //   enableBodyScroll(document.body);
    // } else {
    //   disableBodyScroll(document.body);
    // }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && mobileMenu.style.display === 'flex') {
      toggleMenu();
    }
  });

  document.addEventListener('click', function (event) {
    const isMenuVisible = mobileMenu.style.display === 'flex';
    const isClickOutsideMenu =
      !sharedContainer.contains(event.target) &&
      !openMenuBtn.contains(event.target);

    if (isMenuVisible && isClickOutsideMenu) {
      toggleMenu();
    }
  });

  window.matchMedia('(min-width: 375px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', 'false');
    enableBodyScroll(document.body);
  });
})();
