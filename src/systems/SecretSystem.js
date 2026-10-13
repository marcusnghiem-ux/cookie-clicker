/**
 * SecretSystem: Iconic Cookie Clicker secrets & easter eggs:
 * 1. Cookie Dunker (drag Big Cookie into milk)
 * 2. Rubber Duck in milk (clickable with squeaks)
 * 3. Milk splashing physics
 * 4. Special Bakery Name triggers ("Orteil", "Ortiel")
 * 5. Wrinklers & Grandmapocalypse (fleshy leeches latching to the cookie, digesting CpS, bursting for 110% reward)
 * 6. "Just plain lucky" random chance roll
 */
export class SecretSystem {
  constructor(game) {
    this.game = game;
    this.wrinklers = []; // [{ id, angle, suckedCookies, clicks, el }]
    this.maxWrinklers = 10;
    this.wrinklerSpawnTimer = 30; // seconds between spawn checks
    this.isDunked = false;
  }

  init() {
    this.setupCookieDunker();
    this.setupRubberDuck();
    this.setupMilkSplashing();
    this.setupWrinklersContainer();
  }

  // --- 1. COOKIE DUNKER (DRAG COOKIE DOWN TO MILK) ---
  setupCookieDunker() {
    const cookie = document.getElementById('big-cookie');
    const stage = document.querySelector('.big-cookie-stage');
    if (!cookie || !stage) return;

    let isDragging = false;
    let startY = 0;
    let currentY = 0;

    const onPointerDown = (e) => {
      isDragging = true;
      startY = e.clientY;
      currentY = 0;
      cookie.style.transition = 'none';
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      const dy = e.clientY - startY;
      // Allow downward dragging toward milk
      if (dy > 0) {
        currentY = dy;
        cookie.style.transform = `translateY(${Math.min(220, dy)}px)`;

        // Check if cookie reaches milk container
        const cookieRect = cookie.getBoundingClientRect();
        const milk = document.getElementById('milk-container');
        if (milk) {
          const milkRect = milk.getBoundingClientRect();
          if (cookieRect.bottom >= milkRect.top + 20) {
            this.triggerCookieDunk(cookieRect.left + cookieRect.width / 2, milkRect.top);
          }
        }
      }
    };

    const onPointerUp = () => {
      if (!isDragging) return;
      isDragging = false;
      cookie.style.transition = 'transform 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)';
      cookie.style.transform = '';
    };

    cookie.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  }

  triggerCookieDunk(x, y) {
    if (this.isDunked) return;
    this.isDunked = true;

    // Splash animation & audio
    this.splashMilk(x, y, 14);
    this.game.audio.playClick();

    // Unlock Cookie-dunker achievement
    this.game.state.hasDunkedCookie = true;
    this.game.achievements.checkAll();
    this.game.notifications.showBanner('SPLASH! Cookie dunked in milk!', 'offline');

    setTimeout(() => {
      this.isDunked = false;
    }, 2000);
  }

  // --- 2. RUBBER DUCK IN MILK ---
  setupRubberDuck() {
    const milk = document.getElementById('milk-container');
    if (!milk) return;

    let duck = document.getElementById('milk-rubber-duck');
    if (!duck) {
      duck = document.createElement('div');
      duck.id = 'milk-rubber-duck';
      duck.className = 'milk-rubber-duck';
      duck.title = 'Squeak me!';
      duck.innerHTML = '🦆';
      milk.appendChild(duck);

      duck.addEventListener('click', (e) => {
        e.stopPropagation();
        this.squeakDuck(e.clientX, e.clientY);
      });
    }
  }

  squeakDuck(x, y) {
    this.game.audio.playDuckSqueak();
    this.splashMilk(x, y, 8);
    this.game.particles.spawnFloatingText('Squeak!', x, y, '#ffff55');
    this.game.state.duckSqueaks = (this.game.state.duckSqueaks || 0) + 1;
    this.game.achievements.checkAll();
  }

  // --- 3. MILK SPLASHING ---
  setupMilkSplashing() {
    const milk = document.getElementById('milk-container');
    if (!milk) return;

    milk.style.pointerEvents = 'auto'; // allow clicking milk
    milk.addEventListener('click', (e) => {
      this.splashMilk(e.clientX, e.clientY, 8);
    });
  }

  splashMilk(x, y, count = 8) {
    const container = this.game.particles.container;
    if (!container) return;

    for (let i = 0; i < count; i++) {
      const drop = document.createElement('div');
      drop.className = 'milk-drop';
      const angle = Math.PI + (Math.random() - 0.5) * Math.PI * 0.8;
      const speed = 60 + Math.random() * 110;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      drop.style.left = `${x}px`;
      drop.style.top = `${y}px`;
      container.appendChild(drop);

      const start = performance.now();
      const dur = 550;

      const anim = (now) => {
        const elapsed = (now - start) / 1000;
        const p = Math.min(1, (now - start) / dur);
        const currX = x + vx * elapsed;
        const currY = y + vy * elapsed + 0.5 * 400 * elapsed * elapsed;
        drop.style.transform = `translate(${currX - x}px, ${currY - y}px) scale(${1 - p * 0.5})`;
        drop.style.opacity = 1 - p;

        if (p < 1) requestAnimationFrame(anim);
        else if (drop.parentNode) drop.parentNode.removeChild(drop);
      };
      requestAnimationFrame(anim);
    }
  }

