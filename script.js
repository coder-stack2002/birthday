/* =========================================================
   FOR UMA - 14TH SEPTEMBER 24TH BIRTHDAY SURPRISE SCRIPT
   Bilingual, Mature, Deep Love Tone
   ========================================================= */

// Smooth Scroll
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

// Background Music
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = document.getElementById('musicIcon');
let isMusicActive = false;

function toggleMusic() {
    if (!bgMusic) return;
    if (bgMusic.paused) {
        bgMusic.play().then(() => {
            isMusicActive = true;
            musicToggle.classList.add('playing');
            if (musicIcon) musicIcon.textContent = '🎵';
        }).catch(() => {});
    } else {
        bgMusic.pause();
        isMusicActive = false;
        musicToggle.classList.remove('playing');
        if (musicIcon) musicIcon.textContent = '🔇';
    }
}

if (musicToggle) {
    musicToggle.addEventListener('click', toggleMusic);
}

// Start music on first tap anywhere
document.addEventListener('click', function onFirstUserTap() {
    if (bgMusic && bgMusic.paused && !isMusicActive) {
        bgMusic.volume = 0.4;
        bgMusic.play().then(() => {
            isMusicActive = true;
            if (musicToggle) musicToggle.classList.add('playing');
            if (musicIcon) musicIcon.textContent = '🎵';
        }).catch(() => {});
    }
}, { once: true });


// ==================== SEQUENTIAL CELEBRATION FLOW ====================
let currentStep = 1; // 1: Blow Candles, 2: Cut Cake, 3: Open Gifts
let candlesBlown = false;
let cakeCut = false;
const openedGifts = new Set();

// Surprise Gift Box Contents (Mature, Deep Love, Pure English)
const giftData = {
    1: {
        icon: '🕊️',
        tag: 'Surprise Box 1 • Sanctuary',
        title: 'A Safe Sanctuary',
        text: 'In a world full of noise, rush, and expectations, you are the one place where I find genuine stillness and peace. With you, I never have to measure my words or put on a mask. Your presence brings an effortless calm that no one else can ever replicate. Thank you for simply being you.'
    },
    2: {
        icon: '💎',
        tag: 'Surprise Box 2 • Trust & Respect',
        title: 'Unbreakable Trust',
        text: 'More than anything, what I cherish most between us is our quiet, unwavering trust. You are my true confidante, my best friend, and my anchor. Knowing that I can share my deepest thoughts and vulnerabilities with you without hesitation is the greatest gift in my life.'
    },
    3: {
        icon: '🌟',
        tag: 'Surprise Box 3 • A Promise For Tomorrow',
        title: 'Walking Into Tomorrow',
        text: 'As you step into this 24th year of life, my only promise is that whatever chapters unfold—the milestones, the dreams, the challenges, and the quiet everyday moments—I will always stand beside you, supporting your growth, honoring your ambitions, and cheering for your happiness with all my heart.'
    }
};

// Cake tap handler based on current active step
function handleCakeTap() {
    if (currentStep === 1) {
        blowCandles();
    } else if (currentStep === 2) {
        cutTheCake();
    } else {
        scrollToSection('giftsSection');
    }
}

// Action button handler based on current active step
function handleFlowAction() {
    if (currentStep === 1) {
        blowCandles();
    } else if (currentStep === 2) {
        cutTheCake();
    } else {
        scrollToSection('giftsSection');
    }
}

// STEP 1: Blow 24 Candles
function blowCandles() {
    const flame1 = document.getElementById('flame1');
    const flame2 = document.getElementById('flame2');
    const wishReveal = document.getElementById('wishReveal');
    const flowBadge = document.getElementById('flowBadge');
    const flowTitle = document.getElementById('flowTitle');
    const flowDesc = document.getElementById('flowDesc');
    const flowActionBtn = document.getElementById('flowActionBtn');
    const cakeKnife = document.getElementById('cakeKnife');

    const stepPill1 = document.getElementById('stepPill1');
    const stepDiv1 = document.getElementById('stepDiv1');
    const stepPill2 = document.getElementById('stepPill2');

    if (!candlesBlown) {
        candlesBlown = true;
        currentStep = 2;

        if (flame1) flame1.classList.add('blown');
        if (flame2) flame2.classList.add('blown');

        // Reveal candle wish banner
        if (wishReveal) wishReveal.classList.add('active');

        // Start background music if not playing
        if (bgMusic && bgMusic.paused) {
            bgMusic.volume = 0.4;
            bgMusic.play().then(() => {
                isMusicActive = true;
                if (musicToggle) musicToggle.classList.add('playing');
            }).catch(() => {});
        }

        // Fire festive celebration confetti
        fireConfetti();

        // Update Stepper to Step 2
        if (stepPill1) {
            stepPill1.classList.remove('active');
            stepPill1.classList.add('completed');
        }
        if (stepDiv1) stepDiv1.classList.add('active');
        if (stepPill2) stepPill2.classList.add('active');

        // Bring out the Ceremonial Knife
        if (cakeKnife) {
            setTimeout(() => {
                cakeKnife.classList.add('ready');
            }, 500);
        }

        // Update instructions for Step 2
        setTimeout(() => {
            if (flowBadge) flowBadge.textContent = 'Step 2 • Cut the Birthday Cake 🍰';
            if (flowTitle) flowTitle.textContent = 'Now Cut Your Cake, Uma 🍰';
            if (flowDesc) flowDesc.textContent = 'Tap the floating golden knife or the cake to slice your first piece!';
            if (flowActionBtn) {
                flowActionBtn.textContent = '🔪 Cut The Birthday Cake';
                flowActionBtn.style.background = 'linear-gradient(135deg, #ffd166, #ffb703)';
                flowActionBtn.style.color = '#1a0826';
            }
        }, 800);
    } else if (!cakeCut) {
        cutTheCake();
    } else {
        fireConfetti();
    }
}

