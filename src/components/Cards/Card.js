import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({id, img,name,place_detail, price, days}) => {

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
            <p>Precio por pasaje: <br/> ${price}</p>
            <p>Tiempo de estadia: <br/> {days}</p>
           
            <Link to={`/detalles/${id}`} className='detalle'>
                <button className='boton_detalle'>MAS DETALLES</button>
            </Link>

        </div>
    )
}
export default Card