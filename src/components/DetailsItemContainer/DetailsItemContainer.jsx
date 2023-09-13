import React, { useState, useEffect } from 'react'
import { traerProductoXId } from '../../helpers/productos';
import { ItemDetails } from '../ItemDetails/ItemDetails';
import { useParams } from 'react-router-dom';

export const DetailsItemContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    traerProductoXId(Number(id))
      .then((prod) => setProducto(prod))
      .catch(err => console.log({ err }))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h1 className='text-center'>Loading...</h1>

  return (
    <div className='item-list-container container text-center'>
      {producto && <ItemDetails item={producto} />}
    </div>
  )
}