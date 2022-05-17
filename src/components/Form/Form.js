import React from 'react'
import { useState } from 'react'
import './Form.css'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'

const Form = () => {

    const [input, setInput] = useState('')
    const { finishBuy } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }
    

    return (

<div className="contenedor">

        <h1>CONTACTO DE COMPRADOR:</h1>
        <h2>Deje sus datos para poder terminar de efectuar la compra</h2>

            <ul className="servicios">
                <li> En caso de consultas, entre en contacto con nosotros:</li>
                <br/>
                <li> Buenos Aires, Argentina, San Miguel</li>
                <br/>
                <li>011 9999-9999</li>
                <br/>
                <li>cursoreact@ejemplo.com</li>
            </ul>

        <div className="formulariocontainer">
            <form className="formulario" onSubmit={handleSubmit}>
                <p>
                    <label>Nombre: <br/></label>
                    <input type="text" name="nombre" onChange={(e) => setInput(e.target.value)} required/>
                </p>
                <p>
                    <label>Apellido: <br/></label>
                    <input type="text" onChange={(e) => setInput(e.target.value)} name="empresa"/>
                </p>
                <p>
                    <label>Correo: <br/></label>
                    <input type="email" onChange={(e) => setInput(e.target.value)} name="email" required/>
                </p>
                <p>
                    <label>Teléfono: <br/></label>
                    <input type="text" onChange={(e) => setInput(e.target.value)} name="teléfono" required/>
                </p>
                <p class="full">
                    <label>Mensaje: <br/></label>
                    <textarea name="mensaje" onChange={(e) => setInput(e.target.value)} required></textarea>
                </p>
                <p class="full">
                    <button type='submit' className="boton_terminar" onClick={()=> finishBuy()}>
                        Enviar
                    </button>
                </p>
            </form>
        </div>
        
   
    
</div>

    )
}

export default Form