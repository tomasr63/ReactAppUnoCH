import React from 'react';
import './NotFound.css';

export const NotFound = () => {
    return (
        <div className='not-found'>
            <p className='error my-5 text-center'>Error:</p>
            <div className="container-404">
                <div className="num-404">
                    404 !
                </div>
                <p className='text-404 m-0'>Sorry, page not found.</p>
            </div>
        </div>
    )
}