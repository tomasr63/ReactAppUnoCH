import React from 'react'
import { NavLink } from 'react-router-dom'

export const CartWidget = () => {
  return (
    <NavLink to="/cart" className='cart-container'>
        <i className="bi bi-cart3"></i>
        <p className='cart-num'>0</p>
    </NavLink>
  )
}