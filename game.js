// ===== CARD DEFINITIONS =====

const CARD_DEFINITIONS = {
    // Hearts: Healing oriented (1-10)
    hearts: {
        1: { name: 'Ace', hp: 10, attack: 1, abilities: ['heal', 'attack'] },
        2: { name: '2', hp: 10, attack: 1, abilities: ['heal', 'attack'] },
        3: { name: '3', hp: 10, attack: 1, abilities: ['heal', 'attack'] },
        4: { name: '4', hp: 10, attack: 1, abilities: ['heal', 'attack'] },
        5: { name: '5', hp: 10, attack: 1, abilities: ['heal', 'attack'] },
        6: { name: '6', hp: 15, attack: 2, abilities: ['heal', 'attack'] },
        7: { name: '7', hp: 15, attack: 2, abilities: ['heal', 'attack'] },
        8: { name: '8', hp: 15, attack: 2, abilities: ['heal', 'attack'] },
        9: { name: '9', hp: 15, attack: 2, abilities: ['heal', 'attack'] },
        10: { name: '10', hp: 15, attack: 2, abilities: ['heal', 'attack'] },
        11: { name: 'Jack', hp: 20, attack: 3, abilities: ['heal', 'attack', 'faceAbility'] },
        12: { name: 'Queen', hp: 20, attack: 3, abilities: ['heal', 'attack', 'faceAbility'] },
        13: { name: 'King', hp: 20, attack: 3, abilities: ['heal', 'attack', 'faceAbility'] }
    },
    // Diamonds: Shield oriented (1-10)
    diamonds: {
        1: { name: 'Ace', hp: 10, attack: 1, abilities: ['shield', 'attack'] },
        2: { name: '2', hp: 10, attack: 1, abilities: ['shield', 'attack'] },
        3: { name: '3', hp: 10, attack: 1, abilities: ['shield', 'attack'] },
        4: { name: '4', hp: 10, attack: 1, abilities: ['shield', 'attack'] },
        5: { name: '5', hp: 10, attack: 1, abilities: ['shield', 'attack'] },
        6: { name: '6', hp: 15, attack: 2, abilities: ['shield', 'attack'] },
        7: { name: '7', hp: 15, attack: 2, abilities: ['shield', 'attack'] },
        8: { name: '8', hp: 15, attack: 2, abilities: ['shield', 'attack'] },
        9: { name: '9', hp: 15, attack: 2, abilities: ['shield', 'attack'] },
        10: { name: '10', hp: 15, attack: 2, abilities: ['shield', 'attack'] },
        11: { name: 'Jack', hp: 20, attack: 3, abilities: ['shield', 'attack', 'faceAbility'] },
        12: { name: 'Queen', hp: 20, attack: 3, abilities: ['shield', 'attack', 'faceAbility'] },
        13: { name: 'King', hp: 20, attack: 3, abilities: ['shield', 'attack', 'faceAbility'] }
    },
    // Spades: Damage oriented (1-10)
    spades: {
        1: { name: 'Ace', hp: 8, attack: 2, abilities: ['damage', 'attack'] },
        2: { name: '2', hp: 8, attack: 2, abilities: ['damage', 'attack'] },
        3: { name: '3', hp: 8, attack: 2, abilities: ['damage', 'attack'] },
        4: { name: '4', hp: 8, attack: 2, abilities: ['damage', 'attack'] },
        5: { name: '5', hp: 8, attack: 2, abilities: ['damage', 'attack'] },
        6: { name: '6', hp: 13, attack: 3, abilities: ['damage', 'attack'] },
        7: { name: '7', hp: 13, attack: 3, abilities: ['damage', 'attack'] },
        8: { name: '8', hp: 13, attack: 3, abilities: ['damage', 'attack'] },
        9: { name: '9', hp: 13, attack: 3, abilities: ['damage', 'attack'] },
        10: { name: '10', hp: 13, attack: 3, abilities: ['damage', 'attack'] },
        11: { name: 'Jack', hp: 18, attack: 4, abilities: ['damage', 'attack', 'faceAbility'] },
        12: { name: 'Queen', hp: 18, attack: 4, abilities: ['damage', 'attack', 'faceAbility'] },
        13: { name: 'King', hp: 18, attack: 4, abilities: ['damage', 'attack', 'faceAbility'] }
    },
    // Clubs: Utility/Draw oriented (1-10)
    clubs: {
        1: { name: 'Ace', hp: 12, attack: 1, abilities: ['draw', 'attack'] },
        2: { name: '2', hp: 12, attack: 1, abilities: ['draw', 'attack'] },
        3: { name: '3', hp: 12, attack: 1, abilities: ['draw', 'attack'] },
        4: { name: '4', hp: 12, attack: 1, abilities: ['draw', 'attack'] },
        5: { name: '5', hp: 12, attack: 1, abilities: ['draw', 'attack'] },
        6: { name: '6', hp: 17, attack: 2, abilities: ['draw', 'attack'] },
        7: { name: '7', hp: 17, attack: 2, abilities: ['draw', 'attack'] },
        8: { name: '8', hp: 17, attack: 2, abilities: ['draw', 'attack'] },
        9: { name: '9', hp: 17, attack: 2, abilities: ['draw', 'attack'] },
        10: { name: '10', hp: 17, attack: 2, abilities: ['draw', 'attack'] },
        11: { name: 'Jack', hp: 22, attack: 3, abilities: ['draw', 'attack', 'faceAbility'] },
        12: { name: 'Queen', hp: 22, attack: 3, abilities: ['draw', 'attack', 'faceAbility'] },
        13: { name: 'King', hp: 22, attack: 3, abilities: ['draw', 'attack', 'faceAbility'] }
    },
    jokers: {
        1: { name: 'Red Joker', hp: 25, attack: 5, abilities: ['wildcard', 'attack', 'faceAbility'] },
        2: { name: 'Black Joker', hp: 25, attack: 5, abilities: ['wildcard', 'attack', 'faceAbility'] }
    }
};

const SUIT_ICONS = {
    hearts: '♥',
    diamonds: '♦',
    spades: '♠',
    clubs: '♣',
    jokers: '🃏'
};

// ===== GAME STATE =====

class GameState {
    constructor() {
        this.playerLife = 50;
        this.playerMaxLife = 50;
        this.playerShield = 0;
        this.computerLife = 50;
        this.computerMaxLife = 50;
        this.computerShield = 0;
        
        this.playerDeck = [];
        this.playerHand = [];
        this.playerField = [null, null, null];
        
        this.computerDeck = [];
        this.computerHand = [];
        this.computerField = [null, null, null];
        
        this.currentTurn = null; // 'player' or 'computer'
        this.turnPhase = 'draw'; // 'draw', 'main', 'end'
        this.hasDrawnThisTurn = false;
        this.selectedCard = null;
        this.pendingAbility = null; // Stores ability waiting for target selection
        this.gameOver = false;
        this.isFirstTurn = true; // Track first turn to prevent direct attacks
        this.turnCount = 0; // Track total turns
        
        // Action system - max 3 actions per turn
        this.playerActions = 3;
        this.computerActions = 3;
        this.maxActions = 3;
    }
    
    initializeDecks() {
        this.playerDeck = this.createDeck();
        this.computerDeck = this.createDeck();
        this.shuffleDeck(this.playerDeck);
        this.shuffleDeck(this.computerDeck);
    }
    
    createDeck() {
        const deck = [];
        
        for (const suit in CARD_DEFINITIONS) {
            if (suit === 'jokers') continue;
            for (const value in CARD_DEFINITIONS[suit]) {
                deck.push(this.createCard(suit, parseInt(value)));
            }
        }
        
        // Add jokers
        deck.push(this.createCard('jokers', 1));
        deck.push(this.createCard('jokers', 2));
        
        return deck;
    }
    
    createCard(suit, value) {
        const def = CARD_DEFINITIONS[suit][value];
        return {
            id: `${suit}-${value}-${Math.random()}`,
            suit,
            value,
            name: def.name,
            maxHp: def.hp,
            currentHp: def.hp,
            attack: def.attack,
            shield: 0,
            abilities: [...def.abilities],
            usedAbilities: []
        };
    }
    
    shuffleDeck(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
}

// ===== GAME LOGIC =====

class Game {
    constructor() {
        this.state = new GameState();
        this.audioContext = null;
        this.musicEnabled = true;
        this.sfxEnabled = true;
        this.musicVolume = 0.1; // 10%
        this.sfxVolume = 0.1; // 10%
        this.backgroundMusic = null;
        this.musicGainNode = null;
        this.isSelectingTarget = false;
        this.setupEventListeners();
        this.startBackgroundMusic();
    }
    
    initAudioContext() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
    }
    
    startBackgroundMusic() {
        this.initAudioContext();
        
        if (this.backgroundMusic) return; // Already playing
        
        // Create a calming ambient music loop using oscillators
        this.musicGainNode = this.audioContext.createGain();
        this.musicGainNode.gain.setValueAtTime(this.musicVolume * 0.1, this.audioContext.currentTime);
        this.musicGainNode.connect(this.audioContext.destination);
        
        this.playMusicLoop();
    }
    
    playMusicLoop() {
        if (!this.musicEnabled) return;
        
        const currentTime = this.audioContext.currentTime;
        const loopDuration = 8; // 8 second loop
        
        // Chord progression: Am - F - C - G (calm and peaceful)
        const chords = [
            [220, 261.63, 329.63], // A minor (A, C, E)
            [174.61, 220, 261.63], // F major (F, A, C)
            [261.63, 329.63, 392],  // C major (C, E, G)
            [196, 246.94, 293.66]   // G major (G, B, D)
        ];
        
        chords.forEach((chord, chordIndex) => {
            const startTime = currentTime + (chordIndex * loopDuration / 4);
            
            chord.forEach((freq, noteIndex) => {
                const osc = this.audioContext.createOscillator();
                const gain = this.audioContext.createGain();
                
                osc.connect(gain);
                gain.connect(this.musicGainNode);
                
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, startTime);
                
                // Gentle fade in and out
                gain.gain.setValueAtTime(0, startTime);
                gain.gain.linearRampToValueAtTime(0.3, startTime + 0.1);
                gain.gain.setValueAtTime(0.3, startTime + (loopDuration / 4) - 0.2);
                gain.gain.linearRampToValueAtTime(0, startTime + (loopDuration / 4));
                
                osc.start(startTime);
                osc.stop(startTime + (loopDuration / 4));
            });
        });
        
