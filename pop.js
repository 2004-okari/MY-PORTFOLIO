//  Javascript popup

const projects = [
  {
    name: 'Proffesional Art<br>Printing Data',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/Snapshoot Portfolio.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    linkToLiveVersion: 'https://2004-okari.github.io/MY-PORTFOLIO/',
    linkToSource: 'https://github.com/2004-okari/MY-PORTFOLIO',
  },
  {
    name: 'Proffesional Art<br>Printing Data',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/Snapshoot Portfolio.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    linkToLiveVersion: 'https://2004-okari.github.io/MY-PORTFOLIO/',
    linkToSource: 'https://github.com/2004-okari/MY-PORTFOLIO',
  },
  {
    name: 'Proffesional Art<br>Printing Data',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/Snapshoot Portfolio.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    linkToLiveVersion: 'https://2004-okari.github.io/MY-PORTFOLIO/',
    linkToSource: 'https://github.com/2004-okari/MY-PORTFOLIO',
  },
  {
    name: 'Proffesional Art<br>Printing Data',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    featuredImage: 'images/Snapshoot Portfolio.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    linkToLiveVersion: 'https://2004-okari.github.io/MY-PORTFOLIO/',
    linkToSource: 'https://github.com/2004-okari/MY-PORTFOLIO',
  },
  {
    name: 'Proffesional Art<br>Printing Data',
    technologies: ['HTML', 'CSS', 'Sass'],
    featuredImage: 'images/Snapshoot Portfolio.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    linkToLiveVersion: 'https://2004-okari.github.io/MY-PORTFOLIO/',
    linkToSource: 'https://github.com/2004-okari/MY-PORTFOLIO',
  },
  {
    name: 'Proffesional Art<br>Printing Data',
    technologies: ['HTML', 'Bootstrap', 'Java'],
    featuredImage: 'images/Snapshoot Portfolio.svg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    linkToLiveVersion: 'https://2004-okari.github.io/MY-PORTFOLIO/',
    linkToSource: 'https://github.com/2004-okari/MY-PORTFOLIO',
  },
];

const classes = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6'];

let iteration = 0;
const m = 0;
const n = 1;
const o = 2;

projects.forEach((project) => {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-items', classes[iteration]);

  const heading = document.createElement('h3');
  heading.classList.add('proj-text');
  heading.innerHTML = project.name;
  gridItem.appendChild(heading);

  const previewText = document.createElement('p');
  previewText.classList.add('preview-text');
  previewText.innerHTML = project.description;
  gridItem.appendChild(previewText);

  const previewButtons = document.createElement('ul');
  previewButtons.classList.add('preview-buttons');
  gridItem.appendChild(previewButtons);

  const listButton1 = document.createElement('li');
  listButton1.classList.add('html-btn');
  listButton1.innerHTML = project.technologies[m];
  previewButtons.appendChild(listButton1);

  const listButton2 = document.createElement('li');
  listButton2.classList.add('css-btn');
  listButton2.innerHTML = project.technologies[n];
  previewButtons.appendChild(listButton2);

  const listButton3 = document.createElement('li');
  listButton3.classList.add('ruby-btn');
  listButton3.innerHTML = project.technologies[o];
  previewButtons.appendChild(listButton3);

  const seeButton = document.createElement('button');
  seeButton.classList.add('see-button');
  seeButton.innerHTML = 'See project';
  gridItem.appendChild(seeButton);

  const cards = document.querySelector('.grid');
  cards.appendChild(gridItem);
  iteration = +1;
});

// Popup card
const viewButton = document.querySelectorAll('.see-button');
const view = document.querySelector('.section-3');

let i = 0;
viewButton.forEach((btn) => {
  i += 1;

  const popCard = document.createElement('div');
  popCard.classList.add('pop-card');
  popCard.innerHTML = `
        <div class="popup-card">
            <div class="pop-1">
                <div class="card-sec-1">
                    <h2 class="head-text">${projects[i - 1].name}</h2>
                    <i  class="fa fa-times" id="cross-icon" aria-hidden="true"></i>
                </div>
                <div class="card-sec-2">
                    <p class="texts">${projects[i - 1].technologies[0]}</p>
                    <p class="texts">${projects[i - 1].technologies[1]}</p>
                    <p class="texts">${projects[i - 1].technologies[2]}</p>
                </div>
            </div>
            <div class="pop-2">
                <img src="${projects[i - 1].featuredImage}" class="image-preview">
                <div class="pop-3">
                    <p class="card-text">${projects[i - 1].description}</p>
                    <div class="card-btns">
                        <button type="button" class="card-btn-1" onclick="window.location.href='${projects[i - 1].linkToLiveVersion}';">See live<img src="images/Icon.svg" alt="icons" class="btn-icons"></button>
                        <button type="button" class="card-btn-2" onclick="window.location.href='${projects[i - 1].linkToSource}';">See source<img src="images/Vector.svg" alt="icons" class="btn-icons"></button>
                    </div>
                </div>
            </div>
        </div>`;

  btn.addEventListener('click', () => {
    document.querySelector('body').style.overflow = 'hidden';
    view.appendChild(popCard);

    document.querySelector('#cross-icon').addEventListener('click', () => {
      view.removeChild(popCard);
      document.querySelector('body').style.overflow = 'scroll';
    });
  });
});
