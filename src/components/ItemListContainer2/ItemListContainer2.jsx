import React, { useEffect, useState } from 'react';
import { traerProductos } from '../../helpers/productos';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


export const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    traerProductos()
      .then((prods) => {
        if(category) {
          setProductos(prods.filter((prod) => prod.category === category));
        } else {
          setProductos(prods);
        }
      })
      .catch(err => console.log({ err }))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) return <h1 className='text-center'>Loading...</h1>

  return (
    <div className='item-list-container container text-center'>
      <ItemList items={productos} />
    </div>
  )
}
