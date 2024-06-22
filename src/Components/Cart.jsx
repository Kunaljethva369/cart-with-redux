import React from 'react'
import { useDispatch } from 'react-redux';
import { addCartItem, removeCartItem } from '../store/cartItemReducer';

function Cart({ image,price,productId,quantity,title }) {
    const dispatch = useDispatch();
    return (
    <>
            <div className="product">
                <div className="product-image" key={productId}>
                    <img src={image} />
                </div>
                <div className="product-details">
                    <div className="product-title">{title}</div>
                </div>
                <div className="product-price">{Math.round(price)}</div>
                <div className="product-quantity">
                    <button onClick={()=> dispatch(removeCartItem(productId))}>-</button>
                    <span style={{ margin: '0px 10px' }}>{quantity}</span>
                    <button onClick={() => dispatch(addCartItem({ image,price,productId,quantity,title }))}>+</button>
                </div>
                <div className="product-line-price">{Math.round(price * quantity)}</div>
            </div>
        </>
    )
}

export default Cart;