import React, {useContext} from 'react'
import {
    Box,
    Flex,
    Stack,
    Text,
    Image,
    useColorModeValue,
    CloseButton
} from '@chakra-ui/react'
import { CartContext } from '../context/CartContext'

const CardItem = ({item}) => {
    const { removeFromCart } = useContext(CartContext)
  return (
    <Flex direction={{base: 'column', md:'row'}} justify="space-between" align="center">
        <Stack direction={'row'} spacing={5} width="full">
            <Image src={`/images${item.image}`} alt={item.title} w={'100%'} h={'100%'} loading='lazy'/>
            <Box pt="4">
                <Stack>
                    <Text fontWeight="medium">{item.title}</Text>
                    <Text fontSize="sm" color={useColorModeValue('gray.500', 'gray.600')}>{item.description}</Text>
                </Stack>
            </Box>
        </Stack>
        <Flex width="full" justify="space-between" display="flex">
            <Text fontWeight={'medium'} fontSize='lg' color={useColorModeValue('gray.700', 'gray.200')}>
              ${item.price}.00
            </Text>
            <CloseButton size="md" onClick={() => removeFromCart(item.id)}/>
        </Flex>
    </Flex>
  )
}

export default CardItem