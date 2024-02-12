import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactLoading from 'react-loading';
import productosJson from "../../../productosJson.json";

function asyncMock(categoryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(categoryId === undefined) {
        resolve(productosJson);
      } else {
        const productosFiltrados = productosJson.filter((item) => {
          return item.category === categoryId
        });
        resolve(productosFiltrados);
      }
    }, 1000);
  });
}

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); 
    asyncMock(categoryId).then((res) => {
      setProductos(res);
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <main>
      <h1 className="titulo">PRODUCTOS</h1>
      {loading ? (
        <div className='d-flex justify-content-center'>
          <ReactLoading type={'bubbles'} color={'#AB34DB'} height={'20%'} width={'20%'} />
        </div>
      ) : (
        <section className="item-list-container">
          {productos.map((item) => (
            <Link to={`/item/${item.id}`} key={item.id}>
              <div className="card">
                <h2>{item.name}</h2>
                <h3>${item.price}</h3>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}
