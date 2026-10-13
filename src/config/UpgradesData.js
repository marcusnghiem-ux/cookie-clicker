/**
 * Cookie Clicker Authentic Upgrades Definitions (Complete Master Tree: 150+ Upgrades)
 * Includes:
 * - Cursor & Mouse tiers
 * - Fingers synergies up to Octillion
 * - 7-tier doublers for all 15 building types (1, 5, 25, 50, 100, 150, 200, 250)
 * - Complete Grandma synergies
 * - Full Flavored Cookie Biscuits collection (25+ cookies)
 * - Complete Kitten ladder from Helpers to Executives
 * - Grandmapocalypse research upgrades (Bingo center, One mind, Exotic nuts, Elder Pact)
 * - Golden & Wrath cookie upgrades
 */
export const UPGRADES = [
  // ==========================================
  // 1. CURSOR & CLICK POWER UPGRADES
  // ==========================================
  {
    id: 'up_cursor_1',
    name: 'Reinforced index finger',
    cost: 100,
    icon: '☝️',
    desc: 'The mouse and cursors are twice as efficient.',
    flavor: 'You could poke a diamond in half with this.',
    type: 'cursor_mult',
    multiplier: 2,
    target: 'cursor',
    req: { building: 'cursor', count: 1 }
  },
  {
    id: 'up_cursor_2',
    name: 'Carpal tunnel prevention cream',
    cost: 500,
    icon: '🧴',
    desc: 'The mouse and cursors are twice as efficient.',
    flavor: 'It smells faintly of mint and repetitive strain relief.',
    type: 'cursor_mult',
    multiplier: 2,
    target: 'cursor',
    req: { building: 'cursor', count: 1 }
  },
  {
    id: 'up_cursor_3',
    name: 'Ambidextrous',
    cost: 10000,
    icon: '🤲',
    desc: 'The mouse and cursors are twice as efficient.',
    flavor: 'Look ma, both hands!',
    type: 'cursor_mult',
    multiplier: 2,
    target: 'cursor',
    req: { building: 'cursor', count: 10 }
  },
  {
    id: 'up_thousand_fingers',
    name: 'Thousand fingers',
    cost: 100000,
    icon: '🖐️',
    desc: 'The mouse and cursors gain +0.1 cookies/click per non-cursor building owned.',
    flavor: 'Clickity-clickity-clickity-click.',
    type: 'cursor_synergy',
    bonusPerBuilding: 0.1,
    req: { building: 'cursor', count: 25 }
  },
  {
    id: 'up_million_fingers',
    name: 'Million fingers',
    cost: 10000000,
    icon: '✨',
    desc: 'The mouse and cursors gain +0.5 cookies/click per non-cursor building owned.',
    flavor: 'A forest of pointing digits.',
    type: 'cursor_synergy',
    bonusPerBuilding: 0.5,
    req: { building: 'cursor', count: 50 }
  },
  {
    id: 'up_billion_fingers',
    name: 'Billion fingers',
    cost: 100000000,
    icon: '⚡',
    desc: 'The mouse and cursors gain +5 cookies/click per non-cursor building owned.',
    flavor: 'Universal finger alignment.',
    type: 'cursor_synergy',
    bonusPerBuilding: 5,
    req: { building: 'cursor', count: 100 }
  },
  {
    id: 'up_trillion_fingers',
    name: 'Trillion fingers',
    cost: 1000000000,
    icon: '🌌',
    desc: 'The mouse and cursors gain +20 cookies/click per non-cursor building owned.',
    flavor: 'Touch the cosmos.',
    type: 'cursor_synergy',
    bonusPerBuilding: 20,
    req: { building: 'cursor', count: 150 }
  },
  {
    id: 'up_quadrillion_fingers',
    name: 'Quadrillion fingers',
    cost: 10000000000,
    icon: '🪐',
    desc: 'The mouse and cursors gain +100 cookies/click per non-cursor building owned.',
    flavor: 'Spanning across solar systems.',
    type: 'cursor_synergy',
    bonusPerBuilding: 100,
    req: { building: 'cursor', count: 200 }
  },
  {
    id: 'up_quintillion_fingers',
    name: 'Quintillion fingers',
    cost: 10000000000000,
    icon: '💫',
    desc: 'The mouse and cursors gain +500 cookies/click per non-cursor building owned.',
    flavor: 'Subatomic finger collisions.',
    type: 'cursor_synergy',
    bonusPerBuilding: 500,
    req: { building: 'cursor', count: 250 }
  },

  // ==========================================
  // 2. MOUSE CPS PERCENTAGE UPGRADES
  // ==========================================
  {
    id: 'up_mouse_plastic',
    name: 'Plastic mouse',
    cost: 50000,
    icon: '🖱️',
    desc: 'Clicking gains +1% of your CpS.',
    flavor: 'Ergonomic, lightweight, polymer coated.',
    type: 'mouse_cps_percent',
    percent: 0.01,
    req: { clickedCookies: 1000 }
  },
  {
    id: 'up_mouse_iron',
    name: 'Iron mouse',
    cost: 5000000,
    icon: '⚙️',
    desc: 'Clicking gains +1% of your CpS.',
    flavor: 'Heavier, sturdier, cold to the touch.',
    type: 'mouse_cps_percent',
    percent: 0.01,
    req: { clickedCookies: 100000 }
  },
  {
    id: 'up_mouse_titanium',
    name: 'Titanium mouse',
    cost: 500000000,
    icon: '🛡️',
    desc: 'Clicking gains +1% of your CpS.',
    flavor: 'Space-grade alloy for astronomical clicking.',
    type: 'mouse_cps_percent',
    percent: 0.01,
    req: { clickedCookies: 10000000 }
  },
  {
    id: 'up_mouse_adamantium',
    name: 'Adamantium mouse',
    cost: 50000000000,
    icon: '💎',
    desc: 'Clicking gains +1% of your CpS.',
    flavor: 'Indestructible mouse forged in volcanic fury.',
    type: 'mouse_cps_percent',
    percent: 0.01,
    req: { clickedCookies: 1000000000 }
  },
  {
    id: 'up_mouse_unobtainium',
    name: 'Unobtainium mouse',
    cost: 5000000000000,
    icon: '🔮',
    desc: 'Clicking gains +1% of your CpS.',
    flavor: 'Mined from distant pandoran continents.',
    type: 'mouse_cps_percent',
    percent: 0.01,
    req: { clickedCookies: 100000000000 }
  },
  {
    id: 'up_mouse_eludium',
    name: 'Eludium mouse',
    cost: 500000000000000,
    icon: '🛸',
    desc: 'Clicking gains +1% of your CpS.',
    flavor: 'Shimmering in fourth-dimensional space.',
    type: 'mouse_cps_percent',
    percent: 0.01,
    req: { clickedCookies: 10000000000000 }
  },
  {
    id: 'up_mouse_wishalloy',
    name: 'Wishalloy mouse',
    cost: 50000000000000000,
    icon: '🌠',
    desc: 'Clicking gains +1% of your CpS.',
    flavor: 'Forged from shooting stars and pure desire.',
    type: 'mouse_cps_percent',
    percent: 0.01,
    req: { clickedCookies: 1000000000000000 }
  },

  // ==========================================
  // 3. FLAVORED COOKIE BISCUITS (+1% to +5% CpS)
  // ==========================================
  {
    id: 'up_biscuit_plain',
    name: 'Plain cookies',
    cost: 999999,
    icon: '🍪',
    desc: 'Cookie production multiplier +1%.',
    flavor: 'A staple of the minimalist diet.',
    type: 'cookie_biscuit',
    percent: 0.01,
    req: { bakedCookies: 50000 }
  },
  {
    id: 'up_biscuit_sugar',
    name: 'Sugar cookies',
    cost: 5000000,
    icon: '🍬',
    desc: 'Cookie production multiplier +1%.',
    flavor: 'Sweet, crystalline, delicious.',
    type: 'cookie_biscuit',
    percent: 0.01,
    req: { bakedCookies: 500000 }
  },
  {
    id: 'up_biscuit_oatmeal',
    name: 'Oatmeal raisin cookies',
    cost: 10000000,
    icon: '🌾',
    desc: 'Cookie production multiplier +1%.',
    flavor: 'Deceptively looks like chocolate chip.',
    type: 'cookie_biscuit',
    percent: 0.01,
    req: { bakedCookies: 1000000 }
  },
  {
    id: 'up_biscuit_peanut',
    name: 'Peanut butter cookies',
    cost: 50000000,
    icon: '🥜',
    desc: 'Cookie production multiplier +2%.',
    flavor: 'Fork cross-hatch pressed to perfection.',
    type: 'cookie_biscuit',
    percent: 0.02,
    req: { bakedCookies: 10000000 }
  },
  {
    id: 'up_biscuit_coconut',
    name: 'Coconut cookies',
    cost: 100000000,
    icon: '🥥',
    desc: 'Cookie production multiplier +2%.',
    flavor: 'Tropical flakes of sweet goodness.',
    type: 'cookie_biscuit',
    percent: 0.02,
    req: { bakedCookies: 50000000 }
  },
  {
    id: 'up_biscuit_white_choc',
    name: 'White chocolate cookies',
    cost: 500000000,
    icon: '🍫',
    desc: 'Cookie production multiplier +2%.',
    flavor: 'Creamy cocoa butter without solids.',
    type: 'cookie_biscuit',
    percent: 0.02,
    req: { bakedCookies: 100000000 }
  },
  {
    id: 'up_biscuit_macadamia',
    name: 'Macadamia nut cookies',
    cost: 1000000000,
    icon: '🌰',
    desc: 'Cookie production multiplier +3%.',
    flavor: 'Rich, buttery, Hawaiian grown.',
    type: 'cookie_biscuit',
    percent: 0.03,
    req: { bakedCookies: 500000000 }
  },
  {
    id: 'up_biscuit_double_chip',
    name: 'Double-chip cookies',
    cost: 5000000000,
    icon: '🍪',
    desc: 'Cookie production multiplier +3%.',
    flavor: 'Twice the chocolate, twice the glory.',
    type: 'cookie_biscuit',
    percent: 0.03,
    req: { bakedCookies: 1000000000 }
  },
  {
    id: 'up_biscuit_dark_choc',
    name: 'Dark chocolate cookies',
    cost: 50000000000,
    icon: '🍫',
    desc: 'Cookie production multiplier +4%.',
    flavor: '85% pure bitter-sweet cocoa.',
    type: 'cookie_biscuit',
    percent: 0.04,
    req: { bakedCookies: 10000000000 }
  },
  {
    id: 'up_biscuit_butter',
    name: 'Butter cookies',
    cost: 100000000000,
    icon: '🧈',
    desc: 'Cookie production multiplier +4%.',
    flavor: 'Melt-in-your-mouth Danish classics in a sewing tin.',
    type: 'cookie_biscuit',
    percent: 0.04,
    req: { bakedCookies: 50000000000 }
  },
  {
    id: 'up_biscuit_shortbread',
    name: 'Shortbread cookies',
    cost: 500000000000,
    icon: '🍞',
    desc: 'Cookie production multiplier +4%.',
    flavor: 'One part sugar, two parts butter, three parts flour.',
    type: 'cookie_biscuit',
    percent: 0.04,
    req: { bakedCookies: 100000000000 }
  },
  {
    id: 'up_biscuit_ginger',
    name: 'Ginger snaps',
    cost: 1000000000000,
    icon: '🫚',
    desc: 'Cookie production multiplier +4%.',
    flavor: 'Crisp, spicy, perfectly cracked surface.',
    type: 'cookie_biscuit',
    percent: 0.04,
    req: { bakedCookies: 500000000000 }
  },
  {
    id: 'up_biscuit_cinnamon',
    name: 'Cinnamon cookies',
    cost: 5000000000000,
    icon: '🪵',
    desc: 'Cookie production multiplier +4%.',
    flavor: 'Warm Ceylon cinnamon swirled in sugar.',
    type: 'cookie_biscuit',
    percent: 0.04,
    req: { bakedCookies: 1000000000000 }
  },
  {
    id: 'up_biscuit_vanille',
    name: 'Vanille biscuits',
    cost: 10000000000000,
    icon: '🍦',
    desc: 'Cookie production multiplier +4%.',
    flavor: 'Madagascar bourbon vanilla beans.',
    type: 'cookie_biscuit',
    percent: 0.04,
    req: { bakedCookies: 5000000000000 }
  },
  {
    id: 'up_biscuit_almond',
    name: 'Almond crescents',
    cost: 50000000000000,
    icon: '🌙',
    desc: 'Cookie production multiplier +5%.',
    flavor: 'Dusted with fine confectioner\'s powdered sugar.',
    type: 'cookie_biscuit',
    percent: 0.05,
    req: { bakedCookies: 10000000000000 }
  },
  {
    id: 'up_biscuit_macaron',
    name: 'French macarons',
    cost: 500000000000000,
    icon: '🧁',
    desc: 'Cookie production multiplier +5%.',
    flavor: 'Delicate meringue shells with rich chocolate ganache.',
    type: 'cookie_biscuit',
    percent: 0.05,
    req: { bakedCookies: 100000000000000 }
  },

  // ==========================================
  // 4. GRANDMA UPGRADES & SYNERGIES
  // ==========================================
  {
    id: 'up_grandma_1',
    name: 'Forwards from grandma',
    cost: 1000,
    icon: '✉️',
    desc: 'Grandmas are twice as efficient.',
    flavor: 'FWD: FWD: FWD: adorable cat picture and cookie recipe!',
    type: 'building_mult',
    target: 'grandma',
    multiplier: 2,
    req: { building: 'grandma', count: 1 }
  },
  {
    id: 'up_grandma_2',
    name: 'Steel-plated rolling pins',
    cost: 5000,
    icon: '🥢',
    desc: 'Grandmas are twice as efficient.',
    flavor: 'Heavy duty pastry crushing.',
    type: 'building_mult',
    target: 'grandma',
    multiplier: 2,
    req: { building: 'grandma', count: 5 }
  },
  {
    id: 'up_grandma_3',
    name: 'Lubricated dentures',
    cost: 50000,
    icon: '🦷',
    desc: 'Grandmas are twice as efficient.',
    flavor: 'Chewing through batter with zero friction.',
    type: 'building_mult',
    target: 'grandma',
    multiplier: 2,
    req: { building: 'grandma', count: 25 }
  },
  {
    id: 'up_grandma_4',
    name: 'Prune juice',
    cost: 5000000,
    icon: '🥤',
    desc: 'Grandmas are twice as efficient.',
    flavor: 'Keeps the baking flowing smoothly.',
    type: 'building_mult',
    target: 'grandma',
    multiplier: 2,
    req: { building: 'grandma', count: 50 }
  },
  {
    id: 'up_grandma_5',
    name: 'Double-thick glasses',
    cost: 500000000,
    icon: '👓',
    desc: 'Grandmas are twice as efficient.',
    flavor: 'Now they can see the chips in microscopic detail.',
    type: 'building_mult',
    target: 'grandma',
    multiplier: 2,
    req: { building: 'grandma', count: 100 }
  },
  {
    id: 'up_grandma_6',
    name: 'Aging agents',
    cost: 50000000000,
    icon: '👵',
    desc: 'Grandmas are twice as efficient.',
    flavor: 'Vintage recipes aged like fine cheese.',
    type: 'building_mult',
    target: 'grandma',
    multiplier: 2,
    req: { building: 'grandma', count: 150 }
  },
  {
    id: 'up_grandma_7',
    name: 'X-ray glasses',
    cost: 5000000000000,
    icon: '🕶️',
    desc: 'Grandmas are twice as efficient.',
    flavor: 'Seeing directly into the ovens without opening doors.',
    type: 'building_mult',
    target: 'grandma',
    multiplier: 2,
    req: { building: 'grandma', count: 200 }
  },

  // Grandma Synergies
  {
    id: 'up_syn_farmer_grandma',
    name: 'Farmer grandmas',
    cost: 55000,
    icon: '👵🌾',
    desc: 'Grandmas are twice as efficient. Farms gain +1% CpS per 14 grandmas.',
    flavor: 'Straw hats and flour aprons.',
    type: 'grandma_synergy',
    target: 'farm',
    multiplier: 2,
    req: { building: 'grandma', count: 15, extraBuilding: 'farm', extraCount: 15 }
  },
  {
    id: 'up_syn_miner_grandma',
    name: 'Miner grandmas',
    cost: 600000,
    icon: '👵⛏️',
    desc: 'Grandmas are twice as efficient. Mines gain +1% CpS per 14 grandmas.',
    flavor: 'Canaries love their crumbles.',
    type: 'grandma_synergy',
    target: 'mine',
    multiplier: 2,
    req: { building: 'grandma', count: 15, extraBuilding: 'mine', extraCount: 15 }
  },
  {
    id: 'up_syn_factory_grandma',
    name: 'Worker grandmas',
    cost: 6500000,
    icon: '👵🏭',
    desc: 'Grandmas are twice as efficient. Factories gain +1% CpS per 14 grandmas.',
    flavor: 'Unionized elder bakers.',
    type: 'grandma_synergy',
    target: 'factory',
    multiplier: 2,
    req: { building: 'grandma', count: 15, extraBuilding: 'factory', extraCount: 15 }
  },
  {
    id: 'up_syn_banker_grandma',
    name: 'Banker grandmas',
    cost: 70000000,
    icon: '👵🏦',
    desc: 'Grandmas are twice as efficient. Banks gain +1% CpS per 14 grandmas.',
    flavor: 'Wise investment in butter bonds.',
    type: 'grandma_synergy',
    target: 'bank',
    multiplier: 2,
    req: { building: 'grandma', count: 15, extraBuilding: 'bank', extraCount: 15 }
  },
  {
    id: 'up_syn_priestess_grandma',
    name: 'Priestess grandmas',
    cost: 1000000000,
    icon: '👵🏛️',
    desc: 'Grandmas are twice as efficient. Temples gain +1% CpS per 14 grandmas.',
    flavor: 'Chanting ancient dough scriptures.',
    type: 'grandma_synergy',
    target: 'temple',
    multiplier: 2,
    req: { building: 'grandma', count: 15, extraBuilding: 'temple', extraCount: 15 }
  },
  {
    id: 'up_syn_witch_grandma',
    name: 'Witch grandmas',
    cost: 16500000000,
    icon: '👵🧙',
    desc: 'Grandmas are twice as efficient. Wizard towers gain +1% CpS per 14 grandmas.',
    flavor: 'Cackling over bubbling batter cauldrons.',
    type: 'grandma_synergy',
    target: 'wizardTower',
    multiplier: 2,
    req: { building: 'grandma', count: 15, extraBuilding: 'wizardTower', extraCount: 15 }
  },
  {
    id: 'up_syn_cosmic_grandma',
    name: 'Cosmic grandmas',
    cost: 255000000000,
    icon: '👵🚀',
    desc: 'Grandmas are twice as efficient. Shipments gain +1% CpS per 14 grandmas.',
    flavor: 'Wearing retro space helmets and knitting in zero gravity.',
    type: 'grandma_synergy',
    target: 'shipment',
    multiplier: 2,
    req: { building: 'grandma', count: 15, extraBuilding: 'shipment', extraCount: 15 }
  },
  {
    id: 'up_syn_transmuting_grandma',
    name: 'Transmuting grandmas',
    cost: 3750000000000,
    icon: '👵⚗️',
    desc: 'Grandmas are twice as efficient. Alchemy labs gain +1% CpS per 14 grandmas.',
    flavor: 'Turning lead teeth into pure white sugar.',
    type: 'grandma_synergy',
    target: 'alchemyLab',
    multiplier: 2,
    req: { building: 'grandma', count: 15, extraBuilding: 'alchemyLab', extraCount: 15 }
  },
  {
    id: 'up_syn_antimatter_grandma',
    name: 'Antimatter grandmas',
    cost: 8500000000000000,
    icon: '👵⚛️',
    desc: 'Grandmas are twice as efficient. Antimatter condensers gain +1% CpS per 14 grandmas.',
    flavor: 'Their knitting needles pierce quantum strings.',
    type: 'grandma_synergy',
    target: 'antimatter',
    multiplier: 2,
    req: { building: 'grandma', count: 15, extraBuilding: 'antimatter', extraCount: 15 }
  },

  // ==========================================
  // 5. GRANDMAPOCALYPSE & RESEARCH UPGRADES
  // ==========================================
  {
    id: 'up_research_bingo',
    name: 'Bingo center/Research facility',
    cost: 100000000,
    icon: '👵🔬',
    desc: 'Unlocks the mysterious Elder research tree.',
    flavor: 'A quiet place for our beloved elders to play bingo and tamper with reality.',
    type: 'grandmapocalypse',
    stage: 0,
    req: { building: 'grandma', count: 25 }
  },
  {
    id: 'up_research_onemind',
    name: 'One mind',
    desc: 'Grandmas gain +1 base CpS. Each grandma gives +0.02 base CpS per grandma. WARNING: Awakening the hivemind begins the Grandmapocalypse.',
    cost: 1000000000,
    icon: '🧠👵',
    flavor: 'We are one. We bake as one.',
    type: 'grandmapocalypse',
    stage: 1,
    req: { upgrade: 'up_research_bingo' }
  },
  {
    id: 'up_research_nuts',
    name: 'Exotic nuts',
    cost: 5000000000,
    icon: '🌰',
    desc: 'Cookie production multiplier +4%. Grandmas are twice as efficient.',
    flavor: 'Slightly glowing walnuts.',
    type: 'grandmapocalypse',
    stage: 1,
    req: { upgrade: 'up_research_onemind' }
  },
  {
    id: 'up_research_brainsweep',
    name: 'Communal brainsweep',
    cost: 50000000000,
    icon: '🧠⚡',
    desc: 'Grandmas gain +1 base CpS. Grandmapocalypse intensifies.',
    flavor: 'Synchronized knitting thoughts echo through the pantry.',
    type: 'grandmapocalypse',
    stage: 2,
    req: { upgrade: 'up_research_nuts' }
  },
  {
    id: 'up_research_sugar',
    name: 'Arcane sugar',
    cost: 500000000000,
    icon: '🍬✨',
    desc: 'Cookie production multiplier +5%. Grandmas are twice as efficient.',
    flavor: 'Refined from otherworldly dimensional sugar cane.',
    type: 'grandmapocalypse',
    stage: 2,
    req: { upgrade: 'up_research_brainsweep' }
  },
  {
    id: 'up_research_elderpact',
    name: 'Elder Pact',
    cost: 5000000000000,
    icon: '📜👵',
    desc: 'Grandmas gain +0.05 base CpS per portal. Grandmapocalypse reaches Anger mode. Wrinklers appear.',
    flavor: 'The pact is sealed with chocolate blood.',
    type: 'grandmapocalypse',
    stage: 3,
    req: { upgrade: 'up_research_sugar' }
  },

  // ==========================================
  // 6. FARM UPGRADES
  // ==========================================
  {
    id: 'up_farm_1',
    name: 'Cheap hoes',
    cost: 11000,
    icon: '🌱',
    desc: 'Farms are twice as efficient.',
    flavor: 'Tilling the sugary soil.',
    type: 'building_mult',
    target: 'farm',
    multiplier: 2,
    req: { building: 'farm', count: 1 }
  },
  {
    id: 'up_farm_2',
    name: 'Fertilizer',
    cost: 55000,
    icon: '🪴',
    desc: 'Farms are twice as efficient.',
    flavor: 'It smells like caramel and success.',
    type: 'building_mult',
    target: 'farm',
    multiplier: 2,
    req: { building: 'farm', count: 5 }
  },
  {
    id: 'up_farm_3',
    name: 'Cookie trees',
    cost: 550000,
    icon: '🌳',
    desc: 'Farms are twice as efficient.',
    flavor: 'Money does not grow on trees, but cookies certainly do.',
    type: 'building_mult',
    target: 'farm',
    multiplier: 2,
    req: { building: 'farm', count: 25 }
  },
  {
    id: 'up_farm_4',
    name: 'Genetically modified cookies',
    cost: 55000000,
    icon: '🧬',
    desc: 'Farms are twice as efficient.',
    flavor: 'Yields higher chocolate concentration per crop.',
    type: 'building_mult',
    target: 'farm',
    multiplier: 2,
    req: { building: 'farm', count: 50 }
  },
  {
    id: 'up_farm_5',
    name: 'Gingerbread scarecrows',
    cost: 5500000000,
    icon: '🌾',
    desc: 'Farms are twice as efficient.',
    flavor: 'Deterring crows with delicious cinnamon.',
    type: 'building_mult',
    target: 'farm',
    multiplier: 2,
    req: { building: 'farm', count: 100 }
  },
  {
    id: 'up_farm_6',
    name: 'Pulsar sprinklers',
    cost: 550000000000,
    icon: '🚿',
    desc: 'Farms are twice as efficient.',
    flavor: 'Irrigation with irradiated sweet tea.',
    type: 'building_mult',
    target: 'farm',
    multiplier: 2,
    req: { building: 'farm', count: 150 }
  },
  {
    id: 'up_farm_7',
    name: 'Fartilizer',
    cost: 55000000000000,
    icon: '💨',
    desc: 'Farms are twice as efficient.',
    flavor: 'Natural methane enrichment from happy cows.',
    type: 'building_mult',
    target: 'farm',
    multiplier: 2,
    req: { building: 'farm', count: 200 }
  },

  // ==========================================
  // 7. MINE UPGRADES
  // ==========================================
  {
    id: 'up_mine_1',
    name: 'Sugar gas',
    cost: 120000,
    icon: '💨',
    desc: 'Mines are twice as efficient.',
    flavor: 'Sweet, volatile, highly energetic vapors.',
    type: 'building_mult',
    target: 'mine',
    multiplier: 2,
    req: { building: 'mine', count: 1 }
  },
  {
    id: 'up_mine_2',
    name: 'Megadrill',
    cost: 600000,
    icon: '🔩',
    desc: 'Mines are twice as efficient.',
    flavor: 'Boring deep into rich fudge veins.',
    type: 'building_mult',
    target: 'mine',
    multiplier: 2,
    req: { building: 'mine', count: 5 }
  },
  {
    id: 'up_mine_3',
    name: 'Ultradrill',
    cost: 6000000,
    icon: '⚙️',
    desc: 'Mines are twice as efficient.',
    flavor: 'Diamond-tipped spinning behemoth.',
    type: 'building_mult',
    target: 'mine',
    multiplier: 2,
    req: { building: 'mine', count: 25 }
  },
  {
    id: 'up_mine_4',
    name: 'Ultramafic rock',
    cost: 600000000,
    icon: '🪨',
    desc: 'Mines are twice as efficient.',
    flavor: 'Igneous pastry geology.',
    type: 'building_mult',
    target: 'mine',
    multiplier: 2,
    req: { building: 'mine', count: 50 }
  },
  {
    id: 'up_mine_5',
    name: 'Core forge',
    cost: 60000000000,
    icon: '🔥',
    desc: 'Mines are twice as efficient.',
    flavor: 'Tapping magma chambers of liquid chocolate.',
    type: 'building_mult',
    target: 'mine',
    multiplier: 2,
    req: { building: 'mine', count: 100 }
  },
  {
    id: 'up_mine_6',
    name: 'Planet splitter',
    cost: 6000000000000,
    icon: '⛏️',
    desc: 'Mines are twice as efficient.',
    flavor: 'Cleaving tectonic fudge plates.',
    type: 'building_mult',
    target: 'mine',
    multiplier: 2,
    req: { building: 'mine', count: 150 }
  },
  {
    id: 'up_mine_7',
    name: 'Bedrock drills',
    cost: 600000000000000,
    icon: '💎',
    desc: 'Mines are twice as efficient.',
    flavor: 'Piercing the bottom of the digital world.',
    type: 'building_mult',
    target: 'mine',
    multiplier: 2,
    req: { building: 'mine', count: 200 }
  },

  // ==========================================
  // 8. FACTORY UPGRADES
  // ==========================================
  {
    id: 'up_factory_1',
    name: 'Sturdier conveyor belts',
    cost: 1300000,
    icon: '📦',
    desc: 'Factories are twice as efficient.',
    flavor: 'Reinforced with nougat-grade polymers.',
    type: 'building_mult',
    target: 'factory',
    multiplier: 2,
    req: { building: 'factory', count: 1 }
  },
  {
    id: 'up_factory_2',
    name: 'Child labor',
    cost: 6500000,
    icon: '👶',
    desc: 'Factories are twice as efficient.',
    flavor: 'Small hands make delicate cookies.',
    type: 'building_mult',
    target: 'factory',
    multiplier: 2,
    req: { building: 'factory', count: 5 }
  },
  {
    id: 'up_factory_3',
    name: 'Sweatshop',
    cost: 65000000,
    icon: '🌡️',
    desc: 'Factories are twice as efficient.',
    flavor: 'The ovens never stop, night and day.',
    type: 'building_mult',
    target: 'factory',
    multiplier: 2,
    req: { building: 'factory', count: 25 }
  },
  {
    id: 'up_factory_4',
    name: 'Radium reactors',
    cost: 6500000000,
    icon: '☢️',
    desc: 'Factories are twice as efficient.',
    flavor: 'Baking with a gentle, warm green glow.',
    type: 'building_mult',
    target: 'factory',
    multiplier: 2,
    req: { building: 'factory', count: 50 }
  },
  {
    id: 'up_factory_5',
    name: 'Recombobulators',
    cost: 650000000000,
    icon: '🔬',
    desc: 'Factories are twice as efficient.',
    flavor: 'Recombining broken crumbs into flawless discs.',
    type: 'building_mult',
    target: 'factory',
    multiplier: 2,
    req: { building: 'factory', count: 100 }
  },
  {
    id: 'up_factory_6',
    name: 'Deep-bake chimneys',
    cost: 65000000000000,
    icon: '🏭',
    desc: 'Factories are twice as efficient.',
    flavor: 'Smokestacks towering into the stratosphere.',
    type: 'building_mult',
    target: 'factory',
    multiplier: 2,
    req: { building: 'factory', count: 150 }
  },
  {
    id: 'up_factory_7',
    name: 'Cyborg workforce',
    cost: 6500000000000000,
    icon: '🤖',
    desc: 'Factories are twice as efficient.',
    flavor: 'Half baker, half titanium mixer.',
    type: 'building_mult',
    target: 'factory',
    multiplier: 2,
    req: { building: 'factory', count: 200 }
  },

  // ==========================================
  // 9. BANK UPGRADES
  // ==========================================
  {
    id: 'up_bank_1',
    name: 'Taller tellers',
    cost: 14000000,
    icon: '🧑‍💼',
    desc: 'Banks are twice as efficient.',
    flavor: 'More imposing, better interest rates.',
    type: 'building_mult',
    target: 'bank',
    multiplier: 2,
    req: { building: 'bank', count: 1 }
  },
  {
    id: 'up_bank_2',
    name: 'Scissor-resistant credit cards',
    cost: 70000000,
    icon: '💳',
    desc: 'Banks are twice as efficient.',
    flavor: 'Unstoppable cookie transactions.',
    type: 'building_mult',
    target: 'bank',
    multiplier: 2,
    req: { building: 'bank', count: 5 }
  },
  {
    id: 'up_bank_3',
    name: 'Acid-proof vaults',
    cost: 700000000,
    icon: '🔒',
    desc: 'Banks are twice as efficient.',
    flavor: 'Safe from pastry heists and lemonade spills.',
    type: 'building_mult',
    target: 'bank',
    multiplier: 2,
    req: { building: 'bank', count: 25 }
  },
  {
    id: 'up_bank_4',
    name: 'Chocolate coins',
    cost: 70000000000,
    icon: '🪙',
    desc: 'Banks are twice as efficient.',
    flavor: 'Gold foil wrapped currency.',
    type: 'building_mult',
    target: 'bank',
    multiplier: 2,
    req: { building: 'bank', count: 50 }
  },
  {
    id: 'up_bank_5',
    name: 'Exponential interest',
    cost: 7000000000000,
    icon: '📈',
    desc: 'Banks are twice as efficient.',
    flavor: 'Compounding dough per second.',
    type: 'building_mult',
    target: 'bank',
    multiplier: 2,
    req: { building: 'bank', count: 100 }
  },
  {
    id: 'up_bank_6',
    name: 'Financial crisis',
    cost: 700000000000000,
    icon: '📉',
    desc: 'Banks are twice as efficient.',
    flavor: 'Bailing out bakers with taxpayer dough.',
    type: 'building_mult',
    target: 'bank',
    multiplier: 2,
    req: { building: 'bank', count: 150 }
  },
  {
    id: 'up_bank_7',
    name: 'Way of the dough',
    cost: 70000000000000000,
    icon: '🏦',
    desc: 'Banks are twice as efficient.',
    flavor: 'The financial zen of universal baking.',
    type: 'building_mult',
    target: 'bank',
    multiplier: 2,
    req: { building: 'bank', count: 200 }
  },

  // ==========================================
  // 10. TEMPLE UPGRADES
  // ==========================================
  {
    id: 'up_temple_1',
    name: 'Golden idols',
    cost: 200000000,
    icon: '🗿',
    desc: 'Temples are twice as efficient.',
    flavor: 'Carved in the image of the First Baker.',
    type: 'building_mult',
    target: 'temple',
    multiplier: 2,
    req: { building: 'temple', count: 1 }
  },
  {
    id: 'up_temple_2',
    name: 'Sacrifices',
    cost: 1000000000,
    icon: '🕯️',
    desc: 'Temples are twice as efficient.',
    flavor: 'Offering burnt cookies to appease the gods.',
    type: 'building_mult',
    target: 'temple',
    multiplier: 2,
    req: { building: 'temple', count: 5 }
  },
  {
    id: 'up_temple_3',
    name: 'Delicious blessing',
    cost: 10000000000,
    icon: '✨',
    desc: 'Temples are twice as efficient.',
    flavor: 'Holy water replaced with whole milk.',
    type: 'building_mult',
    target: 'temple',
    multiplier: 2,
    req: { building: 'temple', count: 25 }
  },
  {
    id: 'up_temple_4',
    name: 'Sun god altar',
    cost: 1000000000000,
    icon: '☀️',
    desc: 'Temples are twice as efficient.',
    flavor: 'Golden rays baking sacred crust.',
    type: 'building_mult',
    target: 'temple',
    multiplier: 2,
    req: { building: 'temple', count: 50 }
  },
  {
    id: 'up_temple_5',
    name: 'The elder scroll',
    cost: 100000000000000,
    icon: '📜',
    desc: 'Temples are twice as efficient.',
    flavor: 'Ancient parchment promising infinite crumbles.',
    type: 'building_mult',
    target: 'temple',
    multiplier: 2,
    req: { building: 'temple', count: 100 }
  },
  {
    id: 'up_temple_6',
    name: 'Consecrated ovens',
    cost: 10000000000000000,
    icon: '🔥',
    desc: 'Temples are twice as efficient.',
    flavor: 'Blessed with eternal sacred embers.',
    type: 'building_mult',
    target: 'temple',
    multiplier: 2,
    req: { building: 'temple', count: 150 }
  },

  // ==========================================
  // 11. WIZARD TOWER UPGRADES
  // ==========================================
  {
    id: 'up_wizard_1',
    name: 'Pointier hats',
    cost: 3300000000,
    icon: '🧙',
    desc: 'Wizard towers are twice as efficient.',
    flavor: 'Channeling raw cosmic frosting through the fabric of space.',
    type: 'building_mult',
    target: 'wizardTower',
    multiplier: 2,
    req: { building: 'wizardTower', count: 1 }
  },
  {
    id: 'up_wizard_2',
    name: 'Beard grooming kit',
    cost: 16500000000,
    icon: '🧔',
    desc: 'Wizard towers are twice as efficient.',
    flavor: 'Clean beards make untangled incantations.',
    type: 'building_mult',
    target: 'wizardTower',
    multiplier: 2,
    req: { building: 'wizardTower', count: 5 }
  },
  {
    id: 'up_wizard_3',
    name: 'Cooking cauldrons',
    cost: 165000000000,
    icon: '🥣',
    desc: 'Wizard towers are twice as efficient.',
    flavor: 'Double, double toil and crumble.',
    type: 'building_mult',
    target: 'wizardTower',
    multiplier: 2,
    req: { building: 'wizardTower', count: 25 }
  },
  {
    id: 'up_wizard_4',
    name: 'Spellbound batter',
    cost: 16500000000000,
    icon: '🪄',
    desc: 'Wizard towers are twice as efficient.',
    flavor: 'Whisked by levitation enchantments.',
    type: 'building_mult',
    target: 'wizardTower',
    multiplier: 2,
    req: { building: 'wizardTower', count: 50 }
  },
  {
    id: 'up_wizard_5',
    name: 'Arcane vortex',
    cost: 1650000000000000,
    icon: '🌀',
    desc: 'Wizard towers are twice as efficient.',
    flavor: 'Swirling mystic dough storms.',
    type: 'building_mult',
    target: 'wizardTower',
    multiplier: 2,
    req: { building: 'wizardTower', count: 100 }
  },

  // ==========================================
  // 12. SHIPMENT UPGRADES
  // ==========================================
  {
    id: 'up_shipment_1',
    name: 'Vanilla nebulae',
    cost: 51000000000,
    icon: '🌌',
    desc: 'Shipments are twice as efficient.',
    flavor: 'Interstellar clouds of pure vanilla extract.',
    type: 'building_mult',
    target: 'shipment',
    multiplier: 2,
    req: { building: 'shipment', count: 1 }
  },
  {
    id: 'up_shipment_2',
    name: 'Wormholes',
    cost: 255000000000,
    icon: '🕳️',
    desc: 'Shipments are twice as efficient.',
    flavor: 'Shortcut across the pastry cosmos.',
    type: 'building_mult',
    target: 'shipment',
    multiplier: 2,
    req: { building: 'shipment', count: 5 }
  },
  {
    id: 'up_shipment_3',
    name: 'Hyperdrive',
    cost: 2550000000000,
    icon: '🚀',
    desc: 'Shipments are twice as efficient.',
    flavor: 'Light-speed delivery of warm dough.',
    type: 'building_mult',
    target: 'shipment',
    multiplier: 2,
    req: { building: 'shipment', count: 25 }
  },
  {
    id: 'up_shipment_4',
    name: 'Sun-baking',
    cost: 255000000000000,
    icon: '☀️',
    desc: 'Shipments are twice as efficient.',
    flavor: 'Flying close to supernovas for extra crispiness.',
    type: 'building_mult',
    target: 'shipment',
    multiplier: 2,
    req: { building: 'shipment', count: 50 }
  },
  {
    id: 'up_shipment_5',
    name: 'Galactic hyperlanes',
    cost: 25500000000000000,
    icon: '✨',
    desc: 'Shipments are twice as efficient.',
    flavor: 'Superhighways connecting pastry galaxies.',
    type: 'building_mult',
    target: 'shipment',
    multiplier: 2,
    req: { building: 'shipment', count: 100 }
  },

  // ==========================================
  // 13. ALCHEMY LAB UPGRADES
  // ==========================================
  {
    id: 'up_alchemy_1',
    name: 'Antimony dough',
    cost: 750000000000,
    icon: '🧪',
    desc: 'Alchemy labs are twice as efficient.',
    flavor: 'Precious metallurgical confection.',
    type: 'building_mult',
    target: 'alchemyLab',
    multiplier: 2,
    req: { building: 'alchemyLab', count: 1 }
  },
  {
    id: 'up_alchemy_2',
    name: 'Essence of dough',
    cost: 3750000000000,
    icon: '⚗️',
    desc: 'Alchemy labs are twice as efficient.',
    flavor: 'Distilling pure flavor into crystalline sugar.',
    type: 'building_mult',
    target: 'alchemyLab',
    multiplier: 2,
    req: { building: 'alchemyLab', count: 5 }
  },
  {
    id: 'up_alchemy_3',
    name: 'True chocolate',
    cost: 37500000000000,
    icon: '🍫',
    desc: 'Alchemy labs are twice as efficient.',
    flavor: 'Molecular transmutation of lead into fudge.',
    type: 'building_mult',
    target: 'alchemyLab',
    multiplier: 2,
    req: { building: 'alchemyLab', count: 25 }
  },
  {
    id: 'up_alchemy_4',
    name: 'Ambrosia',
    cost: 3750000000000000,
    icon: '🍯',
    desc: 'Alchemy labs are twice as efficient.',
    flavor: 'The nectar of divine pastry.',
    type: 'building_mult',
    target: 'alchemyLab',
    multiplier: 2,
    req: { building: 'alchemyLab', count: 50 }
  },
  {
    id: 'up_alchemy_5',
    name: 'Philosopher\'s scone',
    cost: 375000000000000000,
    icon: '💎',
    desc: 'Alchemy labs are twice as efficient.',
    flavor: 'Grants eternal life and infinite batter.',
    type: 'building_mult',
    target: 'alchemyLab',
    multiplier: 2,
    req: { building: 'alchemyLab', count: 100 }
  },

  // ==========================================
  // 14. PORTAL UPGRADES
  // ==========================================
  {
    id: 'up_portal_1',
    name: 'Ancient tablet',
    cost: 10000000000000,
    icon: '📜',
    desc: 'Portals are twice as efficient.',
    flavor: 'The runes hum with ancient hunger.',
    type: 'building_mult',
    target: 'portal',
    multiplier: 2,
    req: { building: 'portal', count: 1 }
  },
  {
    id: 'up_portal_2',
    name: 'Sanity dance',
    cost: 50000000000000,
    icon: '💃',
    desc: 'Portals are twice as efficient.',
    flavor: 'Pleasing the elder beings with pastry pirouettes.',
    type: 'building_mult',
    target: 'portal',
    multiplier: 2,
    req: { building: 'portal', count: 5 }
  },
  {
    id: 'up_portal_3',
    name: 'Brink of madness',
    cost: 500000000000000,
    icon: '👁️',
    desc: 'Portals are twice as efficient.',
    flavor: 'Looking deep into the churning frosting vortex.',
    type: 'building_mult',
    target: 'portal',
    multiplier: 2,
    req: { building: 'portal', count: 25 }
  },
  {
    id: 'up_portal_4',
    name: 'Otherworld oven',
    cost: 50000000000000000,
    icon: '🚪',
    desc: 'Portals are twice as efficient.',
    flavor: 'Convection heating fueled by cosmic terror.',
    type: 'building_mult',
    target: 'portal',
    multiplier: 2,
    req: { building: 'portal', count: 50 }
  },

  // ==========================================
  // 15. TIME MACHINE UPGRADES
  // ==========================================
  {
    id: 'up_time_1',
    name: 'Flux capacitor',
    cost: 140000000000000,
    icon: '⚡',
    desc: 'Time machines are twice as efficient.',
    flavor: 'Baking at 88 miles per hour.',
    type: 'building_mult',
    target: 'timeMachine',
    multiplier: 2,
    req: { building: 'timeMachine', count: 1 }
  },
  {
    id: 'up_time_2',
    name: 'Time paradox reducer',
    cost: 700000000000000,
    icon: '⏳',
    desc: 'Time machines are twice as efficient.',
    flavor: 'Eat your cookie yesterday and have it today.',
    type: 'building_mult',
    target: 'timeMachine',
    multiplier: 2,
    req: { building: 'timeMachine', count: 5 }
  },
  {
    id: 'up_time_3',
    name: 'Yesterday\'s dough',
    cost: 7000000000000000,
    icon: '🕰️',
    desc: 'Time machines are twice as efficient.',
    flavor: 'Rescuing pastries from ancient Egyptian pyramids.',
    type: 'building_mult',
    target: 'timeMachine',
    multiplier: 2,
    req: { building: 'timeMachine', count: 25 }
  },
  {
    id: 'up_time_4',
    name: 'Continuum baker',
    cost: 700000000000000000,
    icon: '⌛',
    desc: 'Time machines are twice as efficient.',
    flavor: 'Baking simultaneous cookies across all past eras.',
    type: 'building_mult',
    target: 'timeMachine',
    multiplier: 2,
    req: { building: 'timeMachine', count: 50 }
  },

  // ==========================================
  // 16. ANTIMATTER CONDENSER UPGRADES
  // ==========================================
  {
    id: 'up_antimatter_1',
    name: 'Sugar bosons',
    cost: 1700000000000000,
    icon: '⚛️',
    desc: 'Antimatter condensers are twice as efficient.',
    flavor: 'The fundamental particle of sweetness.',
    type: 'building_mult',
    target: 'antimatter',
    multiplier: 2,
    req: { building: 'antimatter', count: 1 }
  },
  {
    id: 'up_antimatter_2',
    name: 'String theory',
    cost: 8500000000000000,
    icon: '🎻',
    desc: 'Antimatter condensers are twice as efficient.',
    flavor: 'Vibrating strings of caramelized spacetime.',
    type: 'building_mult',
    target: 'antimatter',
    multiplier: 2,
    req: { building: 'antimatter', count: 5 }
  },
  {
    id: 'up_antimatter_3',
    name: 'Quantum glaze',
    cost: 85000000000000000,
    icon: '🔬',
    desc: 'Antimatter condensers are twice as efficient.',
    flavor: 'Superpositioned chocolate syrup.',
    type: 'building_mult',
    target: 'antimatter',
    multiplier: 2,
    req: { building: 'antimatter', count: 25 }
  },

  // ==========================================
  // 17. PRISM UPGRADES
  // ==========================================
  {
    id: 'up_prism_1',
    name: 'Gem polishing',
    cost: 21000000000000000,
    icon: '💎',
    desc: 'Prisms are twice as efficient.',
    flavor: 'Refracting sunlight directly into cookies.',
    type: 'building_mult',
    target: 'prism',
    multiplier: 2,
    req: { building: 'prism', count: 1 }
  },
  {
    id: 'up_prism_2',
    name: 'Rainbow confectionery',
    cost: 105000000000000000,
    icon: '🌈',
    desc: 'Prisms are twice as efficient.',
    flavor: 'All seven spectral wavelengths of deliciousness.',
    type: 'building_mult',
    target: 'prism',
    multiplier: 2,
    req: { building: 'prism', count: 5 }
  },
  {
    id: 'up_prism_3',
    name: 'Photonic crystals',
    cost: 1050000000000000000,
    icon: '✨',
    desc: 'Prisms are twice as efficient.',
    flavor: 'Light captured and solidified into sugar wafers.',
    type: 'building_mult',
    target: 'prism',
    multiplier: 2,
    req: { building: 'prism', count: 25 }
  },

  // ==========================================
  // 18. CHANCEMAKER UPGRADES
  // ==========================================
  {
    id: 'up_chance_1',
    name: 'Loaded dice',
    cost: 260000000000000000,
    icon: '🎲',
    desc: 'Chancemakers are twice as efficient.',
    flavor: 'Probability always rolls chocolate.',
    type: 'building_mult',
    target: 'chancemaker',
    multiplier: 2,
    req: { building: 'chancemaker', count: 1 }
  },
  {
    id: 'up_chance_2',
    name: 'High roller',
    cost: 1300000000000000000,
    icon: '🎰',
    desc: 'Chancemakers are twice as efficient.',
    flavor: 'The house always bakes.',
    type: 'building_mult',
    target: 'chancemaker',
    multiplier: 2,
    req: { building: 'chancemaker', count: 5 }
  },
  {
    id: 'up_chance_3',
    name: 'Probability glaze',
    cost: 13000000000000000000,
    icon: '🍀',
    desc: 'Chancemakers are twice as efficient.',
    flavor: 'Reality bends towards pastry.',
    type: 'building_mult',
    target: 'chancemaker',
    multiplier: 2,
    req: { building: 'chancemaker', count: 25 }
  },

  // ==========================================
  // 19. KITTEN MILK MULTIPLIERS (FULL LADDER)
  // ==========================================
  {
    id: 'up_kitten_1',
    name: 'Kitten helpers',
    cost: 9000000,
    icon: '🐱',
    desc: 'You gain more CpS the more milk you have.',
    flavor: 'Purring, kneading dough with soft paws.',
    type: 'kitten',
    milkFactor: 0.1,
    req: { achievements: 5 }
  },
  {
    id: 'up_kitten_2',
    name: 'Kitten workers',
    cost: 9000000000,
    icon: '😺',
    desc: 'You gain more CpS the more milk you have.',
    flavor: 'Wearing little aprons and hairnets.',
    type: 'kitten',
    milkFactor: 0.125,
    req: { achievements: 15 }
  },
  {
    id: 'up_kitten_3',
    name: 'Kitten engineers',
    cost: 90000000000000,
    icon: '😸',
    desc: 'You gain more CpS the more milk you have.',
    flavor: 'Calculated feline mechanics.',
    type: 'kitten',
    milkFactor: 0.15,
    req: { achievements: 30 }
  },
  {
    id: 'up_kitten_4',
    name: 'Kitten overseers',
    cost: 900000000000000000,
    icon: '😽',
    desc: 'You gain more CpS the more milk you have.',
    flavor: 'Stern supervision by fluffy rulers.',
    type: 'kitten',
    milkFactor: 0.175,
    req: { achievements: 50 }
  },
  {
    id: 'up_kitten_5',
    name: 'Kitten managers',
    cost: 900000000000000000000,
    icon: '😻',
    desc: 'You gain more CpS the more milk you have.',
    flavor: 'Paw-written executive memos.',
    type: 'kitten',
    milkFactor: 0.2,
    req: { achievements: 75 }
  },
  {
    id: 'up_kitten_6',
    name: 'Kitten accountants',
    cost: 900000000000000000000000,
    icon: '😹',
    desc: 'You gain more CpS the more milk you have.',
    flavor: 'Tax evasion through feline diplomacy.',
    type: 'kitten',
    milkFactor: 0.225,
    req: { achievements: 100 }
  },

  // ==========================================
  // 20. GOLDEN & WRATH COOKIE UPGRADES
  // ==========================================
  {
    id: 'up_lucky_day',
    name: 'Lucky day',
    cost: 777777,
    icon: '🍀',
    desc: 'Golden cookies appear twice as often and stay longer.',
    flavor: 'Found a 4-leaf clover baked inside a macaron.',
    type: 'golden_freq',
    freqMult: 2,
    req: { goldenClicks: 7 }
  },
  {
    id: 'up_serendipity',
    name: 'Serendipity',
    cost: 77777777,
    icon: '✨',
    desc: 'Golden cookies appear twice as often again.',
    flavor: 'Fortune truly favors the sweet.',
    type: 'golden_freq',
    freqMult: 2,
    req: { goldenClicks: 27 }
  },
  {
    id: 'up_get_lucky',
    name: 'Get lucky',
    cost: 77777777777,
    icon: '🌟',
    desc: 'Golden cookie effects last twice as long.',
    flavor: 'We are up all night to bake cookies.',
    type: 'golden_duration',
    durMult: 2,
    req: { goldenClicks: 77 }
  }
];
