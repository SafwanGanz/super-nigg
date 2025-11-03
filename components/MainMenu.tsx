'use client';

interface MainMenuProps {
  onStartGame: () => void;
  onStartEditor: () => void;
  onShowCreatedLevels: () => void;
}

export default function MainMenu({ onStartGame, onStartEditor, onShowCreatedLevels }: MainMenuProps) {
  return (
    <div className="start-screen">
      <button className="start-btn" onClick={onStartGame} />
      <button className="editor-btn" onClick={onStartEditor} />
      <button className="created-btn" onClick={onShowCreatedLevels} />
    </div>
  );
}
