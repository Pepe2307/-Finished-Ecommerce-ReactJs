import React from 'react'
import './SeparadorStyles.css'

const Separador = () => {
  return (
    /* 0 0 1440 319 */
        <div className='fondo-separador'>    
            <svg  className='svg-separador' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 300">
                <path className='path-separador' fill="#1b1b1b" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,240C384,267,480,277,576,256C672,235,768,181,864,170.7C960,160,1056,192,1152,208C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
  )
}

export default Separador