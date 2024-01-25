//* IMPORTAR LOS ESTILOS NECESARIOS DE CHAKRA-UI
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
<ChakraProvider>
    <Component {...pageProps} />
</ChakraProvider>
  )   
}
