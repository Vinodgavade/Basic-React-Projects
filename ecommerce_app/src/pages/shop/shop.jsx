import React from 'react'
import { PRODUCTS} from "../../products"
import {Product} from "./product"
import "./shop.css"

export const Shop = () => {
  return (
    <div>
        <div className='shop'>
            <div className='ShopTitle'>
                <h1>Apna Shop</h1>
            </div>
            <div className='products'>
                {" "}
                {PRODUCTS.map((product)=>(
                  <Product data={product}/>  
                ))}
            </div>
        </div>
    </div>
  )
}
