/**
 * AchievementSystem: Checks achievement conditions and triggers banner notifications.
 */
import { ACHIEVEMENTS } from '../config/AchievementsData.js';

export class AchievementSystem {
  constructor(game) {
    this.game = game;
  }

  checkAll() {
    const state = this.game.state;
    const unlockedSet = new Set(state.achievements);
    let newlyUnlocked = [];

    for (const ach of ACHIEVEMENTS) {
      if (unlockedSet.has(ach.id)) continue;

      try {
        if (ach.condition(state)) {
          state.achievements.push(ach.id);
          unlockedSet.add(ach.id);
          newlyUnlocked.push(ach);

          // Trigger audio and visual notification
          this.game.audio.playAchievement();
          this.game.notifications.showAchievement(ach);
        }
      } catch (e) {
        console.error(`Error checking achievement ${ach.id}:`, e);
      }
    }

    if (newlyUnlocked.length > 0) {
      this.game.save();
    }

    return newlyUnlocked;
  }
}
