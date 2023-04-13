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
            
            {/* <img src={world} className="aplication-logo" alt="logo" /> */}

        </div>
    </div>
  )
}

export default Presentacion