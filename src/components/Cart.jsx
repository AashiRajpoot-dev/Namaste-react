import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import RestaurantCategories from './RestaurantsCategories';
import {clearCart} from '../utils/cartSlice';


const Cart = () => {
    const dispatch = useDispatch();
    const cartItem = useSelector((store) => store.cart.items);

    const handleClearCart = () =>{
        dispatch(clearCart())
    }
  return (
    <div className='flex justify-center items-center flex-col'>
        <h1 className='text-center m-5 font-bold text-xl'>Cart</h1>

        {
            cartItem.length === 0 ?  <h1> Your Cart is Empty Add items</h1> :<button className=' m-5 font-bold bg-amber-300 p-2 text-white cursor-pointer w-50' onClick={handleClearCart}>Clear Cart</button>
        }
       


      { cartItem.map((cate,index) => <RestaurantCategories  key={index} catego={cate}  />)}
    </div>
  )
}

export default Cart
