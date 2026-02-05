// Smooth scroll for navigation links
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

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Typing animation for hero title
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.getElementById('hero-typing');
    
    if (heroTitle) {
        const text = "Hi, I'm Mayela!";
        let index = 0;
        
        // Clear the text first
        heroTitle.textContent = '';
        
        function typeWriter() {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100); // Adjust speed here (lower = faster)
            } else {
                // Remove cursor after typing is done
                setTimeout(() => {
                    heroTitle.classList.add('typing-done');
                }, 4000); // Wait half a second before removing cursor
            }
        }
        
        // Start typing after a brief delay
        setTimeout(typeWriter, 300);
    }
});