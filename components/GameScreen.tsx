'use client';

import { useEffect, useRef, useState } from 'react';
import { MarioGame, GameMap } from '@/utils/game/MarioGame';
import { ScoreData } from '@/utils/game/Score';
import ScoreDisplay from './ScoreDisplay';
import MobileControls from './MobileControls';

interface GameScreenProps {
  levelMaps: GameMap;
  level: number;
  onBackToMenu: () => void;
}

export default function GameScreen({ levelMaps, level, onBackToMenu }: GameScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<MarioGame | null>(null);
  const [scoreData, setScoreData] = useState<ScoreData>({
    coinScore: 0,
    totalScore: 0,
    lifeCount: 5,
    level: 1
  });
  const [gameOver, setGameOver] = useState(false);

  // Handle responsive canvas sizing
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      
      const canvas = canvasRef.current;
      
      // Always set canvas to native game resolution
      canvas.width = 1280;
      canvas.height = 480;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const handleGameOver = () => {
      setGameOver(true);
    };

    const handleLevelComplete = () => {
      if (canvasRef.current && gameRef.current) {
        gameRef.current.init(levelMaps, level + 1, canvasRef.current, setScoreData);
      }
    };

    gameRef.current = new MarioGame(handleGameOver, handleLevelComplete);
    gameRef.current.init(levelMaps, level, canvasRef.current, setScoreData);

    return () => {
      if (gameRef.current) {
        gameRef.current.cleanup();
      }
    };
  }, [levelMaps, level]);

  const handleBackToMenu = () => {
    if (gameRef.current) {
      gameRef.current.cleanup();
    }
    onBackToMenu();
  };

  const handleMobileControls = (direction: { x: number; y: number }) => {
    if (!gameRef.current) return;
    
    // Simulate keyboard events based on mobile controls
    const keys = gameRef.current.getKeys();
    keys[37] = direction.x < -0.2; // Left
    keys[39] = direction.x > 0.2;  // Right
  };

  const handleMobileJump = (isJumping: boolean) => {
    if (!gameRef.current) return;
    const keys = gameRef.current.getKeys();
    keys[32] = isJumping; // Space key
  };

  const handleMobileRun = (isRunning: boolean) => {
    if (!gameRef.current) return;
    const keys = gameRef.current.getKeys();
    keys[16] = isRunning; // Shift key
  };

  const handleMobileShoot = (isShooting: boolean) => {
    if (!gameRef.current) return;
    const keys = gameRef.current.getKeys();
    keys[17] = isShooting; // Ctrl key
  };

  return (
    <div className="game-container">
      <div className="game-content">
        <div className="score-nav">
          <ScoreDisplay score={scoreData} visible={true} gameOver={gameOver} />
          <button className="back-btn-nav" onClick={handleBackToMenu}>✕</button>
        </div>
        <canvas ref={canvasRef} className="game-screen" />
      </div>
      <MobileControls
        onDirectionChange={handleMobileControls}
        onJump={handleMobileJump}
        onRun={handleMobileRun}
        onShoot={handleMobileShoot}
      />
    </div>
  );
}
