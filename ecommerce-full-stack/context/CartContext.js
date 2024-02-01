import React, { useReducer, createContext} from 'react'

const initialState = {
    cart: []
}

const CartContext = createContext()
    
const CartProvider = ({ children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = (item) => {
       dispatch({type: "ADD_TO_CART" , payload: item})
    }

    const removeFromCart = (item) => {
        dispatch({type: "REMOVE_FROM_CART" , payload: item._id})
    }
    return (
        <CartContext.Provider value={{ state, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }