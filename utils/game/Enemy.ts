export type EnemyState = 'alive' | 'dead' | 'deadFromBullet';

export class Enemy {
  x: number = 0;
  y: number = 0;
  velX: number = 1;
  velY: number = 0;
  grounded: boolean = false;
  type: number = 0;
  state: EnemyState = 'alive';
  sX: number = 0;
  sY: number = 0;
  width: number = 32;
  height: number = 32;
  frame: number = 0;
  private tickCounter: number = 0;
  private maxTick: number = 10;
  private sprite: HTMLImageElement;
  private gameUI: any;

  constructor(gameUI: any) {
    this.gameUI = gameUI;
    this.sprite = new Image();
    this.sprite.src = '/images/enemies.png';
  }

  goomba() {
    this.type = 20;
    this.sX = 0;
  }

  draw() {
    this.sX = this.width * this.frame;
    this.gameUI.draw(
      this.sprite,
      this.sX,
      this.sY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update() {
    const gravity = 0.2;

    if (this.grounded) {
      this.velY = 0;
    }

    if (this.state === 'dead') {
      this.frame = 2;
      this.tickCounter++;
      if (this.tickCounter >= 60) {
        this.frame = 4;
      }
    } else if (this.state === 'deadFromBullet') {
      this.frame = 3;
      this.velY += gravity;
      this.y += this.velY;
    } else {
      this.velY += gravity;
      this.x += this.velX;
      this.y += this.velY;

      this.tickCounter += 1;
      if (this.tickCounter > this.maxTick) {
        this.tickCounter = 0;
        this.frame = this.frame === 0 ? 1 : 0;
      }
    }
  }
}
