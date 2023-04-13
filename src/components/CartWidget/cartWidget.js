import './cartWidget.css'

import CartContext from '../../context/CartContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import React from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react'

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return (
        <div>
            <>
                <Link to={'/cart'}>
                    <div className='logo_cart'>
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