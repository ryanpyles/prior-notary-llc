// Initialize GSAP animations and scroll effects
gsap.registerPlugin(ScrollTrigger);

// Fade-in up effect for sections
gsap.from('.gsap-fade-in', {
  duration: 1,
  opacity: 0,
  y: 50,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.gsap-fade-in',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: true,
    toggleActions: 'play none none reverse',
  },
});

// Smooth scrolling for navigation links
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Sticky Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Enhanced Form Feedback
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
  } else {
    showModal(`Thank you for your message, ${name}! We will get back to you soon.`);
    form.reset();
  }
});

// Function to show modal with feedback message
function showModal(message) {
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white rounded-lg p-6 shadow-custom max-w-md w-full text-center">
        <p class="mb-4">${message}</p>
        <button class="bg-primary text-white px-4 py-2 rounded hover:bg-secondary" id="close-modal">Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('close-modal').addEventListener('click', () => {
    modal.remove();
  });
}
