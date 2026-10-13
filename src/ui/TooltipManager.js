/**
 * TooltipManager: Displays rich, responsive tooltips for buildings, upgrades, and achievements.
 * Prevents tooltips from clipping off-screen.
 */
export class TooltipManager {
  constructor(game) {
    this.game = game;
    this.tooltipEl = null;
    this.init();
  }

  init() {
    let el = document.getElementById('game-tooltip');
    if (!el) {
      el = document.createElement('div');
      el.id = 'game-tooltip';
      el.className = 'game-tooltip hidden';
      document.body.appendChild(el);
    }
    this.tooltipEl = el;
  }

  show(htmlContent, targetEl) {
    if (!this.tooltipEl) return;

    this.tooltipEl.innerHTML = htmlContent;
    this.tooltipEl.classList.remove('hidden');

    const rect = targetEl.getBoundingClientRect();
    const tooltipRect = this.tooltipEl.getBoundingClientRect();

    // Position to the left of the element if on the right side of the screen
    let left = rect.left - tooltipRect.width - 15;
    if (left < 10) {
      // Otherwise position to the right or below
      left = rect.right + 15;
    }

    let top = rect.top + (rect.height / 2) - (tooltipRect.height / 2);
    // Boundary clamp
    top = Math.max(10, Math.min(window.innerHeight - tooltipRect.height - 10, top));
    left = Math.max(10, Math.min(window.innerWidth - tooltipRect.width - 10, left));

    this.tooltipEl.style.left = `${left}px`;
    this.tooltipEl.style.top = `${top}px`;
  }

  hide() {
    if (this.tooltipEl) {
      this.tooltipEl.classList.add('hidden');
    }
  }
}
