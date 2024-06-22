import React,{ useState } from 'react'
import { useSelector } from 'react-redux';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CartList() {
    const cart = useSelector((state) => state);
    const navigate = useNavigate();

    if(cart.cartItem.length == 0){
        navigate("/");
    }
    return (
        <div>
            <div className="shopping-cart" style={{paddingTop:'67px'}}>
            <div className="column-labels">
                <label className="product-image">Image</label>
                <label className="product-details">Product</label>
                <label className="product-price">Price</label>
                <label className="product-quantity">Quantity</label>
                <label className="product-line-price">Total</label>
            </div>

            {
                cart.cartItem.map(({ imageUrl,price,productId,quantity,title }) =>
                    <Cart
                        image={imageUrl}
                        productId={productId}
                        price={price}
                        quantity={quantity}
                        title={title}
                    />
                )
            }

            <div className="totals">
                <div className="totals-item totals-item-total">
                    <label>Grand Total</label>
                    <div className="totals-value" id="cart-total">
                        {
                            cart.cartItem.reduce((acc,cur)=>{
                                return Math.round(acc + (cur.quantity * cur.price));
                            },0)
                        }
                    </div>
                </div>
            </div>
        </div>
        </div >
    )
}

export default CartList;