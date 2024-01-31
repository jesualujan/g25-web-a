// Nombrar un archivo JavaScript con el formato "[id].js" 
// es una convención de nomenclatura que generalmente se 
// utiliza para identificar de manera única un archivo en un proyecto. 
// Aquí hay alguna razon por las que se podría adoptar esta convención:
// 1 .- Identificación única: 
// El uso de un identificador único ([id]) en el nombre del archivo ayuda a 
// garantizar que no haya conflictos con otros archivos en el mismo directorio o proyecto.

import React from 'react'
import { useRouter } from 'next/router'
import { data } from '../../utils/data'
import { Container, SimpleGrid, Flex, Image, Heading, Stack, Box, Text, useColorModeValue, Button} from '@chakra-ui/react'

const ProductPage = () => { 
    const router = useRouter() // es un hook de next 
    const {id}= router.query
    const product = data.products.find((product) => product.id === parseInt(id))
    if (!product) {
        return <div>Product not found</div>
    }
    return (
        <Container maxW={'container.xl'} mt={2}> 
        <SimpleGrid columns={[1,2]} spacing={2}>
            <Flex>
                <Image src=
                {
                `/images/${product.image}`} 
                rounded={'md'} 
                fit={'cover'} 
                alt={product.title}
                align={'center'}
                h={'100%'}
                w={{base:'100%', sm:'400px', lg: '500px' }
                }
                />
            </Flex>
            <Stack spacing={{base:6, md:10}}>
                <Box> {/* BOX ES COMO UN DIV EN CHAKRA UI =) */}
                  <Heading 
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{base:'2x1',sm:'4xl', lg:'5xl'}}>
                    {product.title}
                  </Heading>
                  <Text
                  color={useColorModeValue('gray.900', 'gray.400')}
                  fontWeight={300}
                  fontSize={'2xl'}
                  >
                    {`$ ${product.price} USD`}
                  </Text>
                </Box>
                  <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'lg'}
                  >
                    {product.description}
                  </Text>
                  <Flex flexGrow={1} alignItems={'end'}>
                    <Button rounded={'md'} w={'full'} mt={8} size={'lg'} py={'7'} 
                      bg={useColorModeValue('gray.900', 'gray.50')}
                      color={useColorModeValue('white', 'gray.900')}
                      textTransform={'uppercase'}
                    >
                        Add to Cart
                    </Button>
                  </Flex>
            </Stack>
        </SimpleGrid>
    </Container>
    )
}

export default ProductPage