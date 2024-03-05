import { useState, useEffect } from "react";

export default function ItemCount ( {initial, stock, onAdd}) {

    const [count,setCount] = useState(parseInt(initial));

    useEffect(() => {
        setCount(parseInt(initial))
    },[initial]);
    
    const decrement = ()=>{
        if(count > 1){
            setCount(count - 1);
        }
    }
    
    const increment = ()=>{
        if(count < stock) {
            setCount(count + 1);
        }
    }
    
    return (
        <>
            <button className="buttonCount" disabled={count<=1} onClick={ decrement }> - </button>
                <span> {count} </span>
            <button className="buttonCount" disabled={count>=stock} onClick={ increment }> + </button>
            <div>
                <button className="buttonCount" disabled={stock<=0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
            </div>
        </>
    )
}