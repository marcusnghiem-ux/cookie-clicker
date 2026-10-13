/**
 * Cookie Clicker: Main Game Controller
 * Orchestrates game state, loop, economy ticks, audio, particles, and UI.
 */
import { GameState } from './core/GameState.js';
import { EconomyEngine } from './core/EconomyEngine.js';
import { SaveManager } from './core/SaveManager.js';
import { AudioManager } from './core/AudioManager.js';

import { ParticleSystem } from './systems/ParticleSystem.js';
import { GoldenCookieSystem } from './systems/GoldenCookieSystem.js';
import { NewsTicker } from './systems/NewsTicker.js';
import { AchievementSystem } from './systems/AchievementSystem.js';
import { SecretSystem } from './systems/SecretSystem.js';

import { TooltipManager } from './ui/TooltipManager.js';
import { NotificationManager } from './ui/NotificationManager.js';
import { StatsRenderer } from './ui/StatsRenderer.js';
import { UIManager } from './ui/UIManager.js';

export class Game {
  constructor() {
    this.state = new GameState();
    this.audio = new AudioManager();

    this.particles = new ParticleSystem(this);
    this.notifications = new NotificationManager(this);
    this.tooltips = new TooltipManager(this);
    this.statsRenderer = new StatsRenderer(this);
    this.ui = new UIManager(this);
    this.news = new NewsTicker(this);
    this.goldenCookies = new GoldenCookieSystem(this);
    this.achievements = new AchievementSystem(this);
    this.secrets = new SecretSystem(this);

    this.lastFrameTime = performance.now();
    this.autoSaveTimer = null;
  }

  init() {
    // Attempt to load existing save data
    const loadResult = SaveManager.load(this.state);

    // Apply audio volume from loaded settings
    this.audio.setVolume(this.state.settings.volume || 0.5);

    // Recalculate economy based on loaded inventory
    this.recalcEconomy();

    // Initialize UI, News Ticker, and Secrets
    this.ui.init();
    this.ui.updateHeader();
    this.news.init();
    this.secrets.init();

    // Welcome back offline report
    if (loadResult && loadResult.offlineCookies > 0) {
      setTimeout(() => {
        this.notifications.showBanner(
          `Welcome back! While you were away, your bakery produced ${this.formatNumber(loadResult.offlineCookies)} cookies!`,
          'offline'
        );
      }, 500);
    }

    // Check achievements
    this.achievements.checkAll();

    // Setup Auto-Save every 30 seconds
    this.autoSaveTimer = setInterval(() => {
      this.save();
    }, 30000);

    // Start Main RAF Game Loop
    requestAnimationFrame((ts) => this.loop(ts));
  }

  loop(timestamp) {
    const dt = Math.min(1.0, (timestamp - this.lastFrameTime) / 1000);
    this.lastFrameTime = timestamp;

    this.update(dt);

    requestAnimationFrame((ts) => this.loop(ts));
  }

  update(dt) {
    // 1. Produce cookies from CpS
    if (this.state.cps > 0) {
      const generated = this.state.cps * dt;
      this.state.cookies += generated;
      this.state.totalCookiesBaked += generated;
      this.state.totalCookiesBakedAllTime += generated;
    }

    // 2. Update golden cookies, wrinklers, and active buff durations
    this.goldenCookies.update(dt);
    this.secrets.update(dt);

    // 3. Recalculate dynamic economy buffs if any expired
    this.recalcEconomy();

    // 4. Update UI displays
    this.ui.updateCounters();
    this.ui.updateBuffs();
    this.ui.updateMilk();
    this.ui.updateBuildingStore();

    // 5. Periodic achievement check
    this.achievements.checkAll();
  }

  clickBigCookie(e) {
    this.state.totalManualClicks++;
    this.audio.playClick();

    // Calculate click power
    const power = EconomyEngine.calculateClickPower(this.state);
    this.state.cookies += power;
    this.state.totalCookiesBaked += power;
    this.state.totalCookiesBakedAllTime += power;
    this.state.cookiesClicked += power;

    // Trigger visual particles
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX || (rect.left + rect.width / 2);
    const clickY = e.clientY || (rect.top + rect.height / 2);

    this.particles.spawnFloatingText(`+${this.formatNumber(power)}`, clickX, clickY, '#ffffff');
    this.particles.spawnCookieCrumbs(clickX, clickY, 6);

    // Check achievements
    this.achievements.checkAll();
    this.ui.updateCounters();
  }

  recalcEconomy() {
    EconomyEngine.calculateCps(this.state);
    EconomyEngine.calculateClickPower(this.state);
  }

  save() {
    SaveManager.save(this.state);
  }

  exportSave() {
    return SaveManager.exportSaveString(this.state);
  }

  importSave(base64Str) {
    const success = SaveManager.importSaveString(this.state, base64Str);
    if (success) {
      this.recalcEconomy();
      this.ui.updateHeader();
      this.ui.updateCounters();
      this.ui.updateOrbitCursors();
      this.ui.updateBuildingStore();
      this.achievements.checkAll();
    }
    return success;
  }

  wipeSave() {
    SaveManager.wipeSave();
    this.state.reset();
    this.recalcEconomy();
    this.ui.updateHeader();
    this.ui.updateCounters();
    this.ui.updateOrbitCursors();
    this.ui.updateBuildingStore();
    this.ui.renderCenterPanel();
    this.notifications.showBanner('Save wiped. Fresh start begun!', 'warning');
  }

  ascend() {
    const gained = this.state.ascend();
    this.save();
    this.recalcEconomy();
    this.ui.updateCounters();
    this.ui.updateOrbitCursors();
    this.ui.updateBuildingStore();
    this.notifications.showAchievement({
      name: 'Ascended to Heaven',
      desc: `Gained +${gained} Heavenly Chips!`,
      icon: '🌌',
      isShadow: false
    });
  }

  // Format numbers for clean readability
  formatNumber(num, decimals = 1) {
    if (num === null || num === undefined || isNaN(num)) return "0";
    if (num < 1000) {
      return num >= 10 ? Math.floor(num).toLocaleString() : num.toFixed(decimals);
    }

    if (!this.state.settings.numbersShort) {
      return Math.floor(num).toLocaleString();
    }

    const suffixes = [
      { v: 1e33, s: ' Decillion' },
      { v: 1e30, s: ' Nonillion' },
      { v: 1e27, s: ' Octillion' },
      { v: 1e24, s: ' Septillion' },
      { v: 1e21, s: ' Sextillion' },
      { v: 1e18, s: ' Quintillion' },
      { v: 1e15, s: ' Quadrillion' },
      { v: 1e12, s: ' Trillion' },
      { v: 1e9, s: ' Billion' },
      { v: 1e6, s: ' Million' }
    ];

    for (const item of suffixes) {
      if (num >= item.v) {
        return (num / item.v).toFixed(2) + item.s;
      }
    }

    return Math.floor(num).toLocaleString();
  }
}

// Global bootstrap on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  window.game = new Game();
  window.game.init();
});