// STEP 2: Cut the Cake with Knife & Detach Slice
function cutTheCake() {
    const cakeKnife = document.getElementById('cakeKnife');
    const cutSeam = document.getElementById('cutSeam');
    const cakeSliceCut = document.getElementById('cakeSliceCut');
    const cakeCutMsg = document.getElementById('cakeCutMsg');
    const flowBadge = document.getElementById('flowBadge');
    const flowTitle = document.getElementById('flowTitle');
    const flowDesc = document.getElementById('flowDesc');
    const flowActionBtn = document.getElementById('flowActionBtn');

    const stepPill2 = document.getElementById('stepPill2');
    const stepDiv2 = document.getElementById('stepDiv2');
    const stepPill3 = document.getElementById('stepPill3');

    if (!cakeCut) {
        cakeCut = true;
        currentStep = 3;

        // Animate knife slicing through
        if (cakeKnife) {
            cakeKnife.classList.remove('ready');
            cakeKnife.classList.add('cutting');
        }

        // Show seam line on top layer
        if (cutSeam) {
            setTimeout(() => {
                cutSeam.classList.add('sliced');
            }, 400);
        }

        // Detach and slide out the cake slice
        setTimeout(() => {
            if (cakeSliceCut) cakeSliceCut.classList.add('detached');
            if (cakeCutMsg) cakeCutMsg.classList.add('active');
            fireConfetti();

            // Update Stepper to Step 3
            if (stepPill2) {
                stepPill2.classList.remove('active');
                stepPill2.classList.add('completed');
            }
            if (stepDiv2) stepDiv2.classList.add('active');
            if (stepPill3) stepPill3.classList.add('active');

            // Update instructions for Step 3
            if (flowBadge) flowBadge.textContent = 'Step 3 • Open Your Gift Boxes 🎁';
            if (flowTitle) flowTitle.textContent = 'Your Surprises Await! 🎁';
            if (flowDesc) flowDesc.textContent = 'The first slice is served with love! Scroll down or tap below to open your 3 gift boxes.';
            if (flowActionBtn) {
                flowActionBtn.textContent = '🎁 Open Birthday Gift Boxes ✨';
                flowActionBtn.style.background = 'linear-gradient(135deg, #ff477e, #ff007a)';
                flowActionBtn.style.color = '#fff';
            }
        }, 900);
    } else {
        fireConfetti();
        scrollToSection('giftsSection');
    }
}

