import { React } from 'react';
import { useSelector } from 'react-redux';
import Products from './Products';


function ProductList() {
    const count = useSelector((state) => state.products);
    return (
        <div className='container'>
            {
                count.map(({ id,title,rating,price,image }) =>
                    <Products
                        key={id}
                        productId={id}
                        title={title}
                        rating={rating.rate}
                        price={price}
                        imageUrl={image} />
                )
            }
        </div>
    )
}

export default ProductList;