# Super Nigg

A Mario Maker game built with Next.js, TypeScript, and HTML5 Canvas. Create custom Mario levels, play built-in stages, and share your creations!

**Play in your browser or download the Android APK!** 📱🎮

![Next.js](https://img.shields.io/badge/Next.js-15.0.0-black)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 💻 Languages & Technologies

### Primary Languages
- **TypeScript** - Main development language for type-safe React components and game logic
- **JavaScript** - Runtime execution and Next.js framework
- **CSS** - Styling with CSS Modules for component-scoped styles
- **HTML** - Markup via JSX/TSX components

### Additional
- **Kotlin** - Android APK application code
- **Groovy** - Gradle build scripts

## 🎮 Features

### Game Modes
- **Play Mode**: Experience classic Mario gameplay with pre-built levels
- **Level Editor**: Create your own custom Mario levels with an intuitive drag-and-drop interface
- **Custom Levels**: Play and manage your created levels

### Gameplay Elements
- Classic Mario physics and movement
- Enemy AI (Goombas, Koopas, etc.)
- Power-ups (Super Mushroom, Fire Flower)
- Coins and scoring system
- Flag pole completion
- Multiple level support
- Mobile-friendly controls

### Level Editor Features
- Grid-based level design
- Multiple tile types:
  - Platforms and blocks
  - Enemies
  - Power-ups
  - Flag pole
  - Decorative elements
- Adjustable canvas size (Small, Medium, Large)
- Save and load custom levels
- Clear and delete functions
- Real-time preview

## 🚀 Getting Started

### Option 1: Play in Browser (Web Version)

#### Prerequisites
- Node.js 20.x or higher
- npm or yarn package manager

#### Installation

1. Clone the repository:
```bash
git clone https://github.com/SafwanGanz/super-nigg.git
cd super-nigg
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

### Building for Production

```bash
npm run build
npm start
```

### Option 2: Play on Android (Mobile APK)

1. Navigate to `apk/app/release/` directory
2. Copy the APK file to your Android device
3. Enable "Install from Unknown Sources" in your device settings
4. Install and play!

**No build required - the APK is ready to use!**

## 📱 Mobile Support

The game includes mobile controls with on-screen buttons for:
- Movement (Left/Right arrows)
- Jump (A button)
- Run/Shoot (B button)

Mobile controls automatically appear on touch-enabled devices.

## 🎯 Controls

### Desktop
- **Arrow Keys**: Move left/right
- **Spacebar**: Jump
- **Shift**: Run/Shoot fireballs (when powered up)

### Mobile
- **Touch Controls**: On-screen buttons for movement and actions

## 🏗️ Project Structure

```
super-nigg/
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main application entry
├── components/              # React components
│   ├── MainMenu.tsx         # Main menu screen
│   ├── GameScreen.tsx       # Game play screen
│   ├── EditorScreen.tsx     # Level editor
│   ├── CreatedLevelsScreen.tsx  # Custom levels browser
│   ├── MobileControls.tsx   # Mobile control buttons
│   └── ScoreDisplay.tsx     # Score and lives display
├── utils/                   # Utility modules
│   ├── Storage.ts           # Local storage management
│   ├── GameUI.ts            # UI helper functions
│   └── game/                # Game engine
│       ├── MarioGame.ts     # Main game class
│       ├── Mario.ts         # Player character
│       ├── Enemy.ts         # Enemy entities
│       ├── Element.ts       # Game elements (blocks, coins)
│       ├── Bullet.ts        # Projectiles
│       ├── PowerUp.ts       # Power-up items
│       ├── Score.ts         # Scoring system
│       └── GameSound.ts     # Audio management
├── public/                  # Static assets
│   ├── images/              # Game sprites and graphics
│   ├── sounds/              # Audio files
│   └── fonts/               # Custom fonts
└── apk/                     # Android build files
```

## 🛠️ Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **UI Library**: [React 18](https://react.dev/)
- **Styling**: CSS Modules
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Rendering**: HTML5 Canvas API
- **Storage**: Browser LocalStorage API

## 💾 Data Persistence

Custom levels are stored in the browser's LocalStorage, allowing you to:
- Save unlimited custom levels
- Load and edit previously created levels
- Delete unwanted levels
- Levels persist across browser sessions

## 🎨 Customization

### Adding New Elements
To add new game elements, update the relevant files:
- `utils/game/Element.ts` - Define element behavior
- `public/images/` - Add sprite graphics
- `components/EditorScreen.tsx` - Add to editor palette

### Modifying Game Physics
Game physics can be adjusted in:
- `utils/game/Mario.ts` - Player physics
- `utils/game/Enemy.ts` - Enemy behavior
- `utils/game/MarioGame.ts` - Global game settings

## � Android APK

### Ready-to-Install APK

A pre-built Android APK is already available! Check the `apk/app/release/` directory for the compiled APK file that you can install directly on your Android device.

### APK Source Code

The complete Android application source code is located in the `apk/` directory, including:
- Full Gradle build configuration
- Android app source files
- Build scripts and dependencies
- Release configurations

### Building APK from Source (Optional)

If you want to rebuild the APK yourself:

1. Ensure Android SDK is installed
2. Navigate to the apk directory:
```bash
cd apk
```
3. Build the APK:
```bash
./gradlew assembleRelease
```

The compiled APK will be available in `apk/app/release/`

=======

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎮 Game Assets

All game assets (sprites, sounds) are for educational and demonstration purposes. Please ensure you have appropriate rights before using in commercial projects.

## 🐛 Known Issues

- Some mobile devices may experience performance issues on large levels
- Audio may not autoplay on certain browsers due to autoplay policies

## 🔮 Future Enhancements

- [ ] Multiplayer support
- [ ] More enemy types
- [ ] Additional power-ups
- [ ] Level sharing via URL/QR code
- [ ] Cloud save functionality
- [ ] Level difficulty rating
- [ ] Sound effect customization
- [ ] Theme variations (dark mode, different worlds)

## 👨‍💻 Author

**SafwanGanz**

- GitHub: [@SafwanGanz](https://github.com/SafwanGanz)
- Repository: [super-nigg](https://github.com/SafwanGanz/super-nigg)

## 🙏 Acknowledgments

- Inspired by and built upon [mario-maker](https://github.com/pratishshr/mario-maker) by [@pratishshr](https://github.com/pratishshr)
- Game assets and project backbone from the original mario-maker project
- Adapted and enhanced with Next.js, TypeScript, and Android support
- Thanks to Nintendo for the original Super Mario franchise that inspired this project

---

**Enjoy creating and playing your custom Mario levels! 🎮✨**
