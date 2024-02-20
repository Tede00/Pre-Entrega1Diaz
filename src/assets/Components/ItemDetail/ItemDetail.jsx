import ReactLoading from 'react-loading';

const ItemDetail = ({ ProductoSeleccionado }) => {
    console.log(ProductoSeleccionado);

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
                </section>
            </section>
        </main>
    );
};

export default ItemDetail;
