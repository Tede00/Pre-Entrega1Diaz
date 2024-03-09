import { Link } from 'react-router-dom'

const Ordenlista = () => {
  return (
    <>
    <div>
        <h1>GRACIAS POR SU COMPRA</h1>
        <h2>Estaremos comunicandonos con usted</h2>
    </div>
    <div>
        <Link to='/'>
            <button className='buttonCount'>Volver a la Tienda</button>
        </Link>
    </div>
    </>
  )
}

export default Ordenlista
