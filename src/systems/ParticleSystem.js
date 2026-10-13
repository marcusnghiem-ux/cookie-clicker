/**
 * ParticleSystem: Floating click numbers, crumb bursts, and interactive animations.
 */
export class ParticleSystem {
  constructor(game) {
    this.game = game;
    this.container = null;
    this.init();
  }

  init() {
    let container = document.getElementById('particle-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'particle-container';
      document.body.appendChild(container);
    }
    this.container = container;
  }

  // Floating score or text on click
  spawnFloatingText(text, x, y, color = '#ffffff') {
    if (!this.container) return;

    const el = document.createElement('div');
    el.className = 'floating-number';
    el.textContent = text;
    if (color) el.style.color = color;

    // Slight random horizontal scatter
    const offsetX = (Math.random() - 0.5) * 36;
    const offsetY = (Math.random() - 0.5) * 16;

    el.style.left = `${x + offsetX}px`;
    el.style.top = `${y + offsetY}px`;

    this.container.appendChild(el);

    // Auto-remove after animation finishes (1.2s)
    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 1200);
  }

  // Cookie crumb explosion physics
  spawnCookieCrumbs(x, y, count = 6) {
    if (!this.game.state.settings.particles) return;
    if (!this.container) return;

    for (let i = 0; i < count; i++) {
      const crumb = document.createElement('div');
      crumb.className = 'cookie-crumb';

      const angle = Math.random() * Math.PI * 2;
      const speed = 40 + Math.random() * 90;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed - 40; // initial upward bias

      const size = 4 + Math.random() * 7;
      crumb.style.width = `${size}px`;
      crumb.style.height = `${size}px`;
      crumb.style.left = `${x}px`;
      crumb.style.top = `${y}px`;

      this.container.appendChild(crumb);

      const startTime = performance.now();
      const duration = 650; // ms

      const animate = (now) => {
        const elapsed = (now - startTime) / 1000;
        const progress = Math.min(1, (now - startTime) / duration);

        const currentX = x + vx * elapsed;
        const currentY = y + vy * elapsed + 0.5 * 380 * elapsed * elapsed; // gravity
        const opacity = 1 - progress;

        crumb.style.transform = `translate(${currentX - x}px, ${currentY - y}px) rotate(${elapsed * 360}deg)`;
        crumb.style.opacity = opacity;

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          if (crumb.parentNode) crumb.parentNode.removeChild(crumb);
        }
      };

      requestAnimationFrame(animate);
    }
  }
}
