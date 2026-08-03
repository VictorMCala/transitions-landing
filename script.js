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

const animated = document.querySelectorAll('.welcome-inner, .section-heading, .opportunity-card, .reason-item, .prague, .numbers, .partner, .conversation, .contact-list, .social');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  animated.forEach((el) => observer.observe(el));
} else {
  animated.forEach((el) => el.classList.add('is-visible'));
}