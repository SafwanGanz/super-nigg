import { GameUI } from '../GameUI';
import { Mario } from './Mario';
import { Element } from './Element';
import { Enemy } from './Enemy';
import { PowerUp } from './PowerUp';
import { Bullet } from './Bullet';
import { Score } from './Score';
import { GameSound } from './GameSound';

export type GameMap = { [key: number]: string };

export class MarioGame {
  private gameUI: GameUI;
  private maxWidth: number = 0;
  private height: number = 480;
  private viewPort: number = 1280;
  private tileSize: number = 32;
  private map: number[][] = [];
  private originalMaps: GameMap = {};
  private translatedDist: number = 0;
  private centerPos: number = 0;
  private marioInGround: boolean = false;

  private mario: Mario | null = null;
  private element: Element | null = null;
  private gameSound: GameSound | null = null;
  private score: Score | null = null;

  private keys: boolean[] = [];
  private goombas: Enemy[] = [];
  private powerUps: PowerUp[] = [];
  private bullets: Bullet[] = [];
  private bulletFlag: boolean = false;

  // Expose keys array for mobile controls
  getKeys(): boolean[] {
    return this.keys;
  }

  private currentLevel: number = 1;
  private animationID: number = 0;
  private timeOutId: any = 0;

  private tickCounter: number = 0;
  private maxTick: number = 25;
  private instructionTick: number = 0;

  private onGameOver?: () => void;
  private onLevelComplete?: () => void;

  constructor(onGameOver?: () => void, onLevelComplete?: () => void) {
    this.gameUI = GameUI.getInstance();
    this.onGameOver = onGameOver;
    this.onLevelComplete = onLevelComplete;
  }

  init(levelMaps: GameMap, level: number, canvas: HTMLCanvasElement, onScoreUpdate?: (data: any) => void) {
    this.height = 480;
    this.maxWidth = 0;
    this.viewPort = 1280;
    this.tileSize = 32;
    this.translatedDist = 0;
    this.goombas = [];
    this.powerUps = [];
    this.bullets = [];

    this.gameUI.init(canvas);
    this.gameUI.setWidth(this.viewPort);
    this.gameUI.setHeight(this.height);
    this.gameUI.show();

    this.currentLevel = level;
    this.originalMaps = levelMaps;
    this.map = JSON.parse(levelMaps[this.currentLevel]);

    if (!this.score) {
      this.score = new Score(onScoreUpdate);
      this.score.init();
    }
    this.score.updateLevelNum(this.currentLevel);

    if (!this.mario) {
      this.mario = new Mario(this.gameUI);
      this.mario.init();
    } else {
      this.mario.x = 10;
      this.mario.frame = 0;
    }

    this.element = new Element(this.gameUI);
    this.gameSound = new GameSound();
    this.gameSound.init();

    this.calculateMaxWidth();
    this.bindKeyPress(canvas);
    this.startGame();
  }

