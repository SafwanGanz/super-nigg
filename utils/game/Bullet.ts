export class Bullet {
  x: number = 0;
  y: number = 0;
  velX: number = 0;
  velY: number = 0;
  grounded: boolean = false;
  sX: number = 0;
  sY: number = 0;
  width: number = 16;
  height: number = 16;
  type: number = 0;
  private sprite: HTMLImageElement;
  private gameUI: any;

  constructor(gameUI: any) {
    this.gameUI = gameUI;
    this.sprite = new Image();
    this.sprite.src = '/images/bullet.png';
  }

  init(x: number, y: number, direction: number) {
    this.velX = 8 * direction;
    this.velY = 0;
    this.x = x + this.width;
    this.y = y + 30;
    this.type = 30;
    this.sX = 0;
  }

  draw() {
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
      this.velY = -4;
      this.grounded = false;
    }

    this.velY += gravity;
    this.x += this.velX;
    this.y += this.velY;
  }
}
