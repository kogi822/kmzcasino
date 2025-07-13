// Copy button functionality
// (pozostawiam całą logikę, ale usuwam wszelkie nadpisywanie .hero-title)
document.addEventListener('DOMContentLoaded', function() {
    // Copy buttons for DNS servers
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dnsServer = this.previousElementSibling.textContent;
            navigator.clipboard.writeText(dnsServer).then(() => {
                const originalText = this.textContent;
                this.textContent = 'Skopiowano!';
                this.style.background = 'rgba(102, 126, 234, 0.4)';
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = 'rgba(102, 126, 234, 0.2)';
                }, 2000);
            }).catch(err => {
                console.error('Nie udało się skopiować: ', err);
            });
        });
    });

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.offer-card, .social-card, .money-card, .method-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Parallax effect for floating cards
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            card.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
        });
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .btn-primary, .btn-secondary {
            position: relative;
            overflow: hidden;
        }
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        .fade-in {
            animation: fadeIn 0.8s ease-out;
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        body.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);

    // Dynamic language detection and switching
    const lang = (navigator.language || navigator.userLanguage || 'pl').toLowerCase();
    if (lang.startsWith('en')) {
        // Example: change main CTA and FAQ to English
        document.querySelectorAll('.casino-offer-btn').forEach(btn => {
            if (btn.textContent.includes('Dowiedz się więcej')) btn.textContent = 'Learn more';
            if (btn.textContent.includes('CLAIM BONUSES')) btn.textContent = 'CLAIM BONUSES';
        });
        const faq = document.querySelector('.faq-section');
        if (faq) {
            faq.querySelector('h2').textContent = 'FAQ – Frequently Asked Questions';
            const items = faq.querySelectorAll('.faq-item');
            if (items[0]) {
                items[0].querySelector('h3').textContent = 'How to claim a bonus?';
                items[0].querySelector('p').textContent = 'Choose a casino, copy the code and click "Claim Bonuses". Register, enter the code during registration or deposit and get your bonus!';
            }
            if (items[1]) {
                items[1].querySelector('h3').textContent = 'Are bonuses available for new players?';
                items[1].querySelector('p').textContent = 'Yes, all offers are for new users.';
            }
            if (items[2]) {
                items[2].querySelector('h3').textContent = 'Can I claim more than one bonus?';
                items[2].querySelector('p').textContent = 'Yes, you can use each offer by registering at different casinos.';
            }
        }
        const reviews = document.querySelector('.reviews-section');
        if (reviews) {
            reviews.querySelector('h2').textContent = 'User Reviews';
            const revs = reviews.querySelectorAll('.review-item');
            if (revs[0]) revs[0].querySelector('p').textContent = '“Bonus received without problems, quick registration!”';
            if (revs[0]) revs[0].querySelector('span').textContent = '— Michael';
            if (revs[1]) revs[1].querySelector('p').textContent = '“Best casino selection, everything in one place.”';
            if (revs[1]) revs[1].querySelector('span').textContent = '— Kate';
            if (revs[2]) revs[2].querySelector('p').textContent = '“Code works, recommended!”';
            if (revs[2]) revs[2].querySelector('span').textContent = '— Peter';
        }
    }
});

// Usuwam animację typu typewriter i counter na hero-title, by nie nadpisywać HTML
document.addEventListener('DOMContentLoaded', function() {
    // Pozostawiam tylko countery na bonusach, jeśli są liczby
    const percentages = document.querySelectorAll('.percentage');
    percentages.forEach(percentage => {
        const target = parseInt(percentage.textContent);
        let current = 0;
        const increment = target / 50;
        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(counter);
            }
            percentage.textContent = Math.floor(current) + '%';
        }, 50);
    });
    document.querySelectorAll('.casino-offer.fade-in-up.invisible').forEach(el => {
        el.classList.remove('invisible');
    });
}); 