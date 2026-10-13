/**
 * Cookie Clicker Authentic Achievements Definitions (Comprehensive 100+ Milestone Matrix)
 * Covers production tiers, CpS records, building counts, clicks, upgrades, prestige, and shadow feats.
 */
export const ACHIEVEMENTS = [
  // ==========================================
  // 1. COOKIE PRODUCTION MILESTONES (ALL-TIME / ASCENSION)
  // ==========================================
  {
    id: 'ach_bake_1',
    name: 'Wake and bake',
    desc: 'Bake 1 cookie all time.',
    icon: '🍪',
    category: 'cookies',
    condition: (s) => s.totalCookiesBakedAllTime >= 1
  },
  {
    id: 'ach_bake_1k',
    name: 'Making some dough',
    desc: 'Bake 1,000 cookies all time.',
    icon: '🥣',
    category: 'cookies',
    condition: (s) => s.totalCookiesBakedAllTime >= 1000
  },
  {
    id: 'ach_bake_100k',
    name: 'So baked right now',
    desc: 'Bake 100,000 cookies all time.',
    icon: '🔥',
    category: 'cookies',
    condition: (s) => s.totalCookiesBakedAllTime >= 100000
  },
  {
    id: 'ach_bake_1m',
    name: 'Fledgling bakery',
    desc: 'Bake 1,000,000 cookies all time.',
    icon: '🏪',
    category: 'cookies',
    condition: (s) => s.totalCookiesBakedAllTime >= 1000000
  },
  {
    id: 'ach_bake_100m',
    name: 'Affluent bakery',
    desc: 'Bake 100,000,000 cookies all time.',
    icon: '💰',
    category: 'cookies',
    condition: (s) => s.totalCookiesBakedAllTime >= 100000000
  },
  {
    id: 'ach_bake_1b',
    name: 'World-famous bakery',
    desc: 'Bake 1,000,000,000 cookies all time.',
    icon: '🌍',
    category: 'cookies',
    condition: (s) => s.totalCookiesBakedAllTime >= 1000000000
  },
  {
    id: 'ach_bake_100b',
    name: 'Cosmic bakery',
    desc: 'Bake 100,000,000,000 cookies all time.',
    icon: '🪐',
    category: 'cookies',
    condition: (s) => s.totalCookiesBakedAllTime >= 100000000000
  },
  {
    id: 'ach_bake_10t',
    name: 'Galactic bakery',
    desc: 'Bake 10,000,000,000,000 cookies all time.',
    icon: '🌌',
    category: 'cookies',
    condition: (s) => s.totalCookiesBakedAllTime >= 10000000000000
  },
  {
    id: 'ach_bake_1q',
    name: 'Universal bakery',
    desc: 'Bake 1,000,000,000,000,000 cookies all time.',
    icon: '✨',
    category: 'cookies',
    condition: (s) => s.totalCookiesBakedAllTime >= 1000000000000000
  },
  {
    id: 'ach_bake_100q',
    name: 'Timeless bakery',
    desc: 'Bake 100,000,000,000,000,000 cookies all time.',
    icon: '⏳',
    category: 'cookies',
    condition: (s) => s.totalCookiesBakedAllTime >= 100000000000000000
  },
  {
    id: 'ach_bake_10quin',
    name: 'Infinite bakery',
    desc: 'Bake 10,000,000,000,000,000,000 cookies all time.',
    icon: '♾️',
    category: 'cookies',
    condition: (s) => s.totalCookiesBakedAllTime >= 1e19
  },
  {
    id: 'ach_bake_1sex',
    name: 'Immortal bakery',
    desc: 'Bake 1 Sextillion cookies all time.',
    icon: '👑',
    category: 'cookies',
    condition: (s) => s.totalCookiesBakedAllTime >= 1e21
  },
  {
    id: 'ach_bake_100sex',
    name: 'You can stop now',
    desc: 'Bake 100 Sextillion cookies all time.',
    icon: '🛑',
    category: 'cookies',
    condition: (s) => s.totalCookiesBakedAllTime >= 1e23
  },
  {
    id: 'ach_bake_1sep',
    name: 'Cookies all the way down',
    desc: 'Bake 1 Septillion cookies all time.',
    icon: '🌀',
    category: 'cookies',
    condition: (s) => s.totalCookiesBakedAllTime >= 1e24
  },

  // ==========================================
  // 2. COOKIES PER SECOND (CpS) MILESTONES
  // ==========================================
  {
    id: 'ach_cps_1',
    name: 'Casual baking',
    desc: 'Bake 1 cookie per second.',
    icon: '⏱️',
    category: 'cps',
    condition: (s) => s.cps >= 1
  },
  {
    id: 'ach_cps_10',
    name: 'Hardcore baking',
    desc: 'Bake 10 cookies per second.',
    icon: '⚡',
    category: 'cps',
    condition: (s) => s.cps >= 10
  },
  {
    id: 'ach_cps_100',
    name: 'Steady stream',
    desc: 'Bake 100 cookies per second.',
    icon: '🌊',
    category: 'cps',
    condition: (s) => s.cps >= 100
  },
  {
    id: 'ach_cps_1k',
    name: 'Cookie monster',
    desc: 'Bake 1,000 cookies per second.',
    icon: '👹',
    category: 'cps',
    condition: (s) => s.cps >= 1000
  },
  {
    id: 'ach_cps_10k',
    name: 'Mass producer',
    desc: 'Bake 10,000 cookies per second.',
    icon: '⚙️',
    category: 'cps',
    condition: (s) => s.cps >= 10000
  },
  {
    id: 'ach_cps_100k',
    name: 'Cookie vortex',
    desc: 'Bake 100,000 cookies per second.',
    icon: '🌪️',
    category: 'cps',
    condition: (s) => s.cps >= 100000
  },
  {
    id: 'ach_cps_1m',
    name: 'A world filled with cookies',
    desc: 'Bake 1,000,000 cookies per second.',
    icon: '🌐',
    category: 'cps',
    condition: (s) => s.cps >= 1000000
  },
  {
    id: 'ach_cps_10m',
    name: 'Never stop baking',
    desc: 'Bake 10,000,000 cookies per second.',
    icon: '🏭',
    category: 'cps',
    condition: (s) => s.cps >= 10000000
  },
  {
    id: 'ach_cps_100m',
    name: 'The pastry singularity',
    desc: 'Bake 100,000,000 cookies per second.',
    icon: '🕳️',
    category: 'cps',
    condition: (s) => s.cps >= 100000000
  },
  {
    id: 'ach_cps_1b',
    name: 'Cosmic kitchen',
    desc: 'Bake 1,000,000,000 cookies per second.',
    icon: '🛸',
    category: 'cps',
    condition: (s) => s.cps >= 1000000000
  },
  {
    id: 'ach_cps_10b',
    name: 'Universal oven',
    desc: 'Bake 10,000,000,000 cookies per second.',
    icon: '☀️',
    category: 'cps',
    condition: (s) => s.cps >= 10000000000
  },
  {
    id: 'ach_cps_100b',
    name: 'Omnipresent cookies',
    desc: 'Bake 100,000,000,000 cookies per second.',
    icon: '🔮',
    category: 'cps',
    condition: (s) => s.cps >= 100000000000
  },

  // ==========================================
  // 3. CLICKING STATS & HAND-MADE COOKIES
  // ==========================================
  {
    id: 'ach_click_1k',
    name: 'Clicktastic',
    desc: 'Make 1,000 cookies by clicking.',
    icon: '👆',
    category: 'clicks',
    condition: (s) => s.cookiesClicked >= 1000
  },
  {
    id: 'ach_click_100k',
    name: 'Clickathlon',
    desc: 'Make 100,000 cookies by clicking.',
    icon: '🏃',
    category: 'clicks',
    condition: (s) => s.cookiesClicked >= 100000
  },
  {
    id: 'ach_click_10m',
    name: 'Clickolympics',
    desc: 'Make 10,000,000 cookies by clicking.',
    icon: '🥇',
    category: 'clicks',
    condition: (s) => s.cookiesClicked >= 10000000
  },
  {
    id: 'ach_click_1b',
    name: 'Clickorama',
    desc: 'Make 1,000,000,000 cookies by clicking.',
    icon: '💥',
    category: 'clicks',
    condition: (s) => s.cookiesClicked >= 1000000000
  },
  {
    id: 'ach_click_100b',
    name: 'Clickasaurus',
    desc: 'Make 100,000,000,000 cookies by clicking.',
    icon: '🦖',
    category: 'clicks',
    condition: (s) => s.cookiesClicked >= 100000000000
  },
  {
    id: 'ach_click_count_100',
    name: 'Click speedster',
    desc: 'Click the big cookie 100 times.',
    icon: '🖱️',
    category: 'clicks',
    condition: (s) => s.totalManualClicks >= 100
  },
  {
    id: 'ach_click_count_1k',
    name: 'Finger marathon',
    desc: 'Click the big cookie 1,000 times.',
    icon: '🏃‍♂️',
    category: 'clicks',
    condition: (s) => s.totalManualClicks >= 1000
  },
  {
    id: 'ach_click_count_5k',
    name: 'Carpal tunnel',
    desc: 'Click the big cookie 5,000 times.',
    icon: '🩹',
    category: 'clicks',
    condition: (s) => s.totalManualClicks >= 5000
  },
  {
    id: 'ach_click_count_10k',
    name: 'Ultra-clicker',
    desc: 'Click the big cookie 10,000 times.',
    icon: '🦾',
    category: 'clicks',
    condition: (s) => s.totalManualClicks >= 10000
  },

  // ==========================================
  // 4. BUILDING TIERS (CURSOR THROUGH CHANCEMAKER)
  // ==========================================
  // Cursors
  {
    id: 'ach_bld_cursor_1',
    name: 'Click',
    desc: 'Have 1 cursor.',
    icon: '☝️',
    category: 'buildings',
    condition: (s) => (s.buildings['cursor'] || 0) >= 1
  },
  {
    id: 'ach_bld_cursor_50',
    name: 'Mouse wheel',
    desc: 'Have 50 cursors.',
    icon: '🖱️',
    category: 'buildings',
    condition: (s) => (s.buildings['cursor'] || 0) >= 50
  },
  {
    id: 'ach_bld_cursor_100',
    name: 'Of mice and men',
    desc: 'Have 100 cursors.',
    icon: '🐁',
    category: 'buildings',
    condition: (s) => (s.buildings['cursor'] || 0) >= 100
  },
  {
    id: 'ach_bld_cursor_150',
    name: 'The digital age',
    desc: 'Have 150 cursors.',
    icon: '💻',
    category: 'buildings',
    condition: (s) => (s.buildings['cursor'] || 0) >= 150
  },
  {
    id: 'ach_bld_cursor_200',
    name: 'Extreme clicking',
    desc: 'Have 200 cursors.',
    icon: '⚡',
    category: 'buildings',
    condition: (s) => (s.buildings['cursor'] || 0) >= 200
  },

  // Grandmas
  {
    id: 'ach_bld_grandma_1',
    name: 'Grandma\'s cookies',
    desc: 'Have 1 grandma.',
    icon: '👵',
    category: 'buildings',
    condition: (s) => (s.buildings['grandma'] || 0) >= 1
  },
  {
    id: 'ach_bld_grandma_50',
    name: 'Sloppy',
    desc: 'Have 50 grandmas.',
    icon: '🧓',
    category: 'buildings',
    condition: (s) => (s.buildings['grandma'] || 0) >= 50
  },
  {
    id: 'ach_bld_grandma_100',
    name: 'Retirement home',
    desc: 'Have 100 grandmas.',
    icon: '🏡',
    category: 'buildings',
    condition: (s) => (s.buildings['grandma'] || 0) >= 100
  },
  {
    id: 'ach_bld_grandma_150',
    name: 'Friend of the elderly',
    desc: 'Have 150 grandmas.',
    icon: '🤝',
    category: 'buildings',
    condition: (s) => (s.buildings['grandma'] || 0) >= 150
  },
  {
    id: 'ach_bld_grandma_200',
    name: 'Ruler of the roost',
    desc: 'Have 200 grandmas.',
    icon: '👑',
    category: 'buildings',
    condition: (s) => (s.buildings['grandma'] || 0) >= 200
  },

  // Farms
  {
    id: 'ach_bld_farm_1',
    name: 'My first farm',
    desc: 'Have 1 farm.',
    icon: '🌾',
    category: 'buildings',
    condition: (s) => (s.buildings['farm'] || 0) >= 1
  },
  {
    id: 'ach_bld_farm_50',
    name: 'Reap what you sow',
    desc: 'Have 50 farms.',
    icon: '🚜',
    category: 'buildings',
    condition: (s) => (s.buildings['farm'] || 0) >= 50
  },
  {
    id: 'ach_bld_farm_100',
    name: 'Farm fresh',
    desc: 'Have 100 farms.',
    icon: '🌽',
    category: 'buildings',
    condition: (s) => (s.buildings['farm'] || 0) >= 100
  },
  {
    id: 'ach_bld_farm_150',
    name: 'Acreage',
    desc: 'Have 150 farms.',
    icon: '🏞️',
    category: 'buildings',
    condition: (s) => (s.buildings['farm'] || 0) >= 150
  },
  {
    id: 'ach_bld_farm_200',
    name: 'Bountiful harvest',
    desc: 'Have 200 farms.',
    icon: '🌻',
    category: 'buildings',
    condition: (s) => (s.buildings['farm'] || 0) >= 200
  },

  // Mines
  {
    id: 'ach_bld_mine_1',
    name: 'You know the drill',
    desc: 'Have 1 mine.',
    icon: '⛏️',
    category: 'buildings',
    condition: (s) => (s.buildings['mine'] || 0) >= 1
  },
  {
    id: 'ach_bld_mine_50',
    name: 'Excavation',
    desc: 'Have 50 mines.',
    icon: '💎',
    category: 'buildings',
    condition: (s) => (s.buildings['mine'] || 0) >= 50
  },
  {
    id: 'ach_bld_mine_100',
    name: 'Hollow the planet',
    desc: 'Have 100 mines.',
    icon: '🕳️',
    category: 'buildings',
    condition: (s) => (s.buildings['mine'] || 0) >= 100
  },
  {
    id: 'ach_bld_mine_150',
    name: 'Can you dig it',
    desc: 'Have 150 mines.',
    icon: '🪙',
    category: 'buildings',
    condition: (s) => (s.buildings['mine'] || 0) >= 150
  },
  {
    id: 'ach_bld_mine_200',
    name: 'Core extraction',
    desc: 'Have 200 mines.',
    icon: '🌋',
    category: 'buildings',
    condition: (s) => (s.buildings['mine'] || 0) >= 200
  },

  // Factories
  {
    id: 'ach_bld_factory_1',
    name: 'Industrial revolution',
    desc: 'Have 1 factory.',
    icon: '🏭',
    category: 'buildings',
    condition: (s) => (s.buildings['factory'] || 0) >= 1
  },
  {
    id: 'ach_bld_factory_50',
    name: 'Global warming',
    desc: 'Have 50 factories.',
    icon: '🌡️',
    category: 'buildings',
    condition: (s) => (s.buildings['factory'] || 0) >= 50
  },
  {
    id: 'ach_bld_factory_100',
    name: 'Mass production',
    desc: 'Have 100 factories.',
    icon: '📦',
    category: 'buildings',
    condition: (s) => (s.buildings['factory'] || 0) >= 100
  },
  {
    id: 'ach_bld_factory_150',
    name: 'Automation age',
    desc: 'Have 150 factories.',
    icon: '🤖',
    category: 'buildings',
    condition: (s) => (s.buildings['factory'] || 0) >= 150
  },
  {
    id: 'ach_bld_factory_200',
    name: 'The machine stops',
    desc: 'Have 200 factories.',
    icon: '⚙️',
    category: 'buildings',
    condition: (s) => (s.buildings['factory'] || 0) >= 200
  },

  // Banks
  {
    id: 'ach_bld_bank_1',
    name: 'Initial public offering',
    desc: 'Have 1 bank.',
    icon: '🏦',
    category: 'buildings',
    condition: (s) => (s.buildings['bank'] || 0) >= 1
  },
  {
    id: 'ach_bld_bank_50',
    name: 'Cash cow',
    desc: 'Have 50 banks.',
    icon: '💵',
    category: 'buildings',
    condition: (s) => (s.buildings['bank'] || 0) >= 50
  },
  {
    id: 'ach_bld_bank_100',
    name: 'Too big to fail',
    desc: 'Have 100 banks.',
    icon: '🏛️',
    category: 'buildings',
    condition: (s) => (s.buildings['bank'] || 0) >= 100
  },
  {
    id: 'ach_bld_bank_150',
    name: 'Cookie bullion',
    desc: 'Have 150 banks.',
    icon: '🥇',
    category: 'buildings',
    condition: (s) => (s.buildings['bank'] || 0) >= 150
  },
  {
    id: 'ach_bld_bank_200',
    name: 'Federal reserve',
    desc: 'Have 200 banks.',
    icon: '💰',
    category: 'buildings',
    condition: (s) => (s.buildings['bank'] || 0) >= 200
  },

  // Temples
  {
    id: 'ach_bld_temple_1',
    name: 'God complex',
    desc: 'Have 1 temple.',
    icon: '🏛️',
    category: 'buildings',
    condition: (s) => (s.buildings['temple'] || 0) >= 1
  },
  {
    id: 'ach_bld_temple_50',
    name: 'Holy cookies',
    desc: 'Have 50 temples.',
    icon: '🕯️',
    category: 'buildings',
    condition: (s) => (s.buildings['temple'] || 0) >= 50
  },
  {
    id: 'ach_bld_temple_100',
    name: 'Pantheonic',
    desc: 'Have 100 temples.',
    icon: '🛐',
    category: 'buildings',
    condition: (s) => (s.buildings['temple'] || 0) >= 100
  },
  {
    id: 'ach_bld_temple_150',
    name: 'Divine intervention',
    desc: 'Have 150 temples.',
    icon: '🪽',
    category: 'buildings',
    condition: (s) => (s.buildings['temple'] || 0) >= 150
  },
  {
    id: 'ach_bld_temple_200',
    name: 'Ascension gospel',
    desc: 'Have 200 temples.',
    icon: '📜',
    category: 'buildings',
    condition: (s) => (s.buildings['temple'] || 0) >= 200
  },

  // Wizard Towers
  {
    id: 'ach_bld_wizard_1',
    name: 'Bewitched',
    desc: 'Have 1 wizard tower.',
    icon: '🧙‍♂️',
    category: 'buildings',
    condition: (s) => (s.buildings['wizardTower'] || 0) >= 1
  },
  {
    id: 'ach_bld_wizard_50',
    name: 'The sorcerer\'s apprentice',
    desc: 'Have 50 wizard towers.',
    icon: '🪄',
    category: 'buildings',
    condition: (s) => (s.buildings['wizardTower'] || 0) >= 50
  },
  {
    id: 'ach_bld_wizard_100',
    name: 'Arcane bakery',
    desc: 'Have 100 wizard towers.',
    icon: '🔮',
    category: 'buildings',
    condition: (s) => (s.buildings['wizardTower'] || 0) >= 100
  },
  {
    id: 'ach_bld_wizard_150',
    name: 'Spellbound',
    desc: 'Have 150 wizard towers.',
    icon: '✨',
    category: 'buildings',
    condition: (s) => (s.buildings['wizardTower'] || 0) >= 150
  },
  {
    id: 'ach_bld_wizard_200',
    name: 'Grand magus',
    desc: 'Have 200 wizard towers.',
    icon: '🌟',
    category: 'buildings',
    condition: (s) => (s.buildings['wizardTower'] || 0) >= 200
  },

  // Shipments
  {
    id: 'ach_bld_shipment_1',
    name: 'Expedition',
    desc: 'Have 1 shipment.',
    icon: '🚀',
    category: 'buildings',
    condition: (s) => (s.buildings['shipment'] || 0) >= 1
  },
  {
    id: 'ach_bld_shipment_50',
    name: 'Galactic trade',
    desc: 'Have 50 shipments.',
    icon: '🛸',
    category: 'buildings',
    condition: (s) => (s.buildings['shipment'] || 0) >= 50
  },
  {
    id: 'ach_bld_shipment_100',
    name: 'Warp drive',
    desc: 'Have 100 shipments.',
    icon: '🛰️',
    category: 'buildings',
    condition: (s) => (s.buildings['shipment'] || 0) >= 100
  },
  {
    id: 'ach_bld_shipment_150',
    name: 'Cosmic fleet',
    desc: 'Have 150 shipments.',
    icon: '🌌',
    category: 'buildings',
    condition: (s) => (s.buildings['shipment'] || 0) >= 150
  },

  // Alchemy Labs
  {
    id: 'ach_bld_alchemy_1',
    name: 'Transmutation',
    desc: 'Have 1 alchemy lab.',
    icon: '⚗️',
    category: 'buildings',
    condition: (s) => (s.buildings['alchemyLab'] || 0) >= 1
  },
  {
    id: 'ach_bld_alchemy_50',
    name: 'Golden touch',
    desc: 'Have 50 alchemy labs.',
    icon: '🧪',
    category: 'buildings',
    condition: (s) => (s.buildings['alchemyLab'] || 0) >= 50
  },
  {
    id: 'ach_bld_alchemy_100',
    name: 'Philosopher\'s stone',
    desc: 'Have 100 alchemy labs.',
    icon: '💎',
    category: 'buildings',
    condition: (s) => (s.buildings['alchemyLab'] || 0) >= 100
  },

  // Portals
  {
    id: 'ach_bld_portal_1',
    name: 'A dimension of pure cookies',
    desc: 'Have 1 portal.',
    icon: '🌀',
    category: 'buildings',
    condition: (s) => (s.buildings['portal'] || 0) >= 1
  },
  {
    id: 'ach_bld_portal_50',
    name: 'Cosmic horrors',
    desc: 'Have 50 portals.',
    icon: '🐙',
    category: 'buildings',
    condition: (s) => (s.buildings['portal'] || 0) >= 50
  },
  {
    id: 'ach_bld_portal_100',
    name: 'Beyond the veil',
    desc: 'Have 100 portals.',
    icon: '👁️',
    category: 'buildings',
    condition: (s) => (s.buildings['portal'] || 0) >= 100
  },

  // Time Machines
  {
    id: 'ach_bld_time_1',
    name: 'Time warp',
    desc: 'Have 1 time machine.',
    icon: '⏳',
    category: 'buildings',
    condition: (s) => (s.buildings['timeMachine'] || 0) >= 1
  },
  {
    id: 'ach_bld_time_50',
    name: 'Alternate timelines',
    desc: 'Have 50 time machines.',
    icon: '🕰️',
    category: 'buildings',
    condition: (s) => (s.buildings['timeMachine'] || 0) >= 50
  },
  {
    id: 'ach_bld_time_100',
    name: 'Rewriting history',
    desc: 'Have 100 time machines.',
    icon: '⌛',
    category: 'buildings',
    condition: (s) => (s.buildings['timeMachine'] || 0) >= 100
  },

  // Antimatter Condensers
  {
    id: 'ach_bld_antimatter_1',
    name: 'Antibatter',
    desc: 'Have 1 antimatter condenser.',
    icon: '⚛️',
    category: 'buildings',
    condition: (s) => (s.buildings['antimatter'] || 0) >= 1
  },
  {
    id: 'ach_bld_antimatter_50',
    name: 'Quantum cookies',
    desc: 'Have 50 antimatter condensers.',
    icon: '🔬',
    category: 'buildings',
    condition: (s) => (s.buildings['antimatter'] || 0) >= 50
  },

  // Prisms
  {
    id: 'ach_bld_prism_1',
    name: 'Lone light',
    desc: 'Have 1 prism.',
    icon: '🌈',
    category: 'buildings',
    condition: (s) => (s.buildings['prism'] || 0) >= 1
  },
  {
    id: 'ach_bld_prism_50',
    name: 'Rainbow confectionery',
    desc: 'Have 50 prisms.',
    icon: '✨',
    category: 'buildings',
    condition: (s) => (s.buildings['prism'] || 0) >= 50
  },

  // Chancemakers
  {
    id: 'ach_bld_chance_1',
    name: 'Rolling the dice',
    desc: 'Have 1 chancemaker.',
    icon: '🎲',
    category: 'buildings',
    condition: (s) => (s.buildings['chancemaker'] || 0) >= 1
  },
  {
    id: 'ach_bld_chance_50',
    name: 'High roller',
    desc: 'Have 50 chancemakers.',
    icon: '🎰',
    category: 'buildings',
    condition: (s) => (s.buildings['chancemaker'] || 0) >= 50
  },

  // ==========================================
  // 5. TOTAL BUILDINGS & SPECIAL SYNERGIES
  // ==========================================
  {
    id: 'ach_one_with_everything',
    name: 'One with everything',
    desc: 'Have at least 1 of every building up to Time Machine.',
    icon: '🌈',
    category: 'buildings',
    condition: (s) => {
      const keys = ['cursor', 'grandma', 'farm', 'mine', 'factory', 'bank', 'temple', 'wizardTower', 'shipment', 'alchemyLab', 'portal', 'timeMachine'];
      return keys.every(k => (s.buildings[k] || 0) >= 1);
    }
  },
  {
    id: 'ach_total_bld_100',
    name: 'Builder',
    desc: 'Own 100 total buildings.',
    icon: '🏗️',
    category: 'buildings',
    condition: (s) => Object.values(s.buildings).reduce((a, b) => a + b, 0) >= 100
  },
  {
    id: 'ach_total_bld_400',
    name: 'Architect',
    desc: 'Own 400 total buildings.',
    icon: '🏙️',
    category: 'buildings',
    condition: (s) => Object.values(s.buildings).reduce((a, b) => a + b, 0) >= 400
  },
  {
    id: 'ach_total_bld_800',
    name: 'Principal baker',
    desc: 'Own 800 total buildings.',
    icon: '🏰',
    category: 'buildings',
    condition: (s) => Object.values(s.buildings).reduce((a, b) => a + b, 0) >= 800
  },
  {
    id: 'ach_total_bld_1200',
    name: 'City planner',
    desc: 'Own 1,200 total buildings.',
    icon: '🌆',
    category: 'buildings',
    condition: (s) => Object.values(s.buildings).reduce((a, b) => a + b, 0) >= 1200
  },

  // ==========================================
  // 6. UPGRADES PURCHASED MILESTONES
  // ==========================================
  {
    id: 'ach_upg_5',
    name: 'Enhancer',
    desc: 'Purchase 5 upgrades.',
    icon: '🔧',
    category: 'upgrades',
    condition: (s) => s.upgrades.length >= 5
  },
  {
    id: 'ach_upg_20',
    name: 'Augmenter',
    desc: 'Purchase 20 upgrades.',
    icon: '⚙️',
    category: 'upgrades',
    condition: (s) => s.upgrades.length >= 20
  },
  {
    id: 'ach_upg_50',
    name: 'Upgrader',
    desc: 'Purchase 50 upgrades.',
    icon: '💡',
    category: 'upgrades',
    condition: (s) => s.upgrades.length >= 50
  },
  {
    id: 'ach_upg_80',
    name: 'Overclocker',
    desc: 'Purchase 80 upgrades.',
    icon: '⚡',
    category: 'upgrades',
    condition: (s) => s.upgrades.length >= 80
  },

  // ==========================================
  // 7. GOLDEN COOKIES
  // ==========================================
  {
    id: 'ach_golden_1',
    name: 'Golden cookie',
    desc: 'Click 1 golden cookie.',
    icon: '✨',
    category: 'special',
    condition: (s) => s.goldenClicks >= 1
  },
  {
    id: 'ach_golden_7',
    name: 'Lucky cookies',
    desc: 'Click 7 golden cookies.',
    icon: '🍀',
    category: 'special',
    condition: (s) => s.goldenClicks >= 7
  },
  {
    id: 'ach_golden_27',
    name: 'A stroke of luck',
    desc: 'Click 27 golden cookies.',
    icon: '🌈',
    category: 'special',
    condition: (s) => s.goldenClicks >= 27
  },
  {
    id: 'ach_golden_77',
    name: 'Fortune',
    desc: 'Click 77 golden cookies.',
    icon: '🌟',
    category: 'special',
    condition: (s) => s.goldenClicks >= 77
  },
  {
    id: 'ach_golden_100',
    name: 'Leprechaun',
    desc: 'Click 100 golden cookies.',
    icon: '🎩',
    category: 'special',
    condition: (s) => s.goldenClicks >= 100
  },

  // ==========================================
  // 8. PRESTIGE & ASCENSION
  // ==========================================
  {
    id: 'ach_rebirth',
    name: 'Rebirth',
    desc: 'Ascend to heaven at least once.',
    icon: '🌌',
    category: 'prestige',
    condition: (s) => s.prestigeLevel >= 1 || s.heavenlyChips >= 1
  },
  {
    id: 'ach_resurrect',
    name: 'Resurrect',
    desc: 'Ascend with at least 100 Heavenly Chips.',
    icon: '🌠',
    category: 'prestige',
    condition: (s) => s.heavenlyChips >= 100
  },

  // ==========================================
  // 9. MISCELLANEOUS & INTERACTIVE
  // ==========================================
  {
    id: 'ach_ticker_50',
    name: 'Tabloid addiction',
    desc: 'Click the news ticker 50 times.',
    icon: '📰',
    category: 'special',
    condition: (s) => s.tickerClicks >= 50
  },
  {
    id: 'ach_rename',
    name: 'What\'s in a name',
    desc: 'Give your bakery a custom name.',
    icon: '🏷️',
    category: 'special',
    condition: (s) => s.hasRenamedBakery === true
  },
  {
    id: 'ach_here_you_go',
    name: 'Here you go',
    desc: 'Click this achievement slot.',
    icon: '🎁',
    category: 'special',
    condition: (s) => s.hasClickedAchievementSlot === true
  },
  {
    id: 'ach_tiny_cookie',
    name: 'Tiny cookie',
    desc: 'Click the tiny cookie icon in the Stats screen.',
    icon: '🍪',
    category: 'special',
    condition: (s) => s.hasClickedTinyCookie === true
  },

  {
    id: 'ach_cookie_dunker',
    name: 'Cookie-dunker',
    desc: 'Dunk the big cookie in the milk.',
    icon: '🥛🍪',
    category: 'special',
    condition: (s) => s.hasDunkedCookie === true
  },
  {
    id: 'ach_duck_squeaker',
    name: 'Rubber friend',
    desc: 'Squeak the rubber duck floating in the milk.',
    icon: '🦆',
    category: 'special',
    condition: (s) => (s.duckSqueaks || 0) >= 1
  },
  {
    id: 'ach_god_complex',
    name: 'God complex',
    desc: 'Name your bakery Orteil.',
    icon: '⚡',
    category: 'special',
    condition: (s) => s.hasNamedOrteil === true
  },
  {
    id: 'ach_just_wrong',
    name: 'Just wrong',
    desc: 'Name your bakery Ortiel.',
    icon: '❓',
    category: 'special',
    condition: (s) => s.hasNamedOrtiel === true
  },
  {
    id: 'ach_grandmapocalypse',
    name: 'Elder',
    desc: 'Awaken the Grandmapocalypse.',
    icon: '👵🩸',
    category: 'special',
    condition: (s) => s.upgrades.includes('up_research_onemind') || s.upgrades.includes('up_research_elderpact')
  },
  {
    id: 'ach_wrinkler_pop_1',
    name: 'Wrinkler squisher',
    desc: 'Pop 1 wrinkler.',
    icon: '🐛',
    category: 'special',
    condition: (s) => (s.wrinklersPopped || 0) >= 1
  },
  {
    id: 'ach_wrinkler_pop_50',
    name: 'Wrinkles be gone',
    desc: 'Pop 50 wrinklers.',
    icon: '🪱',
    category: 'special',
    condition: (s) => (s.wrinklersPopped || 0) >= 50
  },

  // 250 Building Ownership Tiers
  {
    id: 'ach_bld_cursor_250',
    name: 'Lord of the clicks',
    desc: 'Have 250 cursors.',
    icon: '👑☝️',
    category: 'buildings',
    condition: (s) => (s.buildings['cursor'] || 0) >= 250
  },
  {
    id: 'ach_bld_grandma_250',
    name: 'Elder council',
    desc: 'Have 250 grandmas.',
    icon: '👵👑',
    category: 'buildings',
    condition: (s) => (s.buildings['grandma'] || 0) >= 250
  },
  {
    id: 'ach_bld_farm_250',
    name: 'Overgrowth',
    desc: 'Have 250 farms.',
    icon: '🌾🌳',
    category: 'buildings',
    condition: (s) => (s.buildings['farm'] || 0) >= 250
  },
  {
    id: 'ach_bld_mine_250',
    name: 'Mantle drill',
    desc: 'Have 250 mines.',
    icon: '⛏️🌋',
    category: 'buildings',
    condition: (s) => (s.buildings['mine'] || 0) >= 250
  },
  {
    id: 'ach_bld_factory_250',
    name: 'Automated world',
    desc: 'Have 250 factories.',
    icon: '🏭🤖',
    category: 'buildings',
    condition: (s) => (s.buildings['factory'] || 0) >= 250
  },
  {
    id: 'ach_bld_bank_250',
    name: 'Global currency',
    desc: 'Have 250 banks.',
    icon: '🏦🌐',
    category: 'buildings',
    condition: (s) => (s.buildings['bank'] || 0) >= 250
  },
  {
    id: 'ach_bld_temple_250',
    name: 'Universal religion',
    desc: 'Have 250 temples.',
    icon: '🏛️✨',
    category: 'buildings',
    condition: (s) => (s.buildings['temple'] || 0) >= 250
  },
  {
    id: 'ach_bld_wizard_250',
    name: 'Grand archmage',
    desc: 'Have 250 wizard towers.',
    icon: '🧙‍♂️🔮',
    category: 'buildings',
    condition: (s) => (s.buildings['wizardTower'] || 0) >= 250
  },
  {
    id: 'ach_bld_shipment_250',
    name: 'Fleet armada',
    desc: 'Have 250 shipments.',
    icon: '🚀🛸',
    category: 'buildings',
    condition: (s) => (s.buildings['shipment'] || 0) >= 250
  },
  {
    id: 'ach_bld_alchemy_250',
    name: 'Infinite transmutation',
    desc: 'Have 250 alchemy labs.',
    icon: '⚗️💎',
    category: 'buildings',
    condition: (s) => (s.buildings['alchemyLab'] || 0) >= 250
  },
  {
    id: 'ach_bld_portal_250',
    name: 'Doorway to infinity',
    desc: 'Have 250 portals.',
    icon: '🌀🚪',
    category: 'buildings',
    condition: (s) => (s.buildings['portal'] || 0) >= 250
  },
  {
    id: 'ach_bld_time_250',
    name: 'Time king',
    desc: 'Have 250 time machines.',
    icon: '⏳👑',
    category: 'buildings',
    condition: (s) => (s.buildings['timeMachine'] || 0) >= 250
  },
  {
    id: 'ach_bld_antimatter_250',
    name: 'Antimatter master',
    desc: 'Have 250 antimatter condensers.',
    icon: '⚛️🔬',
    category: 'buildings',
    condition: (s) => (s.buildings['antimatter'] || 0) >= 250
  },
  {
    id: 'ach_bld_prism_250',
    name: 'Master of light',
    desc: 'Have 250 prisms.',
    icon: '🌈💎',
    category: 'buildings',
    condition: (s) => (s.buildings['prism'] || 0) >= 250
  },
  {
    id: 'ach_bld_chance_250',
    name: 'Lady Luck herself',
    desc: 'Have 250 chancemakers.',
    icon: '🎲👑',
    category: 'buildings',
    condition: (s) => (s.buildings['chancemaker'] || 0) >= 250
  },

  // Higher Total Buildings
  {
    id: 'ach_total_bld_2000',
    name: 'Metropolis',
    desc: 'Own 2,000 total buildings.',
    icon: '🏙️✨',
    category: 'buildings',
    condition: (s) => Object.values(s.buildings).reduce((a, b) => a + b, 0) >= 2000
  },
  {
    id: 'ach_total_bld_2500',
    name: 'Empire',
    desc: 'Own 2,500 total buildings.',
    icon: '🏰👑',
    category: 'buildings',
    condition: (s) => Object.values(s.buildings).reduce((a, b) => a + b, 0) >= 2500
  },

  // Higher Upgrades
  {
    id: 'ach_upg_100',
    name: 'Upgrade enthusiast',
    desc: 'Purchase 100 upgrades.',
    icon: '🏆',
    category: 'upgrades',
    condition: (s) => s.upgrades.length >= 100
  },
  {
    id: 'ach_upg_120',
    name: 'Upgrade hoarder',
    desc: 'Purchase 120 upgrades.',
    icon: '🎖️',
    category: 'upgrades',
    condition: (s) => s.upgrades.length >= 120
  },

  // High Golden Cookies
  {
    id: 'ach_golden_277',
    name: 'Four-leaf cookie',
    desc: 'Click 277 golden cookies.',
    icon: '🍀✨',
    category: 'special',
    condition: (s) => s.goldenClicks >= 277
  },
  {
    id: 'ach_golden_777',
    name: 'Golden horde',
    desc: 'Click 777 golden cookies.',
    icon: '🌟👑',
    category: 'special',
    condition: (s) => s.goldenClicks >= 777
  },

  // High Prestige
  {
    id: 'ach_prestige_1000',
    name: 'Sacrificial roll',
    desc: 'Have 1,000 Heavenly Chips.',
    icon: '🌌✨',
    category: 'prestige',
    condition: (s) => s.heavenlyChips >= 1000
  },
  {
    id: 'ach_prestige_10000',
    name: 'Bask in the glory',
    desc: 'Have 10,000 Heavenly Chips.',
    icon: '☀️🌌',
    category: 'prestige',
    condition: (s) => s.heavenlyChips >= 10000
  },

  // ==========================================
  // 10. SHADOW ACHIEVEMENTS (RARE & FEATS)
  // ==========================================
  {
    id: 'ach_shadow_neverclick',
    name: 'True Neverclick',
    desc: 'Bake 1,000,000 cookies having clicked the big cookie 15 times or fewer.',
    icon: '🚫',
    category: 'shadow',
    isShadow: true,
    condition: (s) => s.totalCookiesBaked >= 1000000 && s.totalManualClicks <= 15
  },
  {
    id: 'ach_shadow_cheated',
    name: 'Cheated cookies taste awful',
    desc: 'Hack in some cookies or trigger debug powers.',
    icon: '☠️',
    category: 'shadow',
    isShadow: true,
    condition: (s) => s.hasCheated === true
  },
  {
    id: 'ach_shadow_speed_baking',
    name: 'Speed baking',
    desc: 'Bake 1,000,000 cookies in under 35 minutes.',
    icon: '🏎️',
    category: 'shadow',
    isShadow: true,
    condition: (s) => s.totalCookiesBaked >= 1000000 && ((Date.now() - s.ascensionStartTime) / 60000) <= 35
  },
  {
    id: 'ach_shadow_hardcore',
    name: 'Hardcore',
    desc: 'Bake 1,000,000,000 cookies without purchasing any upgrades.',
    icon: '💪',
    category: 'shadow',
    isShadow: true,
    condition: (s) => s.totalCookiesBaked >= 1000000000 && s.upgrades.length === 0
  },
  {
    id: 'ach_shadow_lucky',
    name: 'Just plain lucky',
    desc: 'You have 1 chance in 10,000 every second of getting this achievement.',
    icon: '🍀',
    category: 'shadow',
    isShadow: true,
    condition: (s) => s.hasRolledLucky === true
  },
  {
    id: 'ach_shadow_third_party',
    name: 'Third-party',
    desc: 'Unlock an add-on or customization.',
    icon: '🔌',
    category: 'shadow',
    isShadow: true,
    condition: (s) => s.hasCustomization === true
  }
];
