/**
 * EconomyEngine: Core mathematics for Cookie Clicker.
 * Computes exact costs, bulk costs, individual building CpS, overall CpS, and click power.
 */
import { BUILDINGS } from '../config/BuildingsData.js';
import { UPGRADES } from '../config/UpgradesData.js';
import { ACHIEVEMENTS } from '../config/AchievementsData.js';

export class EconomyEngine {
  // Exact single building cost: baseCost * 1.15^owned
  static getBuildingCost(buildingId, currentOwned) {
    const b = BUILDINGS.find(x => x.id === buildingId);
    if (!b) return 0;
    return Math.floor(b.baseCost * Math.pow(1.15, currentOwned));
  }

  // Exact bulk cost for N buildings using geometric sum
  static getBulkCost(buildingId, currentOwned, count) {
    const b = BUILDINGS.find(x => x.id === buildingId);
    if (!b || count <= 0) return 0;

    if (count === 1) {
      return this.getBuildingCost(buildingId, currentOwned);
    }

    const firstPrice = b.baseCost * Math.pow(1.15, currentOwned);
    // Sum = firstPrice * (1.15^N - 1) / 0.15
    const total = firstPrice * (Math.pow(1.15, count) - 1) / 0.15;
    return Math.floor(total);
  }

  // Calculate maximum buildings affordable with current cookies
  static getMaxAffordable(buildingId, currentOwned, currentCookies) {
    const b = BUILDINGS.find(x => x.id === buildingId);
    if (!b) return 0;

    const firstPrice = b.baseCost * Math.pow(1.15, currentOwned);
    if (currentCookies < firstPrice) return 0;

    // N = floor(ln(1 + (cookies * 0.15) / firstPrice) / ln(1.15))
    const n = Math.floor(Math.log(1 + (currentCookies * 0.15) / firstPrice) / Math.log(1.15));
    return Math.max(1, n);
  }

  // Sell refund (50% of the cost of the last N buildings)
  static getBulkSellRefund(buildingId, currentOwned, count) {
    const b = BUILDINGS.find(x => x.id === buildingId);
    if (!b || currentOwned <= 0 || count <= 0) return 0;

    const actualCount = Math.min(count, currentOwned);
    // Cost of buildings from (currentOwned - actualCount) to (currentOwned - 1)
    const startOwned = currentOwned - actualCount;
    const firstPrice = b.baseCost * Math.pow(1.15, startOwned);
    const total = firstPrice * (Math.pow(1.15, actualCount) - 1) / 0.15;
    return Math.floor(total * 0.5); // 50% refund
  }

  // Count non-cursor buildings
  static getNonCursorBuildingsCount(state) {
    let total = 0;
    for (const b of BUILDINGS) {
      if (b.id !== 'cursor') {
        total += (state.buildings[b.id] || 0);
      }
    }
    return total;
  }

  // Calculate building multiplier from upgrades
  static getBuildingMultiplier(buildingId, state) {
    let mult = 1;
    const purchased = new Set(state.upgrades);

    for (const up of UPGRADES) {
      if (!purchased.has(up.id)) continue;

      if (up.type === 'building_mult' && up.target === buildingId) {
        mult *= up.multiplier;
      } else if (up.type === 'cursor_mult' && buildingId === 'cursor') {
        mult *= up.multiplier;
      }
    }

    // Grandma synergies
    if (purchased.has('up_syn_farmer_grandma')) {
      if (buildingId === 'grandma') mult *= 2;
      if (buildingId === 'farm') {
        const grandmas = state.buildings['grandma'] || 0;
        mult *= (1 + (grandmas / 14) * 0.01);
      }
    }
    if (purchased.has('up_syn_miner_grandma')) {
      if (buildingId === 'grandma') mult *= 2;
      if (buildingId === 'mine') {
        const grandmas = state.buildings['grandma'] || 0;
        mult *= (1 + (grandmas / 14) * 0.01);
      }
    }
    if (purchased.has('up_syn_factory_grandma')) {
      if (buildingId === 'grandma') mult *= 2;
      if (buildingId === 'factory') {
        const grandmas = state.buildings['grandma'] || 0;
        mult *= (1 + (grandmas / 14) * 0.01);
      }
    }
    if (purchased.has('up_syn_banker_grandma')) {
      if (buildingId === 'grandma') mult *= 2;
      if (buildingId === 'bank') {
        const grandmas = state.buildings['grandma'] || 0;
        mult *= (1 + (grandmas / 14) * 0.01);
      }
    }

    return mult;
  }

  // Calculate single building unit CpS
  static getSingleBuildingCps(buildingId, state) {
    const b = BUILDINGS.find(x => x.id === buildingId);
    if (!b) return 0;

    let base = b.baseCps;

    // Cursor gets flat bonus per non-cursor building from fingers upgrades
    if (buildingId === 'cursor') {
      const purchased = new Set(state.upgrades);
      const nonCursorCount = this.getNonCursorBuildingsCount(state);
      let fingerBonus = 0;

      if (purchased.has('up_thousand_fingers')) fingerBonus += 0.1 * nonCursorCount;
      if (purchased.has('up_million_fingers')) fingerBonus += 0.5 * nonCursorCount;
      if (purchased.has('up_billion_fingers')) fingerBonus += 5.0 * nonCursorCount;
      if (purchased.has('up_trillion_fingers')) fingerBonus += 20.0 * nonCursorCount;
      if (purchased.has('up_quadrillion_fingers')) fingerBonus += 100.0 * nonCursorCount;
      if (purchased.has('up_quintillion_fingers')) fingerBonus += 500.0 * nonCursorCount;

      base += fingerBonus;
    }

    // Grandma research hivemind bonuses
    if (buildingId === 'grandma') {
      const purchased = new Set(state.upgrades);
      const grandmas = state.buildings['grandma'] || 0;
      let grandmaBonus = 0;

      if (purchased.has('up_research_onemind')) grandmaBonus += 1 + grandmas * 0.02;
      if (purchased.has('up_research_brainsweep')) grandmaBonus += 1;
      if (purchased.has('up_research_elderpact')) {
        const portals = state.buildings['portal'] || 0;
        grandmaBonus += portals * 0.05;
      }

      base += grandmaBonus;
    }

    const mult = this.getBuildingMultiplier(buildingId, state);
    return base * mult;
  }

