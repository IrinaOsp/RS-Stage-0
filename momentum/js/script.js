//часы и календарь
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

//Приветствие

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();

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

function showGreeting() {
    const greetingsField = document.querySelector('.greeting')

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

  //Фоновое изображение

 function getRandomNum() {
    min = Math.ceil(1);
    max = Math.floor(20);
    return Math.floor(Math.random() * (20 - 1 + 1)) + 1; //Максимум и минимум включаются
  }
  randomNum =getRandomNum() 
  const timeOfDay = getTimeOfDay();

  function setBg() {
    randomNumStr = randomNum.toString();
    bgNum = randomNumStr.padStart(2, "0"); 
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {      
        document.body.style.backgroundImage = `url(${img.src})`;
    }; 
  }
  setBg()

  function getSlideNext() {
    if (randomNum < 20) {
        randomNum ++
        setBg()
    } else {
        randomNum = 1;
        setBg()
    }
  }

  function getSlidePrev() {
    if (randomNum > 1) {
        randomNum --
        setBg()
    } else {
        randomNum = 1;
        setBg()
    }
  }

  const slideNext = document.querySelector('.slide-next')
  const slidePrev = document.querySelector('.slide-prev')
  slideNext.addEventListener('click', getSlideNext)
  slidePrev.addEventListener('click', getSlidePrev)