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
  title: 'Keeping track of hundreds of components',
  subheading: 'Gain+Glory',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  technologies: ['ruby on rails', 'css', 'JavScript', 'html'],
  project_tech: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
  linkLive: 'https://anjacodes.github.io/Portfolio/',
  linkSource: 'https://github.com/Anjacodes/Portfolio',
  image: 'images/Img_placeholder.png',
  closeBtn: 'images/close_modal.png',
  cover: 'images/snapshot_portfolio.png'
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
  cover: 'images/snapshot_portfolio.png'
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
  cover: 'images/snapshot_portfolio.png'
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
  cover: 'images/snapshot_portfolio.png'
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
  cover: 'images/snapshot_portfolio.png'
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
  cover: 'images/snapshot_portfolio.png'
};

const projects = [content01, content02, content03, content04, content05, content06];

function html_worksTemplate(index) {
  return ' \
  <div class="card_background"> \
    <img class="card_image" src='+index.image+'> \
    <h3 class="card_heading">'+index.name+'</h3> \
    <h4 class="card_subheading">'+index.subheading+'</h4> \
    <ul class="lang_container"> \
      <li class="language_btn">'+index.technologies[0]+'</li> \
      <li class="language_btn">'+index.technologies[1]+'</li> \
      <li class="language_btn">'+index.technologies[2]+'</li> \
      <li class="language_btn">'+index.technologies[3]+'</li> \
    </ul> \
    <a class="button button_modal">See Project</a> \
  </div>';
}

function modal_window_template (index) {
  return ' \
  <div class="modal_window_content"> \
    <img id="close" class="close_btn" src='+index.closeBtn+'> \
    <img class="cover_foto" src='+index.cover+'>\
    <div class="heading_cont"> \
      <h3 class="modal_heading">'+index.title+'</h3> \
      <a class="project_btn" href='+index.linkLive+' target="_blank">See Live<span class="btn_span"><img src="images/live_icon.png"></span></a> \
      <a class="project_btn" href='+index.linkSource+' target="_blank">See Source<span class="btn_span"><img src="images/github_icon.png"></span></a> \
    </div> \
    <ul class="modal_lang_container"> \
      <li class="modal_language_btn">'+index.project_tech[0]+'</li> \
      <li class="modal_language_btn">'+index.project_tech[1]+'</li> \
      <li class="modal_language_btn">'+index.project_tech[2]+'</li> \
      <li class="modal_language_btn">'+index.project_tech[3]+'</li> \
      <li class="modal_language_btn">'+index.project_tech[4]+'</li> \
      <li class="modal_language_btn">'+index.project_tech[5]+'</li> \
    </ul> \
    <p class="project_description">'+index.description+'</p> \
  </div>';
}

document.addEventListener("DOMContentLoaded", function() {
  projects.forEach((element) => {
    let dinContent = document.createDocumentFragment();
    var newDiv = document.createElement('div');
    newDiv.className = 'works_card';

    newDiv.innerHTML = html_worksTemplate(element);
    dinContent.appendChild(newDiv);
    document.getElementById('projects').appendChild(dinContent);
  });
  const open_modal = document.querySelectorAll('.button');

  open_modal.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      console.log(projects[i], i);
      let modalContent = document.createDocumentFragment();
      let newCont = document.createElement('div');
      newCont.className = 'modal_window_container';
      newCont.innerHTML = modal_window_template(projects[i]);
      modalContent.appendChild(newCont);
      document.getElementById('projects').appendChild(modalContent);
      document.getElementById('modal_background').classList.add('modal_active');

      // Add Event Listener To Close Modal Button
      document.getElementById("close").addEventListener('click', () => {
        document.getElementById('modal_background').classList.remove('modal_active');
        newCont.style.display = 'none';
        location.reload();
      })
    })
  });
});



// document.addEventListener("DOMContentLoaded", function() {
//   projects.forEach((element) => {
//     let dinContent = document.createDocumentFragment();
//     var newDiv = document.createElement('div');
//     newDiv.className = 'works_card';

//     newDiv.innerHTML = html_worksTemplate(element);;
//     dinContent.appendChild(newDiv);
//     document.getElementById('projects').appendChild(dinContent);
//   });
// });

