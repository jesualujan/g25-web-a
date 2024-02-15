import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Select,
    Flex,
    Button,
    FormHelperText
  } from "@chakra-ui/react";
  import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
  
  const shippingAddressSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    postalCode: Yup.string().required('Postal Code is required'),
    country: Yup.string().required('Country is required'),
  })


const ShippingAddressForm = () => {
  // el hook useDispatch en react redux y sirve para enviar acciones a la store de redux directamente
  // desde un componente de React
  const dispatch = useDispatch()
  const address = useSelector((state) => state.shippingAddress)

  const [formValues, setFormValues] = useState ( address ? address : {
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  })
  const [error, setError] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues ({...formValues, [name]: value})
  }

  const handleSubmit = async (event) => {
     event.preventDefault()

      //validate form
      try {
        await shippingAddressSchema.validate(formValues,{
            abortEarly: false
        })
    }catch(err){
        const validationError = {}
        if(err instanceof Yup.ValidationError){
            err.inner.forEach(({path, message}) => {
                validationError[path] = message
            })
        }
            setError(validationError)
            return
    }

     // valido el formulario
     dispatch ({type: 'address/saveShippingAddress', payload: formValues})
     // redireccionar al siguiente formulario
  }

  return (
    <form onSubmit={handleSubmit}>
        <FormControl>
            <FormLabel htmlFor='fullName'>Full Name</FormLabel>
            <Input placeholder='Jesua Lujan' name='fullName' value={formValues.fullName} onChange={handleChange}>Full Name</Input>
        </FormControl>

        <FormControl>
            <FormLabel htmlFor='address'>Address</FormLabel>
            <Input placeholder='Mexico City' name='address' value={formValues.address} onChange={handleChange}></Input>
        </FormControl>

        <FormControl>
            <FormLabel htmlFor='city'>City</FormLabel>
            <Input placeholder='Any town' name='city' value={formValues.city} onChange={handleChange}></Input>
        </FormControl>

        <FormControl>
            <FormLabel htmlFor='postalCode'>Postal Code</FormLabel>
            <Input placeholder='1234' name='postalCode' value={formValues.postalCode} onChange={handleChange}></Input>
        </FormControl>

        <FormControl>
            <FormLabel htmlFor='country'>Country</FormLabel>
            <Select placeholder='Select a country' name='country' value={formValues.country}  onChange={handleChange}>
            <option value="us">United State</option>
            <option value="mx">Mexico</option>
            <option value="ca">Canada</option>
            </Select>
            
        </FormControl>

        <Flex display="flex" justify="flex-end">
            <Button type='submit' mt={4}>Continue</Button>
        </Flex>
     </form>
  )
}

export default ShippingAddressForm