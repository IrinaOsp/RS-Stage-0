// SETTINGS

const state = {
    language: 'en',
    photoSource: 'github',
    blocks: ['time', 'date','greeting', 'quote', 'weather', 'player', 'todolist']
  }

const settingsBtn = document.querySelector('.settings-button')
const settingsBar = document.querySelector('.settings-bar')
const settingsBoard = document.querySelector('.settings-board')

// open-close settings menu
settingsBtn.addEventListener('click', function(){
    settingsBar.classList.toggle('settings-bar-visible')
})
/*
document.addEventListener("click", function(event) {

    if (event.target !== settingsBar) {
        console.log('You clicked outside  the box!');
    } else {
        console.log('You clicked inside the box!');
    }
})*/


// open General settings on click General
    const settingsGeneral = document.getElementById('general')
    settingsGeneral.addEventListener('click', createGeneralHeading)
    settingsGeneral.addEventListener('click', function(){
            visibilityItems.style.display = 'block';
            langBtn.style.display = 'none';
    })
    
// create settings layout 
    
    const visibilityItems = document.createElement('ul');
    const h3 = document.createElement('h3');
    h3.classList.add('settings-board-h3')
    const h4 = document.createElement('h4');
    h4.classList.add('settings-board-h4')
    
    const langBtn = document.createElement('button')
    langBtn.setAttribute('type', 'button');
    langBtn.classList.add('switch-language')
    langBtn.innerHTML='English'

    const photoGit = document.createElement('button')
    photoGit.classList.add('btnGit', 'photo-button')
    photoGit.setAttribute('type', 'button');
    photoGit.innerHTML='GitHub'
    
    const photoUnsplash = document.createElement('button')
    photoUnsplash.classList.add('btnUnsplash', 'photo-button', 'disabledBtn')
    photoUnsplash.setAttribute('type', 'button');
    photoUnsplash.innerHTML='Unsplash API'

    const inputTagsUnsplash = document.createElement('input')
    inputTagsUnsplash.classList.add('input-tags', 'input-Unsplash')
    inputTagsUnsplash.placeholder = "[Enter tags separated by spaces]"
    
    const photoFlickr = document.createElement('button')
    photoFlickr.classList.add('btnFlickr', 'photo-button', 'disabledBtn')
    photoFlickr.setAttribute('type', 'button');

    photoFlickr.innerHTML='Flickr API'

    const inputTagsFlickr = document.createElement('input')
    inputTagsFlickr.classList.add('input-tags', 'input-Flickr')
    inputTagsFlickr.placeholder = "[Enter tags separated by spaces]"
    
    let spanText = '';
    let i=0;
    state.blocks.forEach(el => {
        const li = document.createElement('li');
        li.classList.add('display-item')
    
        const input = document.createElement('input')
        input.classList.add('disp-input', `disp-input-${i}`)
        input.type = 'checkbox';
    
        spanText = document.createElement('span')
        spanText.classList.add(`span-${i}`)
        i++;
        spanText.textContent = el;
    
        const spanSlider = document.createElement('span')
        spanSlider.classList.add('toggle-slider')
    
        const spanCircle = document.createElement('span')
        spanCircle.classList.add('toggle-circle')
        
        visibilityItems.appendChild(li)
        li.appendChild(input)
        li.appendChild(spanText)
        li.appendChild(spanSlider)
        spanSlider.appendChild(spanCircle)
      })

    function createGeneralHeading() {
        visibilityItems.classList.add('visibility-items')
        settingsBoard.append(h3)
        settingsBoard.append(h4)
        settingsBoard.append(visibilityItems)
        settingsBoard.append(langBtn)
        settingsBoard.append(photoGit)
        settingsBoard.append(photoUnsplash)
        settingsBoard.append(inputTagsUnsplash)
        settingsBoard.append(photoFlickr)
        settingsBoard.append(inputTagsFlickr)
        langBtn.style.display = 'none';
        photoGit.style.display = 'none';
        photoUnsplash.style.display = 'none';
        photoFlickr.style.display = 'none';
        inputTagsUnsplash.style.display = 'none';
        inputTagsFlickr.style.display = 'none';
        if(langBtn.classList.contains('RU')) {
            h3.textContent = 'Основные';
            h4.textContent = 'ПОКАЗАТЬ';
            document.querySelector('.span-0').textContent = 'Время'
            document.querySelector('.span-1').textContent = 'Дата'
            document.querySelector('.span-2').textContent = 'Приветствие'
            document.querySelector('.span-3').textContent = 'Цитата'
            document.querySelector('.span-4').textContent = 'Погода'
            document.querySelector('.span-5').textContent = 'Плеер'
            document.querySelector('.span-6').textContent = 'Список дел'
        } else {
            h3.textContent = 'General';
            h4.textContent = 'SHOW';
            document.querySelector('.span-0').textContent = 'Time'
            document.querySelector('.span-1').textContent = 'Date'
            document.querySelector('.span-2').textContent = 'Greeting'
            document.querySelector('.span-3').textContent = 'Quote'
            document.querySelector('.span-4').textContent = 'Weather'
            document.querySelector('.span-5').textContent = 'Player'
            document.querySelector('.span-6').textContent = 'Todo list'
        }
    }
    createGeneralHeading()