        // Schedule next loop
        this.backgroundMusic = setTimeout(() => {
            this.playMusicLoop();
        }, loopDuration * 1000);
    }
    
    stopBackgroundMusic() {
        if (this.backgroundMusic) {
            clearTimeout(this.backgroundMusic);
            this.backgroundMusic = null;
        }
        if (this.musicGainNode) {
            this.musicGainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        }
    }
    
    toggleMusic(enabled) {
        this.musicEnabled = enabled;
        if (enabled) {
            if (this.musicGainNode) {
                this.musicGainNode.gain.linearRampToValueAtTime(this.musicVolume * 0.1, this.audioContext.currentTime + 0.5);
            }
            this.playMusicLoop();
        } else {
            this.stopBackgroundMusic();
        }
    }
    
    toggleSFX(enabled) {
        this.sfxEnabled = enabled;
    }
    
    setMusicVolume(value) {
        this.musicVolume = value / 100;
        document.getElementById('music-volume-text').textContent = value + '%';
        
        if (this.musicGainNode && this.musicEnabled) {
            this.musicGainNode.gain.linearRampToValueAtTime(this.musicVolume * 0.1, this.audioContext.currentTime + 0.1);
        }
    }
    
    setSFXVolume(value) {
        this.sfxVolume = value / 100;
        document.getElementById('sfx-volume-text').textContent = value + '%';
    }
    
    playCoinFlipSound() {
        if (!this.sfxEnabled) return;
        
        this.initAudioContext();
        
        // Create oscillator for coin sound
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        // Configure sound
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, this.audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.15 * this.sfxVolume, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.1);
        
        // Add multiple hits for spinning effect
        for (let i = 1; i < 8; i++) {
            setTimeout(() => {
                const osc = this.audioContext.createOscillator();
                const gain = this.audioContext.createGain();
                
                osc.connect(gain);
                gain.connect(this.audioContext.destination);
                
                osc.type = 'sine';
                osc.frequency.setValueAtTime(800 - i * 50, this.audioContext.currentTime);
                osc.frequency.exponentialRampToValueAtTime(400 - i * 30, this.audioContext.currentTime + 0.08);
                
                gain.gain.setValueAtTime(0.1 * this.sfxVolume, this.audioContext.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.08);
                
                osc.start(this.audioContext.currentTime);
                osc.stop(this.audioContext.currentTime + 0.08);
            }, i * 250);
        }
    }
    
    playAttackSound() {
        if (!this.sfxEnabled) return;
        
        this.initAudioContext();
        
        // Create a "swoosh" then "hit" sound
        const oscillator1 = this.audioContext.createOscillator();
        const oscillator2 = this.audioContext.createOscillator();
        const gainNode1 = this.audioContext.createGain();
        const gainNode2 = this.audioContext.createGain();
        
        oscillator1.connect(gainNode1);
        oscillator2.connect(gainNode2);
        gainNode1.connect(this.audioContext.destination);
        gainNode2.connect(this.audioContext.destination);
        
        // Swoosh sound (high to low frequency sweep)
        oscillator1.type = 'sawtooth';
        oscillator1.frequency.setValueAtTime(600, this.audioContext.currentTime);
        oscillator1.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 0.15);
        
        gainNode1.gain.setValueAtTime(0.08 * this.sfxVolume, this.audioContext.currentTime);
        gainNode1.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
        
        // Impact sound (low frequency thump)
        oscillator2.type = 'triangle';
        oscillator2.frequency.setValueAtTime(80, this.audioContext.currentTime + 0.15);
        oscillator2.frequency.exponentialRampToValueAtTime(40, this.audioContext.currentTime + 0.25);
        
        gainNode2.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode2.gain.setValueAtTime(0.12 * this.sfxVolume, this.audioContext.currentTime + 0.15);
        gainNode2.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.25);
        
        oscillator1.start(this.audioContext.currentTime);
        oscillator1.stop(this.audioContext.currentTime + 0.15);
        oscillator2.start(this.audioContext.currentTime + 0.15);
        oscillator2.stop(this.audioContext.currentTime + 0.25);
    }
    
    playHealSound() {
        if (!this.sfxEnabled) return;
        
        this.initAudioContext();
        
        // Create a gentle ascending arpeggio (magical healing sound)
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        
        notes.forEach((freq, index) => {
            setTimeout(() => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime);
                
                gainNode.gain.setValueAtTime(0.08 * this.sfxVolume, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
                
                oscillator.start(this.audioContext.currentTime);
                oscillator.stop(this.audioContext.currentTime + 0.3);
            }, index * 60);
        });
    }
    
    playShieldSound() {
        if (!this.sfxEnabled) return;
        
        this.initAudioContext();
        
        // Create a deep metallic "bong" sound like hitting a shield
        const oscillator1 = this.audioContext.createOscillator();
        const oscillator2 = this.audioContext.createOscillator();
        const gainNode1 = this.audioContext.createGain();
        const gainNode2 = this.audioContext.createGain();
        
        oscillator1.connect(gainNode1);
        oscillator2.connect(gainNode2);
        gainNode1.connect(this.audioContext.destination);
        gainNode2.connect(this.audioContext.destination);
        
        // Deep resonant tone (like striking metal)
        oscillator1.type = 'triangle';
        oscillator1.frequency.setValueAtTime(180, this.audioContext.currentTime);
        oscillator1.frequency.exponentialRampToValueAtTime(150, this.audioContext.currentTime + 0.4);
        
        gainNode1.gain.setValueAtTime(0.06 * this.sfxVolume, this.audioContext.currentTime);
        gainNode1.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.4);
        
        // Higher harmonic for metallic quality
        oscillator2.type = 'sine';
        oscillator2.frequency.setValueAtTime(540, this.audioContext.currentTime);
        oscillator2.frequency.exponentialRampToValueAtTime(450, this.audioContext.currentTime + 0.3);
        
        gainNode2.gain.setValueAtTime(0.03 * this.sfxVolume, this.audioContext.currentTime);
        gainNode2.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
        
        oscillator1.start(this.audioContext.currentTime);
        oscillator1.stop(this.audioContext.currentTime + 0.4);
        oscillator2.start(this.audioContext.currentTime);
        oscillator2.stop(this.audioContext.currentTime + 0.3);
    }
    
    playDrawCardSound() {
        if (!this.sfxEnabled) return;
        
        this.initAudioContext();
        
        // Create a realistic card sliding sound with multiple components
        
        // 1. Initial "pick up" sound - brief noise burst
        const noise1 = this.audioContext.createBufferSource();
        const noiseBuffer1 = this.audioContext.createBuffer(1, this.audioContext.sampleRate * 0.05, this.audioContext.sampleRate);
        const noiseData1 = noiseBuffer1.getChannelData(0);
        
        for (let i = 0; i < noiseBuffer1.length; i++) {
            noiseData1[i] = (Math.random() * 2 - 1) * (1 - i / noiseBuffer1.length); // Decay over time
        }
        
        noise1.buffer = noiseBuffer1;
        
        const filter1 = this.audioContext.createBiquadFilter();
        filter1.type = 'highpass';
        filter1.frequency.setValueAtTime(4000, this.audioContext.currentTime);
        
        const gain1 = this.audioContext.createGain();
        
        noise1.connect(filter1);
        filter1.connect(gain1);
        gain1.connect(this.audioContext.destination);
        
        gain1.gain.setValueAtTime(0.025 * this.sfxVolume, this.audioContext.currentTime);
        gain1.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.05);
        
        noise1.start(this.audioContext.currentTime);
        noise1.stop(this.audioContext.currentTime + 0.05);
        
        // 2. Main sliding sound - longer filtered noise
        const noise2 = this.audioContext.createBufferSource();
        const noiseBuffer2 = this.audioContext.createBuffer(1, this.audioContext.sampleRate * 0.15, this.audioContext.sampleRate);
        const noiseData2 = noiseBuffer2.getChannelData(0);
        
        for (let i = 0; i < noiseBuffer2.length; i++) {
            noiseData2[i] = (Math.random() * 2 - 1) * 0.5;
        }
        
        noise2.buffer = noiseBuffer2;
        
        const filter2 = this.audioContext.createBiquadFilter();
        filter2.type = 'bandpass';
        filter2.frequency.setValueAtTime(2500, this.audioContext.currentTime + 0.02);
        filter2.frequency.linearRampToValueAtTime(3500, this.audioContext.currentTime + 0.12);
        filter2.Q.setValueAtTime(3, this.audioContext.currentTime);
        
        const gain2 = this.audioContext.createGain();
        
        noise2.connect(filter2);
        filter2.connect(gain2);
        gain2.connect(this.audioContext.destination);
        
        gain2.gain.setValueAtTime(0, this.audioContext.currentTime + 0.02);
        gain2.gain.linearRampToValueAtTime(0.03 * this.sfxVolume, this.audioContext.currentTime + 0.04);
        gain2.gain.linearRampToValueAtTime(0.025 * this.sfxVolume, this.audioContext.currentTime + 0.1);
        gain2.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.15);
        
        noise2.start(this.audioContext.currentTime + 0.02);
        noise2.stop(this.audioContext.currentTime + 0.17);
        
        // 3. Final "snap" as card settles
        const snap = this.audioContext.createOscillator();
        const snapGain = this.audioContext.createGain();
        
        snap.connect(snapGain);
        snapGain.connect(this.audioContext.destination);
        
        snap.type = 'sine';
        snap.frequency.setValueAtTime(3000, this.audioContext.currentTime + 0.15);
        snap.frequency.exponentialRampToValueAtTime(1200, this.audioContext.currentTime + 0.18);
        
        snapGain.gain.setValueAtTime(0.018 * this.sfxVolume, this.audioContext.currentTime + 0.15);
        snapGain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.18);
        
        snap.start(this.audioContext.currentTime + 0.15);
        snap.stop(this.audioContext.currentTime + 0.18);
    }
    
    setupEventListeners() {
        document.getElementById('start-game-btn').addEventListener('click', () => this.showGameScreen());
        document.getElementById('view-instructions-btn').addEventListener('click', () => this.showInstructions());
        document.getElementById('view-archive-btn').addEventListener('click', () => this.showCardArchive());
        document.getElementById('view-cards-btn').addEventListener('click', () => this.showCardAbilities());
        document.getElementById('view-suits-btn').addEventListener('click', () => this.showSuitSignificance());
        document.getElementById('game-instructions-btn').addEventListener('click', () => this.showInstructions());
        document.getElementById('game-archive-btn').addEventListener('click', () => this.showCardArchive());
        document.getElementById('game-cards-btn').addEventListener('click', () => this.showCardAbilities());
        document.getElementById('game-suits-btn').addEventListener('click', () => this.showSuitSignificance());
        document.getElementById('new-game-btn').addEventListener('click', () => this.startNewGame());
        document.getElementById('back-to-menu-btn').addEventListener('click', () => this.backToMenu());
        document.getElementById('draw-card-btn').addEventListener('click', () => this.drawCard('player'));
        document.getElementById('end-turn-btn').addEventListener('click', () => this.endTurn());
        document.querySelector('.close').addEventListener('click', () => this.closeModal());
        document.querySelector('.close-info').addEventListener('click', () => this.closeInfoModal());
        
        // Audio settings
        document.getElementById('audio-settings-btn-start').addEventListener('click', () => this.showAudioSettings());
        document.getElementById('audio-settings-btn-game').addEventListener('click', () => this.showAudioSettings());
        document.querySelector('.close-audio').addEventListener('click', () => this.closeAudioSettings());
        document.getElementById('music-toggle').addEventListener('change', (e) => this.toggleMusic(e.target.checked));
        document.getElementById('sfx-toggle').addEventListener('change', (e) => this.toggleSFX(e.target.checked));
        
        // Volume sliders
        document.getElementById('music-volume').addEventListener('input', (e) => this.setMusicVolume(e.target.value));
        document.getElementById('sfx-volume').addEventListener('input', (e) => this.setSFXVolume(e.target.value));
        
        // Game over modal
        document.getElementById('new-game-game-over-btn').addEventListener('click', () => this.startNewGameFromGameOver());
        document.getElementById('home-game-over-btn').addEventListener('click', () => this.backToMenuFromGameOver());
    }
    
    showAudioSettings() {
        const modal = document.getElementById('audio-modal');
        modal.classList.remove('hidden');
    }
    
    closeAudioSettings() {
        const modal = document.getElementById('audio-modal');
        modal.classList.add('hidden');
    }
    
    showGameScreen() {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('game-container').style.display = 'block';
        this.startNewGame();
    }
    
    backToMenu() {
        document.getElementById('start-screen').style.display = 'flex';
        document.getElementById('game-container').style.display = 'none';
        this.state = new GameState();
    }
    
    showInstructions() {
        const content = `
            <h2>📖 Game Instructions</h2>
            
            <h3>Objective</h3>
            <p>Reduce your opponent's life points to 0 while protecting your own!</p>
            
            <h3>Game Setup</h3>
            <ul>
                <li>Each player has their own deck of 54 cards</li>
                <li>Starting life: 50 points</li>
                <li>Initial hand: 5 cards</li>
                <li>A coin flip determines who goes first (Heads = You, Tails = Computer)</li>
            </ul>
            
            <h3>Turn Structure</h3>
            <ul>
                <li><strong>Actions:</strong> Each player gets 3 actions per turn (shown as energy orbs)</li>
                <li><strong>Draw Phase:</strong> Drawing a card costs 1 action (max 10 cards in hand)</li>
                <li><strong>Main Phase:</strong> Play cards to field (max 3 on field) and use abilities</li>
                <li><strong>Ability Use:</strong> Using a card ability costs 1 action</li>
                <li><strong>End Phase:</strong> Click "End Turn" to pass to opponent</li>
            </ul>
            
            <h3>Playing Cards</h3>
            <ul>
                <li>Click a card in your hand to see play options</li>
                <li>Choose an empty field slot to play the card</li>
                <li>Maximum of 3 cards on the field at once</li>
                <li>Playing a card does NOT cost an action</li>
            </ul>
            
            <h3>Using Abilities</h3>
            <ul>
                <li>Click a card on your field to see available abilities</li>
                <li><strong>Each ability costs 1 action to use</strong></li>
                <li>Each ability can be used once per turn (if you have actions)</li>
                <li>Numbered cards have 2 abilities</li>
                <li>Face cards (Jack, Queen, King) have 3 abilities</li>
                <li><strong>Attack Ability:</strong> When attacking, you can choose which opponent card to target</li>
                <li><strong>Direct Attacks:</strong> You can only attack opponent's life points directly if they have no cards on the field</li>
            </ul>
            
            <h3>Combat & Damage</h3>
            <ul>
                <li>Use Attack ability to target specific opponent cards</li>
                <li>Click on enemy cards to choose your attack target</li>
                <li>Must attack cards first - can only attack life points when field is empty</li>
                <li><strong>First Turn Rule:</strong> The player who goes first cannot attack life points directly on their first turn</li>
                <li><strong>Overflow Damage:</strong> Any excess damage dealt to a card after it's defeated carries over to that player's life points</li>
                <li>Shields absorb damage before HP</li>
                <li>Cards are defeated when HP reaches 0</li>
                <li>Win by reducing opponent's life to 0</li>
                <li><strong>Direct Damage Abilities:</strong> Some cards (like Spades) can bypass the field and damage life points directly</li>
            </ul>
            
            <h3>Action System</h3>
            <ul>
                <li><strong>Energy Orbs:</strong> Blue orbs show available actions (gray = used)</li>
                <li><strong>Drawing Cards:</strong> Costs 1 action</li>
                <li><strong>Using Abilities:</strong> Each ability costs 1 action</li>
                <li><strong>Playing Cards:</strong> Free! Does not cost actions</li>
                <li><strong>Strategic Planning:</strong> Manage your 3 actions wisely each turn!</li>
            </ul>
            
            <h3>Tips</h3>
            <ul>
                <li>Face cards provide bonuses to other cards of the same suit</li>
                <li>Shields stack and can protect you from big attacks</li>
                <li>Healing cannot exceed max HP</li>
                <li>Direct damage bypasses cards and hits life points directly</li>
                <li>Overflow damage can quickly turn the tide - be careful with low HP cards!</li>
                <li>Save actions for critical abilities - you only get 3 per turn!</li>
                <li>Click enemy cards to view their stats and abilities</li>
            </ul>
        `;
        
        this.showInfoModal(content);
    }
    
    showCardAbilities() {
        const content = `
            <h2>🃏 Card Abilities Guide</h2>
            
            <h3>Card Stats</h3>
            <ul>
                <li><strong>HP (Hit Points):</strong> Card's health. Defeated at 0.</li>
                <li><strong>ATK (Attack):</strong> Base damage dealt by Attack ability</li>
                <li><strong>SHD (Shield):</strong> Absorbs damage before HP</li>
            </ul>
            
            <div class="card-example hearts">
                <h3>♥ Hearts - Healing Cards</h3>
                <p><strong>Numbered Cards (Ace-5):</strong> HP: 10, ATK: 1</p>
                <p><strong>Numbered Cards (6-10):</strong> HP: 15, ATK: 2</p>
                <ul>
                    <li><strong>Heal Ability:</strong> Heal any card for [card number] HP, or heal yourself for [card number ÷ 3] HP (rounded up)</li>
                    <li><strong>Attack Ability:</strong> Deal damage to opponent's cards or life</li>
                </ul>
                <p><strong>Jack of Hearts:</strong> HP: 20, ATK: 3</p>
                <ul>
                    <li>Heal yourself for 5 HP (if at max, increase max life by 2)</li>
                    <li>Special: All Hearts on field gain +1 max HP</li>
                </ul>
                <p><strong>Queen of Hearts:</strong> HP: 20, ATK: 3</p>
                <ul>
                    <li>Heal all your cards and yourself for 3 HP</li>
                    <li>Special: All Hearts on field gain +1 healing</li>
                </ul>
                <p><strong>King of Hearts:</strong> HP: 20, ATK: 3</p>
                <ul>
                    <li>Heal one card to full HP</li>
                    <li>Special: All Hearts on field gain +1 damage</li>
                </ul>
            </div>
            
            <div class="card-example diamonds">
                <h3>♦ Diamonds - Shielding Cards</h3>
                <p><strong>Numbered Cards (Ace-5):</strong> HP: 10, ATK: 1</p>
                <p><strong>Numbered Cards (6-10):</strong> HP: 15, ATK: 2</p>
                <ul>
                    <li><strong>Shield Ability:</strong> Add [card number] shield to any card, or [card number ÷ 3] shield to yourself</li>
                    <li><strong>Attack Ability:</strong> Deal damage to opponent</li>
                </ul>
                <p><strong>Jack of Diamonds:</strong> HP: 20, ATK: 3</p>
                <ul>
                    <li>Add 5 shield to yourself (stacks infinitely)</li>
                    <li>Special: All Diamonds on field gain +1 shield</li>
                </ul>
                <p><strong>Queen of Diamonds:</strong> HP: 20, ATK: 3</p>
                <ul>
                    <li>Shield all your cards and yourself for 3</li>
                    <li>Special: All Diamonds on field gain +1 shielding power</li>
                </ul>
                <p><strong>King of Diamonds:</strong> HP: 20, ATK: 3</p>
                <ul>
                    <li>Add 10 shield to one card</li>
                    <li>Special: All Diamonds on field gain +1 damage</li>
                </ul>
            </div>
            
            <div class="card-example spades">
                <h3>♠ Spades - Damage Cards</h3>
                <p><strong>Numbered Cards (Ace-5):</strong> HP: 8, ATK: 2 (Glass cannons!)</p>
                <p><strong>Numbered Cards (6-10):</strong> HP: 13, ATK: 3</p>
                <ul>
                    <li><strong>Damage Ability:</strong> Deal [card number ÷ 2, rounded up] direct damage to opponent (ignores field cards)</li>
                    <li><strong>Attack Ability:</strong> Higher base damage than other suits</li>
                </ul>
                <p><strong>Jack of Spades:</strong> HP: 18, ATK: 4</p>
                <ul>
                    <li>Deal direct damage, boosted by all Spade face cards</li>
                    <li>Special: All Spades on field gain +1 damage</li>
                </ul>
                <p><strong>Queen of Spades:</strong> HP: 18, ATK: 4</p>
                <ul>
                    <li>Powerful direct damage ability</li>
                    <li>Special: All Spades on field gain +1 damage</li>
                </ul>
                <p><strong>King of Spades:</strong> HP: 18, ATK: 4</p>
                <ul>
                    <li>Devastating direct damage</li>
                    <li>Special: All Spades on field gain +1 damage</li>
                </ul>
            </div>
            
            <div class="card-example clubs">
                <h3>♣ Clubs - Utility Cards</h3>
                <p><strong>Numbered Cards (Ace-5):</strong> HP: 12, ATK: 1</p>
                <p><strong>Numbered Cards (6-10):</strong> HP: 17, ATK: 2</p>
                <ul>
                    <li><strong>Draw Ability:</strong> Draw [card number ÷ 3] cards (rounded up)</li>
                    <li><strong>Attack Ability:</strong> Deal damage to opponent</li>
                </ul>
                <p><strong>Jack of Clubs:</strong> HP: 22, ATK: 3</p>
                <ul>
                    <li>Draw multiple cards</li>
                    <li>Special: Provides bonus to Club abilities</li>
                </ul>
                <p><strong>Queen of Clubs:</strong> HP: 22, ATK: 3</p>
                <ul>
                    <li>Draw cards and gain utility advantage</li>
                    <li>Special: Enhances Club card abilities</li>
                </ul>
                <p><strong>King of Clubs:</strong> HP: 22, ATK: 3</p>
                <ul>
                    <li>Maximum card draw potential</li>
                    <li>Special: Boosts all Club cards</li>
                </ul>
            </div>
            
            <p><strong>🃏 Jokers:</strong> HP: 25, ATK: 5 - Powerful wildcard abilities!</p>
        `;
        
        this.showInfoModal(content);
    }
    
    showSuitSignificance() {
        const content = `
            <h2>🎴 Suit Significance</h2>
            
            <div class="card-example hearts">
                <h3>♥ Hearts - The Healers</h3>
                <p><strong>Philosophy:</strong> Survival through restoration and endurance</p>
                <p><strong>Strategy:</strong> Hearts excel at sustaining your field and keeping your life total healthy. Use them to outlast aggressive opponents.</p>
                <p><strong>Strengths:</strong></p>
                <ul>
                    <li>Best healing capabilities in the game</li>
                    <li>Face cards create synergies that boost all Hearts</li>
                    <li>Can increase max life with Jack of Hearts</li>
                    <li>Queen provides mass healing to entire field</li>
                </ul>
                <p><strong>Weaknesses:</strong></p>
                <ul>
                    <li>Lower attack power means slower offense</li>
                    <li>Relies on having multiple cards to maximize healing</li>
                </ul>
                <p><strong>Best Combos:</strong> Play multiple Hearts with face cards for massive sustain</p>
            </div>
            
            <div class="card-example diamonds">
                <h3>♦ Diamonds - The Defenders</h3>
                <p><strong>Philosophy:</strong> Protection through layers of defense</p>
                <p><strong>Strategy:</strong> Diamonds create impenetrable shields that stack infinitely. Build up defenses before launching attacks.</p>
                <p><strong>Strengths:</strong></p>
                <ul>
                    <li>Shields stack without limit</li>
                    <li>Can protect both cards and life points</li>
                    <li>Face cards amplify shielding across the field</li>
                    <li>Great for defensive/control playstyles</li>
                </ul>
                <p><strong>Weaknesses:</strong></p>
                <ul>
                    <li>Shields don't prevent death from 0 HP</li>
                    <li>Defensive focus means slower victories</li>
                </ul>
                <p><strong>Best Combos:</strong> Stack multiple Diamond shields, then use King for massive single-target protection</p>
            </div>
            
            <div class="card-example spades">
                <h3>♠ Spades - The Aggressors</h3>
                <p><strong>Philosophy:</strong> Overwhelming offense and direct damage</p>
                <p><strong>Strategy:</strong> Spades hit hard and fast with both high attack and direct damage that bypasses the opponent's field entirely.</p>
                <p><strong>Strengths:</strong></p>
                <ul>
                    <li>Highest attack values in the game</li>
                    <li>Direct damage ignores enemy field cards</li>
                    <li>Face cards stack damage bonuses</li>
                    <li>Can quickly end games with aggressive plays</li>
                </ul>
                <p><strong>Weaknesses:</strong></p>
                <ul>
                    <li>Lower HP makes them vulnerable (glass cannons)</li>
                    <li>No defensive or healing capabilities</li>
                    <li>All-or-nothing strategy</li>
                </ul>
                <p><strong>Best Combos:</strong> Multiple Spade face cards create devastating damage output</p>
            </div>
            
            <div class="card-example clubs">
                <h3>♣ Clubs - The Tacticians</h3>
                <p><strong>Philosophy:</strong> Control through card advantage and options</p>
                <p><strong>Strategy:</strong> Clubs provide card draw to maintain hand size and options. More cards mean more choices and flexibility.</p>
                <p><strong>Strengths:</strong></p>
                <ul>
                    <li>Best card draw in the game</li>
                    <li>Highest HP among numbered cards</li>
                    <li>Maintains hand advantage</li>
                    <li>Versatile and adaptable</li>
                </ul>
                <p><strong>Weaknesses:</strong></p>
                <ul>
                    <li>No specialized combat advantage</li>
                    <li>Relies on having other suits to win</li>
                    <li>10-card hand limit caps draw value</li>
                </ul>
                <p><strong>Best Combos:</strong> Use Clubs to draw into your best cards from other suits</p>
            </div>
            
            <h3>💡 Strategic Tips</h3>
            <ul>
                <li><strong>Balanced Approach:</strong> Mix suits for versatility (e.g., Diamonds for defense, Spades for offense)</li>
                <li><strong>Face Card Power:</strong> Face cards are worth playing just for their passive bonuses</li>
                <li><strong>Timing:</strong> Save healing for after big attacks, use shields before them</li>
                <li><strong>Field Management:</strong> 3-card limit means choosing the right cards matters</li>
                <li><strong>Card Draw:</strong> Clubs help you find the cards you need when you need them</li>
            </ul>
        `;
        
        this.showInfoModal(content);
    }
    
    showCardArchive() {
        // Create all 54 cards for display using the proper card structure
        const allCards = [];
        
        // Hearts
        for (let value = 1; value <= 13; value++) {
            const def = CARD_DEFINITIONS.hearts[value];
            allCards.push({
                suit: 'Hearts',
                rank: def.name,
                name: def.name,
                value: value,
                maxHp: def.hp,
                attack: def.attack,
                abilities: def.abilities
            });
        }
        
        // Diamonds
        for (let value = 1; value <= 13; value++) {
            const def = CARD_DEFINITIONS.diamonds[value];
            allCards.push({
                suit: 'Diamonds',
                rank: def.name,
                name: def.name,
                value: value,
                maxHp: def.hp,
                attack: def.attack,
                abilities: def.abilities
            });
        }
        
        // Spades
        for (let value = 1; value <= 13; value++) {
            const def = CARD_DEFINITIONS.spades[value];
            allCards.push({
                suit: 'Spades',
                rank: def.name,
                name: def.name,
                value: value,
                maxHp: def.hp,
                attack: def.attack,
                abilities: def.abilities
            });
        }
        
        // Clubs
        for (let value = 1; value <= 13; value++) {
            const def = CARD_DEFINITIONS.clubs[value];
            allCards.push({
                suit: 'Clubs',
                rank: def.name,
                name: def.name,
                value: value,
                maxHp: def.hp,
                attack: def.attack,
                abilities: def.abilities
            });
        }
        
        // Jokers
        allCards.push({
            suit: 'Red',
            rank: 'Joker',
            name: 'Red Joker',
            value: 0,
            maxHp: 25,
            attack: 5,
            abilities: ['wildcard', 'attack', 'faceAbility']
        });
        allCards.push({
            suit: 'Black',
            rank: 'Joker',
            name: 'Black Joker',
            value: 0,
            maxHp: 25,
            attack: 5,
            abilities: ['wildcard', 'attack', 'faceAbility']
        });
        
        let content = `
            <h2>🃏 Card Archive</h2>
            <p style="text-align: center; margin-bottom: 20px;">Complete collection of all 54 cards in the deck</p>
            <div class="archive-grid">
        `;
        
        for (const card of allCards) {
            const suitClass = card.suit.toLowerCase();
            const suitSymbol = this.getSuitSymbol(card.suit);
            const abilities = this.getCardAbilitiesText(card);
            const cardCenter = this.getCardCenterDisplay(card, suitSymbol);
            
            content += `
                <div class="archive-card ${suitClass}">
                    <div class="archive-card-visual">
                        <div class="archive-card-header">
                            <span class="archive-rank">${card.name}</span>
                            <span class="archive-suit">${suitSymbol}</span>
                        </div>
                        <div class="archive-card-center">
                            ${cardCenter}
                        </div>
                        <div class="archive-card-stats">
                            <div class="stat-item">HP: ${card.maxHp}</div>
                            <div class="stat-item">ATK: ${card.attack}</div>
                        </div>
                    </div>
                    <div class="archive-card-info">
                        <div class="archive-card-title">${card.name} of ${card.suit}</div>
                        <div class="archive-abilities">
                            ${abilities}
                        </div>
                    </div>
                </div>
            `;
        }
        
        content += `
            </div>
        `;
        
        this.showInfoModal(content);
    }
    
    getSuitSymbol(suit) {
        const symbols = {
            'Hearts': '♥',
            'Diamonds': '♦',
            'Spades': '♠',
            'Clubs': '♣',
            'Red': '🃏',
            'Black': '🃏'
        };
        return symbols[suit] || '';
    }
    
    getCardCenterDisplay(card, suitSymbol) {
        // Face cards get special displays
        if (card.rank === 'Jack') {
            return `<div class="face-card-display">
                        <div class="face-letter">J</div>
                        <div class="face-suit">${suitSymbol}</div>
                    </div>`;
        } else if (card.rank === 'Queen') {
            return `<div class="face-card-display">
                        <div class="face-letter">Q</div>
                        <div class="face-suit">${suitSymbol}</div>
                    </div>`;
        } else if (card.rank === 'King') {
            return `<div class="face-card-display">
                        <div class="face-letter">K</div>
                        <div class="face-suit">${suitSymbol}</div>
                    </div>`;
        } else if (card.rank === 'Joker') {
            return `<div class="face-card-display">
                        <div class="face-letter" style="font-size: 2em;">🃏</div>
                    </div>`;
        }
        
        // Numbered cards show the appropriate number of suit symbols
        const value = card.value;
        let suitsHTML = '';
        
        if (value >= 1 && value <= 10) {
            // Simple row-based layout for all numbered cards
            suitsHTML = '<div class="pips-container">';
            for (let i = 0; i < value; i++) {
                suitsHTML += `<span class="pip-simple">${suitSymbol}</span>`;
            }
            suitsHTML += '</div>';
        }
        
        return `<div class="card-pips">${suitsHTML}</div>`;
    }
    
    getCardAbilitiesText(card) {
        let abilitiesText = '<ul class="ability-list">';
        
        if (card.abilities.includes('heal')) {
            const healAmount = card.value;
            const playerHealAmount = Math.ceil(card.value / 3);
            abilitiesText += `<li><strong>Heal:</strong> Restore ${healAmount} HP to a card or ${playerHealAmount} HP to yourself</li>`;
        }
        
        if (card.abilities.includes('shield')) {
            const shieldAmount = card.value;
            const playerShieldAmount = Math.ceil(card.value / 3);
            abilitiesText += `<li><strong>Shield:</strong> Add ${shieldAmount} shield to a card or ${playerShieldAmount} to yourself</li>`;
        }
        
        if (card.abilities.includes('damage')) {
            const damage = Math.ceil(card.value / 2);
            abilitiesText += `<li><strong>Direct Damage:</strong> Deal ${damage} damage directly to opponent's life</li>`;
        }
        
        if (card.abilities.includes('draw')) {
            const drawAmount = Math.ceil(card.value / 3);
            abilitiesText += `<li><strong>Card Draw:</strong> Draw ${drawAmount} card${drawAmount > 1 ? 's' : ''}</li>`;
        }
        
        if (card.abilities.includes('attack')) {
            abilitiesText += `<li><strong>Attack:</strong> Deal ${card.attack} damage to target</li>`;
        }
        
        // Face card abilities
        if (card.rank === 'Jack') {
            if (card.suit === 'Hearts') {
                abilitiesText += `<li><strong>Royal Heal:</strong> Heal yourself 5 HP (or +2 max life if at full)</li>`;
                abilitiesText += `<li><strong>Passive:</strong> All Hearts gain +1 max HP</li>`;
            } else if (card.suit === 'Diamonds') {
                abilitiesText += `<li><strong>Royal Shield:</strong> Add 5 shield to yourself</li>`;
                abilitiesText += `<li><strong>Passive:</strong> All Diamonds gain +1 shield per turn</li>`;
            } else if (card.suit === 'Spades') {
                abilitiesText += `<li><strong>Royal Strike:</strong> Deal 5 direct damage</li>`;
                abilitiesText += `<li><strong>Passive:</strong> All Spades gain +1 attack</li>`;
            } else if (card.suit === 'Clubs') {
                abilitiesText += `<li><strong>Royal Draw:</strong> Draw 2 cards</li>`;
                abilitiesText += `<li><strong>Passive:</strong> All Clubs gain +1 HP</li>`;
            }
        } else if (card.rank === 'Queen') {
            if (card.suit === 'Hearts') {
                abilitiesText += `<li><strong>Mass Heal:</strong> Heal all your cards and yourself for 3 HP</li>`;
                abilitiesText += `<li><strong>Passive:</strong> All Hearts heal +1 extra HP</li>`;
            } else if (card.suit === 'Diamonds') {
                abilitiesText += `<li><strong>Mass Shield:</strong> Add 3 shield to all your cards and yourself</li>`;
                abilitiesText += `<li><strong>Passive:</strong> All Diamonds gain +1 shield</li>`;
            } else if (card.suit === 'Spades') {
                abilitiesText += `<li><strong>Mass Strike:</strong> Deal 3 damage to all opponent's cards</li>`;
                abilitiesText += `<li><strong>Passive:</strong> All Spades gain +2 attack</li>`;
            } else if (card.suit === 'Clubs') {
                abilitiesText += `<li><strong>Card Advantage:</strong> Draw 3 cards</li>`;
                abilitiesText += `<li><strong>Passive:</strong> All Clubs gain +2 HP</li>`;
            }
        } else if (card.rank === 'King') {
            if (card.suit === 'Hearts') {
                abilitiesText += `<li><strong>Full Restore:</strong> Heal one card to full HP</li>`;
                abilitiesText += `<li><strong>Passive:</strong> All Hearts gain +1 damage</li>`;
            } else if (card.suit === 'Diamonds') {
                abilitiesText += `<li><strong>Fortress:</strong> Add 8 shield to one card</li>`;
                abilitiesText += `<li><strong>Passive:</strong> All Diamonds gain +2 shield</li>`;
            } else if (card.suit === 'Spades') {
                abilitiesText += `<li><strong>Execute:</strong> Deal 8 direct damage</li>`;
                abilitiesText += `<li><strong>Passive:</strong> All Spades gain +3 attack</li>`;
            } else if (card.suit === 'Clubs') {
                abilitiesText += `<li><strong>Strategic Draw:</strong> Draw 4 cards</li>`;
                abilitiesText += `<li><strong>Passive:</strong> All Clubs gain +3 HP</li>`;
            }
        }
        
        // Joker abilities
        if (card.rank === 'Joker') {
            abilitiesText += `<li><strong>Wild Card:</strong> Copy any ability from a card on your field</li>`;
            abilitiesText += `<li><strong>Versatility:</strong> Can adapt to any situation</li>`;
        }
        
        abilitiesText += '</ul>';
        return abilitiesText;
    }
    
    showInfoModal(content) {
        const modal = document.getElementById('info-modal');
        const modalContent = document.getElementById('info-modal-content');
        modalContent.innerHTML = content;
        modal.classList.remove('hidden');
    }
    
    closeInfoModal() {
        document.getElementById('info-modal').classList.add('hidden');
    }
    
    startNewGame() {
        this.state = new GameState();
        this.state.initializeDecks();
        
        // Clear game messages
        document.getElementById('game-messages').innerHTML = '';
        
        // Show coin flip animation
        this.showCoinFlipAnimation();
    }
    
    async showCoinFlipAnimation() {
        const overlay = document.getElementById('coin-flip-overlay');
        const coin = document.getElementById('coin');
        const result = document.getElementById('coin-result');
        
        // Determine the result
        const coinFlip = Math.random() < 0.5 ? 'heads' : 'tails';
        this.state.currentTurn = coinFlip === 'heads' ? 'player' : 'computer';
        
        // Show overlay
        overlay.classList.remove('hidden');
        result.textContent = '';
        result.classList.remove('show');
        
        // Play coin flip sound
        this.playCoinFlipSound();
        
        // Start flipping animation
        coin.classList.add('flipping');
        
        // Wait for animation to complete
        await this.delay(2000);
        
        // Stop on the correct side
        const finalRotation = coinFlip === 'heads' ? 1800 : 1980; // heads = even, tails = odd
        coin.style.transform = `rotateY(${finalRotation}deg)`;
        coin.classList.remove('flipping');
        
        // Show result text
        await this.delay(500);
        result.textContent = `${coinFlip.toUpperCase()}! ${this.state.currentTurn === 'player' ? 'You' : 'Computer'} go first!`;
        result.classList.add('show');
        
        // Wait a bit then hide overlay
        await this.delay(2000);
        overlay.classList.add('hidden');
        coin.style.transform = '';
        
        this.addMessage(`Coin flip: ${coinFlip.toUpperCase()}! ${this.state.currentTurn === 'player' ? 'You' : 'Computer'} go first!`, true);
        
        // Initial draw - 5 cards each
        for (let i = 0; i < 5; i++) {
            this.drawCardFromDeck('player', true);
            this.drawCardFromDeck('computer', true);
        }
        
        this.updateUI();
        
        if (this.state.currentTurn === 'computer') {
            setTimeout(() => this.computerTurn(), 1000);
        } else {
            this.startPlayerTurn();
        }
    }
    
    drawCardFromDeck(player, isInitial = false) {
        const deck = player === 'player' ? this.state.playerDeck : this.state.computerDeck;
        const hand = player === 'player' ? this.state.playerHand : this.state.computerHand;
        
        if (deck.length === 0) {
            this.addMessage(`${player === 'player' ? 'Your' : "Computer's"} deck is empty!`);
            return false;
        }
        
        if (hand.length >= 10) {
            this.addMessage(`${player === 'player' ? 'Your' : "Computer's"} hand is full!`);
            return false;
        }
        
        const card = deck.pop();
        hand.push(card);
        
        // Play draw card sound effect
        this.playDrawCardSound();
        
        if (!isInitial && player === 'player') {
            this.addMessage(`You drew ${card.name} of ${card.suit}`);
        }
        
        return true;
    }
    
    drawCard(player) {
        if (this.state.gameOver) return;
        if (player !== 'player' || this.state.currentTurn !== 'player') return;
        
        // Check if player has actions
        if (this.state.playerActions <= 0) {
            this.addMessage('Not enough actions! (Need 1 action to draw)');
            return;
        }
        
        if (this.state.hasDrawnThisTurn) {
            this.addMessage('You already drew a card this turn!');
            return;
        }
        
        if (this.drawCardFromDeck('player')) {
            this.state.hasDrawnThisTurn = true;
            this.state.playerActions--;
            this.updateUI();
        }
    }
    
    startPlayerTurn() {
        this.state.turnPhase = 'draw';
        this.state.hasDrawnThisTurn = false;
        
        // Reset actions
        this.state.playerActions = this.state.maxActions;
        
        // Reset used abilities for cards on field
        this.state.playerField.forEach(card => {
            if (card) card.usedAbilities = [];
        });
        
        this.updateUI();
    }
    
    endTurn() {
        if (this.state.gameOver) return;
        if (this.state.currentTurn !== 'player') return;
        
        this.state.currentTurn = 'computer';
        this.state.turnCount++;
        if (this.state.turnCount >= 2) {
            this.state.isFirstTurn = false;
        }
        this.addMessage('Your turn ended');
        this.updateUI();
        
        setTimeout(() => this.computerTurn(), 1000);
    }
    
    async computerTurn() {
        this.addMessage("Computer's turn", true);
        this.state.hasDrawnThisTurn = false;
        
        // Reset actions
        this.state.computerActions = this.state.maxActions;
        
        // Reset used abilities
        this.state.computerField.forEach(card => {
            if (card) card.usedAbilities = [];
        });
        
        await this.delay(800);
        
        // Draw a card (costs 1 action)
        if (this.state.computerActions > 0 && this.state.computerDeck.length > 0) {
            this.drawCardFromDeck('computer');
            this.state.computerActions--;
            this.addMessage('Computer drew a card');
            this.updateUI();
            await this.delay(1000);
        }
        
        // Play multiple cards if possible (doesn't cost actions)
        let emptySlots = this.state.computerField.filter(slot => slot === null).length;
        while (emptySlots > 0 && this.state.computerHand.length > 0) {
            const cardToPlay = this.computerChooseCardToPlay();
            if (cardToPlay !== null) {
                const slotIndex = this.state.computerField.indexOf(null);
                this.playCard('computer', cardToPlay, slotIndex);
                await this.delay(1000);
                emptySlots = this.state.computerField.filter(slot => slot === null).length;
            } else {
                break;
            }
        }
        
        // Use abilities strategically
        await this.computerUseAbilities();
        
        await this.delay(1000);
        
        // End turn
        this.state.currentTurn = 'player';
        this.state.turnCount++;
        if (this.state.turnCount >= 2) {
            this.state.isFirstTurn = false;
        }
        this.addMessage('Computer ended turn');
        this.startPlayerTurn();
    }
    
    computerChooseCardToPlay() {
        // Improved AI: Choose cards strategically based on game state
        if (this.state.computerHand.length === 0) return null;
        
        const computerLife = this.state.computerLife;
        const playerLife = this.state.playerLife;
        const computerField = this.state.computerField.filter(c => c !== null);
        const playerField = this.state.playerField.filter(c => c !== null);
        
        // Priority 1: If low on health (below 30%), prioritize healing cards
        if (computerLife < 30) {
            for (let i = 0; i < this.state.computerHand.length; i++) {
                if (this.state.computerHand[i].suit === 'Hearts') {
                    return i;
                }
            }
        }
        
        // Priority 2: If opponent has many cards, play shielding cards
        if (playerField.length >= 2 && this.state.computerShield < 10) {
            for (let i = 0; i < this.state.computerHand.length; i++) {
                if (this.state.computerHand[i].suit === 'Diamonds') {
                    return i;
                }
            }
        }
        
        // Priority 3: If opponent is low on health (below 40%), play aggressive cards
        if (playerLife < 40) {
            let bestAttackCard = -1;
            let bestAttack = -1;
            for (let i = 0; i < this.state.computerHand.length; i++) {
                const card = this.state.computerHand[i];
                if (card.suit === 'Spades' || card.attack > bestAttack) {
                    bestAttack = card.attack;
                    bestAttackCard = i;
                }
            }
            if (bestAttackCard !== -1) return bestAttackCard;
        }
        
        // Priority 4: Play face cards for their bonuses
        for (let i = 0; i < this.state.computerHand.length; i++) {
            const card = this.state.computerHand[i];
            if (card.rank === 'Jack' || card.rank === 'Queen' || card.rank === 'King') {
                return i;
            }
        }
        
        // Default: Play highest attack card
        let bestCard = 0;
        let bestAttack = this.state.computerHand[0].attack;
        
        for (let i = 1; i < this.state.computerHand.length; i++) {
            if (this.state.computerHand[i].attack > bestAttack) {
                bestAttack = this.state.computerHand[i].attack;
                bestCard = i;
            }
        }
        
        return bestCard;
    }
    
    async computerUseAbilities() {
        // Improved AI: Use abilities strategically based on game state
        const computerLife = this.state.computerLife;
        const playerLife = this.state.playerLife;
        const computerShield = this.state.computerShield;
        
        // Priority 1: Heal self if low on health
        if (computerLife < 30 && this.state.computerActions > 0) {
            for (let i = 0; i < this.state.computerField.length; i++) {
                const card = this.state.computerField[i];
                if (!card) continue;
                
                if (card.suit === 'Hearts' && !card.usedAbilities.includes('heal')) {
                    const target = { type: 'player', player: 'computer' };
                    await this.useAbility('computer', i, 'heal', target);
                    await this.delay(800);
                    if (this.state.computerActions <= 0) return;
                }
            }
        }
        
        // Priority 2: Add shields if under threat (opponent has cards and we have low shields)
        const playerFieldCards = this.state.playerField.filter(c => c !== null);
        if (playerFieldCards.length > 0 && computerShield < 10 && this.state.computerActions > 0) {
            for (let i = 0; i < this.state.computerField.length; i++) {
                const card = this.state.computerField[i];
                if (!card) continue;
                
                if (card.suit === 'Diamonds' && !card.usedAbilities.includes('shield')) {
                    const target = { type: 'player', player: 'computer' };
                    await this.useAbility('computer', i, 'shield', target);
                    await this.delay(800);
                    if (this.state.computerActions <= 0) return;
                }
            }
        }
        
        // Priority 3: Use direct damage abilities (Spades) to bypass opponent's field
        if (this.state.computerActions > 0) {
            for (let i = 0; i < this.state.computerField.length; i++) {
                const card = this.state.computerField[i];
                if (!card) continue;
                
                if (card.suit === 'Spades' && !card.usedAbilities.includes('directDamage')) {
                    const target = { type: 'player', player: 'player' };
                    await this.useAbility('computer', i, 'directDamage', target);
                    await this.delay(800);
                    if (this.state.computerActions <= 0) return;
                }
            }
        }
        
        // Priority 4: Buff own cards (Clubs)
        if (this.state.computerActions > 0) {
            for (let i = 0; i < this.state.computerField.length; i++) {
                const card = this.state.computerField[i];
                if (!card) continue;
                
                if (card.suit === 'Clubs' && !card.usedAbilities.includes('buff')) {
                    // Find weakest card to buff
                    let weakestCard = null;
                    let weakestIndex = -1;
                    for (let j = 0; j < this.state.computerField.length; j++) {
                        const c = this.state.computerField[j];
                        if (c && (!weakestCard || c.attack < weakestCard.attack)) {
                            weakestCard = c;
                            weakestIndex = j;
                        }
                    }
                    if (weakestIndex !== -1) {
                        const target = { type: 'field', player: 'computer', index: weakestIndex };
                        await this.useAbility('computer', i, 'buff', target);
                        await this.delay(800);
                        if (this.state.computerActions <= 0) return;
                    }
                }
            }
        }
        
        // Priority 5: Attack with remaining actions
        for (let i = 0; i < this.state.computerField.length; i++) {
            const card = this.state.computerField[i];
            if (!card) continue;
            
            // Stop if out of actions
            if (this.state.computerActions <= 0) break;
            
            if (!card.usedAbilities.includes('attack')) {
                let target = null;
                
                if (playerFieldCards.length > 0) {
                    // Attack weakest enemy card
                    let weakestCard = playerFieldCards[0];
                    let weakestIndex = this.state.playerField.indexOf(weakestCard);
                    
                    for (const enemyCard of playerFieldCards) {
                        if (enemyCard.hp < weakestCard.hp) {
                            weakestCard = enemyCard;
                            weakestIndex = this.state.playerField.indexOf(enemyCard);
                        }
                    }
                    
                    target = { type: 'field', player: 'player', index: weakestIndex };
                } else if (!this.state.isFirstTurn) {
                    // Only attack player directly if not first turn
                    target = { type: 'player', player: 'player' };
                }
                
                if (target && this.state.computerActions > 0) {
                    await this.useAbility('computer', i, 'attack', target);
                    await this.delay(800);
                }
            }
        }
    }
    
    playCard(player, handIndex, fieldIndex) {
        if (this.state.gameOver) return false;
        
        const hand = player === 'player' ? this.state.playerHand : this.state.computerHand;
        const field = player === 'player' ? this.state.playerField : this.state.computerField;
        
        if (field[fieldIndex] !== null) {
            this.addMessage('That slot is already occupied!');
            return false;
        }
        
        const card = hand.splice(handIndex, 1)[0];
        field[fieldIndex] = card;
        
        this.addMessage(`${player === 'player' ? 'You' : 'Computer'} played ${card.name} of ${card.suit}`);
        
        // Apply face card bonuses immediately if it's a face card
        if (card.value >= 11 && card.abilities.includes('faceAbility')) {
            this.applyFaceAbilityBonus(player, card);
        }
        
        this.updateUI();
        return true;
    }
    
    applyFaceAbilityBonus(player, faceCard) {
        const field = player === 'player' ? this.state.playerField : this.state.computerField;
        const suit = faceCard.suit;
        const value = faceCard.value;
        
        if (suit === 'hearts') {
            if (value === 11) { // Jack - +1 max HP to all Hearts
                field.forEach(card => {
                    if (card && card.suit === 'hearts' && !card.hasReceivedJackBonus) {
                        card.maxHp += 1;
                        card.currentHp += 1;
                        card.hasReceivedJackBonus = true;
                    }
                });
                this.addMessage(`Jack of Hearts: All Hearts gain +1 max HP!`);
            }
        } else if (suit === 'diamonds') {
            if (value === 11) { // Jack - +1 shield to all Diamonds
                field.forEach(card => {
                    if (card && card.suit === 'diamonds') {
                        card.shield += 1;
                    }
                });
                this.addMessage(`Jack of Diamonds: All Diamonds gain +1 shield!`);
            }
        }
        
        // Note: Queen and King bonuses are applied dynamically during ability use
        if (value === 12) {
            this.addMessage(`${faceCard.name} of ${suit}: Passive bonus is now active!`);
        } else if (value === 13) {
            this.addMessage(`${faceCard.name} of ${suit}: Passive bonus is now active!`);
        }
    }
    
    showCardModal(card, player, location, index) {
        if (this.state.currentTurn !== 'player' || player !== 'player') return;
        
        this.state.selectedCard = { card, player, location, index };
        
        const modal = document.getElementById('card-modal');
        const details = document.getElementById('modal-card-details');
        const actions = document.getElementById('modal-actions');
        
        details.innerHTML = this.generateCardHTML(card, false, location);
        actions.innerHTML = '';
        
        if (location === 'hand') {
            // Show play options
            const emptySlots = this.state.playerField.map((slot, i) => slot === null ? i : null).filter(i => i !== null);
            
            emptySlots.forEach(slotIndex => {
                const btn = document.createElement('button');
                btn.className = 'ability-btn';
                btn.textContent = `Play to Slot ${slotIndex + 1}`;
                btn.onclick = () => {
                    this.playCard('player', index, slotIndex);
                    this.closeModal();
                };
                actions.appendChild(btn);
            });
            
            // Show passive face ability info if it's a face card
            if (card.value >= 11 && card.abilities.includes('faceAbility')) {
                const infoDiv = document.createElement('div');
                infoDiv.style.marginTop = '15px';
                infoDiv.style.padding = '10px';
                infoDiv.style.background = 'rgba(255, 255, 255, 0.2)';
                infoDiv.style.borderRadius = '8px';
                infoDiv.style.fontSize = '0.9em';
                infoDiv.innerHTML = `<strong>Passive Ability (activates when played):</strong><br>${this.getFaceAbilityTooltip(card)}`;
                actions.appendChild(infoDiv);
            }
        } else if (location === 'field') {
            // Show ability options
            card.abilities.forEach(ability => {
                if (card.usedAbilities.includes(ability)) return;
                
                // Skip face ability since it's passive
                if (ability === 'faceAbility') return;
                
                const btn = document.createElement('button');
                btn.className = 'ability-btn';
                btn.textContent = this.getAbilityDescription(card, ability);
                btn.onclick = () => {
                    console.log('Ability clicked:', ability);
                    this.selectAbilityTarget(ability);
                };
                
                actions.appendChild(btn);
            });
            
            // Show passive face ability info if it's a face card
            if (card.value >= 11 && card.abilities.includes('faceAbility')) {
                const infoDiv = document.createElement('div');
                infoDiv.style.marginTop = '15px';
                infoDiv.style.padding = '10px';
                infoDiv.style.background = 'rgba(255, 255, 255, 0.2)';
                infoDiv.style.borderRadius = '8px';
                infoDiv.style.fontSize = '0.9em';
                infoDiv.innerHTML = `<strong>Passive Ability:</strong><br>${this.getFaceAbilityTooltip(card)}`;
                actions.appendChild(infoDiv);
            }
        }
        
        modal.classList.remove('hidden');
    }
    
    selectAbilityTarget(ability) {
        console.log('selectAbilityTarget called with:', ability);
        const { card, player, location, index } = this.state.selectedCard;
        console.log('Selected card:', card, 'player:', player, 'index:', index);
        
        // Store the ability being used
        this.state.pendingAbility = { ability, card, player, fieldIndex: index };
        
        if (ability === 'wildcard') {
            console.log('Wildcard ability selected, calling showWildcardSelection');
            // Show selection of abilities to copy from field
            // Don't close modal yet - showWildcardSelection will handle the modal
            this.showWildcardSelection();
        } else if (ability === 'attack') {
            // Show target selection for attack
            this.closeModal();
            this.showTargetSelection('attack');
        } else if (ability === 'heal') {
            // Show target selection for healing
            this.closeModal();
            this.showTargetSelection('heal');
        } else if (ability === 'shield') {
            // Show target selection for shielding
            this.closeModal();
            this.showTargetSelection('shield');
        } else if (ability === 'damage') {
            // Direct damage to enemy
            const target = { type: 'player', player: 'computer' };
            this.useAbility(player, index, ability, target);
            this.closeModal();
        } else if (ability === 'draw') {
            // Draw card
            const target = { type: 'draw', player: 'player' };
            this.useAbility(player, index, ability, target);
            this.closeModal();
        }
    }
    
    showTargetSelection(abilityType) {
        this.isSelectingTarget = true;
        
        if (abilityType === 'attack') {
            this.addMessage('Select a target for your attack...', true);
            
            // Make opponent cards and player clickable
            const computerField = document.getElementById('computer-field');
            const computerSlots = computerField.querySelectorAll('.field-slot');
            
            const enemyCardsExist = this.state.computerField.some(card => card !== null);
            
            // Add click handlers to enemy cards
            computerSlots.forEach((slot, slotIndex) => {
                const card = this.state.computerField[slotIndex];
                if (card) {
                    slot.classList.add('targetable');
                    slot.style.cursor = 'pointer';
                    slot.style.border = '3px solid #f39c12';
                    
                    const clickHandler = () => {
                        const target = { type: 'field', player: 'computer', index: slotIndex };
                        this.executeTargetedAbility(target);
                        this.clearTargetSelection();
                    };
                    
                    slot.addEventListener('click', clickHandler);
                    slot._clickHandler = clickHandler;
                }
            });
            
            // Add option to target player directly only if no cards on field AND not first turn
            if (!enemyCardsExist && !this.state.isFirstTurn) {
                const computerInfo = document.querySelector('.computer-area .player-info');
                computerInfo.classList.add('targetable');
                computerInfo.style.cursor = 'pointer';
                computerInfo.style.border = '3px solid #f39c12';
                computerInfo.style.borderRadius = '8px';
                computerInfo.style.padding = '10px';
                
                const playerClickHandler = () => {
                    const target = { type: 'player', player: 'computer' };
                    this.executeTargetedAbility(target);
                    this.clearTargetSelection();
                };
                
                computerInfo.addEventListener('click', playerClickHandler);
                computerInfo._clickHandler = playerClickHandler;
                
                this.addMessage('No cards on field - attack opponent directly!');
            } else if (!enemyCardsExist && this.state.isFirstTurn) {
                this.addMessage('Cannot attack life points directly on the first turn!');
                this.clearTargetSelection();
                this.state.pendingAbility = null;
            }
        } else if (abilityType === 'heal') {
            this.addMessage('Select a target to heal...', true);
            
            // Make friendly cards and player clickable
            const playerField = document.getElementById('player-field');
            const playerSlots = playerField.querySelectorAll('.field-slot');
            
            // Add click handlers to friendly cards
            playerSlots.forEach((slot, slotIndex) => {
                const card = this.state.playerField[slotIndex];
                if (card) {
                    slot.classList.add('targetable');
                    slot.style.cursor = 'pointer';
                    slot.style.border = '3px solid #2ecc71';
                    
                    const clickHandler = () => {
                        const target = { type: 'field', player: 'player', index: slotIndex };
                        this.executeTargetedAbility(target);
                        this.clearTargetSelection();
                    };
                    
                    slot.addEventListener('click', clickHandler);
                    slot._clickHandler = clickHandler;
                }
            });
            
            // Add option to heal self
            const playerInfo = document.querySelector('.player-area-main .player-info');
            playerInfo.classList.add('targetable');
            playerInfo.style.cursor = 'pointer';
            playerInfo.style.border = '3px solid #2ecc71';
            playerInfo.style.borderRadius = '8px';
            playerInfo.style.padding = '10px';
            
            const playerClickHandler = () => {
                const target = { type: 'player', player: 'player' };
                this.executeTargetedAbility(target);
                this.clearTargetSelection();
            };
            
            playerInfo.addEventListener('click', playerClickHandler);
            playerInfo._clickHandler = playerClickHandler;
        } else if (abilityType === 'shield') {
            this.addMessage('Select a target to shield...', true);
            
            // Make friendly cards and player clickable
            const playerField = document.getElementById('player-field');
            const playerSlots = playerField.querySelectorAll('.field-slot');
            
            // Add click handlers to friendly cards
            playerSlots.forEach((slot, slotIndex) => {
                const card = this.state.playerField[slotIndex];
                if (card) {
                    slot.classList.add('targetable');
                    slot.style.cursor = 'pointer';
                    slot.style.border = '3px solid #3498db';
                    
                    const clickHandler = () => {
                        const target = { type: 'field', player: 'player', index: slotIndex };
                        this.executeTargetedAbility(target);
                        this.clearTargetSelection();
                    };
                    
                    slot.addEventListener('click', clickHandler);
                    slot._clickHandler = clickHandler;
                }
            });
            
            // Add option to shield self
            const playerInfo = document.querySelector('.player-area-main .player-info');
            playerInfo.classList.add('targetable');
            playerInfo.style.cursor = 'pointer';
            playerInfo.style.border = '3px solid #3498db';
            playerInfo.style.borderRadius = '8px';
            playerInfo.style.padding = '10px';
            
            const playerClickHandler = () => {
                const target = { type: 'player', player: 'player' };
                this.executeTargetedAbility(target);
                this.clearTargetSelection();
            };
            
            playerInfo.addEventListener('click', playerClickHandler);
            playerInfo._clickHandler = playerClickHandler;
        }
    }
    
    clearTargetSelection() {
        this.isSelectingTarget = false;
        
        // Remove highlighting and click handlers
        const targetables = document.querySelectorAll('.targetable');
        targetables.forEach(elem => {
            elem.classList.remove('targetable');
            elem.style.cursor = '';
            elem.style.border = '';
            elem.style.borderRadius = '';
            elem.style.padding = '';
            
            if (elem._clickHandler) {
                elem.removeEventListener('click', elem._clickHandler);
                delete elem._clickHandler;
            }
        });
    }
    
    executeTargetedAbility(target) {
        const { ability, player, fieldIndex } = this.state.pendingAbility;
        this.useAbility(player, fieldIndex, ability, target);
        this.state.pendingAbility = null;
    }
    
    showWildcardSelection() {
        console.log('showWildcardSelection called');
        const { player, index } = this.state.selectedCard;
        const field = player === 'player' ? this.state.playerField : this.state.computerField;
        
        console.log('Field:', field);
        console.log('Current card index:', index);
        
        // Get all unique abilities from cards on the field (excluding the joker itself and faceAbility)
        const availableAbilities = new Map(); // ability -> card name
        field.forEach((card, idx) => {
            if (card && idx !== index) { // Don't copy from self
                console.log(`Checking card at index ${idx}:`, card.name, card.abilities);
                card.abilities.forEach(ability => {
                    if (ability !== 'faceAbility' && ability !== 'wildcard' && ability !== 'attack') {
                        if (!availableAbilities.has(ability)) {
                            availableAbilities.set(ability, card.name);
                        }
                    }
                });
            }
        });
        
        console.log('Available abilities:', availableAbilities);
        
        if (availableAbilities.size === 0) {
            this.addMessage('No special abilities available to copy! You need other cards with heal/shield/damage/draw abilities on the field.');
            this.state.pendingAbility = null;
            return;
        }
        
        // Show modal with ability options
        const modal = document.getElementById('card-modal');
        const details = document.getElementById('modal-card-details');
        const actions = document.getElementById('modal-actions');
        
        details.innerHTML = '<h3>🃏 Choose an ability to copy:</h3><p style="font-size: 0.9em; opacity: 0.8;">Select from abilities of cards on your field</p>';
        actions.innerHTML = '';
        
        availableAbilities.forEach((cardName, ability) => {
            const btn = document.createElement('button');
            btn.className = 'ability-btn';
            btn.innerHTML = `${this.getWildcardAbilityName(ability)}<br><small style="opacity: 0.7;">from ${cardName}</small>`;
            btn.onclick = () => {
                this.state.pendingAbility.copiedAbility = ability;
                this.closeModal();
                // Now select target based on the copied ability
                if (ability === 'heal') {
                    this.showTargetSelection('heal');
                } else if (ability === 'shield') {
                    this.showTargetSelection('shield');
                } else if (ability === 'damage') {
                    const target = { type: 'player', player: 'computer' };
                    this.useAbility(player, index, 'wildcard', target);
                } else if (ability === 'draw') {
                    const target = { type: 'draw', player: 'player' };
                    this.useAbility(player, index, 'wildcard', target);
                }
            };
            actions.appendChild(btn);
        });
        
        modal.classList.remove('hidden');
    }
    
    getWildcardAbilityName(ability) {
        switch (ability) {
            case 'heal': return '💚 Heal (copy from Hearts)';
            case 'shield': return '💎 Shield (copy from Diamonds)';
            case 'damage': return '⚔️ Direct Damage (copy from Spades)';
            case 'draw': return '🃏 Draw Cards (copy from Clubs)';
            default: return ability;
        }
    }
    
    async useAbility(player, fieldIndex, ability, target) {
        const field = player === 'player' ? this.state.playerField : this.state.computerField;
        const card = field[fieldIndex];
        
        if (!card || card.usedAbilities.includes(ability)) return;
        
        // Check if player has actions
        const actionsAvailable = player === 'player' ? this.state.playerActions : this.state.computerActions;
        if (actionsAvailable <= 0) {
            if (player === 'player') {
                this.addMessage('Not enough actions! (Need 1 action to use ability)');
            }
            return;
        }
        
        card.usedAbilities.push(ability);
        
        // Deduct action
        if (player === 'player') {
            this.state.playerActions--;
        } else {
            this.state.computerActions--;
        }
        
        // Calculate bonuses from face cards
        const bonuses = this.calculateBonuses(player);
        
        switch (ability) {
            case 'attack':
                await this.executeAttack(card, target, bonuses);
                break;
            case 'heal':
                await this.executeHeal(card, target, bonuses);
                break;
            case 'shield':
                await this.executeShield(card, target, bonuses);
                break;
            case 'damage':
                await this.executeDamage(card, target, bonuses);
                break;
            case 'draw':
                await this.executeDraw(card, player);
                break;
            case 'wildcard':
                // Wildcard copies another ability
                const copiedAbility = this.state.pendingAbility?.copiedAbility;
                if (copiedAbility) {
                    this.addMessage(`🃏 ${card.name} copies ${copiedAbility} ability!`);
                    // Execute the copied ability
                    switch (copiedAbility) {
                        case 'heal':
                            await this.executeHeal(card, target, bonuses);
                            break;
                        case 'shield':
                            await this.executeShield(card, target, bonuses);
                            break;
                        case 'damage':
                            await this.executeDamage(card, target, bonuses);
                            break;
                        case 'draw':
                            await this.executeDraw(card, player);
                            break;
                    }
                }
                break;
            case 'faceAbility':
                await this.executeFaceAbility(card, player);
                break;
        }
        
        this.checkForDefeatedCards();
        this.updateUI();
        this.checkWinCondition();
    }
    
    calculateBonuses(player) {
        const field = player === 'player' ? this.state.playerField : this.state.computerField;
        const bonuses = {
            hearts: { hp: 0, heal: 0, damage: 0 },
            diamonds: { shield: 0, damage: 0 },
            spades: { damage: 0 },
            clubs: { draw: 0 }
        };
        
        field.forEach(card => {
            if (!card) return;
            
            // Heart face cards
            if (card.suit === 'hearts' && card.value >= 11) {
                if (card.value === 11) bonuses.hearts.hp += 1; // Jack
                if (card.value === 12) bonuses.hearts.heal += 1; // Queen
                if (card.value === 13) bonuses.hearts.damage += 1; // King
            }
            
            // Diamond face cards
            if (card.suit === 'diamonds' && card.value >= 11) {
                if (card.value === 11) bonuses.diamonds.shield += 1; // Jack
                if (card.value === 12) bonuses.diamonds.shield += 1; // Queen (shields get bonus)
                if (card.value === 13) bonuses.diamonds.damage += 1; // King
            }
            
            // Spade face cards (bonus damage)
            if (card.suit === 'spades' && card.value >= 11) {
                bonuses.spades.damage += 1;
            }
            
            // Club face cards (bonus draw)
            if (card.suit === 'clubs' && card.value >= 11) {
                bonuses.clubs.draw += 1;
            }
        });
        
        // Apply HP bonuses to all Hearts cards on the field
        if (bonuses.hearts.hp > 0) {
            field.forEach(card => {
                if (card && card.suit === 'hearts') {
                    // Check if we haven't already applied this bonus
                    if (!card.hasHpBonus) {
                        card.maxHp += bonuses.hearts.hp;
                        card.currentHp += bonuses.hearts.hp;
                        card.hasHpBonus = true;
                    }
                }
            });
        }
        
        return bonuses;
    }
    
    async executeAttack(card, target, bonuses) {
        let damage = card.attack;
        
        // Apply damage bonuses
        if (card.suit === 'hearts') damage += bonuses.hearts.damage;
        if (card.suit === 'diamonds') damage += bonuses.diamonds.damage;
        if (card.suit === 'spades') damage += bonuses.spades.damage;
        
        // Play attack sound
        this.playAttackSound();
        
        if (target.type === 'field') {
            const targetField = target.player === 'player' ? this.state.playerField : this.state.computerField;
            const targetCard = targetField[target.index];
            
            if (targetCard) {
                this.dealDamage(targetCard, damage, target.player);
                this.addMessage(`${card.name} attacks ${targetCard.name} for ${damage} damage!`);
            }
        } else if (target.type === 'player') {
            this.dealDamageToPlayer(target.player, damage);
            this.addMessage(`${card.name} attacks ${target.player === 'player' ? 'you' : 'computer'} for ${damage} damage!`);
        }
    }
    
    async executeHeal(card, target, bonuses) {
        let healAmount = card.value;
        
        // Apply heal bonuses
        if (card.suit === 'hearts') healAmount += bonuses.hearts.heal;
        
        // Play heal sound
        this.playHealSound();
        
        if (target.type === 'field') {
            const targetField = target.player === 'player' ? this.state.playerField : this.state.computerField;
            const targetCard = targetField[target.index];
            
            if (targetCard) {
                const healed = Math.min(healAmount, targetCard.maxHp - targetCard.currentHp);
                targetCard.currentHp += healed;
                this.addMessage(`${card.name} heals ${targetCard.name} for ${healed} HP!`);
            }
        } else if (target.type === 'player') {
            const playerHealAmount = Math.ceil(healAmount / 3);
            this.healPlayer(target.player, playerHealAmount);
            this.addMessage(`${card.name} heals ${target.player === 'player' ? 'you' : 'computer'} for ${playerHealAmount} HP!`);
        }
    }
    
    async executeShield(card, target, bonuses) {
        let shieldAmount = card.value;
        
        // Apply shield bonuses
        if (card.suit === 'diamonds') shieldAmount += bonuses.diamonds.shield;
        
        // Play shield sound
        this.playShieldSound();
        
        if (target.type === 'field') {
            const targetField = target.player === 'player' ? this.state.playerField : this.state.computerField;
            const targetCard = targetField[target.index];
            
            if (targetCard) {
                targetCard.shield += shieldAmount;
                this.addMessage(`${card.name} shields ${targetCard.name} for ${shieldAmount}!`);
            }
        } else if (target.type === 'player') {
            const playerShieldAmount = Math.ceil(shieldAmount / 3);
            if (target.player === 'player') {
                this.state.playerShield += playerShieldAmount;
            } else {
                this.state.computerShield += playerShieldAmount;
            }
            this.addMessage(`${card.name} shields ${target.player === 'player' ? 'you' : 'computer'} for ${playerShieldAmount}!`);
        }
    }
    
    async executeDamage(card, target, bonuses) {
        let damage = Math.ceil(card.value / 2); // Spades direct damage is card value / 2 rounded up
        
        // Spades deal direct damage with bonuses
        if (card.suit === 'spades') damage += bonuses.spades.damage;
        
        this.dealDamageToPlayer(target.player, damage);
        this.addMessage(`${card.name} deals ${damage} direct damage to ${target.player === 'player' ? 'you' : 'computer'}!`);
    }
    
    async executeDraw(card, player) {
        const drawAmount = Math.ceil(card.value / 3);
        
        for (let i = 0; i < drawAmount; i++) {
            this.drawCardFromDeck(player);
        }
        
        this.addMessage(`${card.name} draws ${drawAmount} cards!`);
    }
    
    async executeFaceAbility(card, player) {
        // Face abilities are passive and applied via calculateBonuses
        this.addMessage(`${card.name}'s special ability is active!`);
    }
    
    dealDamage(card, amount, player) {
        let overflowDamage = 0;
        
        // First apply to shield
        if (card.shield > 0) {
            const shieldDamage = Math.min(card.shield, amount);
            card.shield -= shieldDamage;
            amount -= shieldDamage;
        }
        
        // Then to HP
        const actualDamage = Math.min(card.currentHp, amount);
        card.currentHp -= actualDamage;
        
        // Calculate overflow damage
        if (amount > actualDamage) {
            overflowDamage = amount - actualDamage;
            // Deal overflow damage to player
            this.dealDamageToPlayer(player, overflowDamage);
            this.addMessage(`💥 ${overflowDamage} overflow damage dealt to ${player === 'player' ? 'you' : 'computer'}!`);
        }
    }
    
    dealDamageToPlayer(player, amount) {
        if (player === 'player') {
            if (this.state.playerShield > 0) {
                const shieldDamage = Math.min(this.state.playerShield, amount);
                this.state.playerShield -= shieldDamage;
                amount -= shieldDamage;
            }
            this.state.playerLife = Math.max(0, this.state.playerLife - amount);
        } else {
            if (this.state.computerShield > 0) {
                const shieldDamage = Math.min(this.state.computerShield, amount);
                this.state.computerShield -= shieldDamage;
                amount -= shieldDamage;
            }
            this.state.computerLife = Math.max(0, this.state.computerLife - amount);
        }
    }
    
    healPlayer(player, amount) {
        if (player === 'player') {
            this.state.playerLife = Math.min(this.state.playerMaxLife, this.state.playerLife + amount);
        } else {
            this.state.computerLife = Math.min(this.state.computerMaxLife, this.state.computerLife + amount);
        }
    }
    
    checkForDefeatedCards() {
        // Check player field
        for (let i = 0; i < this.state.playerField.length; i++) {
            const card = this.state.playerField[i];
            if (card && card.currentHp <= 0) {
                this.addMessage(`Your ${card.name} was defeated!`);
                this.state.playerField[i] = null;
            }
        }
        
        // Check computer field
        for (let i = 0; i < this.state.computerField.length; i++) {
            const card = this.state.computerField[i];
            if (card && card.currentHp <= 0) {
                this.addMessage(`Computer's ${card.name} was defeated!`);
                this.state.computerField[i] = null;
            }
        }
    }
    
    checkWinCondition() {
        if (this.state.playerLife <= 0) {
            this.addMessage('GAME OVER! Computer wins!', true);
            this.endGame('computer');
        } else if (this.state.computerLife <= 0) {
            this.addMessage('VICTORY! You win!', true);
            this.endGame('player');
        }
    }
    
    endGame(winner) {
        // Disable all game controls
        this.state.gameOver = true;
        document.getElementById('draw-card-btn').disabled = true;
        document.getElementById('end-turn-btn').disabled = true;
        
        // Show game over modal
        setTimeout(() => {
            const modal = document.getElementById('game-over-modal');
            const title = document.getElementById('game-over-title');
            const message = document.getElementById('game-over-message');
            
            if (winner === 'player') {
                title.textContent = '🎉 VICTORY! 🎉';
                title.style.color = '#4caf50';
                message.textContent = 'Congratulations! You defeated the computer!';
            } else {
                title.textContent = '💔 DEFEAT 💔';
                title.style.color = '#ff6b6b';
                message.textContent = 'The computer has won this battle. Try again!';
            }
            
            modal.classList.remove('hidden');
        }, 500);
    }
    
    startNewGameFromGameOver() {
        document.getElementById('game-over-modal').classList.add('hidden');
        this.startNewGame();
    }
    
    backToMenuFromGameOver() {
        document.getElementById('game-over-modal').classList.add('hidden');
        this.backToMenu();
    }
    
    closeModal() {
        document.getElementById('card-modal').classList.add('hidden');
        this.state.selectedCard = null;
    }
    
    showCardInfoModal(card, player, location, index) {
        // Show read-only card information (for opponent's cards)
        const modal = document.getElementById('card-modal');
        const details = document.getElementById('modal-card-details');
        const actions = document.getElementById('modal-actions');
        
        details.innerHTML = this.generateCardHTML(card, false, location);
        actions.innerHTML = '';
        
        // Show card information
        const infoDiv = document.createElement('div');
        infoDiv.style.padding = '15px';
        infoDiv.style.background = 'rgba(255, 255, 255, 0.2)';
        infoDiv.style.borderRadius = '8px';
        infoDiv.style.fontSize = '0.95em';
        infoDiv.style.lineHeight = '1.6';
        
        let infoHTML = `<h3 style="margin-top: 0; margin-bottom: 10px;">Card Information</h3>`;
        infoHTML += `<p><strong>Name:</strong> ${card.name} of ${card.suit}</p>`;
        infoHTML += `<p><strong>HP:</strong> ${card.currentHp}/${card.maxHp}</p>`;
        infoHTML += `<p><strong>Attack:</strong> ${card.attack}</p>`;
        if (card.shield > 0) {
            infoHTML += `<p><strong>Shield:</strong> ${card.shield}</p>`;
        }
        
        infoHTML += `<p><strong>Abilities:</strong></p><ul style="margin: 5px 0; padding-left: 20px;">`;
        card.abilities.filter(ab => ab !== 'faceAbility').forEach(ability => {
            infoHTML += `<li>${this.getAbilityDescription(card, ability)}</li>`;
        });
        infoHTML += `</ul>`;
        
        // Show passive face ability info if it's a face card
        if (card.value >= 11 && card.abilities.includes('faceAbility')) {
            infoHTML += `<p style="margin-top: 10px;"><strong>Passive Ability:</strong><br>${this.getFaceAbilityTooltip(card)}</p>`;
        }
        
        if (card.usedAbilities.length > 0) {
            infoHTML += `<p style="margin-top: 10px; color: #ffd700;"><strong>Used Abilities:</strong> ${card.usedAbilities.join(', ')}</p>`;
        }
        
        infoDiv.innerHTML = infoHTML;
        actions.appendChild(infoDiv);
        
        modal.classList.remove('hidden');
    }
    
    getAbilityDescription(card, ability) {
        switch (ability) {
            case 'attack':
                return `Attack (${card.attack} damage)`;
            case 'heal':
                return `Heal (${card.value} HP)`;
            case 'shield':
                return `Shield (${card.value})`;
            case 'damage':
                return `Direct Damage (${Math.ceil(card.value / 2)})`;
            case 'draw':
                return `Draw Cards (${Math.ceil(card.value / 3)})`;
            case 'wildcard':
                return `Wild Card (Copy any ability from your field)`;
            case 'faceAbility':
                return `Special Face Ability`;
            default:
                return ability;
        }
    }
    
    getFaceAbilityTooltip(card) {
        const suit = card.suit;
        const value = card.value;
        
        if (value === 11) { // Jack
            if (suit === 'hearts') {
                return 'All Hearts cards on field gain +1 max HP';
            } else if (suit === 'diamonds') {
                return 'All Diamonds cards on field gain +1 shield';
            } else if (suit === 'spades') {
                return 'All Spades cards on field gain +1 damage';
            } else if (suit === 'clubs') {
                return 'All Clubs cards gain bonus draw ability';
            }
        } else if (value === 12) { // Queen
            if (suit === 'hearts') {
                return 'All Hearts cards on field gain +1 extra healing for healing ability';
            } else if (suit === 'diamonds') {
                return 'All Diamonds cards on field gain +1 extra shielding for shielding ability';
            } else if (suit === 'spades') {
                return 'All Spades cards on field gain +1 damage';
            } else if (suit === 'clubs') {
                return 'All Clubs cards gain enhanced utility';
            }
        } else if (value === 13) { // King
            if (suit === 'hearts') {
                return 'All Hearts on field gain +1 extra damage for damage ability';
            } else if (suit === 'diamonds') {
                return 'All Diamonds on field gain +1 extra damage for damage ability';
            } else if (suit === 'spades') {
                return 'All Spades cards on field gain +1 damage';
            } else if (suit === 'clubs') {
                return 'All Clubs cards gain maximum utility bonus';
            }
        }
        
        return null;
    }
    
    generateCardHTML(card, isBack = false, location = 'field') {
        if (isBack) {
            return '<div class="card card-back">🎴</div>';
        }
        
        const usedAbilitiesText = card.usedAbilities.length > 0 ? 
            `<div style="font-size: 0.7em; color: #999;">Used: ${card.usedAbilities.join(', ')}</div>` : '';
        
        let faceAbilityStatus = '';
        if (card.value >= 11 && card.abilities.includes('faceAbility')) {
            if (location === 'field') {
                faceAbilityStatus = `<div style="font-size: 0.65em; color: #ffd700; font-weight: bold;">⭐ Passive Active</div>`;
            } else {
                faceAbilityStatus = `<div style="font-size: 0.65em; color: #999; font-weight: bold;">⚪ Passive Inactive</div>`;
            }
        }
        
        return `
            <div class="card ${card.suit}">
                <div class="card-header">
                    <span>${card.name}</span>
                    <span class="card-suit-icon">${SUIT_ICONS[card.suit]}</span>
                </div>
                <div class="card-stats">
                    <div class="stat">
                        <span class="stat-label">HP</span>
                        <span>${card.currentHp}/${card.maxHp}</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">ATK</span>
                        <span>${card.attack}</span>
                    </div>
                    ${card.shield > 0 ? `<div class="stat"><span class="stat-label">SHD</span><span>${card.shield}</span></div>` : ''}
                </div>
                <div class="card-abilities">
                    ${card.abilities.filter(ab => ab !== 'faceAbility').map(ab => `<div class="ability">${this.getAbilityDescription(card, ab)}</div>`).join('')}
                </div>
                ${faceAbilityStatus}
                ${usedAbilitiesText}
            </div>
        `;
    }
    
    updateUI() {
        // Update life points
        document.getElementById('player-life').textContent = this.state.playerLife;
        document.getElementById('player-shield').textContent = this.state.playerShield;
        document.getElementById('computer-life').textContent = this.state.computerLife;
        document.getElementById('computer-shield').textContent = this.state.computerShield;
        
        // Update deck counts
        document.getElementById('player-deck-count').textContent = this.state.playerDeck.length;
        document.getElementById('computer-hand-count').textContent = this.state.computerHand.length;
        
        // Update turn indicator
        const turnText = document.getElementById('turn-text');
        const turnIndicator = document.getElementById('turn-indicator');
        
        if (this.state.currentTurn === 'player') {
            turnText.textContent = 'Your Turn';
            turnIndicator.className = 'turn-indicator player-turn';
            document.getElementById('draw-card-btn').disabled = this.state.hasDrawnThisTurn || this.state.playerActions <= 0;
            document.getElementById('end-turn-btn').disabled = false;
        } else {
            turnText.textContent = "Computer's Turn";
            turnIndicator.className = 'turn-indicator computer-turn';
            document.getElementById('draw-card-btn').disabled = true;
            document.getElementById('end-turn-btn').disabled = true;
        }
        
        // Update energy display
        this.updateEnergyDisplay();
        
        // Update player hand
        const handContainer = document.getElementById('player-hand');
        handContainer.innerHTML = '';
        
        this.state.playerHand.forEach((card, index) => {
            const cardEl = document.createElement('div');
            cardEl.innerHTML = this.generateCardHTML(card, false, 'hand');
            const cardDiv = cardEl.firstElementChild;
            
            // Make card draggable
            cardDiv.draggable = true;
            cardDiv.dataset.handIndex = index;
            
            cardDiv.addEventListener('click', () => {
                this.showCardModal(card, 'player', 'hand', index);
            });
            
            // Drag events for card
            cardDiv.addEventListener('dragstart', (e) => {
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('cardIndex', index);
                e.dataTransfer.setData('source', 'hand');
                cardDiv.style.opacity = '0.5';
            });
            
            cardDiv.addEventListener('dragend', (e) => {
                cardDiv.style.opacity = '1';
            });
            
            handContainer.appendChild(cardEl);
        });
        
        // Update fields
        this.updateField('player');
        this.updateField('computer');
    }
    
    updateEnergyDisplay() {
        // Update player energy display
        const playerEnergyOrbs = document.getElementById('player-energy-orbs');
        playerEnergyOrbs.innerHTML = '';
        
        for (let i = 0; i < this.state.maxActions; i++) {
            const orb = document.createElement('div');
            orb.className = 'energy-orb';
            
            if (i >= this.state.playerActions) {
                orb.classList.add('used');
            }
            
            playerEnergyOrbs.appendChild(orb);
        }
        
        // Update computer energy display
        const computerEnergyOrbs = document.getElementById('computer-energy-orbs');
        computerEnergyOrbs.innerHTML = '';
        
        for (let i = 0; i < this.state.maxActions; i++) {
            const orb = document.createElement('div');
            orb.className = 'energy-orb';
            
            if (i >= this.state.computerActions) {
                orb.classList.add('used');
            }
            
            computerEnergyOrbs.appendChild(orb);
        }
    }
    
    updateField(player) {
        const field = player === 'player' ? this.state.playerField : this.state.computerField;
        const fieldContainer = document.getElementById(`${player}-field`);
        
        field.forEach((card, index) => {
            const slot = fieldContainer.querySelector(`[data-slot="${index}"]`);
            slot.innerHTML = '';
            slot.classList.toggle('empty', card === null);
            
            // Add drag-and-drop for player's empty slots
            if (player === 'player' && this.state.currentTurn === 'player') {
                // Dragover event
                slot.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = 'move';
                    if (card === null) {
                        slot.style.background = 'rgba(76, 175, 80, 0.3)';
                        slot.style.borderColor = '#4caf50';
                    }
                });
                
                // Dragleave event
                slot.addEventListener('dragleave', (e) => {
                    slot.style.background = '';
                    slot.style.borderColor = '';
                });
                
                // Drop event
                slot.addEventListener('drop', (e) => {
                    e.preventDefault();
                    slot.style.background = '';
                    slot.style.borderColor = '';
                    
                    const cardIndex = parseInt(e.dataTransfer.getData('cardIndex'));
                    const source = e.dataTransfer.getData('source');
                    
                    if (source === 'hand' && card === null) {
                        this.playCard('player', cardIndex, index);
                    }
                });
            }
            
            if (card) {
                const cardEl = document.createElement('div');
                cardEl.innerHTML = this.generateCardHTML(card, false, 'field');
                
                // Add click event for both player and computer cards
                if (player === 'player') {
                    cardEl.firstElementChild.addEventListener('click', () => {
                        // Only show modal if not selecting a target
                        if (!this.isSelectingTarget) {
                            this.showCardModal(card, player, 'field', index);
                        }
                    });
                } else {
                    // Allow viewing opponent's cards (read-only)
                    cardEl.firstElementChild.addEventListener('click', () => {
                        // Only show modal if not selecting a target
                        if (!this.isSelectingTarget) {
                            this.showCardInfoModal(card, player, 'field', index);
                        }
                    });
                }
                
                slot.appendChild(cardEl);
            }
        });
    }
    
    addMessage(text, important = false) {
        const messagesContainer = document.getElementById('game-messages');
        const message = document.createElement('div');
        message.className = `message${important ? ' important' : ''}`;
        message.textContent = text;
        messagesContainer.appendChild(message);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Keep only last 10 messages
        while (messagesContainer.children.length > 10) {
            messagesContainer.removeChild(messagesContainer.firstChild);
        }
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// ===== INITIALIZE GAME =====

let game;

window.addEventListener('DOMContentLoaded', () => {
    game = new Game();
});
