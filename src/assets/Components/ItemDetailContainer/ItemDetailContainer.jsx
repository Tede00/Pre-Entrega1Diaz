import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductosJson from "../../../productosJson.json";
import ItemDetail from "../ItemDetail/ItemDetail";



export default function ItemDetailContainer() {
const [producto, setProducto] = useState(null);
const { productId } = useParams();

function buscaId(productId) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const producto = ProductosJson.find((producto) => producto.id === productId);
        if (producto) {
        resolve(producto);
        } else {
        reject("Producto no disponible");
        }
    }, 2000);
    });
}

useEffect(() => {
    buscaId(productId)
    .then((res) => setProducto(res))
    .catch((messageNF) => {
        console.log(messageNF);
    })
}, [productId]);


return (

    <ItemDetail ProductoSeleccionado= {producto}/>

);

}