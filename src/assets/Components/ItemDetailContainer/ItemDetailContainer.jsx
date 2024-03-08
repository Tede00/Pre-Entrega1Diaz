import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import {data} from "../../../main";

const ItemDetailContainer = () => {
    const [products, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        const db= data

        const productoRef = doc(db, "productos", id);

        getDoc(productoRef)
         .then((doc) => {
                const data = doc.data();
                const products = { id: doc.id,...data };
                setLoading(false);
                setProduct(products);
            })
         .catch(error => {
                console.error("Error al obtener producto:", error);
                setLoading(false);
            });
    }, [id]);
 
    return (
    <ItemDetail product={products} />
    )

}

export default ItemDetailContainer;