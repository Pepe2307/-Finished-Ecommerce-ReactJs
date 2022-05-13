import React from 'react'
import './PresentacionStyles.css'
/*COMPONENTES*/
/* import world from './recursos/world.png' */
import world from '../../recursos/world.png'

const Presentacion = () => {
  return (
    <div className='aplication'>
        <div className='aplication-nav'>
            <a className="aplication-presentacion" href="#">
                <p>
                Bienvenido! Seleccione un destino:
                </p>

                <p>Where to travel now...</p>
            </a>
            
            <img src={world} className="aplication-logo" alt="logo" />
        </div>
    </div>
  )
}

export default Presentacion