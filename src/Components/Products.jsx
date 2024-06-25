import React from 'react'
import { useDispatch } from 'react-redux';
import { addCartItem } from '../store/slice/cartItemReducer';

function Products({ productId,title,rating,price,imageUrl }) {
  const dispatch = useDispatch()
  return (
    <div>
      <div className="card" key={productId}>
        <img src={imageUrl} alt="Avatar" />
        <input type="checkbox" class="heart-checkbox" id="heart-checkbox" />
        <label for="heart-checkbox" class="heart">&#10084;</label>
        <div className="inner-container">
          <h4><b>{
            title.length > 30 ?
              title.slice(0,30) + '...' : title}</b></h4>
          <button onClick={() => dispatch(addCartItem({ productId,title,rating,price,imageUrl }))}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Products;