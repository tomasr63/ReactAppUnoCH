import React from 'react'
import { Link } from 'react-router-dom'

export const ItemDetails = ({ item }) => {
    return (
        <div className="card my-3 mx-auto" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img src={item.image} className="img-fluid rounded-start" alt={item.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <Link to='/products' className='btn btn-danger mx-2'>Back to products</Link>
                        <Link to={'/cart'} className='btn btn-success'>BUY ${item.price}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
