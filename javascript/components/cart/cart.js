//Импорт функции createElement
import createElement from '../../create_element.js';

//Верстка карточки товара в корзине
function cardTemplate({image, price, name, id, count}) {
    return `<div class="item__body" data-item-id="${id}">
                <div class="item__image">
                    <img src="img/products/${image}" alt="item">
                </div>
                <div class="item__content">                   
                    <div class="item__name">${name}</div>
                    <div class="item__amount">
                        <div class="item__amount_block">
                            <button type="button" class="item__amount_minus">
                                <img src="img/icons/minus-icon.svg" alt="minus">
                            </button>
                            <div class="item__count">${count}</div>
                            <button type="button" class="item__amount_plus">
                                <img src="img/icons/plus-icon.svg" alt="plus">
                            </button>
                        </div>
                    </div>
                    <div class="item__price">${price * count} руб.</div>
                </div>
            </div>`
}

//Создание класса корзины
export default class Cart {
    cartItems = []; // [{product: {...}, count: N}, {...}, {...}, ...]

    constructor() {
        this._changeAmount();
        this._closeButton();
    }

    //Добавить продукт в массив cartItems и в верстку корзины
    addProduct(product) {
        if (product === undefined) return;
        //Если такой товар есть, то не добавляем
        const isExist = this.cartItems.find(item => item.product.id === product.id);
        if (isExist) return;

        //Если существует надпись, что корзина пуста, то скрываем ее
        const isCartEmpty = document.querySelector('.cart__empty');
        if (isCartEmpty) {
            isCartEmpty.style.display = "none";
        }

        this.cartItems.push({product: product, count: 1});

        const cartList = document.querySelector('.cart__list');
        cartList.append(createElement(`<li class="cart__item">${cardTemplate({
            image: product.image,
            price: product.price,
            name: product.name,
            id: product.id,
            count: 1,
        })}</li>`));
        this._getTotalPrice();
    }

    //Обновить иконку корзины при добавлении товара в корзину
    updateIconCart() {
        if (this.cartItems.length === 0) {
            document.querySelector('._icon-cart__amount').style.display = "none";
        } else {
            document.querySelector('._icon-cart__amount').style.display = "flex";
        }
        document.querySelector('._icon-cart__amount').innerHTML = `${this._getTotalCount()}`
    }

    //Очистить корзину после оформления заказа
    clearCart() {
        this.cartItems.forEach(item => {
            item.count = 0;
            this._onProductUpdate(item);
        });
        console.log(this.cartItems);
        this.cartItems.length = 0;
        document.querySelector('.cart__empty').style.display = "block";
        this._close();
        this.updateIconCart();
    }

    //Если корзина пустая
    _isEmpty() {
        return !this.cartItems.length;
    }

    //Изменение количества товара
    _updateProductCount(productId, amount) {
        this.cartItems.forEach((item, index) => {
            if (item.product.id === productId) {
                if (amount === 1) {
                    item.count++;
                } else if (amount === -1) {
                    item.count--;
                }
                if (item.count === 0) {
                    this.cartItems.splice(index, 1);
                }
            }
            this._onProductUpdate(item);
            this._getTotalPrice();
        });
    }

    //Обновление количества товара при нажатии на кнопки + и -
    _onProductUpdate(cartItem) {
        const cartBody = document.querySelector('.cart__body');
        const productCount = cartBody.querySelector(`[data-item-id="${cartItem.product.id}"] .item__count`);
        const productPrice = cartBody.querySelector(`[data-item-id="${cartItem.product.id}"] .item__price`);

        productCount.innerHTML = cartItem.count;
        productPrice.innerHTML = `${cartItem.count * cartItem.product.price} руб.`;

        //Убираем верстку продукта из корзины и убираем класс .in-cart с кнопки "в корзине", если его count стал равен 0
        if (cartItem.count === 0) {
            cartBody.querySelector(`[data-item-id="${cartItem.product.id}"]`).parentElement.remove();
            document.querySelector(`[data-card-id="${cartItem.product.id}"]`).querySelector('.card__button').classList.remove('in-cart');
            document.querySelector(`[data-card-id="${cartItem.product.id}"]`).querySelector('.card__button').innerHTML = "в корзину";
        }
        if (this._isEmpty()) {
          this._close();
          document.querySelector('.cart__empty').style.display = "block";
        }
    }

    //Реализация изменения количества товара при нажатии на кнопки + и -
    _changeAmount() {
        const cartBody = document.querySelector('.cart__body');

        cartBody.addEventListener('click', (event) => {
            if (!event.target.closest('.item__amount button')) return;
            const productId = event.target.closest('.item__body').dataset.itemId;
            if (event.target.closest('.item__amount_plus')) {
                this._updateProductCount(productId, 1);
            }
            if (event.target.closest('.item__amount_minus')) {
                this._updateProductCount(productId, -1);
            }
        })
    }

    //Закрытие корзины
    _close() {
        document.body.classList.remove('is-cart-open');
        document.querySelector('.cart').classList.remove('is-open');
        this.updateIconCart();
    }

    //Реализация закрытия корзины при нажатии на кнопку закрытия
    _closeButton() {
        const cartBody = document.querySelector('.cart__body');

        cartBody.addEventListener('click', (event) => {
            if (!event.target.closest('.cart__close')) return;
            this._close();
        })
    }

    //Общее количество товаров
    _getTotalCount() {
        return this.cartItems.reduce((sum, item) => sum + item.count, 0);
    }

    //Общая сумма товаров
    _getTotalPrice() {
        const totalPrice = this.cartItems.reduce((sum, item) => sum + item.product.price * item.count, 0);
        document.querySelector('.total__price').innerHTML = `${totalPrice} руб.`
    }
}