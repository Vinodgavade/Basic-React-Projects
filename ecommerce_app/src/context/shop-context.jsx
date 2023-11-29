import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';
import { Product } from '../pages/shop/product';

export const Shopcontext = createContext(null);

// default  cart section
const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}
//

export const ShopcontextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());//Set Default value

    //Adding Item in cart item =0 initially then get item = 1
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    //Removing Item in cart item =5 when atem added then get item = 4
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    };

    //Update Or Edit cart Item Count manualy

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
    }
    //Get Total Amount of Products

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((Product) => Product.Id === Number(item));
                totalAmount += cartItems[item] * itemInfo.Price
            }
        }
        return totalAmount;
    }

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount,getTotalCartAmount }
    console.log(cartItems);
    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
};
