// Website loaded - no box animation
document.body.style.overflow = 'auto';

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Cards are already visible - no fade-in animation needed
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.fade-in-card');
    cards.forEach((card) => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    });
});

// Form Validation and Submit Handling
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const fullname = contactForm.querySelector('[name="fullname"]').value;
        const email = contactForm.querySelector('[name="email"]').value;
        const message = contactForm.querySelector('[name="message"]').value;
        
        if (!fullname || !email || !message) {
            e.preventDefault();
            alert('Please fill in all required fields');
            return false;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Sending... ⏳';
        submitBtn.disabled = true;
        
        // Re-enable after form submission
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 3000);
    });
}

// Add hover effect for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.1)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(1)';
    });
});

// Create STAR sparkle on click
document.addEventListener('click', function(e) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        pointer-events: none;
        font-size: 28px;
        z-index: 9999;
        animation: clickSparkle 1s ease-out forwards;
    `;
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
});

// Add click sparkle animation
const clickStyle = document.createElement('style');
clickStyle.textContent = `
    @keyframes clickSparkle {
        0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.5) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: translate(-50%, -200%) scale(0.3) rotate(360deg);
        }
    }
`;
document.head.appendChild(clickStyle);

console.log('🎁 Blyssy Hampers - Website Loaded Successfully!');