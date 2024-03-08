import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from 'react-loading';
import ItemList from "../ItemList/Itemlist";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [id, setId] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (categoryId) {
      const db = getFirestore();
      const productoRef = query(collection(db, "productos"), where("category", "==", categoryId));

      getDocs(productoRef)
        .then((collection) => {
          setLoading(false);
          const productos = collection.docs.map((doc) => doc.data());
          const id = collection.docs.map((doc) => doc.id);
          setProductos(productos);
          setId(id);
        })
        .catch(error => {
          console.error("Error al obtener productos:", error);
          setLoading(false);
        });
    } else {
      const db = getFirestore();
      const productoRef = collection(db, "productos");

      getDocs(productoRef)
        .then((collection) => {
          setLoading(false);
          const productos = collection.docs.map((doc) => doc.data());
          const id = collection.docs.map((doc) => doc.id);
          setProductos(productos);
          setId(id);
        })
        .catch(error => {
          console.error("Error al obtener productos:", error);
          setLoading(false);
        });
    }
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
          <ItemList products={productos} ids={id} />
        </section>
      )}
    </main>
  );
}
