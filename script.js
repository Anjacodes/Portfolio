// MObile Menu
const hamMenu = document.getElementsByClassName('menu');
const mobileMenu = document.getElementsByClassName('mobMenu');
const closeMobMenu = document.getElementById('closeMenu');
const mobLinks = document.querySelectorAll('.mobMenu > ul > li > a');
const bodyEl = document.querySelector('body');

// Form Selectors
const formEl = document.getElementById('contactForm');
const emailMsg = formEl.querySelector('small');
const emailForm = formEl.querySelector('input[type="email"]')
const userName = formEl.querySelector('input[name="username"');
const message = formEl.querySelector('textarea');

// Scroll Down Button
const scrollButton = document.getElementsByClassName('down_button');
const projectSection = document.getElementById('projects');

scrollButton[0].addEventListener('click', () => {
  projectSection.scrollIntoView(top);
})

function hasUpperCase(str) {
  const regExp = /[a-z]/;
  return regExp.test(str);
}

formEl.addEventListener('submit', (e) => {
  if (hasUpperCase(emailForm.value)) {
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
  name: 'Hotelzilla',
  title: 'Your next holiday is judst one click away!',
  subheading: 'Reservation Platform',
  description: "This web application is a hotel reservation app which allows users to see all featured hotel rooms from the app's own external API, see a detailed view of each room, sign up and sign in. If the user is logged in they can reserve a room, and see a list of all their reservations. If the user is an admin they can additionally add or delete hotel rooms.",
  technologies: ['React', 'Redux', 'Tailwind'],
  project_tech: ['React', 'Redux', 'Tailwind'],
  linkLive: 'https://hotelzilla.netlify.app/',
  linkSource: 'https://github.com/Anjacodes/Hotelzilla-UI',
  image: 'images/projectViews/Hotelzilla-logo.png',
  closeBtn: 'images/close_modal.png',
  cover: 'images/projectViews/Index_desktop.png',
};

const content02 = {
  name: 'Budgetify',
  title: 'Helps you stay on top of your finances',
  subheading: 'The Budgeting App',
  description: 'This mobile app allows the user to manage their personal finances by keeping track of their expenses.',
  technologies: ['Ruby on Rails', 'Tailwind', 'PostgreSQL'],
  project_tech: ['Ruby on Rails', 'Tailwind', 'PostgreSQL'],
  linkLive: 'https://boiling-falls-90821.herokuapp.com/users/sign_in',
  linkSource: 'https://github.com/Anjacodes/Budget_App',
  image: 'images/projectViews/Budgetify-logo.png',
  closeBtn: 'images/close_modal.png',
  cover: 'images/projectViews/Budgetify_index.png',
};

const content03 = {
  name: 'Ultimate Show Guide',
  title: 'Keep track of all your favorite TV shows',
  subheading: "The Hottest Stuff on TV",
  description: 'This web app will help you to manage, like, and comment all your favourite TV series in one place.',
  technologies: ['JavaScript', 'Webpack', 'Tailwind'],
  project_tech: ['JavaScript', 'Webpack', 'Tailwind'],
  linkLive: 'https://williamrolando88.github.io/ultimate-show-guide/',
  linkSource: 'https://github.com/williamrolando88/ultimate-show-guide',
  image: 'images/projectViews/DummyLogoTV.png',
  closeBtn: 'images/close_modal.png',
  cover: 'images/projectViews/USC_homeScreenshot.png',
};

const content04 = {
  name: 'Math Magicians',
  title: "Let's do some maths magic!",
  subheading: 'Free Online Calculator',
  description: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
  technologies: ['JavScript', 'React', 'CSS'],
  project_tech: ['JavScript', 'React', 'CSS'],
  linkLive: 'https://vigilant-kowalevski-cde2c6.netlify.app/calculator',
  linkSource: 'https://github.com/Anjacodes/math-magicians',
  image: 'images/projectViews/MathMagicians-logo.png',
  closeBtn: 'images/close_modal.png',
  cover: 'images/projectViews/MathMathematicians_Index.png',
};

const content05 = {
  name: 'Yummy Recipes',
  title: 'Find and Create New Recipes',
  subheading: 'Recipe Collection',
  description: 'This website allows users to add recipes, edit and delete their own recipes, see a list of all public recipes, see a list of all available foods and create new food items, add ingredients to their recipes, generate a shopping list with the missing food for all their recipes',
  technologies: ['Ruby on Rails', 'PostgreSQL', 'Tailwind'],
  project_tech: ['Ruby on Rails', 'PostgreSQL', 'Tailwind'],
  linkLive: '',
  linkSource: 'https://github.com/Omar-Muhamad/Yummy-Recipe-RoR',
  image: 'images/projectViews/YummyRecipes-logo.png',
  closeBtn: 'images/close_modal.png',
  cover: 'images/projectViews/YummyRecipe-index.png',
};

const content06 = {
  name: 'Bookstore',
  title: 'Keeping track of your favorite books!',
  subheading: 'Personal Online Library',
  description: 'The Bookstore web application allows users to display a list of books, keep track of the progress in each book, add a new book, and remove a selected book.',
  technologies: ['React', 'Redux', 'CSS'],
  project_tech: ['React', 'Redux', 'CSS'],
  linkLive: 'https://affectionate-mirzakhani-76e566.netlify.app/',
  linkSource: 'https://github.com/Anjacodes/Bookstore',
  image: 'images/projectViews/Bookstore_logo.png',
  closeBtn: 'images/close_modal.png',
  cover: 'images/projectViews/Bookstore_index.png',
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
    </ul> \
    <p class="project_description">${index.description}</p> \
    <div class="deskBtn-container"> \
      <a class="project_btn" href=${index.linkLive} target="_blank">See Live<span class="btn_span"><img src="images/live_icon.png"></span></a> \
      <a class="project_btn" href=${index.linkSource} target="_blank">See Source<span class="btn_span"><img src="images/github_icon.png"></span></a> \
    </div> \
  </div>`;
}

const person = {
  name: '',
  email: '',
  message: '',
};

document.addEventListener('DOMContentLoaded', () => {
  person.name = JSON.parse(localStorage.getItem('name'));
  person.email = JSON.parse(localStorage.getItem('email'));
  person.message = JSON.parse(localStorage.getItem('message'));

  Object.keys(person).forEach((key) => {
    if (key === 'name' && person[key] !== '') {
      userName.value = person[key];
    }
    if (key === 'email' && person[key] !== '') {
      emailForm.value = person[key];
    }
    if (key === 'message' && person[key] !== '') {
      message.value = person[key];
    }
  });

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

  // Saving User Data Into Local Storage
  userName.addEventListener('input', () => {
    person.name = userName.value;
    localStorage.setItem('name', JSON.stringify(person.name));
  });

  emailForm.addEventListener('input', () => {
    person.email = emailForm.value;
    localStorage.setItem('email', JSON.stringify(person.email));
  });
  message.addEventListener('input', () => {
    person.message = message.value;
    localStorage.setItem('message', JSON.stringify(person.message));
  });
});
