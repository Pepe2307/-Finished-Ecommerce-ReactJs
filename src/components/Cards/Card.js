/*
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Card.css'

const Card = (props) => {
  return (
    <div className='Card'>

        <div className='imagen'>
            <img src={props.img}/>
        </div>

        <h1>{props.titulo}</h1>
        <p>{props.descripcion}</p>
        
        <h3>Cantidad de Pasajes</h3>
        
        <ItemCount/>
    </div>
  )
}


export default Card */


 /* SEPARADOR ENTRE VIEJA Y NUEVA VERSION */
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Card.css'

const Card = ({img,titulo,descripcion}) => {
    return(
        <div className='Card'>

                <div className='imagen'>
                    <img src={img}/>
                </div>

                {/* <img className='imagen' src={img}/> */}

                <h1>{titulo}</h1>
                <p>{descripcion}</p>

                <button className='boton_detalle'> Ver Detalle </button>

                <h3>Cantidad de Pasajes</h3>
                
                <ItemCount/>
        </div>
    )
}
export default Card