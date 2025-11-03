export class Element {
  type: number = 0;
  sX: number = 0;
  sY: number = 0;
  x: number = 0;
  y: number = 0;
  width: number = 32;
  height: number = 32;
  private sprite: HTMLImageElement;
  private gameUI: any;

  constructor(gameUI: any) {
    this.gameUI = gameUI;
    this.sprite = new Image();
    this.sprite.src = '/images/elements.png';
  }

  platform() {
    this.type = 1;
    this.sX = 0;
  }

  coinBox() {
    this.type = 2;
    this.sX = 1 * this.width;
  }

  powerUpBox() {
    this.type = 3;
    this.sX = 2 * this.width;
  }

  uselessBox() {
    this.type = 4;
    this.sX = 3 * this.width;
  }

  flagPole() {
    this.type = 5;
    this.sX = 4 * this.width;
  }

  flag() {
    this.type = 6;
    this.sX = 5 * this.width;
  }

  pipeLeft() {
    this.type = 7;
    this.sX = 6 * this.width;
  }

  pipeRight() {
    this.type = 8;
    this.sX = 7 * this.width;
  }

  pipeTopLeft() {
    this.type = 9;
    this.sX = 8 * this.width;
  }

  pipeTopRight() {
    this.type = 10;
    this.sX = 9 * this.width;
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
}