// Translation

const greetingTranslation = {
    en:['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
    ru:['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'],
}

const languageSwitcher = document.querySelector('.switch-language');
function changeLanguage() {
    if (!languageSwitcher.classList.contains('RU')) {
        languageSwitcher.textContent = 'Русский'
        languageSwitcher.classList.add('RU')
        name.placeholder = '[Введите имя]'
        city.placeholder = '[Введите город]'
        settingsGeneral.textContent = 'Основные настройки'
        settingsLanguage.textContent = 'Язык'
        settingsPhotoSource.textContent = 'Источник фото'
        settingsToDo.textContent = 'Список дел'
        h3.innerHTML = 'Язык'
        getWeather()
        getQuotes()

    } else {
        languageSwitcher.textContent = 'English'
        languageSwitcher.classList.remove('RU')
        name.placeholder = '[Enter name]'
        city.placeholder = '[Enter city]'
        settingsGeneral.textContent = 'General'
        settingsLanguage.textContent = 'Language'
        settingsPhotoSource.textContent = 'Photo Source'
        settingsToDo.textContent = 'ToDo'
        h3.innerHTML = 'Language'
        getWeather()
        getQuotes()
    }
    
}

languageSwitcher.addEventListener('click', changeLanguage)


// TIME & CALENDAR
const timeField = document.querySelector('.time')

function showTime() { //starts time 
    const date = new Date();
    const currentDayTime = date.toLocaleTimeString();
    timeField.textContent = currentDayTime;
    showDate();
    showGreeting()
    setTimeout(showTime, 1000);
}
showTime();

function showDate() {
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

// GREETINGS

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
    const greetingsField = document.querySelector('.greeting-text')

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

// SAVING NAME, CITY, SETTINGS IN LOCAL STORAGE
const name = document.querySelector('.name');
const arrSlider = document.querySelectorAll('.toggle-slider')
const arrPhotoBtns = document.querySelectorAll('.photo-button')

function setLocalStorage() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('Unsplash_tag', inputTagsUnsplash.value);
    localStorage.setItem('Flickr_tag', inputTagsFlickr.value);
    if (languageSwitcher.classList.contains('RU')) {
        localStorage.setItem('Language', 'RU');
    } else {
        localStorage.setItem('Language', 'EN');
    }
    
    arrSlider.forEach((item, index) => {
        if(item.classList.contains('disabled')) {
              localStorage.setItem(`Disp block ${index}`, 'disabled');
            } else {
              localStorage.removeItem(`Disp block ${index}`);
        }
    })
    arrPhotoBtns.forEach((item, index) => {
        if(!item.classList.contains('disabledBtn')) {
              localStorage.setItem(`PhotoBtn ${index}`, 'active');
            } else {
              localStorage.removeItem(`PhotoBtn ${index}`);
        }
    })
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
    if(localStorage.getItem('Unsplash_tag')) {
        inputTagsUnsplash.value = localStorage.getItem('Unsplash_tag');
    }
    if(localStorage.getItem('Flickr_tag')) {
        inputTagsFlickr.value = localStorage.getItem('Flickr_tag');
    }
    if (localStorage.getItem('Language')) {
        if (localStorage.getItem('Language') === 'RU') {
            changeLanguage()
            createGeneralHeading()
        } else {
            languageSwitcher.classList.remove('RU')
        }
    } 

    arrSlider.forEach((item, index) => {
        if(localStorage.getItem(`Disp block ${index}`)) {
          item.classList.toggle('disabled');
          const itemText = state.blocks[index];
          document.querySelector(`.${itemText}`).classList.add('hide');
        }
      })

    arrPhotoBtns.forEach((item, index) => {
        if(localStorage.getItem(`PhotoBtn ${index}`)) {
          item.classList.remove('disabledBtn');
        } else {
            item.classList.add('disabledBtn');
        }   setBg()
      })
  }
  window.addEventListener('load', getLocalStorage)

  // BACKGROUND PIC

 function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // max and min incl
  }
  let randomNum = getRandomNum(1, 20) 
  const timeOfDay = getTimeOfDay();
  const img = new Image();

    // Git background
  function getLinkToImageFromGit() {
    let randomNumStr = randomNum.toString();
    let bgNum = randomNumStr.padStart(2, "0"); 
    img.src = `https://raw.githubusercontent.com/IrinaOsp/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  }

    // Unsplash background  

  async function getLinkToImageFromUnsplash() {
    let url = '';
    if (inputTagsUnsplash.value !== '') { //${timeOfDay}%2C+${inputTagsUnsplash.value}
        let tags = inputTagsFlickr.value;
        url = `https://api.unsplash.com/photos/random?query=${tags}&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17`;
    } else {
        url = `https://api.unsplash.com/photos/random?query=${timeOfDay}&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17`;
    }
    const res = await fetch(url);
    if (!res.ok) {
        getLinkToImageFromGit()
   }
    const data = await res.json();
    img.src = data.urls.regular
    img.onload = () => {      
        document.body.style.backgroundImage = `url(${img.src})`;
    }; 
} 

