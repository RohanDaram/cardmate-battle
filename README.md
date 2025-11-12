# 🎴 CardMate Battle

<div align="center">

![CardMate Banner](https://img.shields.io/badge/CardMate-Battle-2c3e50?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A Strategic Turn-Based Card Battle Game Built with AI-Assisted Vibe Coding**

[💻 Vibe Coding Approach](#-development-with-vibe-coding) • [Key Prompts](#-key-prompts-used) • [🎮 How to Play](#-gameplay-overview) • [🚀 Getting Started](#-getting-started)

</div>

---

## � Table of Contents

- [Development with Vibe Coding](#-development-with-vibe-coding)
- [Key Prompts Used](#-key-prompts-used)
- [About the Project](#-about-the-project)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Gameplay Overview](#-gameplay-overview)
- [Game Mechanics](#-game-mechanics)
- [Technology Stack](#-technology-stack)

---

## 💻 Development with Vibe Coding

### 🎓 The Learning Experience

This entire project was built using **Vibe Coding** - a development approach where you describe what you want in natural language, and AI helps you build it. This was my personal experience to understand how powerful vibe coding can be!

This project demonstrates that you can create a complete, web game from scratch without writing every line of code manually. Every feature, mechanic, visual element, and bug fix was implemented through natural language prompts.

### 🌟 What is Vibe Coding?

Vibe Coding is an AI-assisted development workflow where you:
1. **Describe features in plain English** - No need to know exact syntax
2. **Iterate through conversation** - Refine implementations naturally
3. **Build complex applications** - Focus on what you want rather than how exactly to code it
4. **Learn as you go** - Understand the generated code through explanations

### 🎯 Why This Project?

This game was specifically created to:
- ✅ **Learn Vibe Coding** - Understand AI-assisted development
- ✅ **Test Complexity Limits** - See how far prompts can take you
- ✅ **Document the Process** - Serve as a template for others
- ✅ **Build Something Fun** - Create an actual playable game

---

## Key Prompts Used

Here are the main prompts that built this game from scratch. **These can serve as a template for your own Vibe Coding projects!**

### 🏗️ Initial Project Setup

```
"Create a strategic turn-based card battle game using a standard 52-card deck 
plus 2 jokers. Each suit should have unique abilities: Hearts heal, Diamonds 
shield, Spades deal direct damage, and Clubs draw cards. The game should have 
a 3-card field limit per player."
```

**Result**: Complete game foundation with card definitions, game state, and basic turn structure

### 🎨 Visual Enhancements

```
"Make the cards look like actual playing cards with the correct number of suit 
symbols based on their value. Aces should show 1 suit, 2s should show 2 
suites, and so on. Use suit colors: red for hearts, blue for diamonds, dark gray for 
spades, and green for clubs."
```

**Result**: Visual card representations with proper layouts

```
"Create a card archive feature that displays all 54 cards in a grid layout so 
players can reference them during gameplay."
```

**Result**: Complete card reference system with visual display

```
"Make the floating spades on the home page a bit darker so they're more visible."
```

**Result**: Simple CSS color adjustment for better contrast

### ⚙️ Game Mechanics

```
"Implement an action system where players have 3 actions per turn. Drawing a 
card should cost 1 action, using abilities should cost 1 action, but playing 
cards to the field should be free."
```

**Result**: Complete action economy system with UI indicators

```
"Add an energy/action display using colored orbs that show available and used 
actions. Integrate them into the player info sections instead of floating."
```

**Result**: Visual action system with inline orb displays

### 🤖 AI Improvements

```
"Make the computer AI smarter. It should play multiple cards per turn when 
possible, use abilities strategically (heal when low HP, shield when threatened, 
attack when opponent is weak), and prioritize based on game state."
```

**Result**: Strategic AI with priority-based decision making

### 🎯 Balance Adjustments

```
"Make the direct damage of spades [card number ÷ 2] rounded up instead of full 
damage. Make sure to reflect this in the instructions and all ability 
descriptions."
```

**Result**: Balanced damage formula across entire codebase

### 🔊 Audio Implementation

```
"Add background music and sound effects for card plays, attacks, healing, and 
coin flips. Include an audio settings modal with volume controls and mute 
toggles."
```

**Result**: Complete Web Audio API implementation with dynamic sound effects

### 🎨 UI Improvements

```
"Update the instructions to reflect the action system mechanics and show 
calculated ability values in the card archive."
```

**Result**: Comprehensive in-game documentation updates

### 🐛 Bug Fixes & Iterations

```
"The wildcard ability doesn't work. When I click it, nothing happens. Add 
debugging and fix the modal flow."
```

**Result**: Fixed modal state management with proper event flow

```
"Fix the Joker wildcard ability - when selecting an ability, it should show 
a modal to pick which ability to copy from cards on the field."
```

**Result**: Complete wildcard ability implementation with selection modal

#### Lot more prompts were used, but these were some of the main prompts for each of the main categories.

---

## 🛠️ Vibe Coding

Common prompt structures I used throughout the project:

### ✅ Effective Prompt Patterns

1. **Feature Addition**
   ```
   "Add [feature] that does [specific behavior]"
   ```

2. **Visual Changes**
   ```
   "Make [element] look like [description] with [specific details]"
   ```

3. **Bug Fixes**
   ```
   "When I [action], [problem] happens. Fix it so that [expected behavior]"
   ```

4. **Enhancements**
   ```
   "Improve [system] to [specific improvement with examples]"
   ```

5. **Balance Changes**
   ```
   "Change [mechanic] from [old value/formula] to [new value/formula]"
   ```

### 💡 Key Learnings

- **Start Simple** - Begin with core mechanics, add features incrementally
- **Be Specific** - More details = better results
- **Iterate Naturally** - Treat it like a conversation
- **Test Frequently** - Verify each feature before moving on
- **Ask for Explanations** - Understanding helps with future prompts

### 🎨 Progressive Improvements

This project grew through numerous iterations:

1. Basic card game with turns ↓
2. Added suit-specific abilities ↓
3. Improved AI strategy ↓
4. Enhanced visual representations ↓
5. Added sound and music ↓
6. Refined game balance ↓
7. Polish and bug fixes

Each step was a multiple prompts building on previous features!

---

## 🎯 About the Project

**CardMate Battle** is a strategic turn-based card game where you battle against an intelligent AI opponent using a standard deck of 54 cards (including Jokers). Each suit has unique abilities, and every card can be played to the field to attack, defend, or use special powers.

### 🎪 Game Highlights

- **♥️ Hearts** - Healing specialists that restore life points
- **♦️ Diamonds** - Defensive shields that protect from damage
- **♠️ Spades** - Direct damage dealers that bypass defenses
- **♣️ Clubs** - Utility cards that draw additional cards
- **🃏 Jokers** - Wildcards that copy abilities from other cards on the field

---

## ✨ Features

### 🎮 Core Gameplay
- ⚔️ **Strategic 3-Slot Field System** - Manage your battlefield with limited space
- 🎲 **Action Economy** - 3 actions per turn (draw costs 1, playing cards is free)
- 🧠 **Smart AI Opponent** - Computer makes strategic decisions based on game state
- 🪙 **Coin Flip Start** - Random turn order decided by heads or tails

### 🎨 Visual & Audio
- 🎨 **Beautiful Card Design** - Visual representations with suit symbols and pip counts
- 🔊 **Dynamic Sound Effects** - Card plays, attacks, coin flips, and ability usage
- 🎵 **Background Music** - Atmospheric game soundtrack
- ⚡ **Smooth Animations** - Card movements, attacks, and visual effects

### 🎯 Game Features
-  **Card Archive** - Visual reference showing all 54 cards
- 📖 **In-Game Instructions** - Complete guide to card abilities and mechanics
- 🎴 **Suit Significance Guide** - Learn the strategic importance of each suit
- 🎮 **Drag & Drop Interface** - Intuitive card playing mechanics

### 💎 Game Mechanics
- 🛡️ **Shield System** - Block incoming damage with protective barriers
- ❤️‍🩹 **Healing System** - Restore HP to cards or players
- 💥 **Direct Damage** - Bypass card defenses to hit opponent's life points
- 🎴 **Face Card Bonuses** - Jacks, Queens, and Kings provide passive field buffs
- 🔄 **Wildcard Abilities** - Jokers can mimic any ability on the field

---

## 🚀 Getting Started

### Prerequisites

All you need is a web browser! No installation, dependencies, or build process required.

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone https://github.com/RohanDaram/cardmate-battle.git
   
   cd cardmate-battle
   ```

2. **Open the game**
   - Simply open `index.html` in your web browser and you can **start playing!**

   - Alternatively, you can use also use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **Start Playing!**
   - Navigate to `http://localhost:8000` in your browser
   - Click "Start Game"
   - Enjoy the battle!

---

## 🎮 Gameplay Overview

### 🎯 Objective
Reduce your opponent's life points from 50 to 0 before they do the same to you!

### 🔄 Turn Structure

Each turn consists of three phases:

1. **📥 Draw Phase** - Draw one card (costs 1 action)
2. **⚔️ Main Phase** - Play cards and use abilities (cards are free to play, abilities cost 1 action)
3. **🏁 End Phase** - Click "End Turn" to pass to opponent

### 🎴 Playing Cards

- **Drag & Drop** - Drag cards from your hand to empty field slots
- **Click to Play** - Click a card in hand to see available slots
- **Field Limit** - Maximum of 3 cards on the field at once

### ⚡ Using Abilities

1. Click a card on the field
2. Select an ability from the modal
3. Choose a target (if required)
4. Abilities can only be used once per card per turn

---

## 🎲 Game Mechanics

### 💪 Card Stats

| Suit | HP (Low) | HP (High) | ATK (Low) | ATK (High) | Primary Ability |
|------|----------|-----------|-----------|------------|-----------------|
| ♥️ Hearts | 10 | 20 | 1 | 3 | Heal [card ÷ 2] |
| ♦️ Diamonds | 10 | 20 | 1 | 3 | Shield [card ÷ 2] |
| ♠️ Spades | 8 | 18 | 2 | 4 | Damage [card ÷ 2] |
| ♣️ Clubs | 12 | 22 | 1 | 3 | Draw [card ÷ 3] |
| 🃏 Jokers | 25 | 25 | 5 | 5 | Copy any ability |

### 🎯 Ability Types

- **⚔️ Attack** - Deal damage to enemy cards or opponent
- **❤️‍🩹 Heal** - Restore HP to friendly cards or yourself
- **🛡️ Shield** - Add protective shields that block damage
- **💥 Damage** - Deal direct damage to opponent (bypasses shields)
- **📥 Draw** - Draw additional cards from your deck
- **🌟 Wildcard** - Copy any non-attack ability from field cards

### 👑 Face Card Bonuses

Face cards (Jacks, Queens, Kings) provide passive bonuses:

- **♥️ Heart Face Cards** - Boost healing effects by +1
- **♦️ Diamond Face Cards** - Increase shield values by +1
- **♠️ Spade Face Cards** - Amplify damage abilities by +1
- **♣️ Club Face Cards** - Grant additional card draws

### 🎮 Action System

- Start each turn with **3 actions**
- **Drawing a card** costs **1 action**
- **Using an ability** costs **1 action**
- **Playing cards** from hand is **FREE**

---

## 🛠️ Technology Stack

- **HTML5** - Semantic structure
- **CSS3** - Styling and animations
- **Vanilla JavaScript** - Game logic and interactions
- **Web Audio API** - Dynamic sound effects
- **Drag & Drop API** - Card interactions

### 📁 Project Structure

```
CardMateVBC/
│
├── index.html          # Main game interface and UI structure
├── styles.css          # All styling, animations, and visual effects
├── game.js            # Complete game logic (2600+ lines)
└── README.md          # This file!
```

---

## 🎯 Development Tips for Vibe Coding

Based on this project, here are key lessons learned:

### ✅ Best Practices

1. **Start Simple** - Begin with core mechanics, add features incrementally
2. **Be Specific** - Detailed prompts get better results
3. **Iterate Naturally** - Treat it like a conversation, refine through feedback
4. **Test Frequently** - After each major change, test the feature
5. **Ask for Explanations** - Understanding the code helps with future prompts

### 💡 Effective Prompt Patterns

- **Feature Addition**: "Add [feature] that does [specific behavior]"
- **Visual Changes**: "Make [element] look like [description] with [details]"
- **Bug Fixes**: "When I [action], [problem] happens. Fix it so that [expected]"
- **Enhancements**: "Improve [system] to [specific improvement]"
- **Balance**: "Change [mechanic] from [old value] to [new value]"

### 🎨 Progressive Enhancement Example

This project grew through iterations:
1. Basic card game → 
2. Added abilities → 
3. Improved AI → 
4. Added visuals → 
5. Added sounds → 
6. Added 2-player mode → 
7. Balance refinements

Each step was a simple prompt building on the previous feature!

---

## 🎮 Playing Tips

### 🏆 Strategy Guide

- **Early Game**: Draw cards to build your hand, play defensive cards
- **Mid Game**: Establish board presence with face cards for bonuses
- **Late Game**: Use direct damage and attacks to finish opponent
- **Shield Priority**: Diamonds are crucial when your HP is low
- **Card Draw**: Clubs help you maintain hand advantage
- **Joker Timing**: Save Jokers to copy powerful abilities at key moments

### 🎯 More Tips

1. **Face Card Synergy** - Play face cards of matching suits for bonus effects
2. **Shield Stacking** - Multiple Diamond cards can create large shield barriers
3. **Heal-Tank Strategy** - Keep high-HP Heart cards alive for sustained healing
4. **Aggressive Spades** - Use Spade direct damage when opponent has shields
5. **Club Engine** - Chain Club draw abilities to cycle through your deck faster

---

## Contributing

This was a learning project demonstrating Vibe Coding principles. Feel free to fork and experiment with your own prompts!

---

- Built entirely through **Vibe Coding** with AI assistance

---

**Project Creator**: Rohan Daram

Feel free to reach out with questions or feedback about the game or the Vibe Coding process!

---
