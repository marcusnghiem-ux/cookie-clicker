/**
 * NotificationManager: Manages sliding achievement banners, buff alerts, and save notifications.
 */
export class NotificationManager {
  constructor(game) {
    this.game = game;
    this.container = null;
    this.init();
  }

  init() {
    let container = document.getElementById('notifications-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'notifications-container';
      container.className = 'notifications-container';
      document.body.appendChild(container);
    }
    this.container = container;
  }

  // Slide-in authentic achievement banner
  showAchievement(ach) {
    if (!this.container) return;

    const banner = document.createElement('div');
    banner.className = `achievement-banner ${ach.isShadow ? 'shadow-achievement' : ''}`;
    banner.innerHTML = `
      <div class="ach-icon-box">${ach.icon}</div>
      <div class="ach-content">
        <div class="ach-header">${ach.isShadow ? 'Shadow Achievement Unlocked!' : 'Achievement Unlocked'}</div>
        <div class="ach-title">${ach.name}</div>
        <div class="ach-desc">${ach.desc}</div>
      </div>
    `;

    this.container.appendChild(banner);

    // Auto dismiss after 4.5 seconds
    setTimeout(() => {
      banner.classList.add('slide-out');
      setTimeout(() => {
        if (banner.parentNode) banner.parentNode.removeChild(banner);
      }, 500);
    }, 4500);
  }

  // Generic popup alert/banner
  showBanner(message, type = 'info') {
    if (!this.container) return;

    const banner = document.createElement('div');
    banner.className = `generic-banner banner-${type}`;
    banner.innerHTML = `
      <div class="banner-text">${message}</div>
    `;

    this.container.appendChild(banner);

    setTimeout(() => {
      banner.classList.add('slide-out');
      setTimeout(() => {
        if (banner.parentNode) banner.parentNode.removeChild(banner);
      }, 400);
    }, 3200);
  }
}
