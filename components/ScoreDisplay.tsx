'use client';

import { useEffect, useRef } from 'react';
import { ScoreData } from '@/utils/game/Score';

interface ScoreDisplayProps {
  score: ScoreData;
  visible: boolean;
  gameOver?: boolean;
}

export default function ScoreDisplay({ score, visible, gameOver }: ScoreDisplayProps) {
  if (!visible) return null;

  return (
    <div className="score-wrapper" style={{ background: gameOver ? 'black' : '#add1f3' }}>
      <div className="level-num">Level: {score.level}</div>
      <div className="life-count">x {score.lifeCount}</div>
      <div className="coin-score">Coins: {score.coinScore}</div>
      <div className="total-score">Score: {score.totalScore}</div>
    </div>
  );
}
