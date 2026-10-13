/**
 * GoldenCookieSystem: Spawns golden cookies with authentic randomized timers,
 * handles shimmering visual effects, click rewards (Lucky, Frenzy, Click Frenzy), and active buff tracking.
 */
import { UPGRADES } from '../config/UpgradesData.js';

export class GoldenCookieSystem {
  constructor(game) {
    this.game = game;
    this.activeCookieEl = null;
    this.spawnTimer = null;
    this.despawnTimer = null;
    this.spawnDelay = this.calcNextSpawnDelay();
    this.timeUntilSpawn = this.spawnDelay;
  }

  calcNextSpawnDelay() {
    // Standard Cookie Clicker: ~5 to 14 minutes (300 to 840 seconds)
    // Faster for early/active engagement: base 120s to 300s, halved with upgrades
    let minSeconds = 90;
    let maxSeconds = 240;

    const purchased = new Set(this.game.state.upgrades);
    if (purchased.has('up_lucky_day')) {
      minSeconds /= 2;
      maxSeconds /= 2;
    }
    if (purchased.has('up_serendipity')) {
      minSeconds /= 2;
      maxSeconds /= 2;
    }

    return (minSeconds + Math.random() * (maxSeconds - minSeconds));
  }

  update(dt) {
    // Update active buffs countdown
    const state = this.game.state;
    if (state.buffs.length > 0) {
      for (let i = state.buffs.length - 1; i >= 0; i--) {
        const buff = state.buffs[i];
        buff.duration -= dt;
        if (buff.duration <= 0) {
          state.buffs.splice(i, 1);
        }
      }
    }

    // Spawn countdown
    if (!this.activeCookieEl) {
      this.timeUntilSpawn -= dt;
      if (this.timeUntilSpawn <= 0) {
        this.spawnGoldenCookie();
        this.timeUntilSpawn = this.calcNextSpawnDelay();
      }
    }
  }

  spawnGoldenCookie() {
    if (this.activeCookieEl) return;

    this.game.audio.playGoldenSpawn();

    const el = document.createElement('div');
    el.className = 'golden-cookie';
    el.title = 'Golden Cookie!';
    el.innerHTML = `
      <div class="golden-cookie-inner">
        <div class="golden-shimmer"></div>
      </div>
    `;

    // Random on-screen position (avoid extreme edges)
    const padding = 80;
    const maxX = Math.max(100, window.innerWidth - padding * 2);
    const maxY = Math.max(100, window.innerHeight - padding * 2);
    const posX = padding + Math.random() * maxX;
    const posY = padding + Math.random() * maxY;

    el.style.left = `${posX}px`;
    el.style.top = `${posY}px`;

    document.body.appendChild(el);
    this.activeCookieEl = el;

    // Despawn lifetime: 13s, or 26s with upgrade
    let lifeTime = 13;
    const purchased = new Set(this.game.state.upgrades);
    if (purchased.has('up_lucky_day')) lifeTime *= 2;

    el.addEventListener('click', (e) => {
      e.stopPropagation();
      this.clickGoldenCookie(e);
    });

    this.despawnTimer = setTimeout(() => {
      this.removeGoldenCookie(true);
    }, lifeTime * 1000);
  }

  removeGoldenCookie(faded = false) {
    if (!this.activeCookieEl) return;
    clearTimeout(this.despawnTimer);

    if (faded) {
      this.activeCookieEl.classList.add('fading');
      setTimeout(() => {
        if (this.activeCookieEl && this.activeCookieEl.parentNode) {
          this.activeCookieEl.parentNode.removeChild(this.activeCookieEl);
        }
        this.activeCookieEl = null;
      }, 500);
    } else {
      if (this.activeCookieEl.parentNode) {
        this.activeCookieEl.parentNode.removeChild(this.activeCookieEl);
      }
      this.activeCookieEl = null;
    }
  }

  clickGoldenCookie(e) {
    if (!this.activeCookieEl) return;
    this.removeGoldenCookie(false);

    const state = this.game.state;
    state.goldenClicks++;
    this.game.audio.playGoldenClick();

    // Duration multiplier from Get Lucky upgrade
    let durMult = 1;
    if (state.upgrades.includes('up_get_lucky')) durMult = 2;

    // Random roll for effect:
    // 1. Lucky: 50%
    // 2. Frenzy (7x CpS): 35%
    // 3. Click Frenzy (777x Click): 15%
    const roll = Math.random();
    let effectText = '';

    if (roll < 0.50) {
      // Lucky! Gives min(15% of bank + 13, 15 minutes of CpS + 13)
      const cpsReward = Math.floor(state.cps * 900 + 13);
      const bankReward = Math.floor(state.cookies * 0.15 + 13);
      const cookiesGained = Math.max(13, Math.min(bankReward, cpsReward));

      state.cookies += cookiesGained;
      state.totalCookiesBaked += cookiesGained;
      state.totalCookiesBakedAllTime += cookiesGained;

      effectText = `Lucky! +${this.game.formatNumber(cookiesGained)} cookies!`;
      this.game.particles.spawnFloatingText(effectText, e.clientX, e.clientY, '#ffd700');
    } else if (roll < 0.85) {
      // Frenzy! x7 CpS for 77s (or 154s)
      const duration = 77 * durMult;
      state.buffs.push({
        id: 'frenzy',
        name: 'Frenzy',
        type: 'cps',
        multiplier: 7,
        duration: duration,
        maxDuration: duration,
        icon: '⚡',
        desc: 'CpS x7!'
      });

      effectText = `Frenzy! Cookie production x7 for ${duration}s!`;
      this.game.particles.spawnFloatingText(effectText, e.clientX, e.clientY, '#ffd700');
    } else {
      // Click Frenzy! x777 Click Power for 13s (or 26s)
      const duration = 13 * durMult;
      state.buffs.push({
        id: 'click_frenzy',
        name: 'Click Frenzy',
        type: 'click',
        multiplier: 777,
        duration: duration,
        maxDuration: duration,
        icon: '👆✨',
        desc: 'Clicking x777!'
      });

      effectText = `Click Frenzy! Clicking power x777 for ${duration}s!`;
      this.game.particles.spawnFloatingText(effectText, e.clientX, e.clientY, '#ff69b4');
    }

    this.game.notifications.showBanner(effectText, 'golden-buff');
    this.game.achievements.checkAll();
  }
}
