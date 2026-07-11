// Auto-update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Highlight active nav link based on scroll position
const sections = document.querySelectorAll('section, header.hero');
const navLinks = document.querySelectorAll('.nav-links a');

function setActiveLink() {
  let currentId = '';
  const scrollY = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    if (scrollY >= top && scrollY < top + height && section.id) {
      currentId = section.id;
    }
  });

  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${currentId}` ? 'var(--coral)' : '';
  });
}

window.addEventListener('scroll', setActiveLink);
setActiveLink();

// Smooth-scroll fallback for older browsers (harmless if CSS scroll-behavior already works)
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});