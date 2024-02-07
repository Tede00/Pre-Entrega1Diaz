import React, { useEffect, useState } from 'react'
import { pedirDatos, pedirDatosDeCategoria } from '../../../Data'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(products)

    useEffect(() => {
        console.log('aca se monta el componente')
        pedirDatos()
        .then((res) => {
            setProducts(res)
        })
        .catch((err) => console.log(err))
        .finally(()=> setLoading(false))
    }, [])
        

  return (

    <>
        <h1>PRODUCTOS</h1>
        {
            loading 
            ? <p>CARGANDO... </p>
            : <ItemList products={products} />
        }
    </>
  )
}

export default ItemListContainer