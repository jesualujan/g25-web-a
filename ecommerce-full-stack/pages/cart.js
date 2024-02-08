import React, {useContext} from 'react'
import CartItem from '../components/CartItem'
import { CartContext } from '../context/CartContext'
import { 
    Box,
    Text,
    Stack,
    Heading,
    Flex
    } from '@chakra-ui/react'
import OrderSummary from '../components/OrderSummary'


const CartPage = () => {
    const {cart} = useContext(CartContext)

    const calculateTotal = () => {
      return cartItem.reduce((acc,item) => acc + item.price, 0)
    }

  return (
     <Box
        maxW={{base:'3xl', lg:'5xl'}}
        mx="auto"
        px={{base: '4', md: '8', lg: '12'}}
        py={{base: '4', md: '8', lg: '12'}}
     >
            {/* validación if ? else :  */}

            {
               cart?.length === 0 ?
               (
                <Text fontSize='xl' fontWeight='bold'> Your Cart is empty </Text>
               ) :
               (
                <>
                <Stack
                as="section"
                spacing={{base: '9', lg:'14'}}
                direction={{base: 'column', lg: 'row'}}
                align={{lg: 'flex-start'}}
                >

                <Stack flex="2" spacing={{base: 6, lg:'10'}}>
                    <Heading as="h1" size="2xl">Shopping Cart</Heading>
                    <Stack spacing={'6'}>
                        {
                            cart?.length > 0 && cart.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))
                        }
                        </Stack>
                    </Stack>

                        <Flex direction="column" align="center" flex="1">
                            <OrderSummary />
                        </Flex>
                </Stack>
            </>
               )
            }
     </Box>
  )
}

export default CartPage