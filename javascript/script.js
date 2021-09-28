//Импорт функции для класса _ibg
import ibg from "./ibg.js";
ibg();

//Импорт класса карточки товара
import WatchCard from "./components/watch_card/watch_card.js";

//Импорт корзины товаров
import Cart from './components/cart/cart.js';

//Импорт функции createElement
import createElement from './create_element.js';

//Импорт слайдера
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

//Реализация открытия поиска с классом search-form
function openSearch() {
    document.addEventListener('click', (event) => {
        const searchForm = document.querySelector('.search-form');

        if (event.target.classList.contains('search-form__icon')) {
            searchForm.classList.toggle('_active');
        } else if (!event.target.classList.contains('search-form__icon') && searchForm.classList.contains('_active') && !event.target.closest('.search-form__item')) {
            searchForm.classList.remove('_active');
        }
    })
}
openSearch();

//Реализация меню-бургер
function burgerMenu() {
    const iconMenu = document.querySelector('.icon-menu');
    const mainNav = document.querySelector('.main-header__list');

    iconMenu.addEventListener('click', () => {
        iconMenu.classList.toggle('_active');
        mainNav.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    })
}
burgerMenu();

//Реализация спойлеров в подвале сайта
function footerSpoilers() {
    const footer = document.querySelector('.footer');

    footer.addEventListener('click', (event) => {
        if (window.screen.width <= 925 && event.target.classList.contains('footer-title')) {
            const block = event.target.nextElementSibling;
            block.classList.toggle('_open');
            event.target.classList.toggle('_open');

            if (block.offsetHeight === 0) {
                block.style.height = `${block.scrollHeight}px`
            } else {
                block.style.height = '0';
            }
        }
    })
}
footerSpoilers();

//Реализация спойлера в разделе бренды с классом .brands
function brandsSpoiler() {
    const brands = document.querySelector('.brands');

    brands.addEventListener('click', (event) => {
        if (window.screen.width <= 768 && event.target.classList.contains('brands__title')) {
            const block = event.target.nextElementSibling;
            block.classList.toggle('_open');
            event.target.classList.toggle('_open');

            if (block.offsetHeight === 0) {
                block.style.height = `${block.scrollHeight}px`
            } else {
                block.style.height = '0';
            }
        }
    })
}
brandsSpoiler();

//Запрос часов для слайдера в .new-collection
// const newCollectionPromise = await fetch('json/new-collection-products.json', {
//     method: 'GET',
// });
// const newCollectionProducts = await newCollectionPromise.json();

//Используем массив для отображения на хостинге github
const newCollectionProducts = [
    {
        "id": "new-01",
        "name": "First watch",
        "image": "product_1.png",
        "price": 150000
    },
    {
        "id": "new-02",
        "name": "Second watch",
        "image": "product_2.png",
        "price": 165000
    },
    {
        "id": "new-03",
        "name": "Third watch",
        "image": "product_3.png",
        "price": 170000
    },
    {
        "id": "new-04",
        "name": "Fourth watch",
        "image": "product_4.png",
        "price": 175000
    },
    {
        "id": "new-05",
        "name": "Fifth watch",
        "image": "product_5.png",
        "price": 180000
    },
    {
        "id": "new-06",
        "name": "Six watch",
        "image": "product_6.png",
        "price": 185000
    }
];

//Добавление слайдов с карточками товара в .new-collection
const newCollectionSwiperWrapper = document.querySelector('.body-collection__wrapper');
newCollectionProducts.forEach(watch => {

    const watchCard = new WatchCard(watch);
    const slide = createElement(`<div class="body-collection__slide swiper-slide"></div>`);
    slide.append(watchCard.elem);
    newCollectionSwiperWrapper.append(slide);
});

//Инициализация слайдера в .new-collection
new Swiper('.body-collection__swiper', {
    //Зацикливание
    loop: false,

    //Точки внизу слайдера
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    //Автопроигрывание слайдера
    // autoplay: {
    //     delay: 2000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    // },
    // speed: 2000,

    //Количество слайдов в зависимости от разрешения экрана
    slidesPerView: 1,
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1140: {
            slidesPerView: 4,
        },
        1537: {
            slidesPerView: 3,
        }
    },

    //Перетаскивание
    simulateTouch: true,
    touchRatio: 2,
    touchAngle: 45,

    //Курсор-рука
    grabCursor: true,

    //Свободный режим
    freeMode: false,
});

//Запрос часов для слайдера в .products
// const productsPromise = await fetch('json/products.json', {
//     method: 'GET',
// });
// const products = await productsPromise.json();

