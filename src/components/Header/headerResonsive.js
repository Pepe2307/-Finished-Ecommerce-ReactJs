import React from 'react'
import './headerStyles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
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
                    Invento Travels
                    <FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon>
                </NavLink>
                <div className='barras'>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </div>
                

                <ul className='menu'>
                
                    <li>
                        <Link to='/'>Lista Completa</Link>    
                    </li>

                    <div className='menu_li'>
                        { categories.map(cat => <li> <NavLink key={cat.id} to={`/category/${cat.id}`}
                        className={({isActive}) => isActive ? 'navSelectedItem' : 'navItem'}>
                        {cat.description}</NavLink> </li>)}
                    </div>

                </ul>
   
   
                <div className='boton'>
                    <NavLink className='boton2' to='/form'>
                        CONTACTO
                    </NavLink>
                </div>
                
            </div>
        </>
   
    )
}
export default Navbar;
