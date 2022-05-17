import React from 'react'
import './headerStyles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CartWidget from '../CartWidget/cartWidget';
import { Link , NavLink} from 'react-router-dom';
import { getCategories } from '../../asyncmock';
import { useState, useEffect } from 'react';
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection } from 'firebase/firestore'

const Navbar = () => {

    const [categories, setCategories] = useState([])

    useEffect (() => {
        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
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
   
   
                
                
            </div>
        </>
   
    )
}
export default Navbar;
