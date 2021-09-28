//Импорт функции createElement
import createElement from '../../create_element.js';

//Верстка карточки часов
function WatchCardTemplate({ image, price, name, id}) {
    return `<div class="card__body" data-card-id="${id}">
                <div class="card__image">
                    <img src="img/products/${image}" alt="watch">
                </div>
                <div class="card__bottom">
                    <div class="card__content">
                        <div class="card__name">${name}</div>
                        <div class="card__price">${price} руб.</div>
                    </div>
                    <button type="button" class="card__button">в корзину</button>
                </div>
            </div>`
}

export default class WatchCard {
    constructor(product) {
        this._id = product.id;
        this._name = product.name;
        this._image = product.image;
        this._price = product.price;
        this.elem = this._watchCard;
        this._getEvent();
    }

    get _watchCard() {
        return createElement(
            `<div class="card">
                    ${WatchCardTemplate({image: this._image, price: this._price, name: this._name, id: this._id})}
                   </div>`
        )
    }


    //Пользовательское событие при нажатии на кнопку "в корзину"
    _getEvent() {
       this.elem.addEventListener('click', (event) => {
           if (!event.target.closest('.card__button')) return;
           event.target.classList.add('in-cart');
           event.target.innerHTML = "в корзине";
           this.elem.dispatchEvent(new CustomEvent('product-add', {detail: this._id, bubbles: true}));
       })
    }
}