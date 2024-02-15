import React, {useState} from 'react'
import { Radio, RadioGroup, Stack, Button, Box } from '@chakra-ui/react'
import {useSelector, useDispatch} from 'react-redux'

export const PaymentMethod = () => {
    // el hook useDispatch en react redux y sirve para enviar acciones a la store de redux directamente
  // desde un componente de React
  const dispatch = useDispatch()
  const store = useSelector((state) => state)

                                                        // checar si el metodo de pago ya existe
  const [paymentMethod, setPaymentMethod] = useState( store.paymentMethod ? store.paymentMethod : '' )

    const handlePaymentMethodChange = (value) => {
        setPaymentMethod(value)
        dispatch ({type: 'checkout/paymentMethod', payload: value})
    }

    const prevStep = () => {
            dispatch ({type: 'checkout/prevStep'})
    }

    const nextStep = () => {
        dispatch ({type: 'checkout/nextStep'})
    }

    return (
        <Box display='flex' flexDirection='column'>
            <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
                <Stack spacing={5} direction='column'>
                    <Radio colorScheme='teal' value='PayPal'>
                        PayPal
                    </Radio>
                </Stack>
            </RadioGroup>

            <Flex>
                <Button mt={4} colorScheme='teal' onClick={prevStep}>Back</Button>
                <Button mt={4} colorScheme='teal' onClick={nextStep}>Continue</Button>
            </Flex>
        </Box>
    )
}

export default PaymentMethod