import React,{useContext} from 'react'
import { PRODUCTS } from '../../products'
import { Shopcontext} from "../../context/shop-context"
import { CartItem } from './cart-item'
import {useNavigate} from 'react-router-dom'



export const Cart = () => {

  const {cartItems,getTotalCartAmount} = useContext(Shopcontext)
  const totalAmount = getTotalCartAmount()
  const Navigate = useNavigate();


  return (
    <div className='cart'>
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product)=>{
          if (cartItems[product.Id] !==0){
            return<CartItem data={product}/>
          }
        })}
      </div>
      {totalAmount >0 ?(
      <div className='checkout'>
        <p>Total : Rs.{totalAmount}</p>
        <button onClick={() => Navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
     ) :(
      <i>Cart is Empty !!</i>
     )}
    </div>
  )
}
