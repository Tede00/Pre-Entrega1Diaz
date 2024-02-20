import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

 export default function Item ({product}){
    return(
        <div className="card">
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <p>{product.description}</p> 
            <Link to={`/product/${product.id}`}>
                <Button variant="light">Ver Detalles</Button>
            </Link>
        </div>
    )
 }
