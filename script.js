// Theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Contact form simulation
const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
  message.classList.remove('hidden');
  setTimeout(() => message.classList.add('hidden'), 2000);
});

// Scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Scroll fade-in animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
  section.classList.add('fade');
  observer.observe(section);
});
