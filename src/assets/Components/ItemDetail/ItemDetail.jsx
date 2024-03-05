import ReactLoading from 'react-loading';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { useContext } from "react";


const ItemDetail = ({ ProductoSeleccionado }) => {
    

    const onAdd = (quantity) => {
        console.log({quantity})
    }

    if (!ProductoSeleccionado) {
        return <div className='d-flex justify-content-center'>
                <ReactLoading type={'bubbles'} color={'#AB34DB'} height={'20%'} width={'20%'} />
            </div>;
    }

    return (
        <main className="item-detail">
            <h1>{ProductoSeleccionado.name}</h1>
            <section>
            <img src={ProductoSeleccionado.imagen}alt="" />
                <section className="producto-info">
                    <p>Descripcion: {ProductoSeleccionado.description}</p>
                    <p>Precio: {ProductoSeleccionado.price}</p>
                    <p>Categoria: {ProductoSeleccionado.category}</p>
                    <ItemCount initial={1} stock={ProductoSeleccionado.stock} onAdd={onAdd} />
                </section>
            </section>
        </main>
    );
};

export default ItemDetail;
