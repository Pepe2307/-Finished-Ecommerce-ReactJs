import React from 'react'
import { useState } from 'react'

const Form = () => {

    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() //prevengo que se actualice la página
        console.log(input)
    }
    
/*     const handleKeyDown = (e) => {
        console.log(e)
        if(e.code === 'Space') { // evita que se escriban espacios en ese input
            e.preventDefault()
        }
    } */

    return (

<div className="contenedor">
    <div className="wrapper animated bounceInLeft">
        <div className="info-empresa">
            <ul className="servicios">
                <li><i className="fa fa-map-marker"></i> Calle Cualquiera, 44. 88880. Ciudad (Provincia)</li>
                <li><i className="fa fa-mobile"></i> 555 555 000</li>
                <li><i className="fa fa-envelope"></i> info@empresa.com</li>
            </ul>
        </div>
        <div className="contacto">
            <form className="formulario" onSubmit={handleSubmit}>
                <p>
                    <label>Nombre</label>
                    <input type="text" name="nombre" onChange={(e) => setInput(e.target.value)} required/>
                </p>
                <p>
                    <label>Apellido</label>
                    <input type="text" onChange={(e) => setInput(e.target.value)} name="empresa"/>
                </p>
                <p>
                    <label>Correo</label>
                    <input type="email" onChange={(e) => setInput(e.target.value)} name="email" required/>
                </p>
                <p>
                    <label>Teléfono</label>
                    <input type="text" onChange={(e) => setInput(e.target.value)} name="teléfono" required/>
                </p>
                <p class="full">
                    <label>Mensaje</label>
                    <textarea name="mensaje" onChange={(e) => setInput(e.target.value)} required></textarea>
                </p>
                <p class="full">
                    <button type='submit' className="boton-enviar">Enviar</button>
                </p>
            </form>
        </div>
    </div>
</div>

    )
}

export default Form