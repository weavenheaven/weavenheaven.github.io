// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// WhatsApp Integration
function openWhatsApp(message) {
    // Replace this phone number with your actual WhatsApp number
    const phoneNumber = '+919213388095';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

// Product Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all product sliders
    const productSliders = document.querySelectorAll('.product-slider');
    
    productSliders.forEach((slider, sliderIndex) => {
        const sliderTrack = slider.querySelector('.slider-track');
        const slides = slider.querySelectorAll('.slide');
        const prevBtn = slider.querySelector('.prev-btn');
        const nextBtn = slider.querySelector('.next-btn');
        const dotsContainer = slider.querySelector('.slider-dots');
        
        let currentSlide = 0;
        const totalSlides = slides.length;
        let slideInterval;

        // Create dots for this slider
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = slider.querySelectorAll('.dot');

        // Function to go to specific slide
        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
        }

        // Function to update slider
        function updateSlider() {
            sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        // Next slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }

        // Previous slide
        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

        // Event listeners for navigation buttons
        if (prevBtn) prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            prevSlide();
        });
        if (nextBtn) nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            nextSlide();
        });

        // Auto-play slider
        function startAutoPlay() {
            slideInterval = setInterval(nextSlide, 4000);
        }

        function stopAutoPlay() {
            clearInterval(slideInterval);
        }

        // Start auto-play
        startAutoPlay();

        // Pause auto-play on hover
        slider.addEventListener('mouseenter', stopAutoPlay);
        slider.addEventListener('mouseleave', startAutoPlay);

        // Touch/swipe support for mobile
        let startX = 0;
        let endX = 0;

        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        slider.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = startX - endX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next slide
                    nextSlide();
                } else {
                    // Swipe right - previous slide
                    prevSlide();
                }
            }
        }
    });
});

// Image Slider Functionality (for homepage)
document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');
    
    if (!sliderTrack) return; // Only run for homepage slider
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Function to go to specific slide
    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }

    // Function to update slider
    function updateSlider() {
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    // Event listeners for navigation buttons
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Auto-play slider
    function startAutoPlay() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
        clearInterval(slideInterval);
    }

    // Start auto-play
    startAutoPlay();

    // Pause auto-play on hover
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopAutoPlay);
        sliderContainer.addEventListener('mouseleave', startAutoPlay);
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
});

// Zoom Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const zoomModal = document.getElementById('zoomModal');
    const zoomModalImage = document.getElementById('zoomModalImage');
    const zoomClose = document.querySelector('.zoom-close');
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    const resetZoomBtn = document.getElementById('resetZoom');
    
    let currentZoom = 1;
    const zoomStep = 0.2;
    const maxZoom = 3;
    const minZoom = 0.5;

    // Open zoom modal for product images
    document.querySelectorAll('.product-slider .slide img').forEach(img => {
        img.addEventListener('click', function() {
            zoomModalImage.src = this.src;
            zoomModalImage.alt = this.alt;
            zoomModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            currentZoom = 1;
            updateZoom();
        });
    });

    // Open zoom modal for homepage slider images
    document.querySelectorAll('.slide-image-container').forEach(container => {
        container.addEventListener('click', function() {
            const image = this.querySelector('.slide-image');
            zoomModalImage.src = image.src;
            zoomModalImage.alt = image.alt;
            zoomModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            currentZoom = 1;
            updateZoom();
        });
    });

    // Close zoom modal
    zoomClose.addEventListener('click', closeZoomModal);
    zoomModal.addEventListener('click', function(e) {
        if (e.target === zoomModal) {
            closeZoomModal();
        }
    });

    function closeZoomModal() {
        zoomModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        currentZoom = 1;
        updateZoom();
    }

    // Zoom controls
    zoomInBtn.addEventListener('click', () => {
        if (currentZoom < maxZoom) {
            currentZoom += zoomStep;
            updateZoom();
        }
    });

    zoomOutBtn.addEventListener('click', () => {
        if (currentZoom > minZoom) {
            currentZoom -= zoomStep;
            updateZoom();
        }
    });

    resetZoomBtn.addEventListener('click', () => {
        currentZoom = 1;
        updateZoom();
    });

    function updateZoom() {
        zoomModalImage.style.transform = `scale(${currentZoom})`;
    }

    // Keyboard controls for zoom
    document.addEventListener('keydown', (e) => {
        if (zoomModal.style.display === 'block') {
            if (e.key === 'Escape') {
                closeZoomModal();
            } else if (e.key === '+' || e.key === '=') {
                e.preventDefault();
                if (currentZoom < maxZoom) {
                    currentZoom += zoomStep;
                    updateZoom();
                }
            } else if (e.key === '-') {
                e.preventDefault();
                if (currentZoom > minZoom) {
                    currentZoom -= zoomStep;
                    updateZoom();
                }
            } else if (e.key === '0') {
                e.preventDefault();
                currentZoom = 1;
                updateZoom();
            }
        }
    });

    // Mouse wheel zoom
    zoomModal.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            // Zoom in
            if (currentZoom < maxZoom) {
                currentZoom += zoomStep;
                updateZoom();
            }
        } else {
            // Zoom out
            if (currentZoom > minZoom) {
                currentZoom -= zoomStep;
                updateZoom();
            }
        }
    });
});

// Product Filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    // Function to count products in each category
    function countProductsByCategory() {
        const categoryCounts = {};
        productCards.forEach(card => {
            const category = card.getAttribute('data-category');
            categoryCounts[category] = (categoryCounts[category] || 0) + 1;
        });
        return categoryCounts;
    }

    // Function to hide/show filter buttons based on product count
    function updateFilterButtons() {
        const categoryCounts = countProductsByCategory();
        
        filterButtons.forEach(button => {
            const category = button.getAttribute('data-category');
            if (category === 'all') {
                // Always show "All Products" button
                button.style.display = 'block';
            } else {
                // Hide button if category has no products
                if (categoryCounts[category] && categoryCounts[category] > 0) {
                    button.style.display = 'block';
                } else {
                    button.style.display = 'none';
                }
            }
        });
    }

    // Initialize filter buttons visibility
    updateFilterButtons();

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create WhatsApp message
            const whatsappMessage = `New Contact Form Submission - Weaven Heaven Lace Store:
            
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}`;
            
            // Open WhatsApp with the form data
            openWhatsApp(whatsappMessage);
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            showNotification('Thank you! Your message has been sent via WhatsApp.', 'success');
        });
    }
});

// Notification System
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Smooth Scrolling for Anchor Links
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

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        margin-left: 10px;
    }
    
    .notification-close:hover {
        opacity: 0.7;
    }
`;
document.head.appendChild(style);

// Lazy Loading for Images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease-in';
        imageObserver.observe(img);
    });
});

// Scroll to Top Button
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #e74c3c;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// Product Search Functionality (if needed)
function searchProducts(query) {
    const products = document.querySelectorAll('.product-card');
    const searchTerm = query.toLowerCase();
    
    products.forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        const description = product.querySelector('.description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Add loading animation for enquiry buttons
document.addEventListener('DOMContentLoaded', function() {
    const enquiryButtons = document.querySelectorAll('.enquiry-btn');
    
    enquiryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'Opening WhatsApp...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        });
    });
});

// Form validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    return isValid;
}

// Add form validation to contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#e74c3c';
                } else {
                    this.style.borderColor = '#ddd';
                }
            });
            
            input.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.style.borderColor = '#27ae60';
                }
            });
        });
    }
}); 