'use client';

import { useState, useEffect } from 'react';
import { Storage } from '@/utils/Storage';
import { GameMap } from '@/utils/game/MarioGame';

interface CreatedLevelsScreenProps {
  onBackToMenu: () => void;
  onStartLevel: (levelMap: GameMap) => void;
}

export default function CreatedLevelsScreen({ onBackToMenu, onStartLevel }: CreatedLevelsScreenProps) {
  const [levels, setLevels] = useState<string[]>([]);
  const storage = new Storage();

  useEffect(() => {
    loadLevels();
  }, []);

  const loadLevels = () => {
    const totalStoredLevels = storage.getLength();
    const levelNames: string[] = [];

    if (totalStoredLevels > 0) {
      for (let i = 0; i < totalStoredLevels; i++) {
        const levelName = storage.getItemName(i);
        if (levelName && levelName.startsWith('savedLevel')) {
          levelNames.push(levelName);
        }
      }
    }

    setLevels(levelNames.sort());
  };

  const handleLevelClick = (levelName: string) => {
    const level = storage.getItem(levelName);
    if (level) {
      const map: GameMap = { 1: level };
      onStartLevel(map);
    }
  };

  const deleteAllMaps = () => {
    if (confirm('Are you sure you want to delete all saved levels?')) {
      storage.clear();
      loadLevels();
    }
  };

  return (
    <>
      <div className="levels-wrapper">
        {levels.length > 0 ? (
          levels.map((levelName) => (
            <div
              key={levelName}
              className="level-btn"
              onClick={() => handleLevelClick(levelName)}
            >
              {levelName}
            </div>
          ))
        ) : (
          <div className="no-maps">
            No maps currently saved. Please use the Level Editor to create custom Maps
          </div>
        )}
        <button className="delete-all-btn" onClick={deleteAllMaps} />
      </div>
      <div className="btn-wrapper">
        <button className="back-btn" onClick={onBackToMenu} />
      </div>
    </>
  );
}
