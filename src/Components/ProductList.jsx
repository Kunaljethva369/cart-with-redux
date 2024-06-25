import { React,useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Products from './Products';
import { fetchProduct, isLoadingFn } from '../store/slice/productReducer';


function ProductList() {
    const dispatch = useDispatch();
    const store = useSelector((state)=>state);
    const [count,setCount] = useState([]);
    useEffect(() => {
        dispatch(isLoadingFn());
        fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((data) => {
            setCount(data);
            dispatch(fetchProduct(data));
        });
    },[]);
    return (
        <div className='container'>
            {
                store.products.isLoading ? <h1 className='loading'>Loading...</h1> :
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