import React from 'react'

import CartContext from '../../context/CartContext'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return (
        <div>
            {/* <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            0 */}

            <>
                <Link to={'/cart'}>
                    <div className='imagen_logo'>
                        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                        <div>
                            { getQuantity() }
                        </div>
                    </div>
                </Link>
            </>
        </div>
    )
    }

export default CartWidget;