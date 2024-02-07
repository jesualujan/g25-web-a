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


const CartPage = () => {
    const {cart} = useContext(CartContext)

  return (
     <Box>
        <Text>
            Your cart is empty
        </Text>
            <>
                <Stack>
                    <Stack>
                        <Heading as="h1" size='2xl'>Your Shopping Bag</Heading>
                        <Stack>
                            <CartItem />
                        </Stack>
                    </Stack>
                </Stack>
            </>
     </Box>
  )
}

export default CartPage