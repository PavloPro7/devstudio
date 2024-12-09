function openHeaderMenu() {
  document.getElementById('headerMenu').style.display = "block";

  var navCont = document.querySelector('.nav-cont');
  var contactsList = document.querySelector('.contacts-list');

  document.getElementById('navCont').appendChild(navCont);
  document.getElementById('contactsList').appendChild(contactsList);

  navCont.style.display = 'block';
  contactsList.style.display = 'block';


}

function closeHeaderMenu() {
  document.getElementById('headerMenu').style.display = "none";

  var navCont = document.getElementById('navCont').firstElementChild;
  var contactsList = document.getElementById('contactsList').firstElementChild;

  document.querySelector('.header').appendChild(navCont);
  document.querySelector('.header').appendChild(contactsList);

  if (window.innerWidth <= 640) {
    navCont.style.display = 'none';
    contactsList.style.display = 'none';
  }
}

window.addEventListener('resize', function() {
  if (window.innerWidth > 640) {
    document.querySelector('.nav-cont').style.display = 'block';
    document.querySelector('.contacts-list').style.display = 'block';
  } else {
    if (document.querySelector('.header').contains(document.querySelector('.nav-cont'))) {
      document.querySelector('.nav-cont').style.display = 'none';
      document.querySelector('.contacts-list').style.display = 'none';
    }
  }
});

function applyResponsiveClasses() {
  var contactsList = document.querySelector('.contacts-list');

  if (window.innerWidth <= 640) {
    contactsList.style.display = 'none';
  } else if (window.innerWidth <= 1280) {
    contactsList.style.flexDirection = 'column';
    contactsList.style.marginTop = '21px';
    contactsList.style.display = 'flex';
  } else {
    contactsList.style.flexDirection = 'row';
    contactsList.style.marginTop = '32px';
    contactsList.style.display = 'flex';
  }
}

// Применение стилей при загрузке страницы
applyResponsiveClasses();

// Применение стилей при изменении размера экрана
window.addEventListener('resize', applyResponsiveClasses);

// Отримуємо елементи
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var close = document.getElementById("close");
// Відкриття модального окна по нажатию на кнопку
btn.onclick = function () {
  modal.style.display = "block";
};

// Закриття модального вікна по натисканню на <span> (x)
close.onclick = function () {
  modal.style.display = "none";
};
// Закриття модального вікна по натисненню поза ним
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

