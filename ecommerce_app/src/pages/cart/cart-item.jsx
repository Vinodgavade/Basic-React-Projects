import React ,{useContext} from 'react'
import "./cart.css"
import { Shopcontext} from "../../context/shop-context"


export const CartItem = (props) => {

    const {Id,ProductName,Price,ProductImage}=props.data;
    const {cartItems,addToCart,removeFromCart,updateCartItemCount} = useContext(Shopcontext)

    const cartItemAmount = cartItems[Id];

    return (
        <div className='cartItem'>
            <img src={ProductImage}/>
            <div className='descriptionnn'> 
                <p>
                    <b>{ProductName}</b>
                </p>
                <p>${Price}</p>
                <div className='countHandler'>
                    <button onClick={()=>removeFromCart(Id)}>-</button>
                    <input value={cartItemAmount} onChange={(e)=>updateCartItemCount(Number(e.target.value),Id)}/>
                    <button onClick={()=>addToCart(Id)}>+</button>
                </div>
            </div>
        </div>
    )
}
