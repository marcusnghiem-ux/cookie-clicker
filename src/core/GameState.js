/**
 * GameState: Holds player game state, serialization, and reset logic.
 */
import { BUILDINGS } from '../config/BuildingsData.js';

export class GameState {
  constructor() {
    this.reset();
  }

  reset() {
    this.cookies = 0;
    this.totalCookiesBaked = 0;
    this.totalCookiesBakedAllTime = 0;
    this.cookiesClicked = 0;
    this.totalManualClicks = 0;
    this.goldenClicks = 0;
    this.tickerClicks = 0;
    this.bakeryName = "Marcus's bakery";
    this.hasRenamedBakery = false;
    this.hasCheated = false;
    this.hasClickedAchievementSlot = false;
    this.hasClickedTinyCookie = false;

    this.startTime = Date.now();
    this.ascensionStartTime = Date.now();
    this.lastTickTime = Date.now();

    // Buildings owned: { [id]: count }
    this.buildings = {};
    BUILDINGS.forEach(b => {
      this.buildings[b.id] = 0;
    });

    // Purchased upgrades (array of IDs)
    this.upgrades = [];

    // Unlocked achievements (array of IDs)
    this.achievements = [];

    // Prestige system
    this.prestigeLevel = 0;
    this.heavenlyChips = 0;

    // Buffs active currently: [{ id, name, type, multiplier, duration, maxDuration, icon }]
    this.buffs = [];

    // UI state
    this.buyAmount = 1; // 1, 10, 100, or 'max'
    this.buyMode = 'buy'; // 'buy' or 'sell'

    // Real-time computed values
    this.cps = 0;
    this.clickPower = 1;
    this.milkProgress = 0; // 0 to 1 based on achievements

    // Settings
    this.settings = {
      volume: 0.6,
      particles: true,
      numbersShort: true, // e.g. 1.25 Million vs 1,250,000
      fastGraphics: false
    };
  }

  // Calculate prestige points gained if ascending now
  calcPrestigeFromCookies(cookies) {
    if (cookies < 1e12) return 0;
    return Math.floor(Math.cbrt(cookies / 1e12));
  }

  ascend() {
    const newPrestige = this.calcPrestigeFromCookies(this.totalCookiesBakedAllTime);
    const prestigeGained = Math.max(0, newPrestige - this.prestigeLevel);

    this.prestigeLevel = newPrestige;
    this.heavenlyChips += prestigeGained;

    // Retain stats across ascensions
    const allTimeBaked = this.totalCookiesBakedAllTime;
    const allTimeStart = this.startTime;
    const achievements = [...this.achievements];
    const bakeryName = this.bakeryName;
    const settings = { ...this.settings };
    const pLevel = this.prestigeLevel;
    const hChips = this.heavenlyChips;

    this.reset();

    this.totalCookiesBakedAllTime = allTimeBaked;
    this.startTime = allTimeStart;
    this.achievements = achievements;
    this.bakeryName = bakeryName;
    this.settings = settings;
    this.prestigeLevel = pLevel;
    this.heavenlyChips = hChips;

    return prestigeGained;
  }
}
