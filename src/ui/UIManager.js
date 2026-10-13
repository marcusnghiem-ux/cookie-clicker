/**
 * UIManager: Controls the 3-column UI, building store, upgrades shelf,
 * active buffs bar, orbiting cursors, milk waves, and menu modal tabs.
 */
import { BUILDINGS } from '../config/BuildingsData.js';
import { UPGRADES } from '../config/UpgradesData.js';
import { ACHIEVEMENTS } from '../config/AchievementsData.js';
import { EconomyEngine } from '../core/EconomyEngine.js';

export class UIManager {
  constructor(game) {
    this.game = game;
    this.activeTab = null; // null (visualizer), 'stats', 'options', 'info', 'legacy'
    this.orbitCursors = [];
    this._lastAvailableUpgradeIds = null;
  }

  init() {
    this.setupEventListeners();
    this.renderBuildingStore();
    this.updateOrbitCursors();
  }

  setupEventListeners() {
    // Big Cookie Clicks
    const bigCookie = document.getElementById('big-cookie');
    if (bigCookie) {
      bigCookie.addEventListener('pointerdown', (e) => {
        bigCookie.classList.add('cookie-pressed');
      });

      const releasePress = () => {
        bigCookie.classList.remove('cookie-pressed');
      };
      bigCookie.addEventListener('pointerup', releasePress);
      bigCookie.addEventListener('pointerleave', releasePress);

      bigCookie.addEventListener('click', (e) => {
        this.game.clickBigCookie(e);
      });
    }

    // Bakery Name editing
    const bakeryNameEl = document.getElementById('bakery-name');
    if (bakeryNameEl) {
      bakeryNameEl.addEventListener('click', () => {
        this.promptBakeryName();
      });
    }

    // Menu Tab Buttons
    const tabs = ['options', 'stats', 'info', 'legacy'];
    tabs.forEach(tab => {
      const btn = document.getElementById(`tab-btn-${tab}`);
      if (btn) {
        btn.addEventListener('click', () => {
          this.toggleTab(tab);
        });
      }
    });

    // Store Multiplier Buttons (1, 10, 100, Max)
    const amounts = [1, 10, 100, 'max'];
    amounts.forEach(amt => {
      const btn = document.getElementById(`buy-amt-${amt}`);
      if (btn) {
        btn.addEventListener('click', () => {
          this.setBuyAmount(amt);
        });
      }
    });

    // Store Buy / Sell Toggle
    const buyBtn = document.getElementById('mode-buy');
    const sellBtn = document.getElementById('mode-sell');
    if (buyBtn && sellBtn) {
      buyBtn.addEventListener('click', () => this.setBuyMode('buy'));
      sellBtn.addEventListener('click', () => this.setBuyMode('sell'));
    }
  }

  promptBakeryName() {
    const current = this.game.state.bakeryName;
    const entered = prompt("What should your bakery be called?", current);
    if (entered !== null && entered.trim() !== '') {
      this.game.state.bakeryName = entered.trim();
      this.game.state.hasRenamedBakery = true;
      this.game.secrets.checkBakeryName(entered);
      this.updateHeader();
      this.game.achievements.checkAll();
      this.game.save();
    }
  }

