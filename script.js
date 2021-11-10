const hamMenu = document.getElementsByClassName('menu');
const mobileMenu = document.getElementsByClassName('mobMenu');
const closeMobMenu = document.getElementById('closeMenu');
const mobLinks = document.querySelectorAll('.mobMenu > ul > li > a');
const bodyEl = document.querySelector('body');
const formEl = document.getElementById('contactForm');
const emailMsg = formEl.querySelector('small');
const emailForm = formEl.querySelector('input[type="email"]');

function hasUpperCase(str) {
  const regExp = /[A-Z]/;
  return regExp.test(str);
}

formEl.addEventListener('submit', (e) => {
  if (hasUpperCase(emailForm.value)) {
    e.preventDefault();
    emailMsg.style.display = 'block';
    emailMsg.textContent = 'Email needs to be lowercase';
  } else {
    emailMsg.style.display = 'none';
  }
});

hamMenu[0].addEventListener('click', () => {
  mobileMenu[0].style.display = 'block';
  bodyEl.style.overflow = 'hidden';
});

closeMobMenu.addEventListener('click', () => {
  mobileMenu[0].style.display = 'none';
  bodyEl.style.overflow = 'auto';
});

mobLinks.forEach((i) => {
  i.addEventListener('click', () => {
    mobileMenu[0].style.display = 'none';
    bodyEl.style.overflow = 'auto';
  });
});