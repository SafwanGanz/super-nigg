'use client';

import { useEffect, useRef, useState } from 'react';
import { MarioGame, GameMap } from '@/utils/game/MarioGame';
import { ScoreData } from '@/utils/game/Score';
import ScoreDisplay from './ScoreDisplay';

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

  return (
    <div>
      <ScoreDisplay score={scoreData} visible={true} gameOver={gameOver} />
      <canvas ref={canvasRef} className="game-screen" />
      <div className="btn-wrapper">
        <button className="back-btn" onClick={handleBackToMenu} />
      </div>
    </div>
  );
}
