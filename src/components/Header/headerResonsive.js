import React from 'react'
import './headerStyles.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import CartWidget from '../CartWidget/cartWidget';

import { Link , NavLink} from 'react-router-dom';

const Navbar2 = () => {
    return(
        <>
            <div className="Header2">

            
                <div className="imagen_logo">
                    <CartWidget/>
                </div>

                {/* 
                <div className="imagen_logo">
                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                </div> */}


                {/* <div className="imagen_logo">
                    <FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon>
                </div> */}
                <NavLink to='/'   className='imagen_logo'>
                    <FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon>
                </NavLink>

                {/* PRUEBA LINK */}
                {/* <Link className="imagen_logo">
                    <FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon>
                </Link> */}
                <Link to='/contador' className='imagen_logo'>Contador</Link>
                <Link to='/navbar'   className='imagen_logo'>Navbar</Link>
                <Link to='/list'     className='imagen_logo'>List</Link>
                
                




                <div className='barras'>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </div>
                

                <ul className='menu'>
                    <li className='menu_li'>
                        <a href="#"> Home </a>
                    </li>

                    <li className='menu_li'>
                        <a href="#"> Destinos </a>
                    </li>

                    <li className='menu_li'>
                        <a href="#"> Servicios </a>
                    </li>

                    <li className='menu_li'>
                        <a href="#"> Contacto </a>
                    </li>
                </ul>
                
                <div className='boton'>
                    <div className='boton2' to='/signin'>Sign In</div>
                </div>

                

            </div>

            {/* <h1 className='titulo'>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                ^^ Nuevo Header Responsive ^^
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </h1> */}
        </>
   
    )
}
export default Navbar2;


/*
const Navbar2 = () => {
    return(
        <>
            <Nav className="Header">

                <NavLink to='/' className="NavLi">
                    <img src={require('../../recursos/montana.jpg')} alt='logo' />
                </NavLink>

                <Bars />

                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/services' activeStyle>
                        Services
                    </NavLink>
                    <NavLink to='/contact-us' activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Sign Up
                    </NavLink>
                    
                </NavMenu>
                
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>

            </Nav>

            <h1 className='titulo'>TITULO</h1>
        </>
   
    )
}
export default Navbar2;
*/