document.addEventListener('DOMContentLoaded', () => {
    // Lógica para mostrar/esconder a bio
    const bioBtn = document.getElementById('bio-btn');
    const bioText = document.getElementById('bio-text');

    bioBtn.addEventListener('click', () => {
        const isHidden = bioText.classList.toggle('show');
        bioBtn.textContent = isHidden ? 'Ocultar informações' : 'Conheça a Professora Luana';
        bioBtn.setAttribute('aria-expanded', isHidden);
    });

    // Lógica para a navegação por seções
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');

    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();

            // Esconde todas as seções e remove a classe 'active'
            contentSections.forEach(section => {
                section.classList.add('hidden-section');
            });
            navItems.forEach(nav => {
                nav.classList.remove('active');
            });

            // Mostra a seção clicada e adiciona a classe 'active'
            const targetId = item.dataset.target;
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.remove('hidden-section');
                item.classList.add('active');
            }
        });
    });
});