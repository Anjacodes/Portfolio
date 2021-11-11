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

const content01 = {
  name: 'Multi-Post Stories',
  title: 'Keeping track of hundreds of components',
  subheading: 'Gain+Glory',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
  project_tech: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLive: 'https://anjacodes.github.io/Portfolio/',
  linkSource: 'https://github.com/Anjacodes/Portfolio',
  image: 'images/Img_placeholder.png',
  closeBtn: 'images/close_modal.png',
  cover: 'images/snapshot_portfolio.png',
};

const content02 = {
  name: 'Multi-Post Stories',
  title: 'Keeping track of hundreds of components',
  subheading: 'Gain+Glory',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
  project_tech: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLive: '',
  linkSource: '',
  image: 'images/Img_placeholder.png',
  closeBtn: 'images/close_modal.png',
  cover: 'images/snapshot_portfolio.png',
};

const content03 = {
  name: 'Multi-Post Stories',
  title: 'Keeping track of hundreds of components',
  subheading: 'Gain+Glory',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
  project_tech: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLive: '',
  linkSource: '',
  image: 'images/Img_placeholder.png',
  closeBtn: 'images/close_modal.png',
  cover: 'images/snapshot_portfolio.png',
};

const content04 = {
  name: 'Multi-Post Stories',
  title: 'Keeping track of hundreds of components',
  subheading: 'Gain+Glory',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
  project_tech: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLive: '',
  linkSource: '',
  image: 'images/Img_placeholder.png',
  closeBtn: 'images/close_modal.png',
  cover: 'images/snapshot_portfolio.png',
};

const content05 = {
  name: 'Multi-Post Stories',
  title: 'Keeping track of hundreds of components',
  subheading: 'Gain+Glory',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
  project_tech: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLive: '',
  linkSource: '',
  image: 'images/Img_placeholder.png',
  closeBtn: 'images/close_modal.png',
  cover: 'images/snapshot_portfolio.png',
};

const content06 = {
  name: 'Multi-Post Stories',
  title: 'Keeping track of hundreds of components',
  subheading: 'Gain+Glory',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
  project_tech: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLive: '',
  linkSource: '',
  image: 'images/Img_placeholder.png',
  closeBtn: 'images/close_modal.png',
  cover: 'images/snapshot_portfolio.png',
};

const projects = [content01, content02, content03, content04, content05, content06];

function htmlWorksTemplate(index) {
  return `
  <div class="card_background">
    <img class="card_image" src='${index.image}'>
    <h3 class="card_heading">${index.name}</h3>
    <h4 class="card_subheading">${index.subheading}</h4>
    <ul class="lang_container">
      <li class="language_btn">${index.technologies[0]}</li>
      <li class="language_btn">${index.technologies[1]}</li>
      <li class="language_btn">${index.technologies[2]}</li>
      <li class="language_btn">${index.technologies[3]}</li>
    </ul>
    <a class="button button_modal">See Project</a>
  </div>`;
}

function modalWindowTemplate(index) {
  return `
  <div class="modal_window_content"> \
    <img id="close" class="close_btn" src='${index.closeBtn}'> \
    <img class="cover_foto" src='${index.cover}'>\
    <div class="heading_cont"> \
      <h3 class="modal_heading">${index.title}</h3> \
      <a class="project_btn" href=${index.linkLive} target="_blank">See Live<span class="btn_span"><img src="images/live_icon.png"></span></a> \
      <a class="project_btn" href=${index.linkSource} target="_blank">See Source<span class="btn_span"><img src="images/github_icon.png"></span></a> \
    </div> \
    <ul class="modal_lang_container"> \
      <li class="modal_language_btn">${index.project_tech[0]}</li> \
      <li class="modal_language_btn">${index.project_tech[1]}</li> \
      <li class="modal_language_btn">${index.project_tech[2]}</li> \
      <li class="modal_language_btn">${index.project_tech[3]}</li> \
      <li class="modal_language_btn">${index.project_tech[4]}</li> \
      <li class="modal_language_btn">${index.project_tech[5]}</li> \
    </ul> \
    <p class="project_description">${index.description}</p> \
    <div class="deskBtn-container"> \
      <a class="project_btn" href=${index.linkLive} target="_blank">See Live<span class="btn_span"><img src="images/live_icon.png"></span></a> \
      <a class="project_btn" href=${index.linkSource} target="_blank">See Source<span class="btn_span"><img src="images/github_icon.png"></span></a> \
    </div> \
  </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  projects.forEach((element) => {
    const dinContent = document.createDocumentFragment();
    const newDiv = document.createElement('div');
    newDiv.className = 'works_card';

    newDiv.innerHTML = htmlWorksTemplate(element);
    dinContent.appendChild(newDiv);
    document.getElementById('projects').appendChild(dinContent);
  });
  const openModal = document.querySelectorAll('.button_modal');

  openModal.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      bodyEl.style.overflow = 'hidden';
      const modalContent = document.createDocumentFragment();
      const newCont = document.createElement('div');
      newCont.className = 'modal_window_container';
      newCont.innerHTML = modalWindowTemplate(projects[i]);
      modalContent.appendChild(newCont);
      document.getElementById('projects').appendChild(modalContent);
      document.getElementById('modal_background').classList.add('modal_active');

      // Add Event Listener To Close Modal Button
      const closeBtn = document.querySelectorAll('.close_btn');
      closeBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
          document.getElementById('modal_background').classList.remove('modal_active');
          newCont.style.display = 'none';
          bodyEl.style.overflow = 'auto';
        });
      });
    });
  });
});