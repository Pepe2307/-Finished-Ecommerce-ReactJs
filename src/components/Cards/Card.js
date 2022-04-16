import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Card.css'

const Card = ({img,titulo,descripcion}) => {
    return(
        <div className='Card'>

                <div className='imagen'>
                    <img src={img} alt={titulo}/>
                </div>


                <h1>{titulo}</h1>
                <p>{descripcion}</p>


                <button className='boton_detalle'> Ver Detalle </button>


                <h3>Cantidad de Pasajes</h3>
                <ItemCount/>


        </div>
    )
}
export default Card