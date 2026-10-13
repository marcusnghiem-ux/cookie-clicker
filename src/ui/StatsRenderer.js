/**
 * StatsRenderer: Formats and displays the comprehensive game statistics,
 * upgrades showcase, and achievement matrix.
 */
import { BUILDINGS } from '../config/BuildingsData.js';
import { UPGRADES } from '../config/UpgradesData.js';
import { ACHIEVEMENTS } from '../config/AchievementsData.js';

export class StatsRenderer {
  constructor(game) {
    this.game = game;
  }

  getMilkFlavor(fraction) {
    if (fraction < 0.1) return 'Plain Milk';
    if (fraction < 0.25) return 'Chocolate Milk';
    if (fraction < 0.5) return 'Raspberry Milk';
    if (fraction < 0.75) return 'Orange Milk';
    if (fraction < 0.9) return 'Caramel Milk';
    return 'Cosmic Milk';
  }

  formatTime(ms) {
    const totalSecs = Math.floor(ms / 1000);
    const days = Math.floor(totalSecs / 86400);
    const hours = Math.floor((totalSecs % 86400) / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;

    let parts = [];
    if (days > 0) parts.push(`${days}d`);
    if (hours > 0) parts.push(`${hours}h`);
    if (mins > 0) parts.push(`${mins}m`);
    parts.push(`${secs}s`);
    return parts.join(' ');
  }

  render(containerEl) {
    const state = this.game.state;
    const now = Date.now();
    const runDuration = now - state.ascensionStartTime;
    const allTimeDuration = now - state.startTime;

    const totalBuildings = Object.values(state.buildings).reduce((a, b) => a + b, 0);

    const regularAch = ACHIEVEMENTS.filter(a => !a.isShadow);
    const unlockedRegular = regularAch.filter(a => state.achievements.includes(a.id));
    const shadowAch = ACHIEVEMENTS.filter(a => a.isShadow);
    const unlockedShadow = shadowAch.filter(a => state.achievements.includes(a.id));

    const milkPercent = Math.min(100, Math.floor((unlockedRegular.length / Math.max(1, regularAch.length)) * 100));
    const milkName = this.getMilkFlavor(unlockedRegular.length / regularAch.length);

    const purchasedUpgrades = UPGRADES.filter(u => state.upgrades.includes(u.id));

    let html = `
      <div class="stats-panel-content">
        <h2 class="panel-section-title">Statistics</h2>

        <div class="stats-section">
          <div class="stats-subsection-title">General <span class="tiny-cookie-clickable" style="cursor:pointer; font-size:1rem; opacity:0.6;" title="A tiny cookie! (click me)">🍪</span></div>
          <div class="stats-row"><span class="stats-label">Cookies in bank:</span> <span class="stats-val">${this.game.formatNumber(state.cookies)}</span></div>
          <div class="stats-row"><span class="stats-label">Cookies baked (this ascension):</span> <span class="stats-val">${this.game.formatNumber(state.totalCookiesBaked)}</span></div>
          <div class="stats-row"><span class="stats-label">Cookies baked (all time):</span> <span class="stats-val">${this.game.formatNumber(state.totalCookiesBakedAllTime)}</span></div>
          <div class="stats-row"><span class="stats-label">Run started:</span> <span class="stats-val">${this.formatTime(runDuration)} ago</span></div>
          <div class="stats-row"><span class="stats-label">Legacy started:</span> <span class="stats-val">${this.formatTime(allTimeDuration)} ago</span></div>
          <div class="stats-row"><span class="stats-label">Buildings owned:</span> <span class="stats-val">${totalBuildings}</span></div>
          <div class="stats-row"><span class="stats-label">Cookies per second:</span> <span class="stats-val">${this.game.formatNumber(state.cps)}</span></div>
          <div class="stats-row"><span class="stats-label">Raw cookies per second:</span> <span class="stats-val">${this.game.formatNumber(state.cps)}</span></div>
          <div class="stats-row"><span class="stats-label">Cookies per click:</span> <span class="stats-val">${this.game.formatNumber(state.clickPower)}</span></div>
          <div class="stats-row"><span class="stats-label">Cookie clicks:</span> <span class="stats-val">${state.totalManualClicks.toLocaleString()}</span></div>
          <div class="stats-row"><span class="stats-label">Hand-made cookies:</span> <span class="stats-val">${this.game.formatNumber(state.cookiesClicked)}</span></div>
          <div class="stats-row"><span class="stats-label">Golden cookies clicked:</span> <span class="stats-val">${state.goldenClicks.toLocaleString()}</span></div>
          <div class="stats-row"><span class="stats-label">News ticker clicks:</span> <span class="stats-val">${state.tickerClicks.toLocaleString()}</span></div>
        </div>

        <div class="stats-section">
          <div class="stats-subsection-title">Prestige</div>
          <div class="stats-row"><span class="stats-label">Prestige level:</span> <span class="stats-val">${state.prestigeLevel.toLocaleString()}</span></div>
          <div class="stats-row"><span class="stats-label">Heavenly chips:</span> <span class="stats-val">${state.heavenlyChips.toLocaleString()} (+${state.heavenlyChips}% CpS bonus)</span></div>
          <div class="stats-row"><span class="stats-label">Prestige potential on ascend:</span> <span class="stats-val">+${Math.max(0, state.calcPrestigeFromCookies(state.totalCookiesBakedAllTime) - state.prestigeLevel).toLocaleString()}</span></div>
        </div>

        <div class="stats-section">
          <div class="stats-subsection-title">Upgrades Unlocked (${purchasedUpgrades.length} / ${UPGRADES.length} - ${Math.floor((purchasedUpgrades.length / UPGRADES.length) * 100)}%)</div>
          <div class="upgrades-inventory-grid">
            ${purchasedUpgrades.length === 0 ? '<div class="muted-note">No upgrades purchased yet.</div>' : ''}
            ${purchasedUpgrades.map(u => `
              <div class="upgrade-inv-icon" data-upgrade-id="${u.id}" title="${u.name}: ${u.desc}">
                ${u.icon}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="stats-section">
          <div class="stats-subsection-title">
            Achievements (${unlockedRegular.length} / ${regularAch.length} - ${milkPercent}%)
            <span class="milk-sublabel">Milk: ${milkName} (${milkPercent}%)</span>
          </div>
          <div class="achievements-matrix-grid">
            ${regularAch.map(a => {
              const unlocked = state.achievements.includes(a.id);
              return `
                <div class="ach-grid-tile ${unlocked ? 'unlocked' : 'locked'}"
                     data-ach-id="${a.id}">
                  <div class="tile-icon">${unlocked ? a.icon : '❓'}</div>
                  <div class="tile-title">${unlocked ? a.name : '???'}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        ${shadowAch.length > 0 ? `
          <div class="stats-section">
            <div class="stats-subsection-title">Shadow Achievements (${unlockedShadow.length} / ${shadowAch.length})</div>
            <div class="muted-note">These are rare feats and special accomplishments that do not contribute to milk.</div>
            <div class="achievements-matrix-grid">
              ${shadowAch.map(a => {
                const unlocked = state.achievements.includes(a.id);
                return `
                  <div class="ach-grid-tile shadow-tile ${unlocked ? 'unlocked' : 'locked'}"
                       data-ach-id="${a.id}">
                    <div class="tile-icon">${unlocked ? a.icon : '💀'}</div>
                    <div class="tile-title">${unlocked ? a.name : '???'}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        ` : ''}

      </div>
    `;

    containerEl.innerHTML = html;

    // Attach click listener for tiny cookie
    const tinyCookie = containerEl.querySelector('.tiny-cookie-clickable');
    if (tinyCookie) {
      tinyCookie.addEventListener('click', () => {
        state.hasClickedTinyCookie = true;
        this.game.achievements.checkAll();
        this.render(containerEl);
      });
    }

    // Attach tooltip and click listeners for achievement tiles
    const tiles = containerEl.querySelectorAll('.ach-grid-tile');
    tiles.forEach(tile => {
      const achId = tile.dataset.achId;
      const ach = ACHIEVEMENTS.find(a => a.id === achId);
      if (!ach) return;

      const unlocked = state.achievements.includes(ach.id);

      tile.addEventListener('click', () => {
        if (ach.id === 'ach_here_you_go') {
          state.hasClickedAchievementSlot = true;
          this.game.achievements.checkAll();
          this.render(containerEl);
        }
      });

      tile.addEventListener('mouseenter', () => {
        const tooltipHtml = `
          <div class="tooltip-header">
            <span class="tooltip-icon">${unlocked ? ach.icon : '❓'}</span>
            <div class="tooltip-title-group">
              <div class="tooltip-name">${unlocked ? ach.name : (ach.isShadow ? 'Shadow Achievement' : 'Locked Achievement')}</div>
              <div class="tooltip-cost ${unlocked ? 'affordable' : 'unaffordable'}">
                ${unlocked ? 'Unlocked' : 'Locked'}
              </div>
            </div>
          </div>
          <div class="tooltip-body">
            <div class="tooltip-stat">${unlocked ? ach.desc : (ach.isShadow ? 'Mysterious feat.' : ach.desc)}</div>
          </div>
        `;
        this.game.tooltips.show(tooltipHtml, tile);
      });

      tile.addEventListener('mouseleave', () => {
        this.game.tooltips.hide();
      });
    });
  }
}
