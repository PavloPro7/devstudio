// Отримуємо елементи
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];
// Відкриття модального окна по нажатию на кнопку
btn.onclick = function () {
  modal.style.display = "block";
};
// Закриття модального вікна по натисканню на <span> (x)
span.onclick = function () {
  modal.style.display = "none";
};
// Закриття модального вікна по натисненню поза ним
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
