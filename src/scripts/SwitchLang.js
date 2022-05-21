const $switchLangBtns = document.querySelectorAll('.lang-item'),
    $phoneMenuTitle = document.querySelector('.phone-menu__title'),
    $advTitle = document.querySelector('.adv-title'),
    $subTitles = document.querySelectorAll('.subtitle'),
    $footerLinks = document.querySelectorAll('.footer-link'),
    $cardTitles = document.querySelectorAll('.card-title'),
    $langName = document.querySelector('.lang-name');


    

localStorage.setItem('rus', 1);
localStorage.setItem('eng', 0);


const setRusLang = () => {
    localStorage.setItem('rus', 1);
    localStorage.setItem('eng', 0);
    $switchLangBtns[0].classList.add('lang-item-now')
    $switchLangBtns[1].classList.remove('lang-item-now')
    $phoneMenuTitle.textContent = 'Выбрать модель телефона';
    $advTitle.textContent = 'Аксессуары для Iphone 13 Pro Max';
    $subTitles[0].textContent = 'Чехлы';
    $subTitles[1].textContent = 'Наушники';
    $subTitles[2].textContent = 'Беспроводные наушники';
    $footerLinks[0].textContent = 'Избранное';
    $footerLinks[1].textContent = 'Корзина';
    $footerLinks[2].textContent = 'Контакты';
    $footerLinks[3].textContent = 'Условия сервиса';
    $cardTitles[0].textContent = 'Стеклянные';
    $cardTitles[1].textContent = 'Силиконовые';
    $cardTitles[2].textContent = 'Кожаные';
    $langName.textContent = 'Рус';
};

const setEngLang = () => {
    localStorage.setItem('rus', 0);
    localStorage.setItem('eng', 1);
    $switchLangBtns[0].classList.remove('lang-item-now')
    $switchLangBtns[1].classList.add('lang-item-now')
    $phoneMenuTitle.textContent = 'Choose a phone model';
    $advTitle.textContent = 'Accessories for Iphone 13 Pro Max';
    $subTitles[0].textContent = 'Cases';
    $subTitles[1].textContent = 'Headphones';
    $subTitles[2].textContent = 'Wireless Headphones';
    $footerLinks[0].textContent = 'Favourites';
    $footerLinks[1].textContent = 'Cart';
    $footerLinks[2].textContent = 'Contacts';
    $footerLinks[3].textContent = 'Terms of service';
    $cardTitles[0].textContent = 'Glass';
    $cardTitles[1].textContent = 'Silicone';
    $cardTitles[2].textContent = 'Leather';
    $langName.textContent = 'Rus';
};

$switchLangBtns[0].addEventListener('click', () => {
    setRusLang();
});

$switchLangBtns[1].addEventListener('click', () => {
    setEngLang();
});
