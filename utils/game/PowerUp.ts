export class PowerUp {
  type: number = 0;
  x: number = 0;
  y: number = 0;
  velX: number = 2;
  velY: number = 0;
  grounded: boolean = false;
  sX: number = 0;
  sY: number = 0;
  width: number = 32;
  height: number = 32;
  private sprite: HTMLImageElement;
  private gameUI: any;

  constructor(gameUI: any) {
    this.gameUI = gameUI;
    this.sprite = new Image();
    this.sprite.src = '/images/powerups.png';
  }

  mushroom(x: number, y: number) {
    this.x = x;
    this.y = y - this.height;
    this.type = 30;
    this.sX = 0;
  }

  flower(x: number, y: number) {
    this.x = x;
    this.y = y - this.height;
    this.type = 31;
    this.sX = 32;
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
    if (this.type === 30) {
      const gravity = 0.2;

      if (this.grounded) {
        this.velY = 0;
      }

      this.velY += gravity;
      this.x += this.velX;
      this.y += this.velY;
    }
  }
}
