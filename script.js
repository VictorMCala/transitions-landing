const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  menuButton.querySelector('use').setAttribute('href', isOpen ? '#icon-menu' : '#icon-close');
  navigation.classList.toggle('is-open', !isOpen);
});

document.querySelectorAll('[data-muted]').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
});