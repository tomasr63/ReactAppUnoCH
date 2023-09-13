import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
    return (
        <div className='col py-3'>

            <div className="card mx-auto" style={{ width: "18rem", height: "100%"}}>
                <img className='mx-auto img' src={item.image} alt={item.title} />
                <div className="card-body">
                    <h5 className="card-title fs-6">{item.title}</h5>
                    <p className="card-text">Cat: {item.category}</p>
                    <Link to={`/item/${item.id}`} className="btn btn-primary">View more</Link>
                </div>
            </div>
        </div>
    )
}