  private calculateMaxWidth() {
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        if (this.maxWidth < this.map[row].length * 32) {
          this.maxWidth = this.map[column].length * 32;
        }
      }
    }
  }

  private bindKeyPress(canvas: HTMLCanvasElement) {
    const handleKeyDown = (e: KeyboardEvent) => {
      this.keys[e.keyCode] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      this.keys[e.keyCode] = false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touches = e.changedTouches;
      e.preventDefault();

      for (let i = 0; i < touches.length; i++) {
        if (touches[i].pageX <= 200) {
          this.keys[37] = true;
        }
        if (touches[i].pageX > 200 && touches[i].pageX < 400) {
          this.keys[39] = true;
        }
        if (touches[i].pageX > 640 && touches[i].pageX <= 1080) {
          this.keys[16] = true;
          this.keys[17] = true;
        }
        if (touches[i].pageX > 1080 && touches[i].pageX < 1280) {
          this.keys[32] = true;
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touches = e.changedTouches;
      e.preventDefault();

      for (let i = 0; i < touches.length; i++) {
        if (touches[i].pageX <= 200) {
          this.keys[37] = false;
        }
        if (touches[i].pageX > 200 && touches[i].pageX <= 640) {
          this.keys[39] = false;
        }
        if (touches[i].pageX > 640 && touches[i].pageX <= 1080) {
          this.keys[16] = false;
          this.keys[17] = false;
        }
        if (touches[i].pageX > 1080 && touches[i].pageX < 1280) {
          this.keys[32] = false;
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touches = e.changedTouches;
      e.preventDefault();

      for (let i = 0; i < touches.length; i++) {
        if (touches[i].pageX <= 200) {
          this.keys[37] = true;
          this.keys[39] = false;
        }
        if (touches[i].pageX > 200 && touches[i].pageX < 400) {
          this.keys[39] = true;
          this.keys[37] = false;
        }
        if (touches[i].pageX > 640 && touches[i].pageX <= 1080) {
          this.keys[16] = true;
          this.keys[32] = false;
        }
        if (touches[i].pageX > 1080 && touches[i].pageX < 1280) {
          this.keys[32] = true;
          this.keys[16] = false;
          this.keys[17] = false;
        }
      }
    };

    document.body.addEventListener('keydown', handleKeyDown);
    document.body.addEventListener('keyup', handleKeyUp);
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('touchmove', handleTouchMove);
  }

  private startGame() {
    if (!this.mario) return;
    
    this.animationID = window.requestAnimationFrame(() => this.startGame());

    this.gameUI.clear(0, 0, this.maxWidth, this.height);

    if (this.instructionTick < 1000) {
      this.showInstructions();
      this.instructionTick++;
    }

    this.renderMap();

    for (let i = 0; i < this.powerUps.length; i++) {
      this.powerUps[i].draw();
      this.powerUps[i].update();
    }

    for (let i = 0; i < this.bullets.length; i++) {
      this.bullets[i].draw();
      this.bullets[i].update();
    }

    for (let i = 0; i < this.goombas.length; i++) {
      this.goombas[i].draw();
      this.goombas[i].update();
    }

    this.checkPowerUpMarioCollision();
    this.checkBulletEnemyCollision();
    this.checkEnemyMarioCollision();

    this.mario.draw();
    this.updateMario();
    this.wallCollision();
    this.marioInGround = this.mario.grounded;
  }

  private showInstructions() {
    this.gameUI.writeText('Controls: Arrow keys for direction, shift to run, ctrl for bullets', 30, 30);
    this.gameUI.writeText('Tip: Jumping while running makes you jump higher', 30, 60);
  }

  private renderMap() {
    if (!this.mario || !this.element) return;

    this.mario.grounded = false;

    for (let i = 0; i < this.powerUps.length; i++) {
      this.powerUps[i].grounded = false;
    }
    for (let i = 0; i < this.goombas.length; i++) {
      this.goombas[i].grounded = false;
    }

    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        const tile = this.map[row][column];

        if (tile === 0) continue;

        this.element.x = column * this.tileSize;
        this.element.y = row * this.tileSize;

        switch (tile) {
          case 1:
            this.element.platform();
            this.element.draw();
            this.checkElementMarioCollision(this.element, row, column);
            this.checkElementPowerUpCollision(this.element);
            this.checkElementEnemyCollision(this.element);
            this.checkElementBulletCollision(this.element);
            break;
          case 2:
            this.element.coinBox();
            this.element.draw();
            this.checkElementMarioCollision(this.element, row, column);
            this.checkElementPowerUpCollision(this.element);
            this.checkElementEnemyCollision(this.element);
            this.checkElementBulletCollision(this.element);
            break;
          case 3:
            this.element.powerUpBox();
            this.element.draw();
            this.checkElementMarioCollision(this.element, row, column);
            this.checkElementPowerUpCollision(this.element);
            this.checkElementEnemyCollision(this.element);
            this.checkElementBulletCollision(this.element);
            break;
          case 4:
            this.element.uselessBox();
            this.element.draw();
            this.checkElementMarioCollision(this.element, row, column);
            this.checkElementPowerUpCollision(this.element);
            this.checkElementEnemyCollision(this.element);
            this.checkElementBulletCollision(this.element);
            break;
          case 5:
            this.element.flagPole();
            this.element.draw();
            this.checkElementMarioCollision(this.element, row, column);
            break;
          case 6:
            this.element.flag();
            this.element.draw();
            break;
          case 7:
            this.element.pipeLeft();
            this.element.draw();
            this.checkElementMarioCollision(this.element, row, column);
            this.checkElementPowerUpCollision(this.element);
            this.checkElementEnemyCollision(this.element);
            this.checkElementBulletCollision(this.element);
            break;
          case 8:
            this.element.pipeRight();
            this.element.draw();
            this.checkElementMarioCollision(this.element, row, column);
            this.checkElementPowerUpCollision(this.element);
            this.checkElementEnemyCollision(this.element);
            this.checkElementBulletCollision(this.element);
            break;
          case 9:
            this.element.pipeTopLeft();
            this.element.draw();
            this.checkElementMarioCollision(this.element, row, column);
            this.checkElementPowerUpCollision(this.element);
            this.checkElementEnemyCollision(this.element);
            this.checkElementBulletCollision(this.element);
            break;
          case 10:
            this.element.pipeTopRight();
            this.element.draw();
            this.checkElementMarioCollision(this.element, row, column);
            this.checkElementPowerUpCollision(this.element);
            this.checkElementEnemyCollision(this.element);
            this.checkElementBulletCollision(this.element);
            break;
          case 20:
            const enemy = new Enemy(this.gameUI);
            enemy.x = column * this.tileSize;
            enemy.y = row * this.tileSize;
            enemy.goomba();
            enemy.draw();
            this.goombas.push(enemy);
            this.map[row][column] = 0;
            break;
        }
      }
    }
  }

  private collisionCheck(objA: any, objB: any): string | null {
    const vX = objA.x + objA.width / 2 - (objB.x + objB.width / 2);
    const vY = objA.y + objA.height / 2 - (objB.y + objB.height / 2);
    const hWidths = objA.width / 2 + objB.width / 2;
    const hHeights = objA.height / 2 + objB.height / 2;
    let collisionDirection: string | null = null;

    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
      const offsetX = hWidths - Math.abs(vX);
      const offsetY = hHeights - Math.abs(vY);

      if (offsetX >= offsetY) {
        if (vY > 0 && vY < 37) {
          collisionDirection = 't';
          if (objB.type !== 5) {
            objA.y += offsetY;
          }
        } else if (vY < 0) {
          collisionDirection = 'b';
          if (objB.type !== 5) {
            objA.y -= offsetY;
          }
        }
      } else {
        if (vX > 0) {
          collisionDirection = 'l';
          objA.x += offsetX;
        } else {
          collisionDirection = 'r';
          objA.x -= offsetX;
        }
      }
    }
    return collisionDirection;
  }

  private checkElementMarioCollision(element: Element, row: number, column: number) {
    if (!this.mario || !this.score || !this.gameSound) return;

    const collisionDirection = this.collisionCheck(this.mario, element);

    if (collisionDirection === 'l' || collisionDirection === 'r') {
      this.mario.velX = 0;
      this.mario.jumping = false;

      if (element.type === 5) {
        this.levelFinish(collisionDirection);
      }
    } else if (collisionDirection === 'b') {
      if (element.type !== 5) {
        this.mario.grounded = true;
        this.mario.jumping = false;
      }
    } else if (collisionDirection === 't') {
      if (element.type !== 5) {
        this.mario.velY *= -1;
      }

      if (element.type === 3) {
        const powerUp = new PowerUp(this.gameUI);

        if (this.mario.type === 'small') {
          powerUp.mushroom(element.x, element.y);
          this.powerUps.push(powerUp);
        } else {
          powerUp.flower(element.x, element.y);
          this.powerUps.push(powerUp);
        }

        this.map[row][column] = 4;
        this.gameSound.play('powerUpAppear');
      }

      if (element.type === 2) {
        this.score.coinScore++;
        this.score.totalScore += 100;

        this.score.updateCoinScore();
        this.score.updateTotalScore();
        this.map[row][column] = 4;

        this.gameSound.play('coin');
      }
    }
  }

  private checkElementPowerUpCollision(element: Element) {
    for (let i = 0; i < this.powerUps.length; i++) {
      const collisionDirection = this.collisionCheck(this.powerUps[i], element);

      if (collisionDirection === 'l' || collisionDirection === 'r') {
        this.powerUps[i].velX *= -1;
      } else if (collisionDirection === 'b') {
        this.powerUps[i].grounded = true;
      }
    }
  }

  private checkElementEnemyCollision(element: Element) {
    for (let i = 0; i < this.goombas.length; i++) {
      if (this.goombas[i].state !== 'deadFromBullet') {
        const collisionDirection = this.collisionCheck(this.goombas[i], element);

        if (collisionDirection === 'l' || collisionDirection === 'r') {
          this.goombas[i].velX *= -1;
        } else if (collisionDirection === 'b') {
          this.goombas[i].grounded = true;
        }
      }
    }
  }

  private checkElementBulletCollision(element: Element) {
    for (let i = 0; i < this.bullets.length; i++) {
      const collisionDirection = this.collisionCheck(this.bullets[i], element);

      if (collisionDirection === 'b') {
        this.bullets[i].grounded = true;
      } else if (collisionDirection === 't' || collisionDirection === 'l' || collisionDirection === 'r') {
        this.bullets.splice(i, 1);
      }
    }
  }

  private checkPowerUpMarioCollision() {
    if (!this.mario || !this.score || !this.gameSound) return;

    for (let i = 0; i < this.powerUps.length; i++) {
      const collWithMario = this.collisionCheck(this.powerUps[i], this.mario);
      if (collWithMario) {
        if (this.powerUps[i].type === 30 && this.mario.type === 'small') {
          this.mario.type = 'big';
        } else if (this.powerUps[i].type === 31) {
          this.mario.type = 'fire';
        }
        this.powerUps.splice(i, 1);

        this.score.totalScore += 1000;
        this.score.updateTotalScore();

        this.gameSound.play('powerUp');
      }
    }
  }

  private checkEnemyMarioCollision() {
    if (!this.mario || !this.score || !this.gameSound) return;

    for (let i = 0; i < this.goombas.length; i++) {
      if (!this.mario.invulnerable && this.goombas[i].state !== 'dead' && this.goombas[i].state !== 'deadFromBullet') {
        const collWithMario = this.collisionCheck(this.goombas[i], this.mario);

        if (collWithMario === 't') {
          this.goombas[i].state = 'dead';
          this.mario.velY = -this.mario.speed;

          this.score.totalScore += 1000;
          this.score.updateTotalScore();

          this.gameSound.play('killEnemy');
        } else if (collWithMario === 'r' || collWithMario === 'l' || collWithMario === 'b') {
          this.goombas[i].velX *= -1;

          if (this.mario.type === 'big') {
            this.mario.type = 'small';
            this.mario.invulnerable = true;

            this.gameSound.play('powerDown');

            setTimeout(() => {
              if (this.mario) this.mario.invulnerable = false;
            }, 1000);
          } else if (this.mario.type === 'fire') {
            this.mario.type = 'big';
            this.mario.invulnerable = true;

            this.gameSound.play('powerDown');

            setTimeout(() => {
              if (this.mario) this.mario.invulnerable = false;
            }, 1000);
          } else if (this.mario.type === 'small') {
            this.pauseGame();

            this.mario.frame = 13;

            this.score.lifeCount--;
            this.score.updateLifeCount();

            this.gameSound.play('marioDie');

            this.timeOutId = setTimeout(() => {
              if (this.score && this.score.lifeCount === 0) {
                this.gameOver();
              } else {
                this.resetGame();
              }
            }, 3000);
            break;
          }
        }
      }
    }
  }

  private checkBulletEnemyCollision() {
    if (!this.score || !this.gameSound) return;

    for (let i = 0; i < this.goombas.length; i++) {
      for (let j = 0; j < this.bullets.length; j++) {
        if (this.goombas[i] && this.goombas[i].state !== 'dead') {
          const collWithBullet = this.collisionCheck(this.goombas[i], this.bullets[j]);

          if (collWithBullet) {
            this.bullets.splice(j, 1);
            this.goombas[i].state = 'deadFromBullet';

            this.score.totalScore += 1000;
            this.score.updateTotalScore();

            this.gameSound.play('killEnemy');
          }
        }
      }
    }
  }

  private wallCollision() {
    if (!this.mario || !this.score || !this.gameSound) return;

    if (this.mario.x >= this.maxWidth - this.mario.width) {
      this.mario.x = this.maxWidth - this.mario.width;
    } else if (this.mario.x <= this.translatedDist) {
      this.mario.x = this.translatedDist + 1;
    }

    if (this.mario.y >= this.height) {
      this.pauseGame();

      this.gameSound.play('marioDie');

      this.score.lifeCount--;
      this.score.updateLifeCount();

      this.timeOutId = setTimeout(() => {
        if (this.score && this.score.lifeCount === 0) {
          this.gameOver();
        } else {
          this.resetGame();
        }
      }, 3000);
    }
  }

  private updateMario() {
    if (!this.mario || !this.gameSound) return;

    const friction = 0.9;
    const gravity = 0.2;

    this.mario.checkMarioType();

    if (this.keys[38] || this.keys[32]) {
      if (!this.mario.jumping && this.mario.grounded) {
        this.mario.jumping = true;
        this.mario.grounded = false;
        this.mario.velY = -(this.mario.speed / 2 + 5.5);

        if (this.mario.frame === 0 || this.mario.frame === 1) {
          this.mario.frame = 3;
        } else if (this.mario.frame === 8 || this.mario.frame === 9) {
          this.mario.frame = 2;
        }

        this.gameSound.play('jump');
      }
    }

    if (this.keys[39]) {
      this.checkMarioPos();

      if (this.mario.velX < this.mario.speed) {
        this.mario.velX++;
      }

      if (!this.mario.jumping) {
        this.tickCounter += 1;

        if (this.tickCounter > this.maxTick / this.mario.speed) {
          this.tickCounter = 0;

          if (this.mario.frame !== 1) {
            this.mario.frame = 1;
          } else {
            this.mario.frame = 0;
          }
        }
      }
    }

    if (this.keys[37]) {
      if (this.mario.velX > -this.mario.speed) {
        this.mario.velX--;
      }

      if (!this.mario.jumping) {
        this.tickCounter += 1;

        if (this.tickCounter > this.maxTick / this.mario.speed) {
          this.tickCounter = 0;

          if (this.mario.frame !== 9) {
            this.mario.frame = 9;
          } else {
            this.mario.frame = 8;
          }
        }
      }
    }

    if (this.keys[16]) {
      this.mario.speed = 4.5;
    } else {
      this.mario.speed = 3;
    }

    if (this.keys[17] && this.mario.type === 'fire') {
      if (!this.bulletFlag) {
        this.bulletFlag = true;
        const bullet = new Bullet(this.gameUI);
        const direction = this.mario.frame === 9 || this.mario.frame === 8 || this.mario.frame === 2 ? -1 : 1;
        bullet.init(this.mario.x, this.mario.y, direction);
        this.bullets.push(bullet);

        this.gameSound.play('bullet');

        setTimeout(() => {
          this.bulletFlag = false;
        }, 500);
      }
    }

    if (this.mario.velX > 0 && this.mario.velX < 1 && !this.mario.jumping) {
      this.mario.frame = 0;
    } else if (this.mario.velX > -1 && this.mario.velX < 0 && !this.mario.jumping) {
      this.mario.frame = 8;
    }

    if (this.mario.grounded) {
      this.mario.velY = 0;

      if (this.mario.frame === 3) {
        this.mario.frame = 0;
      } else if (this.mario.frame === 2) {
        this.mario.frame = 8;
      }
    }

    this.mario.velX *= friction;
    this.mario.velY += gravity;

    this.mario.x += this.mario.velX;
    this.mario.y += this.mario.velY;
  }

  private checkMarioPos() {
    if (!this.mario) return;

    this.centerPos = this.translatedDist + this.viewPort / 2;

    if (this.mario.x > this.centerPos && this.centerPos + this.viewPort / 2 < this.maxWidth) {
      this.gameUI.scrollWindow(-this.mario.speed, 0);
      this.translatedDist += this.mario.speed;
    }
  }

  private levelFinish(collisionDirection: string) {
    if (!this.mario || !this.gameSound) return;

    if (collisionDirection === 'r') {
      this.mario.x += 10;
      this.mario.velY = 2;
      this.mario.frame = 11;
    } else if (collisionDirection === 'l') {
      this.mario.x -= 32;
      this.mario.velY = 2;
      this.mario.frame = 10;
    }

    if (this.marioInGround) {
      this.mario.x += 20;
      this.mario.frame = 10;
      this.tickCounter += 1;
      if (this.tickCounter > this.maxTick) {
        this.pauseGame();

        this.mario.x += 10;
        this.tickCounter = 0;
        this.mario.frame = 12;

        this.gameSound.play('stageClear');

        this.timeOutId = setTimeout(() => {
          this.currentLevel++;
          if (this.originalMaps[this.currentLevel]) {
            if (this.onLevelComplete) {
              this.onLevelComplete();
            }
          } else {
            this.gameOver();
          }
        }, 5000);
      }
    }
  }

  pauseGame() {
    window.cancelAnimationFrame(this.animationID);
  }

  private gameOver() {
    this.gameUI.makeBox(0, 0, this.maxWidth, this.height);
    this.gameUI.writeText('Game Over', this.centerPos - 80, this.height - 300);
    this.gameUI.writeText('Thanks For Playing', this.centerPos - 122, this.height / 2);
    
    if (this.onGameOver) {
      this.onGameOver();
    }
  }

  private resetGame() {
    this.clearInstances();
    const canvas = this.gameUI.getCanvas();
    if (canvas) {
      this.init(this.originalMaps, this.currentLevel, canvas);
    }
  }

  clearInstances() {
    this.mario = null;
    this.element = null;
    this.gameSound = null;
    this.goombas = [];
    this.bullets = [];
    this.powerUps = [];
  }

  clearTimeOut() {
    clearTimeout(this.timeOutId);
  }

  cleanup() {
    this.pauseGame();
    this.clearTimeOut();
    this.gameUI.hide();
  }
}
