import React, {useState} from 'react'
import {
    Container,
    Stack,
    Heading,
    HStack,
    Text,
    Button,
    Box,
    FormControl,
    FormLabel,
    Input,
    useBreakpointValue,
    useColorModeValue,
    FormHelperText
} from '@chakra-ui/react'
import Link from 'next/link'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        // to do: call login function
        setEmail('')
        setPassword('')
    }




  return (
    <Container maxW="lg" py={{base: "12", md:"24"}} px={{base: "0", sm:"8"}}>
        <Stack spacing="8">
            <Stack spacing="6" textAlign="center">
                <Heading>Log in to your account</Heading>
                <HStack>
                    <Text>Dont have an account?</Text>
                    <Link href="/signup" passHref>
                    <Button variant="link" colorScheme="pink">Sign up</Button>
                    </Link>
                </HStack>
            </Stack>
        </Stack>

        <Box
        py={{base: "0", sm:"8"}} 
        px={{base: "4", sm:"10"}}
        bg={useBreakpointValue({base: "transparent", sm:"bg-surface"})}
        boxShadow={{base: "none", sm:useColorModeValue("md", "md-dark")}}
        borderRadius={{base: "none", sm: "xl"}}
        >
            <form onSubmit={handleSubmit}>
                <Stack spacing="6">
                    <Stack spacing="5">
                        <FormControl> 
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <Input 
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl> 
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input 
                             id="password"
                             type="password"
                             placeholder="Enter your password"
                             onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>
                    </Stack>
                    <HStack justify="space-between">
                        <Button variant="link" colorScheme="pink" size="sm">
                            Forgot your Password?
                        </Button>
                    </HStack>
                    <Stack>
                        <Button colorScheme="pink" type="submit">
                        Sign in
                        </Button>
                    </Stack>
                </Stack>
            </form>
        </Box>
    </Container>
  )
}

export default LoginPage