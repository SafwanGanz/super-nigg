# 🍄 Super Miren - Mario Maker Game

A classic Super Mario-style platformer game built with Next.js 15, TypeScript, and HTML5 Canvas. Features mobile-responsive controls, custom level creation, and authentic Mario gameplay mechanics.

![Super Miren](https://img.shields.io/badge/Next.js-15.5.6-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## 🎮 Features

### Gameplay
- **Classic Mario Mechanics**: Jump, run, shoot fireballs, and stomp enemies
- **Multiple Power-ups**: Mushrooms, fire flowers, and star power
- **Enemy AI**: Goombas, Koopa Troopas, and Bullet Bills
- **Score System**: Collect coins, defeat enemies, and complete levels
- **Multiple Lives**: Start with 5 lives and earn more by collecting coins
- **Level Progression**: Multiple pre-built levels with increasing difficulty

### Mobile Experience
- **Touch Controls**: 
  - Left/Right arrow buttons for movement
  - Up arrow for jumping
  - Action buttons for running and shooting
- **Landscape-First Design**: Optimized for mobile landscape gameplay
- **Transparent Controls**: See-through control buttons for better visibility
- **Responsive UI**: Adapts to different screen sizes (phones, tablets, desktop)
- **PWA Ready**: Theme color matches game UI for immersive mobile experience

### Level Editor
- **Custom Level Creation**: Build your own Mario levels
- **Drag & Drop Interface**: Easy-to-use level design tools
- **Save/Load Levels**: Create and play custom levels
- **Element Library**: Blocks, enemies, power-ups, and more

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SafwanGanz/supermiren.git
cd supermiren
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

## 🎯 How to Play

### Desktop Controls
- **Arrow Keys (←/→)**: Move left/right
- **Spacebar**: Jump
- **Shift**: Run/Sprint
- **Ctrl**: Shoot fireballs (when powered up)

### Mobile Controls
- **Left/Right Arrows**: Move Mario
- **Up Arrow (Blue)**: Jump
- **Lightning Bolt (Red)**: Run/Sprint
- **Target (Yellow)**: Shoot fireballs

### Game Objectives
- Collect coins to increase score
- Defeat enemies by jumping on them
- Grab power-ups to gain abilities
- Reach the end of each level
- Don't lose all your lives!

## 🏗️ Project Structure

```
mario-maker-nextjs/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles (mobile-first)
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── CreatedLevelsScreen.tsx
│   ├── EditorScreen.tsx     # Level editor
│   ├── GameScreen.tsx       # Main game component
│   ├── MainMenu.tsx         # Menu screen
│   ├── MobileControls.tsx   # Touch controls
│   └── ScoreDisplay.tsx     # HUD/Score display
├── utils/                   # Game logic
│   ├── game/
│   │   ├── Bullet.ts        # Fireball projectiles
│   │   ├── Element.ts       # Game objects (blocks, coins)
│   │   ├── Enemy.ts         # Enemy entities
│   │   ├── GameSound.ts     # Sound effects
│   │   ├── Mario.ts         # Player character
│   │   ├── MarioGame.ts     # Main game engine
│   │   ├── PowerUp.ts       # Power-up items
│   │   └── Score.ts         # Score management
│   ├── GameUI.ts            # UI singleton
│   └── Storage.ts           # Local storage
└── public/                  # Static assets
    ├── fonts/               # Custom fonts
    ├── images/              # Sprites & graphics
    └── sounds/              # Audio files
```

## 🎨 Technical Highlights

### Canvas Rendering
- **Native Resolution**: 1280x480 internal canvas resolution
- **Responsive Scaling**: CSS handles display sizing for all devices
- **Pixelated Graphics**: Authentic retro look with crisp pixel art
- **60 FPS**: Smooth animation using requestAnimationFrame

### Mobile-First Architecture
- **Flexbox Layout**: Modern CSS for responsive design
- **Touch Events**: Optimized touch handling for mobile controls
- **Viewport Configuration**: Prevents zoom and ensures full-screen experience
- **Landscape Optimization**: Primary design for horizontal gameplay

<<<<<<< HEAD
### State Management
- **React Hooks**: useState, useEffect, useRef for component state
- **Game Loop**: Custom game engine with physics and collision detection
- **Local Storage**: Save/load custom levels and game progress

## 🛠️ Technologies Used

- **Next.js 15.5.6**: React framework with App Router
- **TypeScript**: Type-safe development
- **HTML5 Canvas**: Game rendering
- **CSS3**: Responsive styling with Flexbox
- **React 19**: UI components
- **Custom Game Engine**: Built from scratch

## 📱 Browser Support

- ✅ Chrome (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari (Desktop & iOS)
- ✅ Edge (Desktop & Mobile)

## 🐛 Known Issues & Limitations

- Audio autoplay may be blocked by some browsers (user interaction required)
- Best experience in landscape mode on mobile devices
- Custom level editor works best on desktop/tablet

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the classic Super Mario Bros game by Nintendo
- Font: SuperMario256 custom font
- Sound effects: Classic Mario sound library
- Built as an educational project to demonstrate game development with web technologies

## 👨‍💻 Author

**Safwan Ganz**
- GitHub: [@SafwanGanz](https://github.com/SafwanGanz)
- Repository: [supermiren](https://github.com/SafwanGanz/supermiren)

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the code documentation

---

**Made with ❤️ and Next.js**

*Play responsibly! This is a fan-made project and is not affiliated with Nintendo.*
=======
Original vanilla JavaScript version: [mario-maker-master](https://github.com/pratishshr/mario-maker)
Next.js conversion: Complete TypeScript rewrite with all features preserved


>>>>>>> 45e411e5fbafb3d4291cfe1191533c6fc1cd7607
