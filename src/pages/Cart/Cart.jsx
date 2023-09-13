import React from 'react'
import { Link } from 'react-router-dom'

export const Cart = () => {
  return (
    <>
      <h1 className='text-center'>Carrito</h1>
      <div className="container d-flex justify-content-center">
        <Link to='/products' className='btn btn-danger'>Back to products</Link>
      </div>
    </>
  )
}