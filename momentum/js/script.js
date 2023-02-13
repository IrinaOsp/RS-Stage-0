// Перевод

const greetingTranslation = {
    en:['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
    ru:['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'],
}

const languageSwitcher = document.querySelector('.switch-language');
function changeLanguage() {
    if (languageSwitcher.textContent === 'EN') {
        languageSwitcher.textContent = 'RU'
        languageSwitcher.classList.add('RU')
        name.placeholder = '[Введите имя]'
        city.placeholder = '[Введите город]'
    } else {
        languageSwitcher.textContent = 'EN'
        languageSwitcher.classList.remove('RU')
        name.placeholder = '[Enter name]'
        city.placeholder = '[Enter city]'
    }
    
}

languageSwitcher.addEventListener('click', changeLanguage)
languageSwitcher.addEventListener('click', getWeather)


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
let currentDate = '';
if(languageSwitcher.classList.contains('RU') === false) {
    currentDate = date.toLocaleDateString('en-En', options);
} else {
    currentDate = date.toLocaleDateString('ru-Ru', options);
}
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
    let greetingText = '';
    if(languageSwitcher.classList.contains('RU') === false) {
        greetingText = `Good ${timeOfDay}`;
    } else {
        switch (timeOfDay) {
            case 'morning': greetingText = greetingTranslation.ru[0];
            break;
            case 'afternoon': greetingText = greetingTranslation.ru[1];
            break;
            case 'evening': greetingText = greetingTranslation.ru[2];
            break;
            case 'night': greetingText = greetingTranslation.ru[3];
            break;
        }
    }
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
//Сохранение имени, города
const name = document.querySelector('.name');

function setLocalStorage() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
  }
  window.addEventListener('load', getLocalStorage)

  //Фоновое изображение

 function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  let randomNum = getRandomNum(1, 20) 
  const timeOfDay = getTimeOfDay();

  function setBg() {
    let randomNumStr = randomNum.toString();
    let bgNum = randomNumStr.padStart(2, "0"); 
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/IrinaOsp/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
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
        randomNum = 20;
        setBg()
    }
  }

  const slideNext = document.querySelector('.slide-next')
  const slidePrev = document.querySelector('.slide-prev')
  slideNext.addEventListener('click', getSlideNext)
  slidePrev.addEventListener('click', getSlidePrev)

  //Погода
  const weatherIcon = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  const weatherDescription = document.querySelector('.weather-description');
  const wind = document.querySelector('.wind')
  const humidity = document.querySelector('.humidity')
  const city = document.querySelector('.city')
  const weatherError = document.querySelector('.weather-error');
  
  async function getWeather() {
    if (city.value === '' && localStorage.getItem('city') === '') {
            city.value = 'Minsk'
    } else if (city.value === '' && localStorage.getItem('city') !== '') {
        city.value = localStorage.getItem('city')
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${languageSwitcher.textContent}&appid=66a8dd4faf814112d2989ac99d776242&units=metric`;
    const res = await fetch(url);

    if (!res.ok) {
         errCity()
    }
    const data = await res.json();
  
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    if (languageSwitcher.textContent !== 'RU') {
        wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
        humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`;
    } else {
        wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
        humidity.textContent = `Влажность: ${Math.round(data.main.humidity)}%`;
    }
}

function setCity(event) {
    if (event.keyCode === 13 && city.value !== '') {
        weatherError.textContent = ''
        getWeather();
    } else if (event.keyCode === 13 && city.value === '') {
        errCity();
    } 

    document.addEventListener("click", function(event) {
        if (!city.contains(event.target) && city.value !== '') {
            weatherError.textContent = ''
            return getWeather();
        } else if (!city.contains(event.target) && city.value === '') {
            errCity();
        } 
      }, {once : true});
  }

function errCity() {
    if (languageSwitcher.textContent !== 'RU') {
        weatherError.textContent = `Error! Nothing to geocode for '${city.value}'!`
    } else {
        weatherError.textContent = `Ошибка! Не найден город '${city.value}'!`
    }
    weatherIcon.className = '';
    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = '';
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity)

 // Цитаты

const quoteChanger = document.querySelector('.change-quote')
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')


 async function getQuotes() {  
    const quotes = './js/data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    let randomQuoteNum = getRandomNum(0, 3)
    quote.textContent = `${data[randomQuoteNum].text}`
    author.textContent = `${data[randomQuoteNum].author}`
  }

  document.addEventListener('DOMContentLoaded', getQuotes);
  quoteChanger.addEventListener('click', getQuotes)

  //Аудиоплеер

const playBtn = document.querySelector('.play');
const playPrevBtn = document.querySelector('.play-prev');
const playNextBtn = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list')
const audio = new Audio();
let isPlay = false;

import playList from './playList.js';
let playNum = 0;
playList.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('play-item')
    li.textContent = el.title;
    playListContainer.append(li)
  })

function playAudio() {
    console.log(isPlay)
    if (!isPlay) {
        console.log('start play')
        isPlay = true; 
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        audio.play();
        playBtn.classList.add('pause')
    } else {
        console.log('stop play')
        isPlay = false;
        audio.pause();
        playBtn.classList.remove('pause')
    }
}

function playPrev() {
    if (playNum >= 1) {
        playNum--
    } else {
        playNum = playList.length-1;
    }
    console.log(playNum)

    if (!isPlay) {
        console.log('prev start play')
        isPlay = true; 
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        audio.play();
        playBtn.classList.add('pause')
    } else {
        console.log('prev play')
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        audio.play();
    }
}

function playNext() {
    if (playNum < playList.length-1) {
        playNum++
    } else {
        playNum = 0
    }
    console.log(playNum)
    if (!isPlay) {
        console.log('next start play')
        isPlay = true; 
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        audio.play();
        playBtn.classList.add('pause')
    } else {
        console.log('next play')
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        audio.play();
    }
}

playBtn.addEventListener('click', playAudio);
playPrevBtn.addEventListener('click', playPrev);
playNextBtn.addEventListener('click', playNext);



