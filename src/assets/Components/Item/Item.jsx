import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

 export default function Item ({product, id}){
    return(
        <div className="card">
            <img className="imgItem" src={product.img}alt="" />
            <h2>{product.name}</h2>
            <h3>${product.price}</h3>
            <p>{product.description}</p> 
            <Link to={`/product/${product.id}`}>
                <Button variant="light">Ver Detalles</Button>
            </Link>
        </div>
    )
 }
