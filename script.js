const menu = document.getElementById('mobile-menu');
const openBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

openBtn?.addEventListener('click', () => {
  menu.hidden = false;
  openBtn.setAttribute('aria-expanded', 'true');
});

closeBtn?.addEventListener('click', () => {
  menu.hidden = true;
  openBtn.setAttribute('aria-expanded', 'false');
});

menu?.addEventListener('click', (event) => {
  if (event.target === menu) {
    menu.hidden = true;
    openBtn.setAttribute('aria-expanded', 'false');
  }
});
