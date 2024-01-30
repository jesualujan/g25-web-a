//* IMPORTAR LOS ESTILOS NECESARIOS DE CHAKRA-UI
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/Layout"

export default function App({ Component, pageProps }) {
  return (
<ChakraProvider>
  <Layout>
  <Component {...pageProps} />
  </Layout>
</ChakraProvider>
  )   
}
