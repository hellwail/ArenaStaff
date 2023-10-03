import React from 'react'
import css from './Header.module.css'
import { FaShoppingCart } from 'react-icons/fa'
import { useState } from 'react'
import Order from '../Order/Order'


const showOrders = (props) => {
    let sum = 0;
    props.orders.forEach(e => sum += Number.parseFloat(e.price))

    return (
        <div>
            {props.orders.map(e => (
                <Order onDelete={props.onDelete} key={e.id} item={e} />
            ))}
            <p className={css.sum}>Sum: {new Intl.NumberFormat().format(sum)} </p>
            {/* {new Intl.NumberFormat().format(sum)} Идет округение до 2 знаков после запятой */}
        </div>
    )
}

const showNothing = () => {
    return (
        <div className={css.empty}>
            <h2>Товаров нет:/</h2>
        </div>
    )
}

const Header = (props) => {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div>
                <span className={css.logo}>Arena Staff</span>
                <ul className={css.nav}>
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={css.cart} />
                {cartOpen && (
                    <div className={css.bag}>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}
                    </div>
                )}

            </div>
            <div className={css.presentation}></div>
        </header>
    )
}

export default Header;
