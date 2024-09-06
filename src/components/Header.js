import React, { useState } from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import CartData from './CartData'

const showCartData = (props) => {
    let summa = 0
    props.cartData.forEach(el => summa += +el.price)
    return (
        <div>
            {props.cartData.map(el => (
                <CartData onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='total-cost'>Общая стоимость: {new Intl.NumberFormat().format(summa)}₽</p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Корзина пуста</h2>
        </div>
    )
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div>
                <span className='header-logo'>Сandy paradise</span>

                <div className='cont-nav-cart'>
                    <FaShoppingBasket onClick={() => { setCartOpen(cartOpen = !cartOpen) }} className={`header-cart-btn ${cartOpen && 'active'}`} />
                    <ul className='nav'>
                        <li>Про нас</li>
                        <li>Контакты</li>
                        <li>Кабинет</li>
                    </ul>
                </div>
                {cartOpen && (
                    <div className='cont-shop-cart'>
                        {props.cartData.length > 0 ? showCartData(props) : showNothing()}

                    </div>
                )}
            </div>

            <div className='banner'></div>
        </header>
    )
}
