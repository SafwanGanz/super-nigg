export type MarioType = 'small' | 'big' | 'fire';

export class Mario {
  type: MarioType = 'small';
  x: number = 0;
  y: number = 0;
  width: number = 32;
  height: number = 44;
  speed: number = 3;
  velX: number = 0;
  velY: number = 0;
  jumping: boolean = false;
  grounded: boolean = false;
  invulnerable: boolean = false;
  sX: number = 0;
  sY: number = 4;
  frame: number = 0;
  private sprite: HTMLImageElement | null = null;
  private gameUI: any;

  constructor(gameUI: any) {
    this.gameUI = gameUI;
  }

  init() {
    this.x = 10;
    this.y = this.gameUI.getHeight() - 40 - 40;
    this.sprite = new Image();
    this.sprite.src = '/images/mario-sprites.png';
  }

  draw() {
    if (!this.sprite) return;
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

  checkMarioType() {
    if (this.type === 'big') {
      this.height = 60;
      this.sY = this.invulnerable ? 276 : 90;
    } else if (this.type === 'small') {
      this.height = 44;
      this.sY = this.invulnerable ? 222 : 4;
    } else if (this.type === 'fire') {
      this.height = 60;
      this.sY = 150;
    }
  }

  resetPos() {
    this.x = this.gameUI.getWidth() / 10;
    this.y = this.gameUI.getHeight() - 40;
    this.frame = 0;
  }
}
