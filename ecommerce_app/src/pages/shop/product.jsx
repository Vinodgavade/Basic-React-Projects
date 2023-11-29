import React, { useCallback, useContext } from 'react'
import { Shopcontext} from "../../context/shop-context"

export const Product = (props) => {

    const {Id,ProductName,Price,ProductImage}=props.data;
    const {addToCart,cartItems} = useContext(Shopcontext)
    const cartItemAmount = cartItems[Id]

  return (
    <div>
       <div className='product'>
        <img src={ProductImage}/>
        <div className='description'>
            <p><b>{ProductName}</b></p>
            <p>Rs.{Price}</p>
        </div>
        <button className='addToCartBttn' onClick={()=>addToCart(Id)}>Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
       </div>
    </div>
  )
}
