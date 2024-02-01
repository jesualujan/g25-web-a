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

const CardItem = () => {
  return (
    <Flex>
        <Stack>
            <Image />
            <Box>
                <Stack>
                    <Text> </Text>
                </Stack>
            </Box>
        </Stack>
        <Flex>
            <Text>

            </Text>
            <CloseButton />
        </Flex>
    </Flex>
  )
}

export default CardItem