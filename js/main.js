function openHeaderMenu() {
  document.getElementById('headerMenu').style.display = "block";

  var navont = document.querySelector('.nav-cont');
  var contactsList = document.querySelector('.contacts-list');

  document.getElementById('navCont').appendChild(navont);
  document.getElementById('contactsList').appendChild(contactsList);

}

 
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

