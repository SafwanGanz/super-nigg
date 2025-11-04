'use client';

import { useEffect } from 'react';
import styles from './MobileControls.module.css';

interface MobileControlsProps {
  onDirectionChange: (direction: { x: number; y: number }) => void;
  onJump: (isJumping: boolean) => void;
  onRun: (isRunning: boolean) => void;
  onShoot: (isShooting: boolean) => void;
}

export default function MobileControls({ onDirectionChange, onJump, onRun, onShoot }: MobileControlsProps) {
  useEffect(() => {
    // Only show controls in landscape mode on mobile
    const checkOrientation = () => {
      const controls = document.querySelector(`.${styles.mobileControls}`) as HTMLElement;
      if (controls) {
        controls.style.display = window.innerWidth > window.innerHeight ? 'flex' : 'none';
      }
    };

    window.addEventListener('resize', checkOrientation);
    checkOrientation();

    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  return (
    <div className={styles.mobileControls}>
      {/* Left side - Direction arrows */}
      <div className={styles.directionButtons}>
        <button 
          className={`${styles.arrowButton} ${styles.leftArrow}`}
          onTouchStart={() => onDirectionChange({ x: -1, y: 0 })}
          onTouchEnd={() => onDirectionChange({ x: 0, y: 0 })}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>
        <button 
          className={`${styles.arrowButton} ${styles.rightArrow}`}
          onTouchStart={() => onDirectionChange({ x: 1, y: 0 })}
          onTouchEnd={() => onDirectionChange({ x: 0, y: 0 })}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>

      {/* Right side - Action buttons */}
      <div className={styles.actionButtons}>
        <button 
          className={styles.jumpButton}
          onTouchStart={() => onJump(true)}
          onTouchEnd={() => onJump(false)}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
          </svg>
        </button>
        <button 
          className={styles.runButton}
          onTouchStart={() => onRun(true)}
          onTouchEnd={() => onRun(false)}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
          </svg>
        </button>
        <button 
          className={styles.shootButton}
          onTouchStart={() => onShoot(true)}
          onTouchEnd={() => onShoot(false)}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="8"/>
            <circle cx="12" cy="12" r="3" fill="white"/>
          </svg>
        </button>
      </div>
    </div>
  );
}