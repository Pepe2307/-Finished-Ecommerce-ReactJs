import './PresentacionStyles.css'

import React from 'react'

const Presentacion = () => {
  return (
    <div className='aplication'>
        <div className='aplication-nav'>

            <a className="aplication-presentacion" href="#">
                <p>
                Bienvenido! Donde desea viajar?
                <br/>
                <br/>
                Seleccione un destino:
                </p>
            </a>
            
        </div>
    </div>
  )
}

export default Presentacion