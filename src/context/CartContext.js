import React from 'react'
import { createContext, useState } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (productAdd) => {
        if(isInCart(productAdd.id)){
            const cartAux = cart.map(product => {
                if(productAdd.id === product.id){
                    product.quantity = product.quantity + productAdd.quantity
                }
                return product
            })
            setCart(cartAux)
            }else{
                setCart([...cart, productAdd])
            }
        }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })
        return count
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id )
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    const totalCost = () => {
        let totalCost = Object.values(cart).reduce((acc, {quantity, price}) => acc + quantity * price ,0)
        return totalCost
    }

    const finishBuy = () => {
        let finishBuy = alert('Buy completed')
        return finishBuy
    }

    return (
        <CartContext.Provider value={{
            cart,
            addItem, 
            getQuantity, 
            isInCart,
            clearCart,
            removeItem,
            totalCost,
            finishBuy
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext