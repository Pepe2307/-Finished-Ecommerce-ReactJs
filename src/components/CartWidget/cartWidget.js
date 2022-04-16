import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom'

const CartWidget = () => {
  return (
    <div>
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            0
    </div>
  )
}

export default CartWidget;