import React from 'react'
import Head  from 'next/head'
import Link from 'next/link'
import { 
  Box, 
  Flex, 
  Text, 
  Stack, 
  Button, 
  useColorMode, 
  useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import CartIcon from './CartIcon'
import { useSession, signOut} from 'next-auth/react'

const Layout = ({ children }) => {
    const {colorMode,toggleColorMode} = useColorMode()
    const {data: session, status} = useSession()

  return (
    <>
    <Head> 
      <title> E-commerce App </title>
     </Head>
    <Box> {/* BOX ES COMO UN DIV EN CHAKRA UI =) */}
        <Flex 
           bg={useColorModeValue('white', 'gray.600')}
           minH={'60px'}
           py={{ base: 2 }}
           px={{ base: 4 }}
           borderTop={1}
           borderBottom={1}
           borderStyle={'solid'}
           borderColor={useColorModeValue('gray.200', 'gray.900')}
           align={'center'}
            >
            <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
              {/* passHref permite que el href de la ruta sea pasado al componente hijo
                  es una forma de hacer referencia a un enlace
              */}
              <Link href={'/'} passHref>
                <Text fontFamily={'heading'} color={useColorModeValue('gray.800', 'white')}>
                  Ecommerce
                </Text>
              </Link>
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Link href='/cart'  passHref>
            <CartIcon />
            </Link>
            
            { status === "authenticated" ? (
              <Button 
              display={"inline-flex"}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              onClick={() => signOut()}
              _hover={{ bg: 'pink.300' }}>
                Sign Out
              </Button>
            ) : (
              <>
                <Button 
              as={'a'} 
              fontSize={'sm'} 
              fontWeight={400} 
              variant={'link'} 
              href={'/login'}>
                Sign in
              </Button>
              
              <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                href={'/signup'}
                _hover={{ bg: 'pink.300' }}
              >
                Sign up
              </Button>
              </>
            )}
          </Stack>
        </Flex>
      </Box>
      {children}
    </>
  );
};

export default Layout