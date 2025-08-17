// Alternar seções do menu
const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.section');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    sections.forEach(sec => sec.classList.add('hidden'));
    const target = document.getElementById(item.dataset.target);
    if (target) target.classList.remove('hidden');
  });
});

// Mostrar/ocultar metodologia + foto
const metodologiaBtn = document.getElementById('metodologia-btn');
const metodologiaContainer = document.getElementById('metodologia-container');

if (metodologiaBtn && metodologiaContainer) {
  metodologiaBtn.addEventListener('click', () => {
    metodologiaContainer.classList.toggle('hidden-text');

    if (!metodologiaContainer.classList.contains('hidden-text')) {
      metodologiaBtn.textContent = 'Ocultar informações';
      metodologiaBtn.setAttribute('aria-expanded', 'true');
    } else {
      metodologiaBtn.textContent = 'Conheça minha metodologia';
      metodologiaBtn.setAttribute('aria-expanded', 'false');
    }
  });
}
