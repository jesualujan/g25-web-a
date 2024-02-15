// Un "reducer" en Redux es una función que especifica cómo cambia el estado de la aplicación en respuesta a una acción
// Recibe el estado actual y una acción, y devulve un nuevo estado

//* HYDRATE es una acción especial en next-redux-wrapper que se utiliza para sincronizar el estado
//* del servidor con el estado del cliente en una aplicación Next.js con Redux.
import { HYDRATE } from "next-redux-wrapper";

// creamos el estado inicial
const initialState = {
  currentStep: 0,
  shippingAddress: {
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  },
  PaymentMethod: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "address/saveShippingAddress":
      return { ...state, shippingAddress: action.payload };
    case "checkout/nextStep":
      return { ...state, currentStep: state.currentStep + 1 };
    case "checkout/prevStep":
      return { ...state, currentStep: state.currentStep - 1 };
    case "checkout/paymentMethod":
      return {...state, paymentMethod: action.payload}
    default:
      return state;
  }
};
