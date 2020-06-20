//Select element function
const selectElement = (element) => {
  return document.querySelector(element);
}

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');
let animateLeft = selectElement('.animate-left')

menuToggler.addEventListener('click', () => {
  body.classList.toggle('open')
})

// Screen reveal animations
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
  origin: 'left',
  duration: 1500,
  distance: '25rem',
  delay: 300
});

sr.reveal('.animate-right', {
  origin: 'right',
  duration: 1500,
  distance: '25rem',
  delay: 700
});

sr.reveal('.animate-top', {
  origin: 'top',
  duration: 1500,
  distance: '25rem',
  delay: 700
});

sr.reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 1500,
  distance: '25rem',
  delay: 700
});

