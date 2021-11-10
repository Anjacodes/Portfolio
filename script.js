const hamMenu = document.getElementsByClassName('menu');
const mobileMenu = document.getElementsByClassName('mobMenu');
const closeMobMenu = document.getElementById('closeMenu');
const mobLinks = document.querySelectorAll('.mobMenu > ul > li > a');
const bodyEl = document.querySelector('body');
const formEl = document.getElementById('contactForm');
const emailMsg = formEl.querySelector('small');
const emailForm =  formEl.querySelector('input[type="email"]');

formEl.addEventListener('submit', (e) => {
  
  console.log(hasUpperCase(emailForm.value));
  if (hasUpperCase(emailForm.value)) {
    e.preventDefault();
    emailMsg.style.display = 'block';
    emailMsg.textContent = 'Email needs to be lowercase';
    console.log(emailMsg);
  } else {
    emailMsg.style.display = 'none';
  }
});

function hasUpperCase(str) {
  const regExp = /[A-Z]/;
  return regExp.test(str);
} 

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