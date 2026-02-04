// Form submission handler with validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Form validation
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!contactForm.checkValidity()) {
                e.stopPropagation();
                contactForm.classList.add('was-validated');
                return;
            }
            
            // Get form data
            const formData = {
                name: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                budget: document.getElementById('budget').value,
                timeline: document.getElementById('timeline').value
            };
            
            // Show success modal
            showSuccessModal(formData);
            
            // Reset form
            contactForm.reset();
            contactForm.classList.remove('was-validated');
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname;
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPage === linkPath || 
            (currentPage === '/' && linkPath === '/') ||
            (currentPage.includes(linkPath) && linkPath !== '/')) {
            link.classList.add('active');
        }
    });
    
    // Animate progress bars on skills page
    animateProgressBars();
    
    // Initialize tooltips
    initializeTooltips();
});

function showSuccessModal(formData) {
    // Create modal HTML
    const modalHTML = `
        <div class="modal fade" id="successModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-gradient-success text-white">
                        <h5 class="modal-title"><i class="fas fa-check-circle me-2"></i> Message Sent Successfully!</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center mb-4">
                            <div class="icon-circle bg-success mb-3 mx-auto">
                                <i class="fas fa-check fa-2x"></i>
                            </div>
                            <h4>Thank you, ${formData.name}!</h4>
                            <p class="text-muted">Your message has been received. I'll get back to you within 24 hours at:</p>
                            <p class="fw-bold">${formData.email}</p>
                        </div>
                        <div class="alert alert-info">
                            <i class="fas fa-clock me-2"></i>
                            <small>You can also reach me directly at <strong>+91 9901605828</strong> for urgent queries.</small>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                            <i class="fas fa-thumbs-up me-2"></i> Got it!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer.firstElementChild);
    
    // Show modal
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();
    
    // Remove modal after hiding
    document.getElementById('successModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
    });
}

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 300);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => observer.observe(bar));
}

function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Add typing animation for hero text
function typeWriter(elementId, text, speed = 50) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize on page load
window.addEventListener('load', function() {
    // Typing animation for hero text
    const heroText = "Hello, I'm Shivakumar";
    typeWriter('hero-title', heroText);
});