function getTagsUnspl(event) { 
    if (event.keyCode === 13) {
        getLinkToImageFromUnsplash()
   }
}
     // Flickr background
     async function getLinkToImageFromFlickr() {
        let url = '';
        if (inputTagsFlickr.value !== '') {
            let tags = inputTagsFlickr.value;
            url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=fd92c1a76667aac1f64a7051e2c73a7a&tags=${tags}&extras=url_h&format=json&nojsoncallback=1`
        } else {
            url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=fd92c1a76667aac1f64a7051e2c73a7a&tags=${timeOfDay}&extras=url_h&format=json&nojsoncallback=1`
        }
        const res = await fetch(url);
        if (!res.ok) {
            getLinkToImageFromGit()
       }
        const data = await res.json();
       randomNum = getRandomNum(0, data.photos.photo.length-1) 
       let randomNumStr = randomNum.toString();
       img.src = data.photos.photo[randomNumStr].url_h
       if (img.src.length==='http://127.0.0.1:5500/src/undefined') {
        getLinkToImageFromFlickr()
       } else {
        img.onload = () => {      
            document.body.style.backgroundImage = `url(${img.src})`;
        }; 
       } 
    }

   function getTagsFlckr(event) {
     if (event.keyCode === 13) {
        getLinkToImageFromFlickr()
    }
}
inputTagsUnsplash.addEventListener('keypress', getTagsUnspl)
inputTagsFlickr.addEventListener('keypress', getTagsFlckr)


  function setBg() {
    if (!photoGit.classList.contains('disabledBtn')) {
        getLinkToImageFromGit()
    } else if (!photoUnsplash.classList.contains('disabledBtn')) {
        getLinkToImageFromUnsplash() 
    } else if (!photoFlickr.classList.contains('disabledBtn')) {
        getLinkToImageFromFlickr()
    }

    img.onload = () => {      
        document.body.style.backgroundImage = `url(${img.src})`;
    }; 
  }

  function getSlideNext() {
    if (!photoGit.classList.contains('disabledBtn')) {
        if (randomNum < 20) {
            randomNum ++
            setBg()
        } else {
            randomNum = 1;
            setBg()
        }
    } else if (!photoFlickr.classList.contains('disabledBtn')) {
            setBg()   
    } else if (!photoUnsplash.classList.contains('disabledBtn')) {
        setBg()   
    } 
  }

  function getSlidePrev() {
    if (!photoGit.classList.contains('disabledBtn')) {
        if (randomNum > 1) {
            randomNum --
            setBg()
        } else {
            randomNum = 20;
            setBg()
        }
    } else if (!photoFlickr.classList.contains('disabledBtn')) {
            setBg()
    } else if (!photoUnsplash.classList.contains('disabledBtn')) {
        setBg()   
    } 
  }

  const slideNext = document.querySelector('.slide-next')
  const slidePrev = document.querySelector('.slide-prev')
  slideNext.addEventListener('click', getSlideNext)
  slidePrev.addEventListener('click', getSlidePrev)

  // WEATHER
  const weatherIcon = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  const weatherDescription = document.querySelector('.weather-description');
  const wind = document.querySelector('.wind')
  const humidity = document.querySelector('.humidity')
  const city = document.querySelector('.city')
  const weatherError = document.querySelector('.weather-error');
  
  async function getWeather() {
    if (city.value === '' && localStorage.getItem('city') === '') {
        if (!languageSwitcher.classList.contains('RU')) {
            city.value = 'Minsk'
        } else {
            city.value = 'Минск'
        }
        
    } else if (city.value === '' && localStorage.getItem('city') !== '') {
        city.value = localStorage.getItem('city')
    } else if ((city.value === 'Minsk' || city.value === 'Минск') && localStorage.getItem('city') === '') {
         if (languageSwitcher.classList.contains('RU')) {
            city.value = 'Минск'
         } else {
            city.value = 'Minsk'
         }    
    }

    let whichLang = ''
    if (!languageSwitcher.classList.contains('RU')) {whichLang = 'EN'}
    else {whichLang = 'RU'}

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${whichLang}&appid=66a8dd4faf814112d2989ac99d776242&units=metric`;
    const res = await fetch(url);

    if (!res.ok) {
         errCity()
    }
    const data = await res.json();
  
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    if (!languageSwitcher.classList.contains('RU')) {
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
    if (!languageSwitcher.classList.contains('RU')) {
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

 // QUOTES

const quoteChanger = document.querySelector('.change-quote')
const quote = document.querySelector('.quote-text')
const author = document.querySelector('.author')


 async function getQuotes() {  
    let quotes = '';
    if (!languageSwitcher.classList.contains('RU')) {
        quotes = './quotesEn.json';
    } else {
        quotes = './quotesRu.json';
    }
    const res = await fetch(quotes);
    const data = await res.json(); 
    let randomQuoteNum = getRandomNum(0, data.length-1)
    quote.textContent = `${data[randomQuoteNum].text}`
    author.textContent = `${data[randomQuoteNum].author}`
  }

  document.addEventListener('DOMContentLoaded', getQuotes);
  quoteChanger.addEventListener('click', getQuotes)

  // Audio pleer

const playBtn = document.querySelector('.play');
const playPrevBtn = document.querySelector('.play-prev');
const playNextBtn = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list')
const songTitle = document.querySelector('.song-title')

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
const songTitles = document.querySelectorAll('.play-item')
songTitle.innerHTML = songTitles[playNum].innerHTML

function playAudio() {
    if (!isPlay) {
        isPlay = true; 
        audio.src = playList[playNum].src;
        changeProgressBar()
        audio.play();
        playBtn.classList.add('pause')
        changeActiveSong()
    } else {
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

    if (!isPlay) {
        isPlay = true; 
        audio.src = playList[playNum].src;
        audio.play();
        playBtn.classList.add('pause')
        changeActiveSong()
    } else {
        audio.src = playList[playNum].src;
        audio.play();
        changeActiveSong()
    }
}

function playNext() {
    if (playNum < playList.length-1) {
        playNum++
    } else {
        playNum = 0
    }

    if (!isPlay) {
        isPlay = true; 
        audio.src = playList[playNum].src;
        audio.play();
        playBtn.classList.add('pause')
        changeActiveSong()
    } else {
        audio.src = playList[playNum].src;
        audio.play();
        changeActiveSong()   
    }
}

audio.addEventListener('ended', playNext)


function changeActiveSong() {
    songTitles.forEach(function (item) {
        if(item.classList.contains('item-active')) {
            item.classList.remove('item-active')
        }
    })
    songTitles[playNum].classList.add('item-active')
    songTitle.innerHTML = songTitles[playNum].innerHTML
}

playBtn.addEventListener('click', playAudio);
playPrevBtn.addEventListener('click', playPrev);
playNextBtn.addEventListener('click', playNext);

// Progress bar 
const progressBar = document.getElementById('progress-bar')

// Set audio onload
audio.src = playList[playNum].src;

function updateProgressValue() {
    progressBar.max = audio.duration;
    progressBar.value = audio.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(audio.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(audio.duration)));
    }
};

function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

// run updateProgressValue function every 1/2 second to show change in progressBar and song.currentTime on the DOM
setInterval(updateProgressValue, 500);

// function where progressBar.value is changed when slider thumb is dragged without auto-playing audio
function changeProgressBar() {
    audio.currentTime = progressBar.value;
};
progressBar.addEventListener("change", changeProgressBar);

// Sound
const volumeSlider = document.querySelector('#soundVolume');
const muteVolume = document.querySelector('.muteButton') 

function muteSound() {
    if (audio.volume !== 0) {
        audio.volume = 0;
    } else {
        changeVolume()
    }
    muteVolume.classList.toggle('mute')
}

muteVolume.addEventListener("click", muteSound);

function changeVolume() {
    audio.volume = volumeSlider.value;
};
volumeSlider.addEventListener("change", changeVolume);


  //Blocks visibility settings
const displayItems = document.querySelectorAll('.display-item')

displayItems.forEach(function (item) {
    item.addEventListener('click', function() {
        const itemNum = item.childNodes[1].classList.value.slice(-1);
        const itemText = state.blocks[itemNum];

        document.querySelector(`.${itemText}`).classList.toggle('hide')
        const slider = item.childNodes[2].classList.toggle('disabled');
    })
})
    //Language settings

const settingsLanguage = document.getElementById('language')
settingsLanguage.addEventListener('click', showLangSettings)

function showLangSettings() {
    if(langBtn.classList.contains('RU')) {
        h3.innerHTML = 'Язык'
    } else {
        h3.innerHTML = 'Language'
    }
 h4.innerHTML = ''
 visibilityItems.style.display = 'none';
 photoGit.style.display = 'none';
 photoUnsplash.style.display = 'none';
 photoFlickr.style.display = 'none';
 langBtn.style.display = 'block';
}

    //Photo source settings

const settingsPhotoSource = document.getElementById('photo-source')
settingsPhotoSource.addEventListener('click', showPhotoSource)
    
function showPhotoSource() {
    if(langBtn.classList.contains('RU')) {
        h3.innerHTML = 'Источник фото'
    } else {
        h3.innerHTML = 'Photo Source'
    }
    h4.innerHTML = ''
    visibilityItems.style.display = 'none';
    langBtn.style.display = 'none';
    photoGit.style.display = 'block';
    photoUnsplash.style.display = 'block';
    photoFlickr.style.display = 'block';
}

photoGit.addEventListener('click', function() {

    if (photoGit.classList.contains('disabledBtn') === 'false') {
        return
    } else {
        photoGit.classList.remove('disabledBtn')
        photoUnsplash.classList.add('disabledBtn')
        photoFlickr.classList.add('disabledBtn')
        setBg()
    }
})

photoUnsplash.addEventListener('click', function() {
    if (photoUnsplash.classList.contains('disabledBtn') === 'false') {
        return
    } else {
        photoUnsplash.classList.remove('disabledBtn')
        photoGit.classList.add('disabledBtn')
        photoFlickr.classList.add('disabledBtn')
        inputTagsUnsplash.style.display = 'block';
        inputTagsFlickr.style.display = 'none';
        setBg()
    }
})

photoFlickr.addEventListener('click', function() {
    if (photoFlickr.classList.contains('disabledBtn') === 'false') {
        return
    } else {
        photoFlickr.classList.remove('disabledBtn')
        photoGit.classList.add('disabledBtn')
        photoUnsplash.classList.add('disabledBtn')
        inputTagsUnsplash.style.display = 'none';
        inputTagsFlickr.style.display = 'block';
        setBg()
    }
})

    //ToDo settings

    const settingsToDo = document.getElementById('todo')
    settingsToDo.addEventListener('click', showToDo)
        
    function showToDo() {
        if(langBtn.classList.contains('RU')) {
            h3.innerHTML = 'Список дел'
        } else {
            h3.innerHTML = 'ToDo'
        }
        h4.innerHTML = ''
        visibilityItems.style.display = 'none';
        inputTagsUnsplash.style.display = 'none';
        inputTagsFlickr.style.display = 'none';
        photoGit.style.display = 'none';
        photoUnsplash.style.display = 'none';
        photoFlickr.style.display = 'none';
        languageSwitcher.style.display = 'none';
    }


