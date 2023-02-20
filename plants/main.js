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
