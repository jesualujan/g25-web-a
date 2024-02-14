//* IMPORTAR LOS ESTILOS NECESARIOS DE CHAKRA-UI
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { CartProvider } from "../context/CartContext";
import { SessionProvider } from "next-auth/react";
import { wrapper } from "../redux/store";

export default function App({ Component, pageProps:{ session, ...pageProps} }) {
  const {store, props} = wrapper.useWrappedStore(pageProps)
  return (
    <ChakraProvider>
      <SessionProvider session={session}>
      <CartProvider>
        <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </Provider>
      </CartProvider>
      </SessionProvider>
    </ChakraProvider>
  );
}
