import React from 'react'
import ShippingAddressForm from '../components/forms/Shipping'
import { useSelector, useDispatch } from 'react-redux'
import { Progress, Card, CardHeader, CardFooter, Heading, Stack, Box, CardBody } from '@chakra-ui/react'
import { OrderReview } from '../components/OrderReview'
import { PaymentMethod } from '../components/Payment'

const CheckoutPage = () => {
  // el hook useDispatch en react redux y sirve para enviar acciones a la store de redux directamente
  // desde un componente de React
  const dispatch = useDispatch()
  const activeStep = useSelector((state) => state.currentStep)

  const steps = [
    { name: 'Shipping', component: <ShippingAddressForm />},
    { name: 'Payment', component: <PaymentMethod />},
    { name: 'Review', component: <OrderReview />}
  ]

  return (
   <Stack spacing={4}>
    <Progress value={activeStep} max={steps.length} size="md" mb={5} colorScheme="blue"/>
    <Box mx="auto">
      <Card>
        <CardHeader>
          {steps[activeStep].name}
        </CardHeader>
        <CardBody>
          {steps[activeStep].component}
        </CardBody>
      </Card>
    </Box>
   </Stack>
  )
}

export default CheckoutPage
