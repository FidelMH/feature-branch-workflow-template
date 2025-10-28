document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('moveBtn');
    let container = btn.parentElement;

    // Sauvegarde la position initiale
    const initialTransform = btn.style.transform || '';

    function getRandomOffset() {
        // Décalage max en px
        const maxOffset = 120;
        const minOffset = 60;
        // Décalage aléatoire dans un cercle
        const angle = Math.random() * 2 * Math.PI;
        const radius = minOffset + Math.random() * (maxOffset - minOffset);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return { x, y };
    }

    btn.addEventListener('mouseenter', function(e) {
        const offset = getRandomOffset();
        btn.style.transform = `translate(${offset.x}px, ${offset.y}px)`;
        // Retour à la position initiale après 500ms
        setTimeout(() => {
            btn.style.transform = initialTransform;
        }, 500);
    });

    btn.addEventListener('click', function(e) {
        e.preventDefault();
    });
});
