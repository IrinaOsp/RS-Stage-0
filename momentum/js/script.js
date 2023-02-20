//Настройки

const state = {
    language: 'en',
    photoSource: 'github',
    blocks: ['time', 'date','greeting', 'quote', 'weather', 'player', 'todolist']
  }

const settingsBtn = document.querySelector('.settings-button')
const settingsBar = document.querySelector('.settings-bar')
const settingsBoard = document.querySelector('.settings-board')

//открывается меню настроек
settingsBtn.addEventListener('click', function(){
    settingsBar.classList.toggle('settings-bar-visible')
})
    //Вызов настроек по клику на General
    const settingsGeneral = document.getElementById('general')
    settingsGeneral.addEventListener('click', createGeneralHeading)
    settingsGeneral.addEventListener('click', function(){
            visibilityItems.style.display = 'block';
            langBtn.style.display = 'none';
    })
    
    //создание разметки настроек 
    
    const visibilityItems = document.createElement('ul');
    const h3 = document.createElement('h3');
    h3.classList.add('settings-board-h3')
    const h4 = document.createElement('h4');
    h4.classList.add('settings-board-h4')
    
    const langBtn = document.createElement('button')
    langBtn.classList.add('switch-language')
    langBtn.innerHTML='English'

    const photoGit = document.createElement('button')
    photoGit.classList.add('btnGit', 'photo-button')
    photoGit.innerHTML='GitHub'
    
    const photoUnsplash = document.createElement('button')
    photoUnsplash.classList.add('btnUnsplash', 'photo-button', 'disabledBtn')
    photoUnsplash.innerHTML='Unsplash API'

    const inputTagsUnsplash = document.createElement('input')
    inputTagsUnsplash.classList.add('input-tags', 'input-Unsplash')
    inputTagsUnsplash.placeholder = "[Enter tags for photos]"
    
    const photoFlickr = document.createElement('button')
    photoFlickr.classList.add('btnFlickr', 'photo-button', 'disabledBtn')
    photoFlickr.innerHTML='Flickr API'

    const inputTagsFlickr = document.createElement('input')
    inputTagsFlickr.classList.add('input-tags', 'input-Flickr')
    inputTagsFlickr.placeholder = "[Enter tags for photos]"
    
    function createGeneralHeading() {
        
        h3.textContent = 'General';
        h4.textContent = 'SHOW';
    
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
    }
    createGeneralHeading()
    let spanText = '';
    state.blocks.forEach(el => {
        const li = document.createElement('li');
        li.classList.add('display-item')
    
        const input = document.createElement('input')
        input.type = 'checkbox';
    
        spanText = document.createElement('span')
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

// Перевод

const greetingTranslation = {
    en:['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
    ru:['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'],
}

const languageSwitcher = document.querySelector('.switch-language');
function changeLanguage() {
    if (languageSwitcher.textContent === 'English') {
        languageSwitcher.textContent = 'Russian'
        languageSwitcher.classList.add('RU')
        name.placeholder = '[Введите имя]'
        city.placeholder = '[Введите город]'
        state['blocks'] = ['время', 'дата','приветствие', 'цитата', 'погода', 'плеер', 'список дел']
        state.blocks.forEach(el => {
            spanText.textContent = el;
        })
    } else {
        languageSwitcher.textContent = 'English'
        languageSwitcher.classList.remove('RU')
        name.placeholder = '[Enter name]'
        city.placeholder = '[Enter city]'
        state['blocks'] = ['time', 'date','greeting', 'quote', 'weather', 'player', 'todolist']
        state.blocks.forEach(el => {
            spanText.textContent = el;
        })
    }
    
}

languageSwitcher.addEventListener('click', changeLanguage)
languageSwitcher.addEventListener('click', getWeather)
languageSwitcher.addEventListener('click', getQuotes)









//часы и календарь
const timeField = document.querySelector('.time')

function showTime() { //запускает время
    const date = new Date();
    const currentDayTime = date.toLocaleTimeString();
    timeField.textContent = currentDayTime;
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

/*
текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь) +5
с 6:00 до 11:59 - Good morning / Доброе утро / Добрай раніцы
с 12:00 до 17:59 - Good afternoon / Добрый день / Добры дзень
с 18:00 до 23:59 - Good evening / Добрый вечер / Добры вечар
с 00:00 до 5:59 - Good night / Доброй/Спокойной ночи / Дабранач
*/
//Сохранение имени, города, тегов
const name = document.querySelector('.name');

function setLocalStorage() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('Unsplash_tag', inputTagsUnsplash.value);
    localStorage.setItem('Flickr_tag', inputTagsFlickr.value);
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
  const img = new Image();

    //Фон из Git
  function getLinkToImageFromGit() {
    let randomNumStr = randomNum.toString();
    let bgNum = randomNumStr.padStart(2, "0"); 
    img.src = `https://raw.githubusercontent.com/IrinaOsp/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  }

  //фон из Unsplash
  function getTagsUnspl(event) {
    console.log('getTags');
    if (event.keyCode === 13 && inputTagsUnsplash.value !== '') {
        console.log('getTags if');
        async function setBgWithTagsUnsplash() {
            const url = `https://api.unsplash.com/photos/random?query=${timeOfDay}%2C+${inputTagsUnsplash.value}&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17`;
            console.log(url);
            const res = await fetch(url);
            const data = await res.json();
            img.src = data.urls.regular        
            img.onload = () => {      
                document.body.style.backgroundImage = `url(${img.src})`;
            }; 
        } setBgWithTagsUnsplash()
    }
  }
        function getTagsFlckr(event) {
     if (event.keyCode === 13 && inputTagsFlickr.value !== '') {
        console.log('getTags if flckr');
        async function setBgWithTagsFlickr() {
            console.log(inputTagsFlickr.value);
            randomNum = getRandomNum(0, 99) 
            let randomNumStr = randomNum.toString();
            const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=fd92c1a76667aac1f64a7051e2c73a7a&tags=${timeOfDay}%2C+${inputTagsFlickr.value}&extras=url_l&format=json&nojsoncallback=1`
            console.log(url);
            const res = await fetch(url);
            const data = await res.json();
            img.src = data.photos.photo[randomNumStr].url_l       
            img.onload = () => {      
                document.body.style.backgroundImage = `url(${img.src})`;
            }; 
        } setBgWithTagsFlickr()
    } 
}
inputTagsUnsplash.addEventListener('keypress', getTagsUnspl)
inputTagsFlickr.addEventListener('keypress', getTagsFlckr)



async function getLinkToImageFromUnsplash() {
    const url = `https://api.unsplash.com/photos/random?query=${timeOfDay}&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17`;
    const res = await fetch(url);
    if (!res.ok) {
        console.log('Unsplash error')
        getLinkToImageFromGit()
   }
    const data = await res.json();
    img.src = data.urls.regular
} 

     //фон из Flickr
async function getLinkToImageFromFlickr() {
    randomNum = getRandomNum(0, 99) 
    let randomNumStr = randomNum.toString();
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=fd92c1a76667aac1f64a7051e2c73a7a&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`
    const res = await fetch(url);
    const data = await res.json();
   img.src = data.photos.photo[randomNumStr].url_l
}

  function setBg() {
    if (photoGit.classList.contains('disabledBtn') === false) {
        getLinkToImageFromGit()
    } else if (photoUnsplash.classList.contains('disabledBtn') === false) {
        getLinkToImageFromUnsplash() 
    } else if (photoFlickr.classList.contains('disabledBtn') === false) {
        getLinkToImageFromFlickr()
    }

    img.onload = () => {      
        document.body.style.backgroundImage = `url(${img.src})`;
    }; 
  }
  setBg()


  function getSlideNext() {
    if (photoGit.classList.contains('disabledBtn') === false) {
        if (randomNum < 20) {
            randomNum ++
            setBg()
        } else {
            randomNum = 1;
            setBg()
        }
    } else if (photoFlickr.classList.contains('disabledBtn') === false) {
            setBg()   
    } else if (photoUnsplash.classList.contains('disabledBtn') === false) {
        setBg()   
    } 
  }

  function getSlidePrev() {
    console.log('prev')
    if (photoGit.classList.contains('disabledBtn') === false) {
        if (randomNum > 1) {
            randomNum --
            setBg()
        } else {
            randomNum = 20;
            setBg()
        }
    } else if (photoFlickr.classList.contains('disabledBtn') === false) {
            setBg()
    } else if (photoUnsplash.classList.contains('disabledBtn') === false) {
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

    let whichLang = ''
    if (languageSwitcher.textContent === 'English') {whichLang = 'EN'}
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
    if (languageSwitcher.textContent !== 'Russian') {
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
const quote = document.querySelector('.quote-text')
const author = document.querySelector('.author')


 async function getQuotes() {  
    let quotes = '';
    if (languageSwitcher.textContent !== 'Russian') {
        quotes = './js/quotesEn.json';
    } else {
        quotes = './js/quotesRu.json';
    }
    const res = await fetch(quotes);
    const data = await res.json(); 
    let randomQuoteNum = getRandomNum(0, data.length-1)
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
    console.log(isPlay)
    if (!isPlay) {
        console.log('start play')
        isPlay = true; 
        audio.src = playList[playNum].src;
        changeProgressBar()
        audio.play();
        playBtn.classList.add('pause')
        changeActiveSong()
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
        audio.play();
        playBtn.classList.add('pause')
        changeActiveSong()
    } else {
        console.log('prev play')
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
        console.log('next start play')
        isPlay = true; 
        audio.src = playList[playNum].src;
        audio.play();
        playBtn.classList.add('pause')
        changeActiveSong()
    } else {
        console.log('next play')
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

//Прогресс бар продвинутого плеера
const progressBar = document.getElementById('progress-bar')

// задает аудио при загрузке
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

//Звук
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















  //Настройка видимости блоков
const displayItems = document.querySelectorAll('.display-item')

displayItems.forEach(function (item) {
    item.addEventListener('click', function() {
        const itemText = item.childNodes[1].innerHTML;
        document.querySelector(`.${itemText}`).classList.toggle('hide')
        const slider = item.childNodes[2].classList.toggle('disabled');
    })
})
    //Настройки языка

const settingsLanguage = document.getElementById('language')
settingsLanguage.addEventListener('click', showLangSettings)

function showLangSettings() {
 h3.innerHTML = 'Language'
 h4.innerHTML = ''
 visibilityItems.style.display = 'none';
 photoGit.style.display = 'none';
 photoUnsplash.style.display = 'none';
 photoFlickr.style.display = 'none';
 langBtn.style.display = 'block';
}

    //Настройки источника фото

const settingsPhotoSource = document.getElementById('photo-source')
settingsPhotoSource.addEventListener('click', showPhotoSource)
    
function showPhotoSource() {
    h3.innerHTML = 'Photo Source'
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

    //Настройки ToDo

    const settingsToDo = document.getElementById('todo')
    settingsToDo.addEventListener('click', showToDo)
        
    function showToDo() {
        h3.innerHTML = 'ToDo'
        h4.innerHTML = ''
        visibilityItems.style.display = 'none';
    }