  setBuyAmount(amt) {
    this.game.state.buyAmount = amt;
    document.querySelectorAll('.store-amt-btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById(`buy-amt-${amt}`);
    if (btn) btn.classList.add('active');
    this.updateBuildingStore();
  }

  setBuyMode(mode) {
    this.game.state.buyMode = mode;
    const buyBtn = document.getElementById('mode-buy');
    const sellBtn = document.getElementById('mode-sell');

    if (mode === 'buy') {
      buyBtn.classList.add('active');
      sellBtn.classList.remove('active');
    } else {
      sellBtn.classList.add('active');
      buyBtn.classList.remove('active');
    }
    this.updateBuildingStore();
  }

  toggleTab(tab) {
    if (this.activeTab === tab) {
      this.activeTab = null; // Close back to visualizer
    } else {
      this.activeTab = tab;
    }
    this.renderCenterPanel();
  }

  renderCenterPanel() {
    const visualizer = document.getElementById('buildings-visualizer');
    const menuPanel = document.getElementById('menu-panel-container');
    const tabs = ['options', 'stats', 'info', 'legacy'];

    tabs.forEach(t => {
      const btn = document.getElementById(`tab-btn-${t}`);
      if (btn) {
        if (this.activeTab === t) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      }
    });

    if (!this.activeTab) {
      if (visualizer) visualizer.classList.remove('hidden');
      if (menuPanel) menuPanel.classList.add('hidden');
      this.updateBuildingsVisualizer();
    } else {
      if (visualizer) visualizer.classList.add('hidden');
      if (menuPanel) menuPanel.classList.remove('hidden');

      if (this.activeTab === 'stats') {
        this.game.statsRenderer.render(menuPanel);
      } else if (this.activeTab === 'options') {
        this.renderOptionsMenu(menuPanel);
      } else if (this.activeTab === 'info') {
        this.renderInfoMenu(menuPanel);
      } else if (this.activeTab === 'legacy') {
        this.renderLegacyMenu(menuPanel);
      }
    }
  }

  renderOptionsMenu(container) {
    const settings = this.game.state.settings;
    container.innerHTML = `
      <div class="menu-panel-content">
        <h2 class="panel-section-title">Options</h2>

        <div class="settings-group">
          <div class="settings-row">
            <span class="settings-label">Sound Volume:</span>
            <input type="range" id="opt-volume" min="0" max="1" step="0.05" value="${settings.volume}">
            <span id="opt-vol-val">${Math.round(settings.volume * 100)}%</span>
          </div>

          <div class="settings-row">
            <span class="settings-label">Particle Effects:</span>
            <button id="opt-particles" class="btn-setting ${settings.particles ? 'on' : 'off'}">${settings.particles ? 'ON' : 'OFF'}</button>
          </div>

          <div class="settings-row">
            <span class="settings-label">Short Numbers (M, B, T):</span>
            <button id="opt-numbers" class="btn-setting ${settings.numbersShort ? 'on' : 'off'}">${settings.numbersShort ? 'ON' : 'OFF'}</button>
          </div>
        </div>

        <div class="settings-group">
          <h3 class="panel-subtitle">Save Management</h3>
          <div class="settings-btn-row">
            <button id="btn-manual-save" class="retro-btn">Save Game</button>
            <button id="btn-export-save" class="retro-btn">Export Save</button>
            <button id="btn-import-save" class="retro-btn">Import Save</button>
            <button id="btn-wipe-save" class="retro-btn btn-danger">Wipe Save</button>
          </div>
        </div>

        <div class="settings-group">
          <h3 class="panel-subtitle">Debug & Testing</h3>
          <div class="settings-btn-row">
            <button id="btn-dbg-cookies" class="retro-btn btn-warning">+1 Million Cookies</button>
            <button id="btn-dbg-golden" class="retro-btn btn-warning">Spawn Golden Cookie</button>
            <button id="btn-dbg-speed" class="retro-btn btn-warning">Trigger Frenzy</button>
          </div>
        </div>
      </div>
    `;

    // Attach option listeners
    const volInput = document.getElementById('opt-volume');
    const volVal = document.getElementById('opt-vol-val');
    if (volInput) {
      volInput.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        settings.volume = val;
        this.game.audio.setVolume(val);
        if (volVal) volVal.textContent = `${Math.round(val * 100)}%`;
      });
    }

    const partBtn = document.getElementById('opt-particles');
    if (partBtn) {
      partBtn.addEventListener('click', () => {
        settings.particles = !settings.particles;
        partBtn.textContent = settings.particles ? 'ON' : 'OFF';
        partBtn.className = `btn-setting ${settings.particles ? 'on' : 'off'}`;
      });
    }

    const numBtn = document.getElementById('opt-numbers');
    if (numBtn) {
      numBtn.addEventListener('click', () => {
        settings.numbersShort = !settings.numbersShort;
        numBtn.textContent = settings.numbersShort ? 'ON' : 'OFF';
        numBtn.className = `btn-setting ${settings.numbersShort ? 'on' : 'off'}`;
        this.updateCounters();
        this.updateBuildingStore();
      });
    }

    document.getElementById('btn-manual-save')?.addEventListener('click', () => {
      this.game.save();
      this.game.notifications.showBanner('Game saved to local storage!', 'save');
    });

    document.getElementById('btn-export-save')?.addEventListener('click', () => {
      const code = this.game.exportSave();
      prompt('Copy your save code below:', code);
    });

