export class GameUI {
  private static instance: GameUI;
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;

  private constructor() {}

  static getInstance(): GameUI {
    if (!GameUI.instance) {
      GameUI.instance = new GameUI();
    }
    return GameUI.instance;
  }

  init(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  setWidth(width: number) {
    if (this.canvas) this.canvas.width = width;
  }

  setHeight(height: number) {
    if (this.canvas) this.canvas.height = height;
  }

  getWidth(): number {
    return this.canvas?.width || 0;
  }

  getHeight(): number {
    return this.canvas?.height || 0;
  }

  getCanvas(): HTMLCanvasElement | null {
    return this.canvas;
  }

  show() {
    if (this.canvas) this.canvas.style.display = 'block';
  }

  hide() {
    if (this.canvas) this.canvas.style.display = 'none';
  }

  clear(x: number, y: number, width: number, height: number) {
    this.ctx?.clearRect(x, y, width, height);
  }

  scrollWindow(x: number, y: number) {
    this.ctx?.translate(x, y);
  }

  draw(
    image: HTMLImageElement,
    sx: number,
    sy: number,
    sWidth: number,
    sHeight: number,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    this.ctx?.drawImage(image, sx, sy, sWidth, sHeight, x, y, width, height);
  }

  makeBox(x: number, y: number, width: number, height: number) {
    if (!this.ctx) return;
    this.ctx.rect(x, y, width, height);
    this.ctx.fillStyle = 'black';
    this.ctx.fill();
  }

  writeText(text: string, x: number, y: number) {
    if (!this.ctx) return;
    this.ctx.font = '20px SuperMario256';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(text, x, y);
  }
}