// STEP 3: 3D Gift Boxes & Modal Dialog
function openGiftBox(boxNum) {
    const box = document.getElementById(`giftBox${boxNum}`);
    const item = document.getElementById(`giftItem${boxNum}`);
    const statusPill = document.getElementById(`giftStatus${boxNum}`);

    // Animate box open
    if (box) box.classList.add('opened');
    if (item) item.classList.add('is-opened');
    if (statusPill) statusPill.textContent = '✨ Opened';

    // Track opened set
    openedGifts.add(boxNum);

    // Fire star sparkles
    fireConfetti();

    // Populate and show 3D modal
    const modal = document.getElementById('giftModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTag = document.getElementById('modalTag');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const data = giftData[boxNum];

    if (data && modal) {
        if (modalIcon) modalIcon.textContent = data.icon;
        if (modalTag) modalTag.textContent = data.tag;
        if (modalTitle) modalTitle.textContent = data.title;
        if (modalText) modalText.textContent = data.text;

        setTimeout(() => {
            modal.classList.add('active');
        }, 300);
    }

    // Check if all 3 boxes have been opened
    if (openedGifts.size === 3) {
        const stepPill3 = document.getElementById('stepPill3');
        const allUnlocked = document.getElementById('allGiftsUnlocked');
        if (stepPill3) stepPill3.classList.add('completed');
        if (allUnlocked) {
            setTimeout(() => {
                allUnlocked.classList.add('active');
                fireConfetti();
            }, 600);
        }
    }
}

function closeGiftModal(e) {
    if (e && e.target !== document.getElementById('giftModal') && !e.target.classList.contains('gift-modal-close') && !e.target.classList.contains('btn-modal-action')) {
        return;
    }
    const modal = document.getElementById('giftModal');
    if (modal) modal.classList.remove('active');

    // If all gifts are opened, guide user to the letter
    if (openedGifts.size === 3) {
        const allUnlocked = document.getElementById('allGiftsUnlocked');
        if (allUnlocked) allUnlocked.classList.add('active');
    }
}



// ==================== FINALE CELEBRATION ====================
function launchCelebration() {
    fireConfetti();
    if (bgMusic && bgMusic.paused) {
        bgMusic.play().catch(() => {});
    }
}


// ==================== CONFETTI CANNON ====================
const confettiCanvas = document.getElementById('confettiCanvas');
let confettiCtx = null;
let particles = [];
let animId = null;

if (confettiCanvas) {
    confettiCtx = confettiCanvas.getContext('2d');
    function resizeCanvas() {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
}

function fireConfetti() {
    if (!confettiCtx) return;
    const colors = ['#ff477e', '#ff007a', '#ffd166', '#fce7f3', '#7928ca', '#ffffff', '#00f5d4'];
    
    for (let i = 0; i < 90; i++) {
        particles.push({
            x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
            y: window.innerHeight * 0.4,
            vx: (Math.random() - 0.5) * 16,
            vy: (Math.random() - 0.8) * 18,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 4,
            rotation: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 10,
            alpha: 1,
            gravity: 0.38
        });
    }

    if (!animId) animateConfetti();
}

function animateConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotSpeed;
        p.alpha -= 0.009;

        if (p.alpha <= 0 || p.y > confettiCanvas.height) {
            particles.splice(i, 1);
            continue;
        }

        confettiCtx.save();
        confettiCtx.globalAlpha = p.alpha;
        confettiCtx.translate(p.x, p.y);
        confettiCtx.rotate((p.rotation * Math.PI) / 180);
        confettiCtx.fillStyle = p.color;
        confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        confettiCtx.restore();
    }

    if (particles.length > 0) {
        animId = requestAnimationFrame(animateConfetti);
    } else {
        animId = null;
    }
}


// ==================== READING PROGRESS BAR ====================
window.addEventListener('scroll', () => {
    const bar = document.getElementById('progressBar');
    if (!bar) return;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (window.scrollY / docH) * 100;
    bar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
});


// ==================== 1. SMOOTH SCROLL REVEAL OBSERVER ====================
document.addEventListener('DOMContentLoaded', () => {
    const revealItems = document.querySelectorAll('.reveal-item');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealItems.forEach(item => observer.observe(item));
    } else {
        revealItems.forEach(item => item.classList.add('is-revealed'));
    }
});


// ==================== 2. AMBIENT GLOWING PARTICLES ENGINE ====================
const ambientCanvas = document.getElementById('ambientCanvas');
if (ambientCanvas) {
    const aCtx = ambientCanvas.getContext('2d');
    let aWidth = ambientCanvas.width = window.innerWidth;
    let aHeight = ambientCanvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        aWidth = ambientCanvas.width = window.innerWidth;
        aHeight = ambientCanvas.height = window.innerHeight;
    });

    const ambientParticles = [];
    const particleColors = [
        'rgba(255, 209, 102, ',   // Gold
        'rgba(255, 107, 139, ',   // Rose Pink
        'rgba(252, 231, 243, ',   // Soft Warm White
        'rgba(224, 170, 255, '    // Lavender
    ];

    for (let i = 0; i < 48; i++) {
        ambientParticles.push({
            x: Math.random() * aWidth,
            y: Math.random() * aHeight,
            radius: Math.random() * 2.5 + 0.8,
            baseAlpha: Math.random() * 0.45 + 0.2,
            alpha: 0.3,
            pulseSpeed: Math.random() * 0.02 + 0.008,
            pulseOffset: Math.random() * Math.PI * 2,
            speedY: Math.random() * 0.45 + 0.15,
            swaySpeed: Math.random() * 0.015 + 0.005,
            swayAmount: Math.random() * 1.5 + 0.5,
            colorBase: particleColors[Math.floor(Math.random() * particleColors.length)]
        });
    }

    let time = 0;
    function renderAmbient() {
        aCtx.clearRect(0, 0, aWidth, aHeight);
        time += 0.02;

        for (let i = 0; i < ambientParticles.length; i++) {
            const p = ambientParticles[i];

            // Float upward
            p.y -= p.speedY;
            p.x += Math.sin(time * p.swaySpeed + p.pulseOffset) * p.swayAmount * 0.3;

            // Loop smoothly from bottom
            if (p.y < -10) {
                p.y = aHeight + 10;
                p.x = Math.random() * aWidth;
            }
            if (p.x < -10) p.x = aWidth + 10;
            if (p.x > aWidth + 10) p.x = -10;

            // Pulsing glow alpha
            p.alpha = p.baseAlpha + Math.sin(time * p.pulseSpeed * 20 + p.pulseOffset) * 0.2;
            p.alpha = Math.max(0.05, Math.min(0.8, p.alpha));

            // Draw particle with soft halo
            const grad = aCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3.5);
            grad.addColorStop(0, p.colorBase + p.alpha + ')');
            grad.addColorStop(0.4, p.colorBase + (p.alpha * 0.5) + ')');
            grad.addColorStop(1, p.colorBase + '0)');

            aCtx.fillStyle = grad;
            aCtx.beginPath();
            aCtx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
            aCtx.fill();
        }

        requestAnimationFrame(renderAmbient);
    }

    renderAmbient();
}


