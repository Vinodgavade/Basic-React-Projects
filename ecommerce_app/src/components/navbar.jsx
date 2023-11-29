import React from 'react'
import {Link} from "react-router-dom"
import {ShoppingCart,SlackLogo} from "phosphor-react"
import "./navbar.css"

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to={"#"}><SlackLogo size={28}/></Link>
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/cart"}><ShoppingCart size={28}/></Link>
        </div>
    </div>
  )
}

