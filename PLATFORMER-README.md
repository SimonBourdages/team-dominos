# 🍕 OKR Factory 3D - The Delivery Person

## Phase 1 Complete 3D Platformer

A fully playable 3D platformer game built with Three.js featuring OKR Factory characters delivering OKRs to Jrod!

## 🎮 How to Play

1. Open `index.html` in a modern web browser
2. Click **START GAME** to begin
3. Select a level from the level select screen
4. Use keyboard controls to navigate through levels
5. Collect all 3 OKRs in each level
6. Reach Jrod's HQ building to complete the level

## 🎯 Controls

- **WASD / Arrow Keys**: Move player
- **Space**: Jump (press twice for double jump after level 3)
- **Shift**: Sprint (1.5x speed)
- **ESC**: Pause game

## 🏆 Game Features

### Core Mechanics
- ✅ Full 3D platformer physics (gravity, jumping, collisions)
- ✅ Third-person camera that follows player
- ✅ Double jump unlocked after completing level 3
- ✅ Sprint mechanic for faster movement
- ✅ Ground detection using AABB collision
- ✅ Respawn system with lives

### 10 Complete Levels

1. **Tutorial Plains** - Learn basic movement and jumping
2. **The Gap** - Practice timing your jumps
3. **Moving Platforms** - Navigate vertical and horizontal platforms
4. **Meeting Blockers** - Avoid patrolling enemies
5. **Boss Battle** - Arena-style level with boss enemy
6. **Sky High** - Climb to great heights
7. **Zigzag Path** - Navigate platforms on different Z axes
8. **Precision Jumps** - Tiny platforms require perfect timing
9. **The Gauntlet** - Combine all skills with enemies
10. **Final Delivery** - Ultimate challenge

### Visual Design
- Low-poly 3D aesthetic (Crossy Road meets Super Mario)
- Corporate campus theme with colored platforms
- Golden spinning OKR cubes
- Jrod's HQ building with red roof and golden sign
- Patrolling red enemy cubes
- Sky blue background with fog

### Progression System
- Level unlocking (beat level to unlock next)
- Star rating (1-3 stars based on completion time)
  - 3 stars: Under 30 seconds
  - 2 stars: Under 60 seconds  
  - 1 star: Complete with all OKRs
- Local storage save system
- Track best time per level

### UI/UX
- Main menu with Start, Settings, Achievements
- Level select grid showing all 10 levels
- In-game HUD showing:
  - Current level
  - OKRs collected (visual indicators)
  - Time elapsed
  - Lives remaining (❤️)
- Pause menu (ESC key)
- Level complete screen with stats
- Game over screen
- Controls reference overlay

### Polish & Effects
- Particle effects (✨) on OKR collection
- Confetti animation on level complete (🎉⭐🎊)
- Smooth camera transitions
- Player rotation to face movement direction
- Shadow rendering for depth
- Fog effect for atmosphere
- Animated OKRs (rotation + floating)

## 🎨 Technical Details

### Built With
- **Three.js r160** - 3D graphics library
- **Vanilla JavaScript** - No additional dependencies
- **ES6 Modules** - Modern JavaScript

### Game Architecture

```
Game Class
├── Scene Management (Three.js scene, camera, renderer)
├── Player Class (physics, movement, collision)
├── OKR Class (collectibles with rotation animation)
├── Jrod Class (HQ building with roof and sign)
├── Enemy Class (patrolling obstacles)
├── Level System (10 level definitions)
└── UI Management (menus, HUD, dialogs)
```

### Performance
- Fixed timestep at 60 FPS
- Efficient collision detection
- Shadow maps enabled for visual quality
- Fog for draw distance optimization

## 📊 Progression Tracking

The game saves your progress locally including:
- Highest unlocked level
- Stars earned per level
- Best completion time per level

Progress is stored in browser localStorage as `teamDominosProgress`.

## 🏗️ Level Design

Each level includes:
- Multiple platforms (static and moving)
- 3 OKR collectibles
- Jrod's HQ at the end
- Optional enemies (levels 4, 5, 9, 10)
- Spawn point
- Unique color theme

## 🎯 Achievements (Ready for Expansion)

Current tracking:
- Total stars earned (out of 30)
- Levels completed (out of 10)

Ready to add:
- Speed run achievements
- No death runs
- Perfect collection
- Hidden OKRs
- Special challenges

## 🚀 Next Steps (Phase 2 Ideas)

- More level mechanics (teleporters, bounce pads, ice platforms)
- Power-ups (speed boost, invincibility, magnet)
- More enemy types (flying, jumping, shooting)
- Boss battles with health bars
- Cutscenes between phases
- Audio (music and sound effects)
- Mobile touch controls
- Multiplayer/leaderboards

## 🎮 Testing Checklist

✅ All 10 levels playable start to finish
✅ Physics working correctly (gravity, jumping, collision)
✅ OKR collection triggering correctly
✅ Jrod collision triggering level complete
✅ Enemy collision triggering respawn
✅ Lives system counting down
✅ Game over on 0 lives
✅ Level unlocking system
✅ Star rating calculation
✅ Progress saving/loading
✅ All UI screens functional
✅ Pause/resume working
✅ Keyboard controls responsive
✅ Camera following player smoothly

## 📝 Game Design Philosophy

This is a **fun, polished foundation** for OKR Factory. The core platformer mechanics are solid and can support any future gameplay additions. The low-poly art style is intentional - it's charming, performant, and allows focus on gameplay over graphics.

---

**Made with ❤️ for OKR Factory**  
*Delivering OKRs Since 2024*