// ==================== 3. INTERACTIVE FAIRY DUST SPARKLE TRAIL ====================
const sparkleTrailCanvas = document.getElementById('sparkleTrailCanvas');
if (sparkleTrailCanvas) {
    const sCtx = sparkleTrailCanvas.getContext('2d');
    let sWidth = sparkleTrailCanvas.width = window.innerWidth;
    let sHeight = sparkleTrailCanvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        sWidth = sparkleTrailCanvas.width = window.innerWidth;
        sHeight = sparkleTrailCanvas.height = window.innerHeight;
    });

    const sparkles = [];
    const sparkleSymbols = ['✨', '⭐', '💖', '🌟', '•'];
    const sparkleColors = ['#ffd166', '#ff6b8b', '#ff477e', '#ffffff', '#fce7f3'];

    let lastEmitTime = 0;

    function addSparkles(clientX, clientY, count = 2) {
        const now = Date.now();
        if (now - lastEmitTime < 24) return; // Throttle smooth 40fps emission
        lastEmitTime = now;

        for (let i = 0; i < count; i++) {
            if (sparkles.length > 70) sparkles.shift(); // Keep light and performant

            const isSymbol = Math.random() > 0.45;
            sparkles.push({
                x: clientX + (Math.random() - 0.5) * 16,
                y: clientY + (Math.random() - 0.5) * 16,
                vx: (Math.random() - 0.5) * 1.8,
                vy: (Math.random() - 0.7) * 1.8,
                size: isSymbol ? Math.random() * 10 + 10 : Math.random() * 3 + 2,
                color: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
                symbol: sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)],
                isSymbol: isSymbol,
                alpha: 1,
                decay: Math.random() * 0.025 + 0.02,
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 8
            });
        }
    }

    // Mouse Move (Desktop)
    window.addEventListener('mousemove', (e) => {
        addSparkles(e.clientX, e.clientY, 2);
    });

    // Touch Move (Mobile / Tablet)
    window.addEventListener('touchmove', (e) => {
        if (e.touches && e.touches[0]) {
            addSparkles(e.touches[0].clientX, e.touches[0].clientY, 2);
        }
    }, { passive: true });

    // Touch Start (Mobile Tap)
    window.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches[0]) {
            addSparkles(e.touches[0].clientX, e.touches[0].clientY, 4);
        }
    }, { passive: true });

    function renderSparkles() {
        sCtx.clearRect(0, 0, sWidth, sHeight);

        for (let i = sparkles.length - 1; i >= 0; i--) {
            const sp = sparkles[i];
            sp.x += sp.vx;
            sp.y += sp.vy;
            sp.rotation += sp.rotSpeed;
            sp.alpha -= sp.decay;

            if (sp.alpha <= 0) {
                sparkles.splice(i, 1);
                continue;
            }

            sCtx.save();
            sCtx.globalAlpha = Math.max(0, sp.alpha);
            sCtx.translate(sp.x, sp.y);
            sCtx.rotate((sp.rotation * Math.PI) / 180);

            if (sp.isSymbol) {
                sCtx.font = `${sp.size}px sans-serif`;
                sCtx.textAlign = 'center';
                sCtx.textBaseline = 'middle';
                sCtx.fillText(sp.symbol, 0, 0);
            } else {
                sCtx.fillStyle = sp.color;
                sCtx.shadowColor = sp.color;
                sCtx.shadowBlur = 8;
                sCtx.beginPath();
                sCtx.arc(0, 0, sp.size, 0, Math.PI * 2);
                sCtx.fill();
            }

            sCtx.restore();
        }

        requestAnimationFrame(renderSparkles);
    }

    renderSparkles();
}
