// Burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const page = document.querySelector('.main-container');
    const menuCloseItem = document.querySelector('.nav-close');
    const menuLinks = document.querySelectorAll('.nav-link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav-active');
    });
    page.addEventListener('click', () => {
        menu.classList.remove('nav-active');
    });
    if (window.innerWidth <= 380) {
        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('nav-active');
            });
        }
    }
}());

//City dropdown
const cityForm = document.querySelector('.select-city');
const dropDown = document.querySelector('.select-city-body');
const mainCityForm = document.querySelector('.form-select');
const cityHeader = document.querySelector('.select-city-header');

const Canandaigua = document.getElementById('Canandaigua');
const NewYork = document.getElementById('NewYork');
const Yonkers = document.getElementById('Yonkers');
const Sherrill = document.getElementById('Sherrill');
const selectedCity = document.getElementById('select-city-header-p'); 
const contactsCard = document.querySelector('.contacts-card');
const contactCity = document.getElementById('contact-city');
const contactNumber = document.getElementById('contact-number');
const contactAddress = document.getElementById('contact-address');
const buttonCall = document.querySelector('.button-call');

(function () {   
    cityHeader.addEventListener('click', () => {
      dropDown.classList.toggle('select-city-body-show'); //выпадающий список
    });
    cityHeader.addEventListener('click', () => {
      mainCityForm.classList.add('form-select-opened'); //убирает padding на 380px
    });
    cityHeader.addEventListener('click', () => {
    cityHeader.classList.add('select-city-header-active'); //формат header
    });
    
}());

(function () {
    Canandaigua.addEventListener("click", () => {
      dropDown.classList.remove('select-city-body-show');
      contactsCard.classList.add('contacts-card-active');
      document.querySelector('.contacts-img').classList.add('contacts-img-hide');
      selectedCity.textContent = 'Canandaigua, NY';
      contactCity.textContent = 'Canandaigua, NY';
      contactNumber.textContent = '+1	585 393 0001';
      contactAddress.textContent = '151 Charlotte Street';
      buttonCall.href='tel:+15853930001';
    });

    NewYork.addEventListener("click", () => {
      dropDown.classList.remove('select-city-body-show');
      contactsCard.classList.add('contacts-card-active');
      document.querySelector('.contacts-img').classList.add('contacts-img-hide');
      selectedCity.textContent = 'New York City';
      contactCity.textContent = 'New York City';
      contactNumber.textContent = '+1	212	456 0002';
      contactAddress.textContent = '9 East 91st Street';
      buttonCall.href='tel:+12124560002';
    });

    Yonkers.addEventListener("click", () => {
      dropDown.classList.remove('select-city-body-show');
      contactsCard.classList.add('contacts-card-active');
      document.querySelector('.contacts-img').classList.add('contacts-img-hide');
      selectedCity.textContent = 'Yonkers, NY';
      contactCity.textContent = 'Yonkers, NY';
      contactNumber.textContent = '+1	914	678 0003';
      contactAddress.textContent = '511 Warburton Ave';
      buttonCall.href='tel:+19146780003';
    });

    Sherrill.addEventListener("click", () => {
      dropDown.classList.remove('select-city-body-show');
      contactsCard.classList.add('contacts-card-active');
      document.querySelector('.contacts-img').classList.add('contacts-img-hide');
      selectedCity.textContent = 'Sherrill, NY';
      contactCity.textContent = 'Sherrill, NY';
      contactNumber.textContent = '+1	315	908 0004';
      contactAddress.textContent = '14 WEST Noyes BLVD';
      buttonCall.href='tel:+1315900004';
    });

  
}());


/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
/*function dropFunction() {
    document.getElementById("myDropdown").classList.toggle("select-city-body-show");
  }
  
  // Закройте выпадающее меню, если пользователь щелкает за его пределами
  window.onclick = function(event) {
    if (!event.target.matches('select-city-header')) {
      var dropdowns = document.getElementsByClassName("select-city-body");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('select-city-body-show')) {
          openDropdown.classList.remove('select-city-body-show');
        }
      }
    }
  }
*/
//accordion
/*
class ItcAccordion {
    constructor(target, config) {
      this._el = typeof target === 'string' ? document.querySelector(target) : target;
      const defaultConfig = {
        alwaysOpen: true,
        duration: 350
      };
      this._config = Object.assign(defaultConfig, config);
      this.addEventListener();
    }
    addEventListener() {
      this._el.addEventListener('click', (e) => {
        const elHeader = e.target.closest('.accordion__header');
        if (!elHeader) {
          return;
        }
        if (!this._config.alwaysOpen) {
          const elOpenItem = this._el.querySelector('.accordion__item_show');
          if (elOpenItem) {
            elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
          }
        }
        this.toggle(elHeader.parentElement);
      });
    }
    show(el) {
      const elBody = el.querySelector('.accordion__body');
      if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
        return;
      }
      elBody.style['display'] = 'block';
      const height = elBody.offsetHeight;
      elBody.style['height'] = 0;
      elBody.style['overflow'] = 'hidden';
      elBody.style['transition'] = `height ${this._config.duration}ms ease`;
      elBody.classList.add('collapsing');
      el.classList.add('accordion__item_slidedown');
      elBody.offsetHeight;
      elBody.style['height'] = `${height}px`;
      window.setTimeout(() => {
        elBody.classList.remove('collapsing');
        el.classList.remove('accordion__item_slidedown');
        elBody.classList.add('collapse');
        el.classList.add('accordion__item_show');
        elBody.style['display'] = '';
        elBody.style['height'] = '';
        elBody.style['transition'] = '';
        elBody.style['overflow'] = '';
      }, this._config.duration);
    }
    hide(el) {
      const elBody = el.querySelector('.accordion__body');
      if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
        return;
      }
      elBody.style['height'] = `${elBody.offsetHeight}px`;
      elBody.offsetHeight;
      elBody.style['display'] = 'block';
      elBody.style['height'] = 0;
      elBody.style['overflow'] = 'hidden';
      elBody.style['transition'] = `height ${this._config.duration}ms ease`;
      elBody.classList.remove('collapse');
      el.classList.remove('accordion__item_show');
      elBody.classList.add('collapsing');
      window.setTimeout(() => {
        elBody.classList.remove('collapsing');
        elBody.classList.add('collapse');
        elBody.style['display'] = '';
        elBody.style['height'] = '';
        elBody.style['transition'] = '';
        elBody.style['overflow'] = '';
      }, this._config.duration);
    }
    toggle(el) {
      el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
    }
  }*/



  //отдельный скрипт под аккордеон
 /* new ItcAccordion(document.querySelector('.accordion'), {
    alwaysOpen: false
  });*/

  //скрипт для City
