import ReactLoading from 'react-loading';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from '../../../Context/CartContext';


const ItemDetail = ({ product }) => {
    const [goCart, setGoCart] =useState(false);
    const {addItem} = useCartContext()
    
    

    const onAdd = (quantity) => {
        setGoCart(true);
        addItem(product, quantity)
    }

    if (!product) {
        return <div className='d-flex justify-content-center'>
                <ReactLoading type={'bubbles'} color={'#AB34DB'} height={'20%'} width={'20%'} />
            </div>;
    }

    return (
        <main className="item-detail">
            <h1>{product.name}</h1>
            <section>
            <img className="imgItemDetail" src={product.img}alt="" />
                <section className="product-info">
                    <p>Descripcion: {product.description}</p>
                    <p>Precio: ${product.price}</p>
                    <p>Categoria: {product.category}</p>
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                    {
                        goCart
                            ? <Link className='buttonCount' to= '/cart'>Terminar Compra</Link>
                            :null
                    }
                </section>
            </section>
        </main>
    );
};

export default ItemDetail;