  // Calculate total CpS of all buildings owned of a type
  static getBuildingTotalCps(buildingId, state) {
    const count = state.buildings[buildingId] || 0;
    if (count <= 0) return 0;
    return this.getSingleBuildingCps(buildingId, state) * count;
  }

  // Calculate global multipliers (Kittens, Heavenly Chips, Active Buffs)
  static getGlobalMultiplier(state) {
    let mult = 1;
    const purchased = new Set(state.upgrades);

    // Milk multiplier from Kittens
    // Milk fraction is unlocked achievements / total normal achievements
    const normalAchievementsCount = ACHIEVEMENTS.filter(a => !a.isShadow).length;
    const unlockedNormalCount = state.achievements.filter(id => {
      const ach = ACHIEVEMENTS.find(a => a.id === id);
      return ach && !ach.isShadow;
    }).length;
    const milk = normalAchievementsCount > 0 ? (unlockedNormalCount / normalAchievementsCount) : 0;
    state.milkProgress = milk;

    for (const up of UPGRADES) {
      if (purchased.has(up.id) && up.type === 'kitten') {
        mult *= (1 + milk * up.milkFactor * 10);
      }
    }

    // Cookie biscuits (+% CpS)
    for (const up of UPGRADES) {
      if (purchased.has(up.id) && up.type === 'cookie_biscuit') {
        mult *= (1 + up.percent);
      }
    }

    // Heavenly chips (+1% per heavenly chip)
    if (state.heavenlyChips > 0) {
      mult *= (1 + state.heavenlyChips * 0.01);
    }

    // Active buffs (Frenzy: x7, etc.)
    for (const buff of state.buffs) {
      if (buff.type === 'cps') {
        mult *= buff.multiplier;
      }
    }

    return mult;
  }

  // Compute Total Raw and Effective CpS
  static calculateCps(state) {
    let rawCps = 0;
    for (const b of BUILDINGS) {
      rawCps += this.getBuildingTotalCps(b.id, state);
    }

    const globalMult = this.getGlobalMultiplier(state);
    const finalCps = rawCps * globalMult;
    state.cps = finalCps;
    return finalCps;
  }

  // Compute Click Power (Cookies per click)
  static calculateClickPower(state) {
    let clickPower = 1;
    const purchased = new Set(state.upgrades);

    // Cursor multiplier upgrades apply to clicks too
    let cursorMult = 1;
    for (const up of UPGRADES) {
      if (purchased.has(up.id) && up.type === 'cursor_mult') {
        cursorMult *= up.multiplier;
      }
    }

    // Fingers bonuses apply to clicks
    const nonCursorCount = this.getNonCursorBuildingsCount(state);
    let fingerBonus = 0;
    if (purchased.has('up_thousand_fingers')) fingerBonus += 0.1 * nonCursorCount;
    if (purchased.has('up_million_fingers')) fingerBonus += 0.5 * nonCursorCount;
    if (purchased.has('up_billion_fingers')) fingerBonus += 5.0 * nonCursorCount;
    if (purchased.has('up_trillion_fingers')) fingerBonus += 20.0 * nonCursorCount;

    clickPower = (1 + fingerBonus) * cursorMult;

    // Mouse upgrades give % of total raw CpS
    let mouseCpsPercent = 0;
    for (const up of UPGRADES) {
      if (purchased.has(up.id) && up.type === 'mouse_cps_percent') {
        mouseCpsPercent += up.percent;
      }
    }

    if (mouseCpsPercent > 0) {
      // Add % of CpS (without click frenzy)
      clickPower += (state.cps * mouseCpsPercent);
    }

    // Active Click buffs (e.g. Click Frenzy: x777)
    for (const buff of state.buffs) {
      if (buff.type === 'click') {
        clickPower *= buff.multiplier;
      }
    }

    state.clickPower = Math.max(1, clickPower);
    return state.clickPower;
  }

  // Check which upgrades can be unlocked (visible in shop)
  static checkUnlockedUpgrades(state) {
    const purchased = new Set(state.upgrades);
    return UPGRADES.filter(up => {
      // If already purchased, don't show in shop
      if (purchased.has(up.id)) return false;

      // Check unlock requirements
      const req = up.req;
      if (!req) return true;

      if (req.upgrade && !purchased.has(req.upgrade)) {
        return false;
      }

      if (req.building && (state.buildings[req.building] || 0) < req.count) {
        return false;
      }
      if (req.extraBuilding && (state.buildings[req.extraBuilding] || 0) < req.extraCount) {
        return false;
      }
      if (req.clickedCookies && state.cookiesClicked < req.clickedCookies) {
        return false;
      }
      if (req.bakedCookies && state.totalCookiesBakedAllTime < req.bakedCookies) {
        return false;
      }
      if (req.achievements && state.achievements.length < req.achievements) {
        return false;
      }
      if (req.goldenClicks && state.goldenClicks < req.goldenClicks) {
        return false;
      }

      return true;
    });
  }
}
