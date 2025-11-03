# Mario Maker - Next.js Version

Classic Mario Game with Level-Editor built using Next.js, TypeScript, and HTML5 canvas. Create your own levels and play or simply play the pre-built levels.

## Features

✅ Fully converted to Next.js with TypeScript
✅ All original game features preserved:
  - Classic Mario gameplay mechanics
  - Level editor with drag-and-drop functionality
  - Save and load custom levels
  - Multiple pre-built levels
  - Sound effects and animations
  - Touch controls support
  - Score tracking and lives system

## Setup Instructions

### 1. Install Dependencies

```bash
cd mario-maker-nextjs
npm install
```

### 2. Copy Assets

Copy the following folders from the original project to the `public` directory:

```
mario-maker-master/images/ -> mario-maker-nextjs/public/images/
mario-maker-master/sounds/ -> mario-maker-nextjs/public/sounds/
mario-maker-master/fonts/ -> mario-maker-nextjs/public/fonts/
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to play the game.

### 4. Build for Production

```bash
npm run build
npm start
```

## Controls

- **Arrow Keys**: Move left/right
- **Space / Up Arrow**: Jump
- **Shift**: Sprint (makes Mario run faster and jump higher)
- **Ctrl**: Shoot fireballs (when Fire Mario)

## Level Editor

1. Click and drag to select tiles
2. Click on the element you want to place
3. Selected tiles will receive the chosen element
4. Save your map to play it later from "Created Levels"
5. Use grid size buttons to change the level width

## Technical Changes from Original

- ✅ Converted from vanilla JavaScript to TypeScript
- ✅ Singleton patterns converted to ES6 classes
- ✅ DOM manipulation replaced with React components
- ✅ Global state management using React hooks
- ✅ Canvas rendering adapted for Next.js
- ✅ LocalStorage integration for saving levels
- ✅ Client-side only rendering (use client directive)
- ✅ All comments removed as requested
- ✅ CSS converted to global styles
- ✅ Asset preloading with progress indicator

## Project Structure

```
mario-maker-nextjs/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main app component
│   └── globals.css         # Global styles
├── components/
│   ├── MainMenu.tsx        # Main menu screen
│   ├── GameScreen.tsx      # Game canvas component
│   ├── EditorScreen.tsx    # Level editor
│   ├── CreatedLevelsScreen.tsx  # Saved levels browser
│   └── ScoreDisplay.tsx    # Score/lives display
├── utils/
│   ├── GameUI.ts           # Canvas rendering utilities
│   ├── Storage.ts          # LocalStorage wrapper
│   └── game/
│       ├── Mario.ts        # Mario character class
│       ├── Element.ts      # Map elements
│       ├── Enemy.ts        # Enemy logic
│       ├── PowerUp.ts      # PowerUp items
│       ├── Bullet.ts       # Bullet mechanics
│       ├── Score.ts        # Score management
│       ├── GameSound.ts    # Sound effects
│       └── MarioGame.ts    # Main game logic
├── public/
│   ├── images/             # Game sprites and images
│   ├── sounds/             # Sound effects
│   └── fonts/              # Custom fonts
└── package.json
```

## License

This is a fan-made project for educational purposes.

## Credits

Original vanilla JavaScript version: [mario-maker-master](https://github.com/pratishshr/mario-maker)
Next.js conversion: Complete TypeScript rewrite with all features preserved


