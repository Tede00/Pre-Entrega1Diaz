import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import ReactLoading from 'react-loading';
import productosJson from "../../../productosJson.json";
import ItemList from "../ItemList/Itemlist";
import {getFirestore, doc, getDocs, collection} from "firebase/firestore";

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
    const fetchData = async () => {
      const db = getFirestore();
      const prodRef = collection(db, 'productos');
  
      try {
        const querySnapshot = await getDocs(prodRef);
        const productos = querySnapshot.docs.map(doc => doc.data());
        console.log(productos);
      } catch (error) {
        console.error('Error al obtener los documentos: ', error);
      }
    };
  
    fetchData();
  }, []);

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
          <ItemList products={productos} />
        </section>
      )}
    </main>
  );
}
