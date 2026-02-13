// Emoji array for the background
const emojis = ['💕', '💖', '💗', '💓', '💝', '💘', '💞', '💟', '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💋', '🌹', '🌷', '🌺', '🌸', '🌻', '🌼', '💐', '🎀', '🎁', '🎈', '🎉', '🎊', '✨', '⭐', '🌟', '💫', '🦄', '🐰', '🐻', '🐱', '🐶', '🦋', '🍓', '🍒', '🍑', '🍰', '🍫', '🍬', '🍭', '🧁', '🍪', '🥰', '😍', '😘', '🥳', '😊', '😇', '🤗', '🤩', '😻', '💌', '💍', '👑', '🏆', '🎯', '💯', '🔥', '💎', '🌙', '☀️', '🌈', '☁️', '💐', '🌺', '🌹', '🌷', '🌸', '🌻', '🌼', '🌿', '🍀', '🌱', '🌳', '🌲', '🌴', '🌵', '🌾', '🌿', '🍃', '🍂', '🍁', '🌰', '🌍', '🌎', '🌏', '🌐', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌙', '🌚', '🌛', '🌜', '🌝', '🌞', '⭐', '🌟', '💫', '✨', '⚡', '☄️', '💥', '🔥', '💧', '💦', '💨', '❄️', '☃️', '⛄', '🌊', '🌋', '🌌', '🌍', '🌎', '🌏', '🌐', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌙', '🌚', '🌛', '🌜', '🌝', '🌞', '⭐', '🌟', '💫', '✨', '⚡', '☄️', '💥', '🔥', '💧', '💦', '💨', '❄️', '☃️', '⛄', '🌊', '🌋', '🌌'];

// Create emoji rain
function createEmojiRain() {
    const emojiContainer = document.querySelector('.emoji-rain');
    const numEmojis = 50;
    
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

// Make the "No" button escape
function setupNoButton() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    
    // Track current scale
    let currentScale = 1;
    
    // Function to move button to a safe random position
    function moveButtonToSafePosition() {
        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Get button dimensions (accounting for current scale)
        // Using a fixed size estimate to be safe: approx 150px wide, 60px tall when at scale 1
        const baseWidth = 200;
        const baseHeight = 80;
        const buttonWidth = baseWidth * currentScale;
        const buttonHeight = baseHeight * currentScale;
        
        // Safety padding from edges
        const padding = 30;
        
        // Calculate safe area for positioning
        const safeWidth = viewportWidth - buttonWidth - (2 * padding);
        const safeHeight = viewportHeight - buttonHeight - (2 * padding);
        
        // If there's not enough space, use minimal padding
        const minX = padding;
        const maxX = viewportWidth - buttonWidth - padding;
        const minY = padding;
        const maxY = viewportHeight - buttonHeight - padding;
        
        // Ensure max is greater than min
        const effectiveMaxX = Math.max(minX + 50, maxX);
        const effectiveMaxY = Math.max(minY + 50, maxY);
        
        // Generate random position within safe bounds
        let randomX = minX + Math.random() * (effectiveMaxX - minX);
        let randomY = minY + Math.random() * (effectiveMaxY - minY);
        
        // Absolutely ensure values are within viewport
        randomX = Math.max(padding, Math.min(randomX, viewportWidth - buttonWidth - padding));
        randomY = Math.max(padding, Math.min(randomY, viewportHeight - buttonHeight - padding));
        
        // Apply position
        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        noBtn.style.zIndex = '1000';
        
        // Force clamp after a delay to catch any overflow
        setTimeout(() => {
            const rect = noBtn.getBoundingClientRect();
            let left = parseFloat(noBtn.style.left);
            let top = parseFloat(noBtn.style.top);
            
            // Check if button is outside viewport and fix it
            if (rect.right > viewportWidth - 10) {
                left = viewportWidth - rect.width - padding;
            }
            if (rect.bottom > viewportHeight - 10) {
                top = viewportHeight - rect.height - padding;
            }
            if (rect.left < 10) {
                left = padding;
            }
            if (rect.top < 10) {
                top = padding;
            }
            
            noBtn.style.left = left + 'px';
            noBtn.style.top = top + 'px';
        }, 350);
    }
    
    // Try to escape on hover
    noBtn.addEventListener('mouseenter', function() {
        noBtn.style.transition = 'all 0.3s ease';
        moveButtonToSafePosition();
    });
    
    // Also try to escape on click attempt
    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Make button smaller each time it's clicked
        currentScale = currentScale * 0.9;
        noBtn.style.transform = `scale(${currentScale})`;
        noBtn.style.transition = 'all 0.2s ease';
        
        // Move after a tiny delay to account for scale change
        setTimeout(() => {
            moveButtonToSafePosition();
        }, 50);
    });
    
    // Keep button in bounds on window resize
    window.addEventListener('resize', function() {
        if (noBtn.style.position === 'fixed') {
            moveButtonToSafePosition();
        }
    });
}

// Handle Yes button click
function setupYesButton() {
    const yesBtn = document.getElementById('yesBtn');
    yesBtn.addEventListener('click', function() {
        window.location.href = 'celebration.html';
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    createEmojiRain();
    setupNoButton();
    setupYesButton();
});