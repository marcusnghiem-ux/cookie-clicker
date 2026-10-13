/**
 * SaveManager: Handles localStorage persistence, Base64 save import/export, and offline progress calculation.
 */
export class SaveManager {
  static STORAGE_KEY = 'CookieClicker_WebSave_v1';

  static save(state) {
    try {
      const data = {
        cookies: state.cookies,
        totalCookiesBaked: state.totalCookiesBaked,
        totalCookiesBakedAllTime: state.totalCookiesBakedAllTime,
        cookiesClicked: state.cookiesClicked,
        totalManualClicks: state.totalManualClicks,
        goldenClicks: state.goldenClicks,
        tickerClicks: state.tickerClicks,
        bakeryName: state.bakeryName,
        hasRenamedBakery: state.hasRenamedBakery,
        hasCheated: state.hasCheated,
        hasClickedAchievementSlot: state.hasClickedAchievementSlot,
        hasClickedTinyCookie: state.hasClickedTinyCookie,
        startTime: state.startTime,
        ascensionStartTime: state.ascensionStartTime,
        lastSaveTime: Date.now(),
        buildings: state.buildings,
        upgrades: state.upgrades,
        achievements: state.achievements,
        prestigeLevel: state.prestigeLevel,
        heavenlyChips: state.heavenlyChips,
        settings: state.settings
      };

      const jsonStr = JSON.stringify(data);
      localStorage.setItem(this.STORAGE_KEY, jsonStr);
      return true;
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
      return false;
    }
  }

  static load(state) {
    try {
      const jsonStr = localStorage.getItem(this.STORAGE_KEY);
      if (!jsonStr) return null;

      const data = JSON.parse(jsonStr);
      this.applyDataToState(state, data);

      // Offline progress calculation
      const now = Date.now();
      const lastSave = data.lastSaveTime || now;
      const secondsAway = Math.max(0, (now - lastSave) / 1000);

      let offlineCookies = 0;
      if (secondsAway > 10 && state.cps > 0) {
        // Cap offline calculation at 24 hours (86,400 seconds), 80% efficiency
        const countedSeconds = Math.min(secondsAway, 86400);
        offlineCookies = Math.floor(countedSeconds * state.cps * 0.8);
        state.cookies += offlineCookies;
        state.totalCookiesBaked += offlineCookies;
        state.totalCookiesBakedAllTime += offlineCookies;
      }

      return {
        loaded: true,
        secondsAway,
        offlineCookies
      };
    } catch (e) {
      console.error('Failed to load from localStorage:', e);
      return null;
    }
  }

  static applyDataToState(state, data) {
    if (typeof data.cookies === 'number') state.cookies = data.cookies;
    if (typeof data.totalCookiesBaked === 'number') state.totalCookiesBaked = data.totalCookiesBaked;
    if (typeof data.totalCookiesBakedAllTime === 'number') state.totalCookiesBakedAllTime = data.totalCookiesBakedAllTime;
    if (typeof data.cookiesClicked === 'number') state.cookiesClicked = data.cookiesClicked;
    if (typeof data.totalManualClicks === 'number') state.totalManualClicks = data.totalManualClicks;
    if (typeof data.goldenClicks === 'number') state.goldenClicks = data.goldenClicks;
    if (typeof data.tickerClicks === 'number') state.tickerClicks = data.tickerClicks;
    if (data.bakeryName) state.bakeryName = data.bakeryName;
    if (data.hasRenamedBakery !== undefined) state.hasRenamedBakery = data.hasRenamedBakery;
    if (data.hasCheated !== undefined) state.hasCheated = data.hasCheated;
    if (data.hasClickedAchievementSlot !== undefined) state.hasClickedAchievementSlot = data.hasClickedAchievementSlot;
    if (data.hasClickedTinyCookie !== undefined) state.hasClickedTinyCookie = data.hasClickedTinyCookie;
    if (data.startTime) state.startTime = data.startTime;
    if (data.ascensionStartTime) state.ascensionStartTime = data.ascensionStartTime;

    if (data.buildings && typeof data.buildings === 'object') {
      for (const [id, count] of Object.entries(data.buildings)) {
        if (state.buildings[id] !== undefined) {
          state.buildings[id] = count;
        }
      }
    }

    if (Array.isArray(data.upgrades)) {
      state.upgrades = data.upgrades;
    }
    if (Array.isArray(data.achievements)) {
      state.achievements = data.achievements;
    }

    if (typeof data.prestigeLevel === 'number') state.prestigeLevel = data.prestigeLevel;
    if (typeof data.heavenlyChips === 'number') state.heavenlyChips = data.heavenlyChips;

    if (data.settings && typeof data.settings === 'object') {
      state.settings = { ...state.settings, ...data.settings };
    }
  }

  static exportSaveString(state) {
    const data = {
      cookies: state.cookies,
      totalCookiesBaked: state.totalCookiesBaked,
      totalCookiesBakedAllTime: state.totalCookiesBakedAllTime,
      cookiesClicked: state.cookiesClicked,
      totalManualClicks: state.totalManualClicks,
      goldenClicks: state.goldenClicks,
      tickerClicks: state.tickerClicks,
      bakeryName: state.bakeryName,
      hasRenamedBakery: state.hasRenamedBakery,
      hasCheated: state.hasCheated,
      hasClickedAchievementSlot: state.hasClickedAchievementSlot,
      hasClickedTinyCookie: state.hasClickedTinyCookie,
      startTime: state.startTime,
      ascensionStartTime: state.ascensionStartTime,
      lastSaveTime: Date.now(),
      buildings: state.buildings,
      upgrades: state.upgrades,
      achievements: state.achievements,
      prestigeLevel: state.prestigeLevel,
      heavenlyChips: state.heavenlyChips,
      settings: state.settings
    };

    const jsonStr = JSON.stringify(data);
    return btoa(encodeURIComponent(jsonStr));
  }

  static importSaveString(state, base64Str) {
    try {
      const decoded = decodeURIComponent(atob(base64Str.trim()));
      const data = JSON.parse(decoded);
      this.applyDataToState(state, data);
      this.save(state);
      return true;
    } catch (e) {
      console.error('Invalid save string:', e);
      return false;
    }
  }

  static wipeSave() {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
