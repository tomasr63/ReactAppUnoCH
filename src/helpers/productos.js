import productos from '../data/productos.json'

export const traerProductos = () => {
    return new Promise((res) => {
        setTimeout(()=> {
            return res(productos);
        }, 1000)
    })
}

export const traerProductoXId = (id) => {
    return new Promise((res) => {
        setInterval(() => {
            return res(productos.find(prod => prod.id === id));
        }, 700);
    })
}