export interface ScoreData {
  coinScore: number;
  totalScore: number;
  lifeCount: number;
  level: number;
}

export class Score {
  coinScore: number = 0;
  totalScore: number = 0;
  lifeCount: number = 5;
  private onUpdate?: (data: ScoreData) => void;

  constructor(onUpdate?: (data: ScoreData) => void) {
    this.onUpdate = onUpdate;
  }

  init() {
    this.coinScore = 0;
    this.totalScore = 0;
    this.lifeCount = 5;
    this.notifyUpdate(1);
  }

  updateCoinScore() {
    if (this.coinScore >= 100) {
      this.coinScore = 0;
      this.lifeCount++;
      this.notifyUpdate();
    }
    this.notifyUpdate();
  }

  updateTotalScore() {
    this.notifyUpdate();
  }

  updateLifeCount() {
    this.notifyUpdate();
  }

  updateLevelNum(level: number) {
    this.notifyUpdate(level);
  }

  reset() {
    this.coinScore = 0;
    this.lifeCount = 5;
    this.totalScore = 0;
    this.notifyUpdate(1);
  }

  private notifyUpdate(level?: number) {
    if (this.onUpdate) {
      this.onUpdate({
        coinScore: this.coinScore,
        totalScore: this.totalScore,
        lifeCount: this.lifeCount,
        level: level || 1
      });
    }
  }
}
