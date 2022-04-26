import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Card.css'
/*REACT ROUTER*/
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const Card = ({id, img,titulo,descripcion}) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('handleclick funcionando click en card')
    }


    return(
        <div className='Card' onClick={handleClick} >

                <div className='imagen'>
                    <img src={img} alt={titulo}/>
                </div>


                <h1>{titulo}</h1>
                <p>{descripcion}</p>


                {/* <button className='boton_detalle'>
                    <Link to='/detalles' className='detalle'>DETALLES</Link>
                </button>

                (VERSION WIDE)
                */}

                <Link to={`/detalles/${id}`} className='detalle'>
                    <button className='boton_detalle'>DETALLE</button>
                </Link>


                <h3>Cantidad de Pasajes</h3>
                <ItemCount/>


        </div>
    )
}
export default Card