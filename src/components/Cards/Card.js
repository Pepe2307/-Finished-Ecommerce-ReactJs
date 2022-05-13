import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Card.css'
/*REACT ROUTER*/
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const Card = ({id, img,name,place_detail, price}) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('handleclick funcionando click en card')
    }


    return(
        <div className='Card' onClick={handleClick} >

            <div className='imagen'>
                <img src={img} alt={name}/>
            </div>


            <h1>{name}</h1>
            <p>{place_detail}</p>
            <p>${price}</p>


            {/* <button className='boton_detalle'>
                <Link to='/detalles' className='detalle'>DETALLES</Link>
            </button>

            (VERSION WIDE)
            */}

            <Link to={`/detalles/${id}`} className='detalle'>
                <button className='boton_detalle'>DETALLE</button>
            </Link>

            {/* <Link to={`/detail/${id}`} className="detalle">Ver detalle</Link> */}

            <h3>Cantidad de Pasajes</h3>
            {/* <ItemCount/> */}


        </div>
    )
}
export default Card