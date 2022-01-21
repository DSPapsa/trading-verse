import React from 'react';
import './Product.css';
//import {useStateValue} from './StateProvider';

function Product({id,title,image,price}) {

   // const [{cart}, dispatch] = useStateValue();

   /* const addToCart =()=>{
        dispatch({
            type:'ADD_TO_CART',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
            }
        })
    }*/
  return (
    <div className='product'>
    <div className='product_info'>
    <p>{title}</p> 
    <p className='product_price'>
      <small>₹</small>
      <strong>{price}</strong>
      </p> 
      
      </div>
      <img src={image} alt=''/>
      <button >Add To Cart</button>
</div>
  );
}

export default Product;
