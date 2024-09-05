import React, { useState } from 'react'
import { FaShoppingBasket } from 'react-icons/fa'

export default function Header() {
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

                    </div>
                )}
            </div>

            <div className='banner'></div>
        </header>
    )
}
