# 🍄 Super Miren - Mario Maker Game# 🍄 Super Miren - Mario Maker Game



A classic Super Mario-style platformer game built with Next.js 15, TypeScript, and HTML5 Canvas. Features mobile-responsive controls, custom level creation, and authentic Mario gameplay mechanics.A classic Super Mario-style platformer game built with Next.js 15, TypeScript, and HTML5 Canvas. Features mobile-responsive controls, custom level creation, and authentic Mario gameplay mechanics.



![Super Miren](https://img.shields.io/badge/Next.js-15.5.6-black?style=flat-square&logo=next.js)![Super Miren](https://img.shields.io/badge/Next.js-15.5.6-black?style=flat-square&logo=next.js)

![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)

![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)



## 📖 Table of Contents## 🎮 Features



- [Features](#-features)### Gameplay

- [Demo](#-demo)- **Classic Mario Mechanics**: Jump, run, shoot fireballs, and stomp enemies

- [Getting Started](#-getting-started)- **Multiple Power-ups**: Mushrooms, fire flowers, and star power

- [How to Play](#-how-to-play)- **Enemy AI**: Goombas, Koopa Troopas, and Bullet Bills

- [Level Editor](#-level-editor)- **Score System**: Collect coins, defeat enemies, and complete levels

- [Project Structure](#-project-structure)- **Multiple Lives**: Start with 5 lives and earn more by collecting coins

- [Technical Details](#-technical-details)- **Level Progression**: Multiple pre-built levels with increasing difficulty

- [Technologies Used](#-technologies-used)

- [Browser Support](#-browser-support)### Mobile Experience

- [Troubleshooting](#-troubleshooting)- **Touch Controls**: 

- [Contributing](#-contributing)  - Left/Right arrow buttons for movement

- [License](#-license)  - Up arrow for jumping

- [Credits](#-credits)  - Action buttons for running and shooting

- **Landscape-First Design**: Optimized for mobile landscape gameplay

## 🎮 Features- **Transparent Controls**: See-through control buttons for better visibility

- **Responsive UI**: Adapts to different screen sizes (phones, tablets, desktop)

### Gameplay- **PWA Ready**: Theme color matches game UI for immersive mobile experience



- **Classic Mario Mechanics**: Jump, run, shoot fireballs, and stomp enemies just like the original### Level Editor

- **Multiple Power-ups**: - **Custom Level Creation**: Build your own Mario levels

  - 🍄 Super Mushroom - Makes Mario grow bigger- **Drag & Drop Interface**: Easy-to-use level design tools

  - 🌺 Fire Flower - Enables fireball shooting- **Save/Load Levels**: Create and play custom levels

  - ⭐ Star Power - Temporary invincibility- **Element Library**: Blocks, enemies, power-ups, and more

- **Enemy AI**: 

  - Goombas - Walking enemies## 🚀 Getting Started

  - Koopa Troopas - Turtle enemies with shells

  - Bullet Bills - Flying projectiles from cannons### Prerequisites

- **Score System**: Earn points by collecting coins, defeating enemies, and completing levels- Node.js 18+ 

- **Multiple Lives**: Start with 5 lives and earn bonus lives by collecting 100 coins- npm or yarn

- **Level Progression**: Two pre-built levels with increasing difficulty

- **Sound Effects**: Authentic Mario sound effects for actions and events### Installation

- **Physics Engine**: Custom gravity, collision detection, and movement mechanics

1. Clone the repository:

### Mobile Experience```bash

git clone https://github.com/SafwanGanz/supermiren.git

- **Touch Controls**: cd supermiren

  - ◀️ ▶️ Left/Right arrow buttons for movement```

  - 🔼 Up arrow for jumping

  - ⚡ Lightning button for running/sprinting2. Install dependencies:

  - 🎯 Target button for shooting fireballs```bash

- **Landscape-First Design**: Optimized for mobile landscape gameplay with full-screen experiencenpm install

- **Transparent Controls**: Semi-transparent control buttons with glass-morphism effect for better game visibility```

- **Responsive UI**: Automatically adapts to different screen sizes (phones, tablets, desktop)

- **PWA Ready**: Theme color matches game UI for immersive mobile browser experience3. Run the development server:

- **Backdrop Blur**: Modern UI with blur effects on control buttons```bash

npm run dev

### Level Editor```



- **Custom Level Creation**: Build your own Mario levels with an intuitive editor4. Open your browser and navigate to:

- **Drag & Drop Interface**: Click and drag to select tiles, then place elements```

- **Element Library**: http://localhost:3000

  - Blocks (ground, brick, mystery boxes)```

  - Enemies (Goombas, Koopa Troopas)

  - Power-ups (Mushrooms, Fire Flowers)### Building for Production

  - Coins and obstacles

  - Flag poles for level completion```bash

- **Grid System**: Three grid sizes (small, medium, large) for different level widthsnpm run build

- **Save/Load System**: Save custom levels to browser storage and play them anytimenpm start

- **Visual Editor**: Real-time preview of your level design```

- **Clear/Delete**: Clear entire map or delete all saved levels

## 🎯 How to Play

## 🎬 Demo

### Desktop Controls

[Live Demo](https://github.com/SafwanGanz/supermiren) _(Add your deployment URL here)_- **Arrow Keys (←/→)**: Move left/right

- **Spacebar**: Jump

### Screenshots- **Shift**: Run/Sprint

- **Ctrl**: Shoot fireballs (when powered up)

```

Main Menu → Game Screen → Level Editor → Mobile Controls### Mobile Controls

```- **Left/Right Arrows**: Move Mario

- **Up Arrow (Blue)**: Jump

## 🚀 Getting Started- **Lightning Bolt (Red)**: Run/Sprint

- **Target (Yellow)**: Shoot fireballs

### Prerequisites

### Game Objectives

- **Node.js**: Version 18.0 or higher- Collect coins to increase score

- **npm** or **yarn**: Package manager- Defeat enemies by jumping on them

- **Modern Browser**: Chrome, Firefox, Safari, or Edge- Grab power-ups to gain abilities

- Reach the end of each level

### Installation- Don't lose all your lives!



1. **Clone the repository**## 🏗️ Project Structure



```bash```

git clone https://github.com/SafwanGanz/supermiren.gitmario-maker-nextjs/

cd supermiren├── app/                      # Next.js App Router

```│   ├── globals.css          # Global styles (mobile-first)

│   ├── layout.tsx           # Root layout with metadata

2. **Install dependencies**│   └── page.tsx             # Home page

├── components/              # React components

```bash│   ├── CreatedLevelsScreen.tsx

npm install│   ├── EditorScreen.tsx     # Level editor

# or│   ├── GameScreen.tsx       # Main game component

yarn install│   ├── MainMenu.tsx         # Menu screen

```│   ├── MobileControls.tsx   # Touch controls

│   └── ScoreDisplay.tsx     # HUD/Score display

3. **Run the development server**├── utils/                   # Game logic

│   ├── game/

```bash│   │   ├── Bullet.ts        # Fireball projectiles

npm run dev│   │   ├── Element.ts       # Game objects (blocks, coins)

# or│   │   ├── Enemy.ts         # Enemy entities

yarn dev│   │   ├── GameSound.ts     # Sound effects

```│   │   ├── Mario.ts         # Player character

│   │   ├── MarioGame.ts     # Main game engine

4. **Open your browser**│   │   ├── PowerUp.ts       # Power-up items

│   │   └── Score.ts         # Score management

Navigate to [http://localhost:3000](http://localhost:3000)│   ├── GameUI.ts            # UI singleton

│   └── Storage.ts           # Local storage

The game should load with a percentage indicator showing asset loading progress.└── public/                  # Static assets

    ├── fonts/               # Custom fonts

### Building for Production    ├── images/              # Sprites & graphics

    └── sounds/              # Audio files

```bash```

# Create optimized production build

npm run build## 🎨 Technical Highlights



# Start production server### Canvas Rendering

npm start- **Native Resolution**: 1280x480 internal canvas resolution

```- **Responsive Scaling**: CSS handles display sizing for all devices

- **Pixelated Graphics**: Authentic retro look with crisp pixel art

### Deployment- **60 FPS**: Smooth animation using requestAnimationFrame



This Next.js application can be deployed to:### Mobile-First Architecture

- **Flexbox Layout**: Modern CSS for responsive design

- **Vercel** (Recommended): `vercel --prod`- **Touch Events**: Optimized touch handling for mobile controls

- **Netlify**: Connect GitHub repository- **Viewport Configuration**: Prevents zoom and ensures full-screen experience

- **AWS/Azure**: Deploy as Node.js application- **Landscape Optimization**: Primary design for horizontal gameplay

- **Static Export**: Configure for static hosting

<<<<<<< HEAD

## 🎯 How to Play### State Management

- **React Hooks**: useState, useEffect, useRef for component state

### Desktop Controls- **Game Loop**: Custom game engine with physics and collision detection

- **Local Storage**: Save/load custom levels and game progress

| Key | Action |

|-----|--------|## 🛠️ Technologies Used

| **←** / **→** | Move Mario left/right |

| **Spacebar** | Jump |- **Next.js 15.5.6**: React framework with App Router

| **Shift** | Run/Sprint (faster movement and higher jumps) |- **TypeScript**: Type-safe development

| **Ctrl** | Shoot fireballs (only when powered up with Fire Flower) |- **HTML5 Canvas**: Game rendering

- **CSS3**: Responsive styling with Flexbox

### Mobile Controls- **React 19**: UI components

- **Custom Game Engine**: Built from scratch

| Button | Icon | Action |

|--------|------|--------|## 📱 Browser Support

| **Left Arrow** | ◀️ | Move left |

| **Right Arrow** | ▶️ | Move right |- ✅ Chrome (Desktop & Mobile)

| **Jump** | 🔼 | Jump |- ✅ Firefox (Desktop & Mobile)

| **Run** | ⚡ | Run/Sprint |- ✅ Safari (Desktop & iOS)

| **Shoot** | 🎯 | Shoot fireballs |- ✅ Edge (Desktop & Mobile)



**Mobile Tips:**## 🐛 Known Issues & Limitations

- Best played in landscape orientation

- Control buttons appear automatically in landscape mode- Audio autoplay may be blocked by some browsers (user interaction required)

- Buttons are semi-transparent to show game area- Best experience in landscape mode on mobile devices

- Touch and hold for continuous movement- Custom level editor works best on desktop/tablet



### Game Objectives## 🤝 Contributing



1. **Survive**: Avoid falling into pits and touching enemiesContributions are welcome! Please feel free to submit a Pull Request.

2. **Collect Coins**: Each coin adds to your score (100 coins = 1 extra life)

3. **Defeat Enemies**: Jump on enemies to defeat them and earn points1. Fork the repository

4. **Grab Power-ups**: 2. Create your feature branch (`git checkout -b feature/AmazingFeature`)

   - Hit mystery boxes (?) to reveal power-ups3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)

   - Touch power-ups to collect them4. Push to the branch (`git push origin feature/AmazingFeature`)

5. **Reach the Flag**: Get to the flag pole at the end to complete the level5. Open a Pull Request

6. **Score Points**: Higher scores unlock bragging rights!

## 📄 License

### Power-up Guide

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

- **Small Mario** (default): Dies in one hit

- **Super Mario** (after mushroom): Takes one hit to become small, can break bricks## 🙏 Acknowledgments

- **Fire Mario** (after fire flower): Can shoot fireballs with Ctrl/Shoot button

- **Star Power** (temporary): Invincible to enemies for limited time- Inspired by the classic Super Mario Bros game by Nintendo

- Font: SuperMario256 custom font

## 🎨 Level Editor- Sound effects: Classic Mario sound library

- Built as an educational project to demonstrate game development with web technologies

### How to Use the Editor

## 👨‍💻 Author

1. **Open Editor**: Click "Editor" button from main menu

2. **Select Grid Size**: Choose Small (60), Medium (90), or Large (120) width**Safwan Ganz**

3. **Choose Element**: Click on the element you want to place (blocks, enemies, etc.)- GitHub: [@SafwanGanz](https://github.com/SafwanGanz)

4. **Place Elements**: - Repository: [supermiren](https://github.com/SafwanGanz/supermiren)

   - Click and drag on the grid to select multiple tiles

   - Selected tiles will receive the chosen element## 📞 Support

   - Click individual tiles for single placement

5. **Save Level**: Click "Save Map" and enter a name for your levelIf you encounter any issues or have questions:

6. **Play Level**: Go to "Created Levels" from main menu and select your saved level- Open an issue on GitHub

- Check existing issues for solutions

### Editor Controls- Review the code documentation



- **Grid Size Buttons**: Change level width---

- **Element Palette**: Select from blocks, enemies, power-ups

- **Clear Map**: Remove all elements from current level**Made with ❤️ and Next.js**

- **Delete All**: Remove all saved levels from storage

- **Back**: Return to main menu*Play responsibly! This is a fan-made project and is not affiliated with Nintendo.*

=======

### Level Design TipsOriginal vanilla JavaScript version: [mario-maker-master](https://github.com/pratishshr/mario-maker)

Next.js conversion: Complete TypeScript rewrite with all features preserved

- Start Mario on solid ground (left side)
- Place a flag pole at the end (right side)
- Balance difficulty with enemy placement
- Test your level before saving
- Use mystery boxes strategically for power-ups
- Create platforms for vertical navigation

## 🏗️ Project Structure

```
mario-maker-nextjs/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles (mobile-first responsive)
│   ├── layout.tsx               # Root layout with metadata & viewport
│   ├── page.tsx                 # Main app component with game state
│   └── favicon.ico              # App icon
│
├── components/                   # React Components
│   ├── MainMenu.tsx             # Main menu screen with navigation
│   ├── GameScreen.tsx           # Game canvas and controls wrapper
│   ├── ScoreDisplay.tsx         # HUD showing lives, coins, score
│   ├── EditorScreen.tsx         # Level editor interface
│   ├── CreatedLevelsScreen.tsx  # Saved levels browser
│   ├── MobileControls.tsx       # Touch control buttons
│   └── MobileControls.module.css # Scoped styles for controls
│
├── utils/                        # Game Logic & Utilities
│   ├── GameUI.ts                # Canvas rendering singleton
│   ├── Storage.ts               # LocalStorage wrapper
│   └── game/                    # Core game engine
│       ├── MarioGame.ts         # Main game loop and state
│       ├── Mario.ts             # Player character class
│       ├── Element.ts           # Map elements (blocks, coins)
│       ├── Enemy.ts             # Enemy entities and AI
│       ├── PowerUp.ts           # Power-up items logic
│       ├── Bullet.ts            # Fireball projectiles
│       ├── Score.ts             # Score management
│       └── GameSound.ts         # Sound effects handler
│
├── public/                       # Static Assets
│   ├── fonts/                   # Custom fonts
│   │   └── SuperMario256.ttf   # Mario-style font
│   ├── images/                  # Sprites and graphics
│   │   ├── mario-sprites.png   # Mario character sprites
│   │   ├── elements.png        # Block and tile sprites
│   │   ├── enemies.png         # Enemy sprites
│   │   ├── powerups.png        # Power-up sprites
│   │   ├── bg.png              # Background image
│   │   └── ... (more assets)
│   └── sounds/                  # Audio files
│       ├── coin.wav
│       ├── jump.wav
│       ├── power-up.wav
│       ├── mario-die.wav
│       └── ... (more sounds)
│
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🎨 Technical Details

### Canvas Rendering

- **Native Resolution**: 1280x480 pixels (internal canvas size)
- **Responsive Scaling**: CSS handles display sizing for all screen sizes
- **Aspect Ratio**: 8:3 ratio maintained across devices
- **Pixelated Graphics**: `image-rendering: pixelated` for authentic retro look
- **Frame Rate**: 60 FPS using `requestAnimationFrame`
- **Sprite Rendering**: Custom sprite sheet system with position mapping

### Mobile-First Architecture

- **CSS Flexbox**: Modern layout system for responsive design
- **Touch Events**: `touchstart`, `touchend` for mobile control handling
- **Viewport Configuration**: 
  - Prevents zoom/pinch gestures
  - Full-screen coverage with `viewport-fit: cover`
  - Fixed scale for consistent experience
- **Landscape Optimization**: Primary design targets horizontal orientation
- **Media Queries**: Breakpoints for phones, tablets, and desktop
- **Backdrop Filter**: Glass-morphism effects with `blur(5px)`

### State Management

- **React Hooks**: 
  - `useState` for component state (screen, level, score)
  - `useEffect` for lifecycle management (asset loading, game initialization)
  - `useRef` for canvas and game instance references
- **Game Loop**: Custom RAF-based game loop with physics calculations
- **Local Storage**: Browser storage for saved custom levels
- **Singleton Pattern**: GameUI for canvas rendering utilities

### Physics & Collision

- **Gravity System**: Custom gravity implementation for realistic jumping
- **Collision Detection**: Tile-based and sprite-based collision checking
- **Movement**: Velocity-based movement with acceleration
- **Jump Mechanics**: Variable jump height based on button hold duration

### Audio System

- **HTML5 Audio**: Web Audio API for sound effects
- **Sound Manager**: Centralized sound effect handling
- **Error Handling**: Promise-based play with catch for interruption errors
- **Sound Library**: 9 different sound effects (coin, jump, power-up, etc.)

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.5.6 | React framework with App Router |
| **React** | 19.0 | UI component library |
| **TypeScript** | 5.0+ | Type-safe development |
| **HTML5 Canvas** | Native | 2D game rendering |
| **CSS3** | Modern | Responsive styling with Flexbox |
| **Web Audio API** | Native | Sound effects |
| **LocalStorage** | Native | Save/load custom levels |

### Development Tools

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Git**: Version control
- **VS Code**: Recommended IDE

## 📱 Browser Support

| Browser | Desktop | Mobile | Notes |
|---------|---------|--------|-------|
| **Chrome** | ✅ Latest | ✅ Latest | Best performance |
| **Firefox** | ✅ Latest | ✅ Latest | Fully supported |
| **Safari** | ✅ Latest | ✅ iOS 14+ | Audio requires user interaction |
| **Edge** | ✅ Latest | ✅ Latest | Chromium-based, excellent |
| **Opera** | ✅ Latest | ✅ Latest | Chromium-based |

### Minimum Requirements

- **Desktop**: Any modern browser (2020+)
- **Mobile**: iOS 14+ or Android 8+
- **Screen**: 320px minimum width
- **JavaScript**: Must be enabled

## 🔧 Troubleshooting

### Common Issues

**Issue**: Game assets not loading / Stuck at loading screen

**Solution**:
```bash
# Ensure all assets are in public folder
# Check browser console for 404 errors
# Clear browser cache and reload
```

**Issue**: No sound effects playing

**Solution**:
- Modern browsers require user interaction before playing audio
- Click anywhere on the page first, then start the game
- Check browser audio permissions
- Verify sound files exist in `public/sounds/`

**Issue**: Mobile controls not showing

**Solution**:
- Rotate device to landscape orientation
- Ensure viewport width > height
- Check that screen width is under 1024px
- Refresh the page

**Issue**: TypeScript errors during build

**Solution**:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Next.js cache
rm -rf .next
npm run build
```

**Issue**: Canvas appears stretched or distorted

**Solution**:
- Canvas uses fixed 1280x480 internal resolution
- CSS handles scaling - check `globals.css`
- Verify `object-fit: fill` is applied
- Check for conflicting CSS styles

### Performance Issues

If the game runs slowly:

1. **Close other tabs**: Free up browser resources
2. **Update browser**: Use latest version
3. **Check hardware acceleration**: Enable in browser settings
4. **Reduce background apps**: Free up system memory
5. **Use Chrome**: Generally best performance for canvas games

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Make your changes**
   - Follow existing code style
   - Add comments for complex logic
   - Test on both desktop and mobile
4. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
6. **Open a Pull Request**

### Contribution Ideas

- 🎨 Add new enemy types or power-ups
- 🎵 Implement background music
- 🗺️ Create more pre-built levels
- 🏆 Add achievements system
- 💾 Cloud save functionality
- 🌐 Multiplayer support
- 📊 Leaderboard system
- 🎨 New themes/skins

### Code Style

- Use TypeScript for type safety
- Follow React best practices
- Comment complex game logic
- Keep components small and focused
- Use meaningful variable names

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:

✅ Commercial use  
✅ Modification  
✅ Distribution  
✅ Private use  

❌ Liability  
❌ Warranty  

## 🙏 Credits & Acknowledgments

### Inspiration

- **Nintendo**: Original Super Mario Bros game and characters
- **Shigeru Miyamoto**: Creator of Mario
- Classic 8-bit platformer mechanics and design

### Assets

- **Font**: SuperMario256 custom retro font
- **Sound Effects**: Classic Mario sound library
- **Sprites**: Inspired by original Mario graphics

### Original Project

- **Base Project**: [mario-maker-master](https://github.com/pratishshr/mario-maker) by Pratish Shrestha
- **Conversion**: Complete TypeScript rewrite with Next.js 15 and mobile-first responsive design

### Technologies

- Built as an educational project to demonstrate:
  - Game development with web technologies
  - HTML5 Canvas API mastery
  - React/Next.js best practices
  - Mobile-first responsive design
  - TypeScript in game development

## 👨‍💻 Author

**Safwan Ganz**

- 🐙 GitHub: [@SafwanGanz](https://github.com/SafwanGanz)
- 📦 Repository: [supermiren](https://github.com/SafwanGanz/supermiren)
- 📧 Contact: [Open an issue](https://github.com/SafwanGanz/supermiren/issues)

## 📞 Support

If you encounter any issues or have questions:

- 🐛 [Open an issue](https://github.com/SafwanGanz/supermiren/issues) on GitHub
- 💬 Check [existing issues](https://github.com/SafwanGanz/supermiren/issues) for solutions
- 📖 Review the code documentation
- ⭐ Star the project if you find it useful!

## 🎯 Roadmap

Future enhancements planned:

- [ ] Add 10+ pre-built levels
- [ ] Background music system
- [ ] Achievements and unlockables  
- [ ] Time trial mode
- [ ] Level sharing via URL
- [ ] Controller support
- [ ] Performance optimizations
- [ ] Progressive Web App features
- [ ] Dark mode for editor
- [ ] Undo/Redo in editor

---

<div align="center">

**Made with ❤️ and Next.js**

⭐ Star this repo if you enjoyed playing!

*This is a fan-made project for educational purposes.*  
*Not affiliated with Nintendo. All trademarks belong to their respective owners.*

[⬆ Back to Top](#-super-miren---mario-maker-game)

</div>
