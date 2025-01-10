// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Initialize AOS with optimized settings
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        once: true, // Animasyonları sadece bir kez çalıştır
        mirror: false,
        disable: 'mobile' // Mobilde devre dışı bırak
    });
});

// Mobile Menu - Event delegation kullanarak performansı artır
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

const toggleMenu = () => {
    const isOpen = navMenu.style.display === 'flex';
    navMenu.style.display = isOpen ? 'none' : 'flex';
    body.classList.toggle('mobile-menu-active', !isOpen);
};

hamburger?.addEventListener('click', toggleMenu);

// Event delegation for menu clicks
document.addEventListener('click', (e) => {
    const isNavLink = e.target.closest('.nav-menu a');
    const isOutsideNav = !e.target.closest('nav');
    
    if (isNavLink || (isOutsideNav && body.classList.contains('mobile-menu-active'))) {
        navMenu.style.display = 'none';
        body.classList.remove('mobile-menu-active');
    }
}); 