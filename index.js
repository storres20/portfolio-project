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
    class: 'sectionCard',
    para1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tech: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
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
    class: 'sectionCardInv',
    para1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tech: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
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
    class: 'sectionCard',
    para1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tech: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
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
    class: 'sectionCard',
    para1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    tech: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    imageMob: './img/card4.png',
    imageDesk: './img/desktop/card4.png',
    live: 'https://storres20.github.io/portfolio-project/',
    source: 'https://github.com/storres20/portfolio-project',
  },
];

const sectionCard = document.getElementById('work');

workCards.forEach((item2) => {
  sectionCard.innerHTML += `
  <div class="${item2.class}">
    <img class="sectionImgMob" src="${item2.imageMob}" alt="card1">
    <img class="sectionImgDesk" src="${item2.imageDesk}" alt="card1">
    <div class="sectionSubCard">
      <h2 class="sectionTitle">${item2.title}</h2>
      <div class="sectionCanopy">
        <h3 class="text1">${item2.canopy[0]}</h3>
        <img class="counter" src="./img/Counter.png" alt="counter">
        <h3 class="text2">${item2.canopy[1]}</h3>
        <img class="counter" src="./img/Counter.png" alt="counter">
        <h3 class="text2">${item2.canopy[2]}</h3>
      </div>
      <p class="sectionParra">${item2.para1}</p>
      <ul class="sectionTech">
        <li class="tech">${item2.tech[0]}</li>
        <li class="tech">${item2.tech[1]}</li>
        <li class="tech">${item2.tech[2]}</li>
      </ul>
      <a href="javascript:void(0)" class="sectionButton" name="${item2.id}">See Project</a>
    </div>
  </div>
  `;
});

sectionCard.innerHTML += '<div id="popUp" class="popUp hide"></div>';

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
              <h2 class="sectionTitle">Tonic</h2>
              <img class="crossblack" src="./img/crossblack.png" alt="crossblack" onclick="popUp.classList.toggle('hide')">
            </div>
            <div class="sectionCanopy">
              <h3 class="text1">${card[0].canopy[0]}</h3>
              <img class="counter" src="./img/Counter.png" alt="counter">
              <h3 class="text2">${card[0].canopy[1]}</h3>
              <img class="counter" src="./img/Counter.png" alt="counter">
              <h3 class="text2">${card[0].canopy[2]}</h3>
            </div>
            <img class="sectionImgMob" src="./img/card1.png" alt="card1">
            <img class="sectionImgDesk" src="./img/desktop/card1.png" alt="card1">
            <div class="deskColum">
              <p class="sectionParra cardParaMob">${card[0].para}</p>
              <p class="sectionParra cardParaDesk">${card[0].para2}</p>
              <div class="sectionFlex">
                <ul class="sectionTech">
                  <li class="tech">${card[0].tech[0]}</li>
                  <li class="tech">${card[0].tech[1]}</li>
                  <li class="tech">${card[0].tech[2]}</li>
                </ul>
                <ul class="sectionTech">
                  <li class="tech cardParaDesk">${card[0].tech[3]}</li>
                  <li class="tech cardParaDesk">${card[0].tech[4]}</li>
                  <li class="tech cardParaDesk">${card[0].tech[5]}</li>
                </ul>
                <div class="borderPop"></div>
                <div class="buttonPop">
                  <a href="${card[0].live}" class="sectionButton" name="1">See live <img class="imgButton" src="./img/export.png" alt="export" width="24" height="24"></a>
                  <a href="${card[0].source}" class="sectionButton" name="1">See Source <img class="imgButton" src="./img/IconGitHub.png" alt="IconGitHub" width="24" height="24"></a>
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