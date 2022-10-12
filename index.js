const hamburger = document.querySelector('.hamburger');
const cross = document.querySelector('.cross');

const mobLinks = document.querySelectorAll('.mobLinks');
const mobMenu = document.querySelector('.mobMenu');

hamburger.addEventListener('click', () => {
  mobMenu.classList.toggle('hide');
});
cross.addEventListener('click', () => {
  mobMenu.classList.toggle('hide');
});
mobLinks.forEach((item) => {
  item.addEventListener('click', () => {
    mobMenu.classList.add('hide');
  });
});

const workCards = [
  {
    id: 1,
    title: 'Tonic',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    dot: './img/Counter.png',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tech: ['html', 'css', 'javascript'],
    imageMob: './img/card1.png',
    imageDesk: './img/desktop/card1.png',
    live: 'https://storres20.github.io/portfolio-project/',
    source: 'https://github.com/storres20/portfolio-project',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    dot: './img/Counter.png',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tech: ['html', 'css', 'javascript'],
    imageMob: './img/card2.png',
    imageDesk: './img/desktop/card2.png',
    live: 'https://storres20.github.io/portfolio-project/',
    source: 'https://github.com/storres20/portfolio-project',
  },
  {
    id: 3,
    title: 'Tonic',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    dot: './img/Counter.png',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tech: ['html', 'css', 'javascript'],
    imageMob: './img/card3.png',
    imageDesk: './img/desktop/card3.png',
    live: 'https://storres20.github.io/portfolio-project/',
    source: 'https://github.com/storres20/portfolio-project',
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    canopy: ['CANOPY', 'Back End Dev', '2015'],
    dot: './img/Counter.png',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tech: ['html', 'css', 'javascript'],
    imageMob: './img/card4.png',
    imageDesk: './img/desktop/card4.png',
    live: 'https://storres20.github.io/portfolio-project/',
    source: 'https://github.com/storres20/portfolio-project',
  },
];

const seeProject = document.querySelectorAll('.sectionButton');
const popUp = document.getElementById('popUp');

seeProject.forEach((item) => {
  item.addEventListener('click', () => {
    const name = parseInt(item.getAttribute('name'), 10);

    const card = workCards.filter((it) => {
      if (it.id === name) {
        return it;
      }
      return false;
    });

    popUp.innerHTML = `
      <div class="popUp-content">
        <div class="sectionCard">
          
          <div class="sectionSubCard">
            <div class="popTitle">
              <h2 class="sectionTitle">${card[0].title}</h2>
              <img class="crossblack" src="./img/crossblack.png" alt="crossblack" onclick="popUp.classList.toggle('hide')">
            </div>
            <div class="sectionCanopy">
              <h3 class="text1">${card[0].canopy[0]}</h3>
              <img class="counter" src="./img/Counter.png" alt="counter">
              <h3 class="text2">${card[0].canopy[1]}</h3>
              <img class="counter" src="./img/Counter.png" alt="counter">
              <h3 class="text2">${card[0].canopy[2]}</h3>
            </div>
            <img class="sectionImgMob" src="${card[0].imageMob}" alt="card1">
            <img class="sectionImgDesk" src="${card[0].imageDesk}" alt="card1">
            <div class="deskColum">
              <p class="sectionParra">${card[0].para}</p>
              <div>
                <ul class="sectionTech">
                  <li class="tech">${card[0].tech[0]}</li>
                  <li class="tech">${card[0].tech[1]}</li>
                  <li class="tech">${card[0].tech[2]}</li>
                </ul>
                <div class="borderPop"></div>
                <div class="buttonPop">
                  <a href="${card[0].live}" class="sectionButton" name="1">See live</a>
                  <a href="${card[0].source}" class="sectionButton" name="1">See Source</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    popUp.classList.toggle('hide');
  });
});
