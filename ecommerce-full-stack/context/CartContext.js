import React, { useReducer, createContext} from 'react'

const initialState = {
    cart: []
}

const cartReducer = (state, action) => {
    switch (action.type){
        case "ADD_TO_CART": {
            // checar si el item ya está en el carrito de compras 
            const itemCart = state.cart.find(item => item.id === action.payload.id)
            if(itemCart){
                return {
                    ...state,
                    cart: state.cart.map((item) => item.id === action.payload.id ? {...item, quantity: item.quantity + 1} :item)
                }
            }else {
                return {
                    ...state,
                    cart: [...state.cart, {...action.payload, quantity: 1}]
                }
            }
        }
           
        case "UPDATE QUANTITY":{
            return {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.id ? {...item, quantity: action.payload.quantity} :item)
            }
        }

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !==  action.payload)
            }
            default: 
                return state;
    }
}


const CartContext = createContext()
    
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = (item) => {
       dispatch({type: "ADD_TO_CART" , payload: item})
    }

    const removeFromCart = (itemId) => {
        dispatch({type: "REMOVE_FROM_CART" , payload: itemId})
    }
    const updateQuantity = (itemId, quantity) => {
        dispatch({type: "UPDATE QUANTITY" , payload: {id: itemId, quantity}})
     }
     
    return (
        <CartContext.Provider value={{...state, addToCart, removeFromCart, updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }