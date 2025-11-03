type SoundType = 'coin' | 'powerUpAppear' | 'powerUp' | 'marioDie' | 'killEnemy' | 'stageClear' | 'bullet' | 'powerDown' | 'jump';

export class GameSound {
  private sounds: Map<SoundType, HTMLAudioElement> = new Map();

  init() {
    this.sounds.set('coin', new Audio('/sounds/coin.wav'));
    this.sounds.set('powerUpAppear', new Audio('/sounds/power-up-appear.wav'));
    this.sounds.set('powerUp', new Audio('/sounds/power-up.wav'));
    this.sounds.set('marioDie', new Audio('/sounds/mario-die.wav'));
    this.sounds.set('killEnemy', new Audio('/sounds/kill-enemy.wav'));
    this.sounds.set('stageClear', new Audio('/sounds/stage-clear.wav'));
    this.sounds.set('bullet', new Audio('/sounds/bullet.wav'));
    this.sounds.set('powerDown', new Audio('/sounds/power-down.wav'));
    this.sounds.set('jump', new Audio('/sounds/jump.wav'));
  }

  play(element: SoundType) {
    const sound = this.sounds.get(element);
    if (sound) {
      sound.pause();
      sound.currentTime = 0;
      sound.play();
    }
  }
}
