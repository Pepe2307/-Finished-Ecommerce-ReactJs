import React from 'react'
import './headerStyles.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import CartWidget from '../CartWidget/cartWidget';
import { Link , NavLink} from 'react-router-dom';

import { getCategories } from '../../asyncmock';
import { useState, useEffect } from 'react';

const Navbar = () => {

    const [categories, setCategories] = useState([])

    useEffect (() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])


    return(
        <>
            <div className="Header2">

                <div className="imagen_logo">
                    <CartWidget/>
                </div>

                <NavLink to='/'   className='imagen_logo'>
                    <FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon>
                </NavLink>
  
                <Link to='/'     className='imagen_logo'>Lista</Link>            

                <div className='barras'>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </div>
                

                <ul className='menu'>
                    {/* <li className='menu_li'>
                        <a href="">
                            <NavLink to='/'   >
                                Home
                                <FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon>
                            </NavLink> 
                        </a>
                    </li>


                    <li className='menu_li'>
                        <a href="#"> Destinos </a>
                    </li>

                    <li className='menu_li'>
                        <a href="#"> Servicios </a>
                    </li>

                    <li className='menu_li'>
                        <a href="#"> Contacto </a>
                    </li> */}

                
                    <div className='menu_li'>
                        { categories.map(cat => <li> <NavLink key={cat.id} to={`/category/${cat.id}`}
                        className={({isActive}) => isActive ? 'navSelectedItem' : 'navItem'}>
                        {cat.description}</NavLink> </li>)}
                    </div>
                    
                    {/* <li>
                        <NavLink to='/form' className={({isActive}) => isActive ? 'navSelectedItem' : 'navItem'}>CONTACTO</NavLink>    
                    </li> */}

                </ul>
                
                {/* <div className='boton'>
                    <div className='boton2' to='/signin'>
                        <NavLink to='/form' className={({isActive}) => isActive ? 'navSelectedItem' : 'navItem'}>CONTACTO</NavLink>    
                    </div>
                </div> */}
                <div className='boton'>
                    <div className='boton2' to='/signin'>
                        <NavLink className='boton3' to='/form'>CONTACTO</NavLink>    
                    </div>
                </div>
                
            </div>
        </>
   
    )
}
export default Navbar;
