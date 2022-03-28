/*REACT*/
import React from 'react'
/*CSS*/
import './navBarStyles.css';


const Navbar = () => {
    return(
        <div className="Header">
            <ul>
                <li> <a href="#"> Home </a> </li>
                <li> <a href="#"> Invento </a> </li>
                <li> <a href="#"> Destinos </a> </li>
                <li> <a href="#"> Recomendacioes </a> </li>
            </ul>
        </div>

    /* <>
        <Nav>
            <NavLink to "/">

            </NavLink>
        </Nav>
    </> */
    )
}

export default Navbar;

