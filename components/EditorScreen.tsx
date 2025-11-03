'use client';

import { useState, useRef, useEffect, MouseEvent } from 'react';
import { Storage } from '@/utils/Storage';

interface EditorScreenProps {
  onBackToMenu: () => void;
}

export default function EditorScreen({ onBackToMenu }: EditorScreenProps) {
  const [gridWidth, setGridWidth] = useState(3840);
  const [scrollMargin, setScrollMargin] = useState(0);
  const [selectedElement, setSelectedElement] = useState<string>('platform');
  const [activeCells, setActiveCells] = useState<Set<string>>(new Set());
  const [isMouseDown, setIsMouseDown] = useState(false);
  const gridRef = useRef<HTMLTableElement>(null);

  const height = 480;
  const tileSize = 32;
  const row = height / tileSize;
  const column = gridWidth / tileSize;

  const handleCellMouseDown = (rowIndex: number, colIndex: number) => {
    setIsMouseDown(true);
    const cellKey = `${rowIndex}-${colIndex}`;
    const newActiveCells = new Set(activeCells);
    if (selectedElement === 'cell') {
      newActiveCells.delete(cellKey);
    } else {
      newActiveCells.add(cellKey);
    }
    setActiveCells(newActiveCells);
  };

  const handleCellMouseOver = (rowIndex: number, colIndex: number) => {
    if (isMouseDown) {
      const cellKey = `${rowIndex}-${colIndex}`;
      const newActiveCells = new Set(activeCells);
      if (selectedElement === 'cell') {
        newActiveCells.delete(cellKey);
      } else {
        newActiveCells.add(cellKey);
      }
      setActiveCells(newActiveCells);
    }
  };

  const handleCellMouseUp = () => {
    setIsMouseDown(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsMouseDown(false);
    };
    document.addEventListener('mouseup', handleGlobalMouseUp);
    return () => document.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const generateMap = (): number[][] => {
    const newMap: number[][] = [];
    
    for (let i = 0; i < row; i++) {
      const columns: number[] = [];
      for (let j = 0; j < column; j++) {
        const cellKey = `${i}-${j}`;
        const cellData = activeCells.has(cellKey) ? selectedElement : 'cell';
        
        let value = 0;
        switch (cellData) {
          case 'platform': value = 1; break;
          case 'coin-box': value = 2; break;
          case 'power-up-box': value = 3; break;
          case 'useless-box': value = 4; break;
          case 'flag-pole': value = 5; break;
          case 'flag': value = 6; break;
          case 'pipe-left': value = 7; break;
          case 'pipe-right': value = 8; break;
          case 'pipe-top-left': value = 9; break;
          case 'pipe-top-right': value = 10; break;
          case 'goomba': value = 20; break;
          default: value = 0; break;
        }
        columns.push(value);
      }
      newMap.push(columns);
    }
    
    return newMap;
  };

  const saveMap = () => {
    const storage = new Storage();
    let levelCounter = parseInt(storage.getItem('levelCounter') || '0');
    
    const map = generateMap();
    levelCounter++;
    
    const levelName = levelCounter < 10 
      ? `savedLevel0${levelCounter}` 
      : `savedLevel${levelCounter}`;
    
    storage.setItem(levelName, map);
    storage.setItem('levelCounter', levelCounter.toString());
    
    alert('Map saved successfully!');
  };

  const clearMap = () => {
    setActiveCells(new Set());
    setScrollMargin(0);
  };

  const handleRightScroll = () => {
    if (scrollMargin > -(gridWidth - 1280)) {
      setScrollMargin(scrollMargin - 160);
    }
  };

  const handleLeftScroll = () => {
    if (scrollMargin !== 0) {
      setScrollMargin(scrollMargin + 160);
    }
  };

  const elements = [
    { name: 'cell', className: 'cell' },
    { name: 'platform', className: 'platform' },
    { name: 'coin-box', className: 'coin-box' },
    { name: 'power-up-box', className: 'power-up-box' },
    { name: 'useless-box', className: 'useless-box' },
    { name: 'flag', className: 'flag' },
    { name: 'flag-pole', className: 'flag-pole' },
    { name: 'pipe-left', className: 'pipe-left' },
    { name: 'pipe-right', className: 'pipe-right' },
    { name: 'pipe-top-left', className: 'pipe-top-left' },
    { name: 'pipe-top-right', className: 'pipe-top-right' },
    { name: 'goomba', className: 'goomba' }
  ];

  return (
    <>
      <div className="editor-screen">
        <div className="right-arrow" onClick={handleRightScroll} />
        <div className="left-arrow" onClick={handleLeftScroll} />
        <div style={{ width: `${gridWidth}px`, height: `${height}px`, marginLeft: `${scrollMargin}px`, transition: 'margin-left 0.3s' }}>
          <table ref={gridRef} style={{ borderCollapse: 'collapse' }}>
            <tbody>
              {Array.from({ length: row }, (_, i) => (
                <tr key={i}>
                  {Array.from({ length: column }, (_, j) => {
                    const cellKey = `${i}-${j}`;
                    const isActive = activeCells.has(cellKey);
                    return (
                      <td
                        key={j}
                        className={isActive ? selectedElement : 'cell'}
                        onMouseDown={() => handleCellMouseDown(i, j)}
                        onMouseOver={() => handleCellMouseOver(i, j)}
                        onMouseUp={handleCellMouseUp}
                        style={{ cursor: 'crosshair' }}
                      />
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="element-wrapper">
        {elements.map((element) => (
          <div
            key={element.name}
            className={element.className}
            onClick={() => setSelectedElement(element.name)}
            style={{ cursor: 'pointer', border: selectedElement === element.name ? '2px solid yellow' : 'none' }}
          />
        ))}
        
        <div className="lvl-size" />
        <button className="grid-small-btn" onClick={() => setGridWidth(1280)} />
        <button className="grid-medium-btn" onClick={() => setGridWidth(3840)} />
        <button className="grid-large-btn" onClick={() => setGridWidth(6400)} />
        <button className="clear-map-btn" onClick={clearMap} />
        <button className="save-map-btn" onClick={saveMap} />
      </div>
      
      <div className="btn-wrapper">
        <button className="back-btn" onClick={onBackToMenu} />
      </div>
    </>
  );
}
