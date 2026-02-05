// Character-by-character typewriter effect
function typeWriter(element, text, speed = 30) {
    let i = 0;
    element.innerHTML = ''; // Clear existing text
    element.classList.add('typing'); // Add typing class for cursor
    
    function type() {
        if (i < text.length) {
            // Handle HTML tags (like <br>)
            if (text.charAt(i) === '<') {
                const closingIndex = text.indexOf('>', i);
                if (closingIndex !== -1) {
                    element.innerHTML += text.substring(i, closingIndex + 1);
                    i = closingIndex + 1;
                    setTimeout(type, 0); // No delay for HTML tags
                    return;
                }
            }
            
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.classList.remove('typing'); // Remove cursor when done
        }
    }
    
    type();
}

// Trigger typewriter when element SCROLLS INTO viewport
const observerOptions = {
    threshold: 0.2,  // Trigger when 20% of element is visible
    rootMargin: '0px 0px -100px 0px'  // Trigger slightly before fully in view
};

let problemTextTriggered = false;
let solutionIntroTriggered = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            
            // PROBLEM SECTION - triggers when you scroll to it
            if (element.id === 'problem-text' && !problemTextTriggered) {
                problemTextTriggered = true;
                
                const problemText = document.getElementById('problem-text');
                
                if (problemText) {
                    const text = problemText.getAttribute('data-text');
                    typeWriter(problemText, text, 15);
                }
            }
            
            // SOLUTION SECTION - triggers when you scroll to it
            if (element.id === 'solution-intro' && !solutionIntroTriggered) {
                solutionIntroTriggered = true;
                
                const intro = document.getElementById('solution-intro');
                const details = document.getElementById('solution-details');
                
                if (intro && details) {
                    const introText = intro.getAttribute('data-text');
                    const detailsText = details.getAttribute('data-text');
                    
                    // Start both simultaneously when scrolled into view
                    typeWriter(intro, introText, 15);
                    typeWriter(details, detailsText, 15);
                }
            }
        }
    });
}, observerOptions);

// Initialize on page load - ONLY sets up observers, doesn't trigger typing yet
document.addEventListener('DOMContentLoaded', () => {
    // PROBLEM SECTION (single paragraph)
    const problemText = document.getElementById('problem-text');
    
    if (problemText) {
        const originalHTML = problemText.innerHTML.trim();
        problemText.setAttribute('data-text', originalHTML);
        problemText.innerHTML = ''; // Clear it - will type when scrolled to
        observer.observe(problemText); // Watch for scroll
    }
    
    // SOLUTION SECTION (two paragraphs)
    const solutionIntro = document.getElementById('solution-intro');
    const solutionDetails = document.getElementById('solution-details');
    
    if (solutionIntro) {
        const originalHTML = solutionIntro.innerHTML.trim();
        solutionIntro.setAttribute('data-text', originalHTML);
        solutionIntro.innerHTML = ''; // Clear it - will type when scrolled to
        observer.observe(solutionIntro); // Watch for scroll - this triggers both
    }
    
    if (solutionDetails) {
        const originalHTML = solutionDetails.innerHTML.trim();
        solutionDetails.setAttribute('data-text', originalHTML);
        solutionDetails.innerHTML = ''; // Clear it - will type when scrolled to
        // Don't observe - will be triggered by intro
    }
    
    // ===== LIGHTBOX FUNCTIONALITY =====
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const navbar = document.querySelector('.navbar');
    
    // Function to close lightbox
    function closeLightbox() {
        if (lightbox) {
            lightbox.style.display = 'none';
        }
        
        // Show navbar again
        if (navbar) {
            navbar.classList.remove('hidden');
        }
    }
    
    // Add click handlers to all sketch wrappers
    const sketchWrappers = document.querySelectorAll('.sketch-wrapper');
    
    sketchWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', function() {
            const img = this.querySelector('.sketch-img');
            if (lightbox && lightboxImg) {
                lightbox.style.display = 'block';
                lightboxImg.src = img.src;
                lightboxCaption.textContent = img.alt;
                
                // Hide navbar
                if (navbar) {
                    navbar.classList.add('hidden');
                }
            }
        });
    });
    
    // Make screenshot gallery items zoomable too
    const screenshotItems = document.querySelectorAll('.screenshot-item');
    
    screenshotItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            
            if (lightbox && lightboxImg && img) {
                lightbox.style.display = 'block';
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightboxCaption.textContent = img.alt;
                
                // Hide navbar
                if (navbar) {
                    navbar.classList.add('hidden');
                }
            }
        });
    });
    
    // Close lightbox when clicking X
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    // Close lightbox when clicking outside image
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox && lightbox.style.display === 'block') {
            closeLightbox();
        }
    });
});