    document.getElementById('btn-import-save')?.addEventListener('click', () => {
      const code = prompt('Paste your save code here:');
      if (code) {
        if (this.game.importSave(code)) {
          this.game.notifications.showBanner('Save loaded successfully!', 'save');
          this.renderCenterPanel();
          this.updateBuildingStore();
        } else {
          alert('Invalid save code!');
        }
      }
    });

    document.getElementById('btn-wipe-save')?.addEventListener('click', () => {
      if (confirm('Are you sure you want to completely wipe your save? This cannot be undone!')) {
        this.game.wipeSave();
      }
    });

    // Debug shortcuts
    document.getElementById('btn-dbg-cookies')?.addEventListener('click', () => {
      this.game.state.cookies += 1000000;
      this.game.state.totalCookiesBaked += 1000000;
      this.game.state.totalCookiesBakedAllTime += 1000000;
      this.game.state.hasCheated = true;
      this.game.achievements.checkAll();
      this.updateCounters();
      this.updateBuildingStore();
    });

    document.getElementById('btn-dbg-golden')?.addEventListener('click', () => {
      this.game.goldenCookies.spawnGoldenCookie();
    });

    document.getElementById('btn-dbg-speed')?.addEventListener('click', () => {
      this.game.state.buffs.push({
        id: 'frenzy',
        name: 'Frenzy',
        type: 'cps',
        multiplier: 7,
        duration: 77,
        maxDuration: 77,
        icon: '⚡',
        desc: 'CpS x7!'
      });
      this.game.notifications.showBanner('Frenzy activated! CpS x7 for 77s', 'golden-buff');
    });
  }

  renderInfoMenu(container) {
    container.innerHTML = `
      <div class="menu-panel-content">
        <h2 class="panel-section-title">About Cookie Clicker</h2>
        <div class="info-content-box">
          <p>This is a faithful, pixel-for-pixel web clone of the legendary <strong>Cookie Clicker</strong> originally created by Orteil.</p>
          <p>Engineered using modern HTML5, CSS3, and ES6+ modular JavaScript architecture.</p>
          <ul class="info-features-list">
            <li>✨ Authentic building economy with exponential cost curves: <code>baseCost * 1.15^owned</code></li>
            <li>✨ Full upgrade system: finger synergies, building doublers, and kitten milk multipliers</li>
            <li>✨ Golden cookie spawning with Lucky, Frenzy (7x CpS), and Click Frenzy (777x click)</li>
            <li>✨ Authentic procedural Web Audio API sounds with zero lag and zero missing audio assets</li>
            <li>✨ Orbiting cursor rings that dynamically animate and click around the Big Cookie</li>
            <li>✨ Realistic wavy milk animation scaling with achievement completion percentage</li>
            <li>✨ Robust LocalStorage save/load system, Base64 export/import, and offline cookie production</li>
          </ul>
        </div>
      </div>
    `;
  }

  renderLegacyMenu(container) {
    const state = this.game.state;
    const currentPrestige = state.prestigeLevel;
    const potentialChips = Math.max(0, state.calcPrestigeFromCookies(state.totalCookiesBakedAllTime) - currentPrestige);

    container.innerHTML = `
      <div class="menu-panel-content legacy-screen">
        <h2 class="panel-section-title legacy-title">Ascension & Legacy</h2>
        <div class="legacy-card">
          <div class="legacy-cookie-icon">🌌🍪</div>
          <p>Ascending resets your cookies and buildings, but permanently awards <strong>Heavenly Chips</strong>.</p>
          <p>Each Heavenly Chip grants a permanent <strong>+1% Cookies Per Second</strong> multiplier across all future runs!</p>
          
          <div class="legacy-stats-box">
            <div class="legacy-stat-row">
              <span>Current Prestige Level:</span>
              <strong>${currentPrestige.toLocaleString()}</strong>
            </div>
            <div class="legacy-stat-row">
              <span>Heavenly Chips Owned:</span>
              <strong>${state.heavenlyChips.toLocaleString()} (+${state.heavenlyChips}% CpS)</strong>
            </div>
            <div class="legacy-stat-row highlight">
              <span>Chips Gained Upon Ascending:</span>
              <strong>+${potentialChips.toLocaleString()}</strong>
            </div>
          </div>

          ${potentialChips > 0 ? `
            <button id="btn-ascend-now" class="retro-btn btn-ascend">Ascend to Heaven</button>
          ` : `
            <div class="muted-note">You need to bake at least 1 Trillion cookies across all time to earn your first Heavenly Chip.</div>
            <button class="retro-btn" disabled>Bake more cookies to Ascend</button>
          `}
        </div>
      </div>
    `;

    document.getElementById('btn-ascend-now')?.addEventListener('click', () => {
      if (confirm(`Ascend now for +${potentialChips} Heavenly Chips? Your cookies and buildings will be reset, but your permanent prestige bonus will increase!`)) {
        this.game.ascend();
        this.toggleTab('legacy');
        this.updateBuildingStore();
      }
    });
  }

  updateHeader() {
    const bakeryNameEl = document.getElementById('bakery-name');
    if (bakeryNameEl) {
      bakeryNameEl.textContent = this.game.state.bakeryName;
    }
  }

  updateCounters() {
    const state = this.game.state;

    // Cookie Bank Counter
    const cookieCountEl = document.getElementById('cookie-count');
    if (cookieCountEl) {
      const formatted = this.game.formatNumber(Math.floor(state.cookies));
      cookieCountEl.textContent = `${formatted} ${Math.floor(state.cookies) === 1 ? 'cookie' : 'cookies'}`;
    }

    // CpS Counter
    const cpsEl = document.getElementById('cookie-cps');
    if (cpsEl) {
      cpsEl.textContent = `per second: ${this.game.formatNumber(state.cps, 1)}`;
    }

    // Document title
    document.title = `${this.game.formatNumber(Math.floor(state.cookies))} cookies - Cookie Clicker`;
  }

  // Render the Right-column building store items once
  renderBuildingStore() {
    const container = document.getElementById('buildings-list');
    if (!container) return;

    container.innerHTML = '';
    BUILDINGS.forEach(b => {
      const row = document.createElement('div');
      row.className = 'building-item';
      row.id = `building-${b.id}`;
      row.dataset.buildingId = b.id;

      row.innerHTML = `
        <div class="building-icon-box">${b.icon}</div>
        <div class="building-info">
          <div class="building-name">${b.name}</div>
          <div class="building-cost" id="cost-${b.id}">--</div>
        </div>
        <div class="building-count" id="count-${b.id}">0</div>
      `;

      // Click to buy / sell
      row.addEventListener('click', () => {
        this.handleBuildingClick(b.id);
      });

      // Hover for rich tooltip
      row.addEventListener('mouseenter', () => {
        this.showBuildingTooltip(b.id, row);
      });
      row.addEventListener('mouseleave', () => {
        this.game.tooltips.hide();
      });

      container.appendChild(row);
    });

    this.updateBuildingStore();
  }

  handleBuildingClick(buildingId) {
    const state = this.game.state;
    const mode = state.buyMode;
    const amt = state.buyAmount;
    const owned = state.buildings[buildingId] || 0;

    if (mode === 'buy') {
      let countToBuy = 1;
      if (amt === 'max') {
        countToBuy = EconomyEngine.getMaxAffordable(buildingId, owned, state.cookies);
      } else {
        countToBuy = amt;
      }

      if (countToBuy <= 0) return;
      const cost = EconomyEngine.getBulkCost(buildingId, owned, countToBuy);

      if (state.cookies >= cost) {
        state.cookies -= cost;
        state.buildings[buildingId] = owned + countToBuy;
        this.game.audio.playBuy();
        this.game.recalcEconomy();
        this.updateBuildingStore();
        this.updateOrbitCursors();
        this.updateBuildingsVisualizer();
        this.game.achievements.checkAll();
      }
    } else {
      // Sell mode
      let countToSell = amt === 'max' ? owned : Math.min(amt, owned);
      if (countToSell <= 0) return;

      const refund = EconomyEngine.getBulkSellRefund(buildingId, owned, countToSell);
      state.cookies += refund;
      state.buildings[buildingId] = Math.max(0, owned - countToSell);
      this.game.audio.playBuy();
      this.game.recalcEconomy();
      this.updateBuildingStore();
      this.updateOrbitCursors();
      this.updateBuildingsVisualizer();
    }
  }

  showBuildingTooltip(buildingId, targetEl) {
    const state = this.game.state;
    const b = BUILDINGS.find(x => x.id === buildingId);
    if (!b) return;

    const owned = state.buildings[buildingId] || 0;
    const singleCps = EconomyEngine.getSingleBuildingCps(buildingId, state);
    const totalCps = singleCps * owned;
    const percentOfTotal = state.cps > 0 ? ((totalCps / state.cps) * 100).toFixed(1) : '0';

    const cost = EconomyEngine.getBulkCost(buildingId, owned, state.buyAmount === 'max' ? 1 : state.buyAmount);
    const canAfford = state.cookies >= cost;

    const html = `
      <div class="tooltip-header">
        <span class="tooltip-icon">${b.icon}</span>
        <div class="tooltip-title-group">
          <div class="tooltip-name">${b.name}</div>
          <div class="tooltip-cost ${canAfford ? 'affordable' : 'unaffordable'}">
            Cost: ${this.game.formatNumber(cost)} cookies
          </div>
        </div>
      </div>
      <div class="tooltip-body">
        <div class="tooltip-stat">Owned: <strong>${owned}</strong></div>
        <div class="tooltip-stat">Each produces: <strong>${this.game.formatNumber(singleCps, 1)} CpS</strong></div>
        <div class="tooltip-stat">${owned} ${b.plural} producing: <strong>${this.game.formatNumber(totalCps, 1)} CpS</strong> (${percentOfTotal}% of total)</div>
        <div class="tooltip-flavor">"${b.flavor}"</div>
      </div>
    `;

    this.game.tooltips.show(html, targetEl);
  }

  updateBuildingStore() {
    const state = this.game.state;
    const mode = state.buyMode;
    const amt = state.buyAmount;

    BUILDINGS.forEach(b => {
      const row = document.getElementById(`building-${b.id}`);
      const costEl = document.getElementById(`cost-${b.id}`);
      const countEl = document.getElementById(`count-${b.id}`);
      if (!row || !costEl || !countEl) return;

      const owned = state.buildings[b.id] || 0;
      countEl.textContent = owned.toLocaleString();

      if (mode === 'buy') {
        let countToBuy = amt === 'max' ? Math.max(1, EconomyEngine.getMaxAffordable(b.id, owned, state.cookies)) : amt;
        const cost = EconomyEngine.getBulkCost(b.id, owned, countToBuy);

        costEl.textContent = `${this.game.formatNumber(cost)} cookies`;

        if (state.cookies >= cost) {
          row.classList.remove('locked');
          row.classList.add('can-afford');
        } else {
          row.classList.add('locked');
          row.classList.remove('can-afford');
        }
      } else {
        // Sell mode
        let countToSell = amt === 'max' ? owned : Math.min(amt, owned);
        const refund = EconomyEngine.getBulkSellRefund(b.id, owned, countToSell);
        costEl.textContent = `Sell for +${this.game.formatNumber(refund)}`;

        if (owned > 0) {
          row.classList.remove('locked');
          row.classList.add('can-afford');
        } else {
          row.classList.add('locked');
          row.classList.remove('can-afford');
        }
      }
    });

    this.updateUpgradesShelf();
  }

  updateUpgradesShelf() {
    const shelf = document.getElementById('upgrades-shelf');
    if (!shelf) return;

    const available = EconomyEngine.checkUnlockedUpgrades(this.game.state);
    const availableIds = available.map(u => u.id).join(',');

    // Only rebuild DOM elements when the set of available upgrades changes
    if (this._lastAvailableUpgradeIds !== availableIds) {
      this._lastAvailableUpgradeIds = availableIds;
      shelf.innerHTML = '';
      available.forEach(up => {
        const icon = document.createElement('div');
        icon.className = `upgrade-icon ${this.game.state.cookies >= up.cost ? 'affordable' : 'unaffordable'}`;
        icon.dataset.upgradeId = up.id;
        icon.innerHTML = `<span class="up-emoji">${up.icon}</span>`;

        // Direct, robust click handler
        icon.addEventListener('click', (e) => {
          e.stopPropagation();
          this.handleBuyUpgrade(up.id);
        });

        icon.addEventListener('mouseenter', () => {
          this.showUpgradeTooltip(up, icon);
        });
        icon.addEventListener('mouseleave', () => {
          this.game.tooltips.hide();
        });

        shelf.appendChild(icon);
      });
    } else {
      // Just update affordability class on existing elements without destroying DOM
      available.forEach(up => {
        const icon = shelf.querySelector(`[data-upgrade-id="${up.id}"]`);
        if (icon) {
          const isAffordable = this.game.state.cookies >= up.cost;
          if (isAffordable) {
            icon.classList.add('affordable');
            icon.classList.remove('unaffordable');
          } else {
            icon.classList.remove('affordable');
            icon.classList.add('unaffordable');
          }
        }
      });
    }
  }

  handleBuyUpgrade(upgradeId) {
    const up = UPGRADES.find(u => u.id === upgradeId);
    if (!up) return;

    if (this.game.state.cookies >= up.cost && !this.game.state.upgrades.includes(up.id)) {
      this.game.state.cookies -= up.cost;
      this.game.state.upgrades.push(up.id);
      this.game.audio.playUpgrade();
      this.game.recalcEconomy();

      // Reset cache so shelf rebuilds without the purchased upgrade
      this._lastAvailableUpgradeIds = null;
      this.updateBuildingStore();
      this.game.tooltips.hide();
      this.game.achievements.checkAll();
      this.game.save();
    }
  }

  showUpgradeTooltip(up, targetEl) {
    const canAfford = this.game.state.cookies >= up.cost;
    const html = `
      <div class="tooltip-header">
        <span class="tooltip-icon">${up.icon}</span>
        <div class="tooltip-title-group">
          <div class="tooltip-name">${up.name}</div>
          <div class="tooltip-cost ${canAfford ? 'affordable' : 'unaffordable'}">
            Cost: ${this.game.formatNumber(up.cost)} cookies
          </div>
        </div>
      </div>
      <div class="tooltip-body">
        <div class="tooltip-stat">${up.desc}</div>
        <div class="tooltip-flavor">"${up.flavor}"</div>
      </div>
    `;
    this.game.tooltips.show(html, targetEl);
  }

  // Update orbiting cursor hands around the big cookie
  updateOrbitCursors() {
    const container = document.getElementById('cursor-orbit-ring');
    if (!container) return;

    const cursorCount = this.game.state.buildings['cursor'] || 0;
    // Cap visual cursors at 32 for performance & visual aesthetic
    const visualCount = Math.min(32, cursorCount);

    container.innerHTML = '';
    const radius = 145; // pixels from center

    for (let i = 0; i < visualCount; i++) {
      const angle = (i / visualCount) * (Math.PI * 2);
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const deg = (angle * 180 / Math.PI) + 90;

      const cursor = document.createElement('div');
      cursor.className = 'orbit-cursor';
      cursor.innerHTML = '👆';
      cursor.style.transform = `translate(${x}px, ${y}px) rotate(${deg}deg)`;

      // Staggered click animation
      cursor.style.animationDelay = `${(i % 8) * 0.4}s`;

      container.appendChild(cursor);
    }
  }

  // Update animated milk wave height
  updateMilk() {
    const milkWave = document.getElementById('milk-container');
    if (!milkWave) return;

    // Height scales between 10% and 55% of the left column based on milk progress
    const progress = this.game.state.milkProgress || 0;
    const heightPercent = 10 + progress * 45;
    milkWave.style.height = `${heightPercent}%`;
  }

  // Update center buildings visualizer
  updateBuildingsVisualizer() {
    const visualizer = document.getElementById('buildings-visualizer');
    if (!visualizer || this.activeTab) return;

    visualizer.innerHTML = '';
    BUILDINGS.forEach(b => {
      const count = this.game.state.buildings[b.id] || 0;
      if (count > 0 && b.id !== 'cursor') {
        const row = document.createElement('div');
        row.className = 'visual-building-row';

        const spriteCount = Math.min(16, count);
        let spritesHtml = '';
        for (let s = 0; s < spriteCount; s++) {
          spritesHtml += `<span class="building-sprite" style="animation-delay: ${(s * 0.15)}s">${b.icon}</span>`;
        }

        row.innerHTML = `
          <div class="visual-row-label">${b.name} (${count})</div>
          <div class="visual-sprites-strip">${spritesHtml}</div>
        `;
        visualizer.appendChild(row);
      }
    });
  }

  // Update active buffs HUD
  updateBuffs() {
    const container = document.getElementById('active-buffs-bar');
    if (!container) return;

    const buffs = this.game.state.buffs;
    if (buffs.length === 0) {
      container.innerHTML = '';
      return;
    }

    container.innerHTML = buffs.map(buff => {
      const progress = Math.max(0, Math.min(1, buff.duration / buff.maxDuration));
      return `
        <div class="buff-item">
          <div class="buff-icon">${buff.icon}</div>
          <div class="buff-details">
            <div class="buff-name">${buff.name} (${Math.ceil(buff.duration)}s)</div>
            <div class="buff-progress-bar">
              <div class="buff-progress-fill" style="width: ${progress * 100}%"></div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}
