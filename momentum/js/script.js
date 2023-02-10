//1. часы и календарь
const timeField = document.querySelector('.time')

function showTime() { //запускает время
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    timeField.textContent = currentTime;
    showDate();
    showGreeting()
    setTimeout(showTime, 1000);
}
showTime();

function showDate() { //показывает дату
const date = new Date();
const options = {weekday: 'long', month: 'long', day: 'numeric'};
const currentDate = date.toLocaleDateString('en-En', options);
const dateField = document.querySelector('.date')
dateField.textContent = currentDate;
}

//2. Приветствие
function showGreeting() {
    const greetingsField = document.querySelector('.greeting')
    const date = new Date();
    const hours = date.getHours();
    
    function getTimeOfDay() {
        if (hours>=6 && hours<12) {
            return 'morning'
        } else if (hours>=12 && hours<18) {
            return 'afternoon'
        } else if (hours>=18 && hours<24) {
            return 'evening'
        } else if (hours>=0 && hours<6) {
            return 'night'
        }
    }
    const timeOfDay = getTimeOfDay();
    const greetingText = `Good ${timeOfDay}`;
    greetingsField.textContent = greetingText;
    }
    showGreeting()
/*
текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь) +5
с 6:00 до 11:59 - Good morning / Доброе утро / Добрай раніцы
с 12:00 до 17:59 - Good afternoon / Добрый день / Добры дзень
с 18:00 до 23:59 - Good evening / Добрый вечер / Добры вечар
с 00:00 до 5:59 - Good night / Доброй/Спокойной ночи / Дабранач
*/
const name = document.querySelector('.name');

function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)