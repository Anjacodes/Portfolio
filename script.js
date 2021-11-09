const hamMenu = document.getElementsByClassName('menu');
const mobileMenu = document.getElementsByClassName('mobMenu');
const closeMobMenu = document.getElementById('closeMenu');
const mobLinks = document.querySelectorAll('.mobMenu > ul > li > a');
const bodyEl = document.querySelector('body');
const portfolio = document.querySelectorAll('.card_background');
const portfolio_nodes = document.querySelectorAll('.card_background').children;
const heading = document.createElement('h3');
const projects_section = document.getElementById('projects');

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

const content01 = {
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
  technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
  linkLive: '',
  image: 'images/Img_placeholder.png'
};

const content02 = {
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
   technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
  linkLive: '',
  image: 'images/Img_placeholder.png'
};

const content03 = {
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
   technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
  linkLive: '',
  image: 'images/Img_placeholder.png'
};

const content04 = {
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
   technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
  linkLive: '',
  image: 'images/Img_placeholder.png'
};

const content05 = {
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
   technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
  linkLive: '',
  image: 'images/Img_placeholder.png'
};

const content06 = {
  name: 'Multi-Post Stories',
  description: 'Gain+Glory',
   technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
  linkLive: '',
  image: 'images/Img_placeholder.png'
};

const projects = [content01, content02, content03, content04, content05, content06];

function html_worksTemplate(index) {
  return ' \
  <div class="works_card"> \
  <div class="card_background"> \
    <img class="card_image" src='+index.image+'> \
    <h3 class="card_heading">'+index.name+'</h3> \
    <h4 class="card_subheading">'+index.description+'</h4> \
    <ul class="lang_container"> \
      <li class="language_btn">'+index.technologies[0]+'</li> \
      <li class="language_btn">'+index.technologies[1]+'</li> \
      <li class="language_btn">'+index.technologies[2]+'</li> \
      <li class="language_btn">'+index.technologies[3]+'</li> \
    </ul> \
    <a class="button" href="#">See Project</a> \
  </div> \
</div>';
}

document.addEventListener("DOMContentLoaded", function() {
  projects.forEach((element) => {
    let dinContent = document.createDocumentFragment();
    var newDiv = document.createElement('div');
    newDiv.className = 'works_card';

    newDiv.innerHTML = html_worksTemplate(element);;
    dinContent.appendChild(newDiv);
    document.getElementById('projects').appendChild(dinContent);
  });
});
