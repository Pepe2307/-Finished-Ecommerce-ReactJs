/* NEW VER*/
import React from 'react'
import './ItemDetailStyle.css'

const ItemDetail = ({ id, img, titulo, descripcion, categoria, precio, stock }) => {
    return(
        <div className='ItemDetail'>

                <div className='imagen'>
                    <img src={img} alt={titulo}/>
                </div>


                <h1>Detalles - {titulo}</h1>
                <p>{descripcion}</p>
                <p>Categoria: {categoria}</p>
                <p>Precio: {precio}</p>


        </div>
    )
}
export default ItemDetail