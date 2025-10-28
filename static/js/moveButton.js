document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('moveBtn');
    const zone = document.getElementById('moveBtn-zone');
    const initialTransform = btn.style.transform || '';
    let lastMove = 0;
    const moveCooldown = 700; // ms

    function getRandomOffset(extraDistance = false) {
        // Si la souris est très proche, le bouton saute plus loin
        const minOffset = extraDistance ? 120 : 60;
        const maxOffset = extraDistance ? 220 : 120;
        const angle = Math.random() * 2 * Math.PI;
        const radius = minOffset + Math.random() * (maxOffset - minOffset);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return { x, y };
    }

    zone.addEventListener('mousemove', function(e) {
        const now = Date.now();
        if (now - lastMove < moveCooldown) return;
        const rect = btn.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const padding = 50; // zone d'évitement plus large
        const veryClose = (
            mouseX > rect.left - 10 && mouseX < rect.right + 10 &&
            mouseY > rect.top - 10 && mouseY < rect.bottom + 10
        );
        if (
            mouseX > rect.left - padding && mouseX < rect.right + padding &&
            mouseY > rect.top - padding && mouseY < rect.bottom + padding
        ) {
            lastMove = now;
            const offset = getRandomOffset(veryClose);
            btn.style.transform = `translate(${offset.x}px, ${offset.y}px)`;
            setTimeout(() => {
                btn.style.transform = initialTransform;
            }, 600);
        }
    });
    // Le clic fonctionne à nouveau : si l'utilisateur réussit, il est redirigé vers /about
});
