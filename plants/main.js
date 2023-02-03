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

//Service buttons

const buttonsService = document.querySelectorAll('.button_service');
const allCards = document.querySelectorAll('.services-container-item');

buttonsService.forEach(button => {
  button.addEventListener('click', () => changeClass(button));
})

let activeButtonsId = [] //
let activeButtonsCount = 0; //


  function changeClass(button) {
    if (button.classList.contains('button_service_disabled')) {
      button.classList.remove('button_service_disabled');
  }
    if (button.classList.contains('button_service_active')) {
        button.classList.remove('button_service_active');
        activeButtonsCount--;
        activeButtonsId.pop(button.id)
    } else if (activeButtonsCount < 2) {
        button.classList.add('button_service_active');
        activeButtonsCount++;
        activeButtonsId.push(button.id)
    } else {
        button.classList.add('button_service_disabled');
    }
    
    changeBlur(activeButtonsId)
}

function changeBlur(activeButtonsId) {
  if(activeButtonsId.length === 0) {
    allCards.forEach(function(item) {
      item.style.filter = "";
      });
  } else if(activeButtonsId.length === 1) {
    allCards.forEach(function(item) {
      if(item.classList.contains(activeButtonsId[0])) {
        item.style.filter = "";
      } else {
        item.style.filter = "blur(2px)";
      }
      });
  } else {
    allCards.forEach(function(item) {
      if(item.classList.contains(activeButtonsId[0]) || item.classList.contains(activeButtonsId[1])) {
        item.style.filter = "";
      } else {
        item.style.filter = "blur(2px)";
      }
    });
  }
}

//Accordion

const accordItem = document.querySelector('.accordion__item'); //
const accordHeaders = document.querySelectorAll('.accordion__header'); //
const accordItems = document.querySelectorAll('.accordion__item'); //
const accordBodies = document.querySelectorAll('.accordion__body'); //


const accordBody = document.querySelector('.accordion__body'); //

accordHeaders.forEach(function(accHeader) {
  accHeader.addEventListener("click", () => { //при клике на header
    let clickedBody = accHeader.nextElementSibling;
    let clickedItem = accHeader.parentElement;
    accordBodies.forEach(function(body) {
      if(clickedBody !==body && body.classList.contains('accordion__body_active')) {
        body.classList.remove('accordion__body_active')    
        body.parentElement.classList.remove('accordion__item_active')
          } 

            clickedBody.classList.toggle('accordion__body_active')
            clickedItem.classList.toggle('accordion__item_active')
          
        
        //if(item.classList.contains('accordion__item_active')){
          //body.classList.remove('accordion__body_active')
          //body.parentElement.classList.remove('accordion__item_active')
        //} else {
          //body.classList.toggle('accordion__body_active')
          //body.parentElement.classList.toggle('accordion__item_active')
        //}
      })
    

 });

})
  


/*
const itemPrice = [...document.querySelectorAll('accordion__item')];
const accordItem = document.querySelector('.accordion__item'); //
const accordBody = document.querySelector('.accordion__body'); //
let activePrice;

accordItems.forEach(item => {
  item.addEventListener("click", function (e) {
    if (activePrice !== el && activePrice != undefined) {
       changeActivePrice(activePrice);
    }
    changeActivePrice(el);

    activePrice == el ? activePrice = undefined : activePrice = el;
 });
});

function changeActivePrice(el) {
let item = el.parentElement.parentElement;
item.classList.toggle('.accordion__body_show');

let content = el.parentElement.nextElementSibling;
content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 17 + "px"
*/

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
  /*
  new ItcAccordion(document.querySelector('.accordion'), {
    alwaysOpen: false
  });*/

/*
  el.classList.toggle('arrow-before');
  el.classList.toggle('arrow-before__revert');
  el.firstElementChild.classList.toggle('arrow-down');
  el.firstElementChild.classList.toggle('arrow-up');*/


/*
  const buttonsTariffsItems = [...document.querySelectorAll('.arrow')];
  const arrowTariffsItems = [...document.querySelectorAll('.arrow-down')];
const itemTarif = [...document.querySelectorAll('item-tarif')];
let activeItem;

buttonsTariffsItems.forEach(el => {
   el.addEventListener("click", function (e) {
      if (activeItem !== el && activeItem != undefined) {
         changeActiveItem(activeItem);
      }
      changeActiveItem(el);

      activeItem == el ? activeItem = undefined : activeItem = el;
   });
});

function changeActiveItem(el) {
   let item = el.parentElement.parentElement;
   item.classList.toggle('item__background-active');

   let content = el.parentElement.nextElementSibling;
   content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 17 + "px"

   el.classList.toggle('arrow-before');
   el.classList.toggle('arrow-before__revert');
   el.firstElementChild.classList.toggle('arrow-down');
   el.firstElementChild.classList.toggle('arrow-up');
}
 
 */

/*
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
*/
