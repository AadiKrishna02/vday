// Emoji array for the background
const emojis = ['💕', '💖', '💗', '💓', '💝', '💘', '💞', '💟', '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💋', '🌹', '🌷', '🌺', '🌸', '🌻', '🌼', '💐', '🎀', '🎁', '🎈', '🎉', '🎊', '✨', '⭐', '🌟', '💫', '🦄', '🐰', '🐻', '🐱', '🐶', '🦋', '🍓', '🍒', '🍑', '🍰', '🍫', '🍬', '🍭', '🧁', '🍪', '🥰', '😍', '😘', '🥳', '😊', '😇', '🤗', '🤩', '😻', '💌', '💍', '👑', '🏆', '🎯', '💯', '🔥', '💎'];

// Create emoji rain
function createEmojiRain() {
    const emojiContainer = document.querySelector('.emoji-rain');
    const numEmojis = 100; // More emojis for celebration!
    
    for (let i = 0; i < numEmojis; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.animationDelay = Math.random() * 15 + 's';
        emoji.style.animationDuration = (Math.random() * 10 + 10) + 's';
        emojiContainer.appendChild(emoji);
    }
}

// Create confetti effect
function createConfetti() {
    const colors = ['#ff6b9d', '#ff8fab', '#ffb3d1', '#ffc0cb', '#ffd1dc', '#ffe4e1', '#fff0f5', '#ff69b4', '#ff1493', '#ff00ff'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
    }
}

// Animate celebration emojis with different delays
function animateCelebrationEmojis() {
    const celebrationEmojis = document.querySelectorAll('.celebration-emoji');
    celebrationEmojis.forEach((emoji, index) => {
        emoji.style.animationDelay = (index * 0.1) + 's';
        emoji.style.animation = `spin ${2 + Math.random()}s linear infinite`;
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    createEmojiRain();
    createConfetti();
    animateCelebrationEmojis();
    
    // Add some sparkle effects
    setInterval(() => {
        const sparkles = ['✨', '⭐', '🌟', '💫'];
        const sparkle = document.createElement('div');
        sparkle.className = 'emoji';
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.position = 'fixed';
        sparkle.style.animation = 'float 2s ease-out forwards';
        sparkle.style.fontSize = '3rem';
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }, 500);
});