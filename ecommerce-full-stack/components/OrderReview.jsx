import React, { useContext } from 'react'
import {
    Heading,
    Box,
    Stack,
    StackDivider,
    Text,
    Flex,
    Button
} from '@chakra-ui/react'
import { CartContext } from '../context/CartContext'
import { useSelector } from 'react-redux'

export const OrderReview = () => {
     // get cart context 
     const {cart} = useContext(CartContext)
     // get checout details
     const state = useSelector((state) => state)

    // operaciones para calcular el total de las compra (impuestos, precio de cada item, preciotal de los items )
     const shippingPrice = itemsPrice > 200 ? 0 : 15
     const taxPrice = itemsPrice * 0.14
     const itemsPrice = cart.reduce((acc , item) => acc + item.price, 0)
     const totalPrice = shippingPrice + taxPrice + itemsPrice

    return (
        <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading size='xs' textTransform={'uppercase'} >Shipping Address</Heading>
                    <Text pt='2' fontSize='sm'>{state.shippingAddress.fullName}</Text>
                    <Text pt='2' fontSize='sm'>{state.shippingAddress.address}</Text>
                    <Text pt='2' fontSize='sm'>{state.shippingAddress.city} {state.shippingAddress.postalCode}</Text>
                    <Text pt='2' fontSize='sm'>{state.shippingAddress.country}</Text>
                </Box>

                <Box>
                    <Heading size='xs' textTransform={'uppercase'}>Payment Method</Heading>
                    <Text pt='2' fontSize='sm'>{state.shippingAddress.paymentMethod ? state.shippingAddress.paymentMethod : 'PayPal'}</Text>
                </Box>

                <Box>
                    <Heading size='xs' textTransform={'uppercase'}>Order Summary</Heading>
                    <Text pt='2' fontSize='sm'>Items: ${itemsPrice}</Text>
                    <Text pt='2' fontSize='sm'>Shipping: ${shippingPrice}</Text>
                    <Text pt='2' fontSize='sm'>Tax: ${taxPrice}</Text>
                    <Text pt='2' fontSize='sm'>Total:  ${totalPrice}</Text>
                </Box>

                <Flex justify='center' align='center' pt='4'>
                    <Button colorScheme='yellow' size='sm'>
                        Place Order
                    </Button>
                </Flex>

        </Stack>
    )
}

export default OrderReview