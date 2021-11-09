const hamMenu = document.getElementsByClassName('menu');
const mobileMenu = document.getElementsByClassName('mobMenu');
const closeMobMenu = document.getElementById('closeMenu');
const mobLinks = document.querySelectorAll('.mobMenu > ul > li > a');
const bodyEl = document.querySelector('body');
console.log(bodyEl);

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