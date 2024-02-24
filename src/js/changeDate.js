// change day

var currentDate = new Date();
// Увеличение значения дня на 1
currentDate.setDate(currentDate.getDate() + 1);
// Получение отдельных составляющих даты
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Месяцы в JavaScript начинаются с 0, поэтому добавляем 1
var year = currentDate.getFullYear();
// Форматирование даты в нужном формате (например, "дд.мм.гггг")
var formattedDate = day;
// Обновление значения на вашем сайте
document.getElementById("dateElement").innerHTML = formattedDate;

// **************************************************************************

// change month
var current_date = new Date();
current_date.setDate(current_date.getDate() + 1);
var month = new Array(
  "СІЧНЯ",
  "ЛЮТОГО",
  "БЕРЕЗНЯ",
  "КВІТНЯ",
  "ТРАВНЯ",
  "ЧЕРВНЯ",
  "ЛИПНЯ",
  "СЕРПНЯ",
  "ВЕРЕСНЯ",
  "ЖОВТНЯ",
  "ЛИСТОПАДА",
  "ГРУДНЯ"
);
document.getElementById("monthElement").innerHTML =
  month[current_date.getMonth()];
