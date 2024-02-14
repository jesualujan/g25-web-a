import React from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Select,
    Flex,
    Button,
  } from "@chakra-ui/react";
  import * as Yup from 'yup'
  
  const shippingAddressSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    postalCode: Yup.string().required('Postal Code is required'),
    country: Yup.string().required('Country is required'),
  })





const ShippingAddressForm = () => {
  return (
    <form >
        <FormControl>
            <FormLabel htmlFor='fullName'>Full Name</FormLabel>
            <Input placeholder='Jesua Lujan' name='fullName'>Full Name</Input>
        </FormControl>

        <FormControl>
            <FormLabel htmlFor='address'>Address</FormLabel>
            <Input placeholder='Mexico City' name='address'></Input>
        </FormControl>

        <FormControl>
            <FormLabel htmlFor='city'>City</FormLabel>
            <Input placeholder='Any town' name='city'></Input>
        </FormControl>

        <FormControl>
            <FormLabel htmlFor='postalCode'>Postal Code</FormLabel>
            <Input placeholder='1234' name='postalCode'></Input>
        </FormControl>

        <FormControl>
            <FormLabel htmlFor='country'>Country</FormLabel>
            <Select placeholder='Select a country' name='country'>
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