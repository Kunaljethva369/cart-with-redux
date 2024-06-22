import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import CartIcon from '../assets/cart-icon.svg';
import Shoppe from '../assets/Shopee.png';

function Header() {
    const cardItem = useSelector((state) => state.cartItem);
    const cart = cardItem.reduce(function (acc,cardItem) { return acc + cardItem.quantity; },0);
    return (
        <div>
            <nav>
                <div className="container-nav">
                    <div className='logo'>
                        <Link to="/">
                            <img src={Shoppe} />
                        </Link>
                    </div>
                    <ul className="navbar-left">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='cart'>
                            <Link to="/cart">
                                <img src={CartIcon} alt="cart-icon" />
                                <span className="badge">{cardItem.length == 0 ? 0 : cart}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;