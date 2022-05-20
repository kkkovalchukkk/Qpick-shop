'use strict';

const $PhoneIcon = document.querySelector('.phone-icon');
const $PhoneMenuTitle = document.querySelector('.phone-menu__title');
const $PhoneMenuOpenBtn = document.querySelector('.arrow-down-btn');
const $OpenMenuArray = [$PhoneIcon, $PhoneMenuTitle, $PhoneMenuOpenBtn];
const $PhoneMenu = document.querySelector('.phoneMenu');
const $PhoneBrand = document.querySelector('.phoneBrand');
const $PhoneBrandMenu = document.querySelector('.phone-brand-menu');
const $ArrowDropMenu = document.querySelector('.arrow-down-btn');
const $ArrowIcon = document.querySelector('.arrow-icon');


const toggleMenu = () => {
    $ArrowDropMenu.classList.toggle('rotate');
    $PhoneMenu.classList.toggle('hide')
};

const toggleBrandMenu = () => {
    $PhoneBrandMenu.classList.toggle('hide-brand');
    $ArrowIcon.classList.toggle('rotate');
};



$OpenMenuArray.map(item => {
    item.addEventListener('click', toggleMenu);
});


document.addEventListener('keydown', (e) => {
    if (e.key == "Escape" && !$PhoneMenu.classList.contains('hide')) {
        toggleMenu();
    }
});

$PhoneBrand.addEventListener('click', toggleBrandMenu);





