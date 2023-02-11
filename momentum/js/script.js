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
  randomNum =getRandomNum(1, 20) 
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
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=66a8dd4faf814112d2989ac99d776242&units=metric`;
    const res = await fetch(url);

    if (!res.ok) {
         errCity()
    }
    const data = await res.json();
  
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`;
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
    weatherError.textContent = `Error! Nothing to geocode for '${city.value}'!`
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
    const quotes = 'js/data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    randomQuoteNum = getRandomNum(0, 3)
    quote.textContent = `${data[randomQuoteNum].text}`
    author.textContent = `${data[randomQuoteNum].author}`
  }0

  document.addEventListener('DOMContentLoaded', getQuotes);
  quoteChanger.addEventListener('click', getQuotes)

  //Аудиоплеер

const playBtn = document.querySelector('.play');
const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');
const audio = new Audio();
let isPlay = false;
import playList from './playList';
console.log(playList);

function playAudio() {
    if (!isPlay) {
        isPlay = true; 
        audio.src = 'https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3';
        audio.currentTime = 0;
        audio.play();
        playBtn.classList.toggle('pause')
    } else {
        isPlay = false;
        audio.pause();
        playBtn.classList.toggle('pause')
    }

}

playBtn.addEventListener('click', playAudio);
playPrev.addEventListener('click', playAudio);
playNext.addEventListener('click', playAudio);
