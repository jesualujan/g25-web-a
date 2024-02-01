//* IMPORTAR LOS ESTILOS NECESARIOS DE CHAKRA-UI
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { CartProvider } from "../context/CartContext";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </ChakraProvider>
  );
}
