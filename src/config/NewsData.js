/**
 * Cookie Clicker Authentic News Ticker Headlines
 * Contextual headlines based on cookies, buildings owned, and special events.
 */
export const NEWS_HEADLINES = {
  general: [
    "News: You feel like making cookies. But nobody wants to eat your cookies.",
    "News: Your first batch of cookies came out slightly burnt, but you eat them anyway.",
    "News: Your cookies are popular with the local pigeons.",
    "News: Local neighborhood cat sniffs cookie crumb, looks disappointed.",
    "News: Doctors recommend eating between 0 and 1 cookie per day. Cookie enthusiasts protest.",
    "News: Cookie-flavored air fresheners recalled due to mass olfactory confusion.",
    "News: 'Cookies are the new currency,' claims eccentric billionaire hoarding chocolate chips.",
    "News: Scientists discover cookies contain trace amounts of pure joy.",
    "News: Man arrested after attempting to deposit batch of warm cookies into ATM.",
    "News: 'They are just so round,' weeps local geometry professor admiring your cookies."
  ],
  grandma: [
    "News: Grandmas report feeling energized and ready to bake until the heat death of the universe.",
    "News: 'We know what you did,' whisper grandmas in unison as rolling pins clatter.",
    "News: Local grandma spotted bench-pressing a sack of flour with eerie calm.",
    "News: Grandmas demand unionization, warm milk breaks, and unlimited knitting needles.",
    "News: 'More butter, deary,' echoes an ominous whisper from the pantry."
  ],
  farm: [
    "News: Cookie orchards blossom with chocolate petals under sugary rain.",
    "News: Farmers report wild squirrels attempting to harvest fresh cookie crops.",
    "News: Genetically modified cookie wheat exceeds all known agricultural limits."
  ],
  mine: [
    "News: Spelunkers discover massive subterranean caverns of molten dark chocolate.",
    "News: Miners strike rich vein of white chocolate; stock market briefly fluctuates.",
    "News: Deep-earth drilling hits gooey caramel pocket under immense pressure."
  ],
  factory: [
    "News: Industrial smokestacks release fragrant clouds of warm vanilla bean.",
    "News: Assembly line efficiency hits 99.98% as conveyor belts run day and night.",
    "News: Local rivers now flowing with 2% pasteurized milk, ecology reports thriving."
  ],
  bank: [
    "News: Central Bank replaces gold reserves with vault-grade chocolate chip cookies.",
    "News: Cookie loans available at competitive 0.5% bite rate.",
    "News: Wall Street traders swap suits for chef aprons as cookie hedge funds soar."
  ],
  temple: [
    "News: Priests chant ancient baking hymns atop sugar-stepped pyramids.",
    "News: Worshippers claim divine cookie miracles occurring daily in holy ovens."
  ],
  wizardTower: [
    "News: Local weather report: 80% chance of torrential sprinkles and localized batter storms.",
    "News: Wizards caution against mixing forbidden dark cocoa with necromancy."
  ],
  shipment: [
    "News: Interplanetary freight shuttles arrive carrying rare lunar sugar crystals.",
    "News: Astronauts confirm: the moon is not cheese, it is a giant shortbread cookie."
  ],
  alchemyLab: [
    "News: Alchemists succeed in transmuting lead into delicate French macarons.",
    "News: Gold prices plummet as pastry becomes ultimate store of universal value."
  ],
  portal: [
    "News: Dimensional vortex briefly opens in kitchen; screams of ancient gingerbread men heard.",
    "News: Scientists advise against looking directly into the pulsing frosting dimension."
  ],
  timeMachine: [
    "News: Historians retrieve ancient Roman cookies baked by Julius Caesar's personal baker.",
    "News: Paradox avoided: temporal bakers ensure all eaten past cookies are accounted for."
  ],
  rich: [
    "News: Total global GDP eclipsed by single bakery's output.",
    "News: Universe believed to be expanding purely to make room for your cookies.",
    "News: Galactic Council recognizes Cookie Emperor as supreme ruler of known cosmos."
  ]
};

export function getRandomHeadline(state) {
  const pool = [...NEWS_HEADLINES.general];

  if ((state.buildings['grandma'] || 0) >= 1) pool.push(...NEWS_HEADLINES.grandma);
  if ((state.buildings['farm'] || 0) >= 1) pool.push(...NEWS_HEADLINES.farm);
  if ((state.buildings['mine'] || 0) >= 1) pool.push(...NEWS_HEADLINES.mine);
  if ((state.buildings['factory'] || 0) >= 1) pool.push(...NEWS_HEADLINES.factory);
  if ((state.buildings['bank'] || 0) >= 1) pool.push(...NEWS_HEADLINES.bank);
  if ((state.buildings['temple'] || 0) >= 1) pool.push(...NEWS_HEADLINES.temple);
  if ((state.buildings['wizardTower'] || 0) >= 1) pool.push(...NEWS_HEADLINES.wizardTower);
  if ((state.buildings['shipment'] || 0) >= 1) pool.push(...NEWS_HEADLINES.shipment);
  if ((state.buildings['alchemyLab'] || 0) >= 1) pool.push(...NEWS_HEADLINES.alchemyLab);
  if ((state.buildings['portal'] || 0) >= 1) pool.push(...NEWS_HEADLINES.portal);
  if ((state.buildings['timeMachine'] || 0) >= 1) pool.push(...NEWS_HEADLINES.timeMachine);
  if (state.totalCookiesBaked > 1000000000) pool.push(...NEWS_HEADLINES.rich);

  return pool[Math.floor(Math.random() * pool.length)];
}
