// NextGen CS Projects - JavaScript functionality

// Smooth scrolling for nav links
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
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

// Form handling for Order page
document.addEventListener('DOMContentLoaded', function() {
  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(orderForm);
      const name = formData.get('name');
      const branch = formData.get('branch');
      const projectType = formData.get('projectType');
      const budget = formData.get('budget');
      const message = formData.get('message');
      
      // WhatsApp message
const whatsappNumber = '919353283414'; // Updated with provided number
      const messageText = `New Project Order!%0A%0AName: ${name}%0ABranch: ${branch}%0AProject Type: ${projectType}%0ABudget: ₹${budget}%0AMessage: ${message}`;
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${messageText}`;
      
      // Open WhatsApp
      window.open(whatsappURL, '_blank');
      
      // Reset form
      orderForm.reset();
      alert('Your order has been sent to WhatsApp! We will contact you soon 🚀');
    });
  }
  
  // Form handling for Contact page (if any)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you! We will get back to you soon on WhatsApp 📲');
      contactForm.reset();
    });
  }
});

// Add fade-in animation on scroll
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

// Observe sections for animation
document.querySelectorAll('.section, .category, .price-tier').forEach(el => {
  observer.observe(el);
});

