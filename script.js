// Efek Muncul saat Scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card-anim');
    cards.forEach(card => {
        const speed = 1.5;
        const rect = card.getBoundingClientRect();
        if(rect.top < window.innerHeight) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});