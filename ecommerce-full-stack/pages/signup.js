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
import * as yup from 'yup'
import {signIn} from 'next-auth/react'


    const signUpSchema = yup.object().shape({   
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid Email').required('Email is required'),
        password: yup.string().min(8,'Password must be at least 8 characters').required('Password is required')
    })


const SignUpPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        //validate form
        try{    
            await signUpSchema.validate({
                name,
                email,
                password
            }, {
                abortEarly: false
            })
        }catch(err){
            const validationErrror = {}
            if (err instanceof yup.ValidationError){
                err.inner.forEach(({path, message}) => {
                    validationErrror[path] = message
                })
            }
            setError(validationErrror)
            return
        }

        fetch('/api/auth/signup', {
            method: 'POST',
            headers: { 
              "Content-Type": "application/json" 
                },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
        }).then(res => {
            if(response.status === 201){
                console.log('user created succesfully')
                signIn('credentials', {
                    email: email,
                    password: password,
                    callbackUrl: '/',
                    redirect: true,
                }).then((result) => console.log(result))
                  .catch( err => {
                    setError({api: err.toString()})
                  })
            }else {
                console.log("error creating user")
                setError ({api: "Could not create user, please try again later"})
            }
        }).catch(error => console.log(('Signup API Error:', error)))


        // to do: call login function
        setEmail('')
        setPassword('')
    }




  return (
    <Container maxW="lg" py={{base: "12", md:"24"}} px={{base: "0", sm:"8"}}>
        <Stack spacing="8">
            <Stack spacing="6" textAlign="center">
                <Heading>Create an Account</Heading>
                <HStack>
                    <Text>Already have an Account?</Text>
                    <Link href="/login" passHref>
                    <Button variant="link" colorScheme="pink">Sign in</Button>
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
                            <FormLabel htmlFor="email">Full Name</FormLabel>
                            <Input 
                            id="name" 
                            type="text"
                            placeholder="Enter your Full Name"
                            onChange={(e) => setName(e.target.value)}
                            />
                            <FormHelperText color={"red.600"} id="name-helper-text">{error.name}</FormHelperText>
                        </FormControl>

                        <FormControl> 
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <Input 
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            />
                            <FormHelperText color={"red.600"} id="email-helper-text">{error.email}</FormHelperText>
                        </FormControl>
                        <FormControl> 
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input 
                             id="password"
                             type="password"
                             placeholder="Enter your password"
                             onChange={(e) => setPassword(e.target.value)}
                            />
                            <FormHelperText color={"red.600"} id="password-helper-text">{error.password}</FormHelperText>
                        </FormControl>
                    </Stack>
                    <Stack>
                        <Button colorScheme="pink" type="submit">
                        Sign up
                        </Button>
                    </Stack>
                </Stack>
            </form>
        </Box>
    </Container>
  )
}

export default SignUpPage