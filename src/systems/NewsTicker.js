/**
 * NewsTicker: Cycles authentic Cookie Clicker comments and news reports.
 * Tracks user interaction for the Tabloid Addiction achievement.
 */
import { getRandomHeadline } from '../config/NewsData.js';

export class NewsTicker {
  constructor(game) {
    this.game = game;
    this.tickerEl = null;
    this.intervalId = null;
    this.currentText = "";
  }

  init(elementId = 'news-ticker-text') {
    this.tickerEl = document.getElementById(elementId);
    if (!this.tickerEl) return;

    this.nextHeadline();

    // Auto-advance every 9 seconds
    this.intervalId = setInterval(() => {
      this.nextHeadline();
    }, 9000);

    // Click handler to manually cycle and track clicks
    const container = this.tickerEl.closest('.news-ticker-container') || this.tickerEl;
    container.addEventListener('click', () => {
      this.game.state.tickerClicks++;
      this.nextHeadline();
      this.game.achievements.checkAll();
    });
  }

  nextHeadline() {
    if (!this.tickerEl) return;

    const newHeadline = getRandomHeadline(this.game.state);
    this.currentText = newHeadline;

    // Smooth fade transition
    this.tickerEl.classList.add('news-fade-out');

    setTimeout(() => {
      if (this.tickerEl) {
        this.tickerEl.textContent = newHeadline;
        this.tickerEl.classList.remove('news-fade-out');
        this.tickerEl.classList.add('news-fade-in');

        setTimeout(() => {
          if (this.tickerEl) this.tickerEl.classList.remove('news-fade-in');
        }, 300);
      }
    }, 200);
  }
}