//Используем массив для отображения на хостинге github
const products = [
    {
        "id": "product-01",
        "name": "Watch №1",
        "image": "product_1.png",
        "price": 165000
    },
    {
        "id": "product-02",
        "name": "Watch №2",
        "image": "product_2.png",
        "price": 170000
    },
    {
        "id": "product-03",
        "name": "Watch №3",
        "image": "product_3.png",
        "price": 175000
    },
    {
        "id": "product-04",
        "name": "Watch №4",
        "image": "product_4.png",
        "price": 175000
    },
    {
        "id": "product-05",
        "name": "Watch №5",
        "image": "product_5.png",
        "price": 175000
    },
    {
        "id": "product-06",
        "name": "Watch №6",
        "image": "product_6.png",
        "price": 175000
    },
    {
        "id": "product-07",
        "name": "Watch №7",
        "image": "product_1.png",
        "price": 165000
    },
    {
        "id": "product-08",
        "name": "Watch №8",
        "image": "product_2.png",
        "price": 170000
    },
    {
        "id": "product-09",
        "name": "Watch №9",
        "image": "product_3.png",
        "price": 175000
    },
    {
        "id": "product-10",
        "name": "Watch №10",
        "image": "product_4.png",
        "price": 175000
    },
    {
        "id": "product-11",
        "name": "Watch №11",
        "image": "product_5.png",
        "price": 175000
    },
    {
        "id": "product-12",
        "name": "Watch №12",
        "image": "product_6.png",
        "price": 175000
    }
];

//Добавление слайдов с карточками товара в .products
const productsSwiperWrapper = document.querySelector('.slider-products__wrapper');
products.forEach(watch => {

    const watchCard = new WatchCard(watch);
    const slide = createElement(`<div class="slider-products__slide swiper-slide"></div>`);
    slide.append(watchCard.elem);
    productsSwiperWrapper.append(slide);
});

//Инициализация слайдера в .products
new Swiper('.slider-products__swiper', {
    //Зацикливание
    loop: false,

    //Точки внизу слайдера
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    //Автопроигрывание слайдера
    // autoplay: {
    //     delay: 2000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    // },
    // speed: 2000,

    //Сетка слайдера
    grid: {
        rows: 2,
    },

    //Расстояние между слайдами
    spaceBetween: 20,

    //Количество слайдов в зависимости от разрешения экрана
    slidesPerView: 1,
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1140: {
            slidesPerView: 4,
        }
    },

    //Перетаскивание
    simulateTouch: true,
    touchRatio: 2,
    touchAngle: 45,

    //Курсор-рука
    grabCursor: true,

    //Свободный режим
    freeMode: false,
})

//Отлавливаем пользовательское событие
const cart = new Cart();

document.addEventListener('product-add', (event) => {
    const newProduct = newCollectionProducts.find(item => item.id === event.detail);
    cart.addProduct(newProduct);
    const product = products.find(item => item.id === event.detail);
    cart.addProduct(product);

    cart.updateIconCart();
});

//Открываем корзину с товарами
document.addEventListener('click', (event) => {
    if (!event.target.closest('.cart-header__icon')) return;

    document.body.classList.add('is-cart-open');
    document.querySelector('.cart').classList.add('is-open');
})

//Функции, которые не реализованы:

//Функция личного кабинета
document.addEventListener('click', (event) => {
    if (!event.target.closest('.login')) return;

    alert('Извините, функция личного кабинета еще в разработке...');
})

//Функция кнопок меню
document.addEventListener('click', (event) => {
    if (!event.target.closest('.main-header__link')) return;

    alert('Извините, функция меню еще в разработке...');
})

//Функция поиска
const searchForm = document.querySelector('.search-form__item');
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Извините, функция поиска еще в разработке...');
    searchForm.reset();
});


//Функция поиска по категориям
document.addEventListener('click', (event) => {
    if (!event.target.closest('.main-footer__categories_item')) return;

    alert('Извините, функция поиска по категориям еще в разработке...')

})

//Функция подписки на новости
const formForEmail = document.querySelector('.subscribe-form__form');
formForEmail.addEventListener('submit', sendFormForEmail);

async function sendFormForEmail(event) {
    event.preventDefault();
    let error = formValidate(formForEmail);

    if (error === 0) {
        alert('Вы успешно подписались на наши новости!')
        formForEmail.reset();
    } else {
        alert('Поле заполнено неверно!');
    }
}

//Форма заказа
const formForOrder = document.querySelector('.order__form');
formForOrder.addEventListener('submit', sendFormForOrder);

async function sendFormForOrder(event) {
    event.preventDefault();
    let error = formValidate(formForOrder);

    if (error === 0) {
        alert('Ваш заказ оформлен!')
        formForOrder.reset();
        cart.clearCart();
    } else {
        alert('Заполните обязательные поля');
    }
}

//Валидация формы
function formValidate(form) {
    let error = 0;
    let formReq = form.querySelectorAll('._req');

    formReq.forEach(input => {
        formRemoveError(input);

        if (input.classList.contains('_email')) {
            if (!emailTest(input.value)) {
                formAddError(input);
                error++;
            }
        } else if (input.classList.contains('_phone')) {
            if (!phoneTest(input.value)) {
                formAddError(input);
                error++;
            }
        } else {
            if (input.value === '') {
                formAddError(input);
                error++;
            }
        }
    })
    return error;
}

function formAddError(input) {
    input.classList.add('_error');
}

function formRemoveError(input) {
    input.classList.remove('_error');
}

//Функция теста e-mail
function emailTest(value) {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return regex.test(String(value).toLowerCase());
}

//Функция теста телефона
function phoneTest(phone){
    const regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return regex.test(phone);
}