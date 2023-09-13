import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({ items }) => {
    return (
        <div className='row row-cols-3'>
            {items.map((item) => <Item key={item.id} item={item} />)}
        </div>
    )
}