  // --- 4. GRANDMAPOCALYPSE & WRINKLERS ---
  setupWrinklersContainer() {
    let container = document.getElementById('wrinklers-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'wrinklers-container';
      container.className = 'wrinklers-container';
      const stage = document.querySelector('.big-cookie-stage');
      if (stage) stage.appendChild(container);
    }
  }

  isGrandmapocalypseActive() {
    const purchased = new Set(this.game.state.upgrades);
    return purchased.has('up_research_onemind') || purchased.has('up_research_elderpact');
  }

  update(dt) {
    // 1. "Just plain lucky" random chance roll (1 in 10000 per second)
    if (!this.game.state.achievements.includes('ach_shadow_lucky')) {
      if (Math.random() < (dt / 10000)) {
        this.game.state.hasRolledLucky = true;
        this.game.achievements.checkAll();
      }
    }

    // 2. Grandmapocalypse & Wrinklers
    const active = this.isGrandmapocalypseActive();
    const appEl = document.getElementById('game-app');
    if (appEl) {
      if (active) appEl.classList.add('grandmapocalypse-mode');
      else appEl.classList.remove('grandmapocalypse-mode');
    }

    if (active) {
      // Spawn timer
      this.wrinklerSpawnTimer -= dt;
      if (this.wrinklerSpawnTimer <= 0 && this.wrinklers.length < this.maxWrinklers) {
        this.spawnWrinkler();
        this.wrinklerSpawnTimer = 15 + Math.random() * 20;
      }

      // Each wrinkler withers 5% of CpS and digests it with 1.1x multiplier
      const cpsWitheredPerWrinkler = this.game.state.cps * 0.05;
      for (const w of this.wrinklers) {
        w.suckedCookies += cpsWitheredPerWrinkler * dt * 1.1;
      }
    }
  }

  spawnWrinkler() {
    const container = document.getElementById('wrinklers-container');
    if (!container) return;

    const slotIndex = this.wrinklers.length;
    const angle = (slotIndex / this.maxWrinklers) * (Math.PI * 2);

    const wrinkler = {
      id: `wrinkler_${Date.now()}_${Math.random()}`,
      angle: angle,
      suckedCookies: 0,
      clicks: 0,
      el: document.createElement('div')
    };

    wrinkler.el.className = 'wrinkler-entity';
    wrinkler.el.title = 'Click 3 times to pop!';
    wrinkler.el.innerHTML = '🐛';

    // Position around cookie radius
    const radius = 105;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const deg = (angle * 180 / Math.PI) + 90;

    wrinkler.el.style.transform = `translate(${x}px, ${y}px) rotate(${deg}deg)`;

    wrinkler.el.addEventListener('click', (e) => {
      e.stopPropagation();
      this.clickWrinkler(wrinkler, e);
    });

    container.appendChild(wrinkler.el);
    this.wrinklers.push(wrinkler);
  }

  clickWrinkler(wrinkler, e) {
    wrinkler.clicks++;
    this.game.audio.playSquish();
    this.game.particles.spawnFloatingText(`Pop! (${3 - wrinkler.clicks})`, e.clientX, e.clientY, '#ea6464');

    // Shake wrinkler on hit
    wrinkler.el.classList.add('shaking');
    setTimeout(() => wrinkler.el.classList.remove('shaking'), 200);

    if (wrinkler.clicks >= 3) {
      this.popWrinkler(wrinkler, e.clientX, e.clientY);
    }
  }

  popWrinkler(wrinkler, x, y) {
    const idx = this.wrinklers.indexOf(wrinkler);
    if (idx !== -1) this.wrinklers.splice(idx, 1);

    if (wrinkler.el && wrinkler.el.parentNode) {
      wrinkler.el.parentNode.removeChild(wrinkler.el);
    }

    // Award all digested cookies
    const reward = Math.max(10, Math.floor(wrinkler.suckedCookies));
    this.game.state.cookies += reward;
    this.game.state.totalCookiesBaked += reward;
    this.game.state.totalCookiesBakedAllTime += reward;
    this.game.state.wrinklersPopped = (this.game.state.wrinklersPopped || 0) + 1;

    this.game.audio.playGoldenClick();
    this.game.particles.spawnFloatingText(`+${this.game.formatNumber(reward)} cookies!`, x, y, '#ffd700');
    this.game.particles.spawnCookieCrumbs(x, y, 12);
    this.game.achievements.checkAll();
  }

  // --- 5. BAKERY NAME EASTER EGGS ---
  checkBakeryName(name) {
    const lower = name.trim().toLowerCase();
    if (lower === 'orteil') {
      this.game.state.hasNamedOrteil = true;
      this.game.notifications.showBanner("Bakery names like this are bad luck: -1% CpS (just kidding!)", 'warning');
      this.game.achievements.checkAll();
    } else if (lower === 'ortiel') {
      this.game.state.hasNamedOrtiel = true;
      this.game.notifications.showBanner("Did you misspell Orteil on purpose?", 'warning');
      this.game.achievements.checkAll();
    }
  }
}
