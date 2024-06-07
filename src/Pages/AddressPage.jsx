import React, { useEffect, useState } from 'react'

import styled from '@emotion/styled'
import { useStatStyles } from '@chakra-ui/react'

import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'
import { Navbar } from './Navbar'
import { useNavigate } from 'react-router-dom'



export const AddressPage = () => {

    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [email,setEmail] = useState('')
    const [mob, setMob] = useState('')
    const [street, setStreet] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [pincode, setPincode] = useState('')
    const [country, setCountry] = useState('')
    const toast = useToast()
    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(33.33)
    const [saved, setSaved] = useState(false)
    const navigate = useNavigate()

   

    
      
      
      
      
  return (
    <DIV >
        <Navbar />
        <div className='container'>
        
        <div className='upper'>
        <h1>Choose Address</h1>
        <p>Detailed address will help our delivery partner reach your doorstep quickly</p>
        </div>
        <hr />
        
     <div className='address'>
        <div className='savedinfo'>
            <h1>{fname} {lname}</h1>
            <p>{street}</p>
            <p>{state}</p>
            <p>{city}-{pincode}</p>
            <div className='flex'>
                <button>Edit</button>
                <button onClick={()=>saved?navigate('/payment'):alert('Submit Your Address First')} >Deliver here</button>
            </div>
        </div>
        <div className='chakraAddress'>
        
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated colorScheme="green"></Progress>
        {step === 1 ? 
        
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
              Contact
            </Heading>
            <Flex>
              <FormControl mr="5%">
                <FormLabel htmlFor="first-name" fontWeight={'normal'}>
                  First name
                </FormLabel>
                <Input required value={fname} onChange={(e)=>setFName(e.target.value)} id="first-name" placeholder="First name" />
              </FormControl>
      
              <FormControl>
                <FormLabel htmlFor="last-name" fontWeight={'normal'}>
                  Last name
                </FormLabel>
                <Input required value={lname} onChange={(e)=>setLName(e.target.value)} id="last-name" placeholder="First name" />
              </FormControl>
            </Flex>
            <FormControl mt="2%">
              <FormLabel htmlFor="email" fontWeight={'normal'}>
                Email address
              </FormLabel>
              <Input required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email Address" id="email" type="email" />
              <FormHelperText>We&apos;ll never share your email.</FormHelperText>
            </FormControl>
      
            <FormControl>
              <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
                Mobile Number
              </FormLabel>
              <InputGroup size="md">
                <Input
                value={mob} onChange={(e)=>setMob(e.target.value)}
                required
                  pr="4.5rem"
                  type='number'
                  placeholder="Enter Your Mobile Number"
                />
               
              </InputGroup>
            </FormControl>
          </>
        
        
        : step === 2 ? 
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
              Address
            </Heading>
            <FormControl as={GridItem} colSpan={[6, 3]}>
              <FormLabel
                htmlFor="country"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}>
                Country / Region
              </FormLabel>
              <Select
              required
                value={country} onChange={(e)=>setCountry(e.target.value)}
                id="country"
                name="country"
                autoComplete="country"
                placeholder="Select option"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md">
                <option>India</option>
                <option>Canada</option>
                <option>United States</option>
              </Select>
            </FormControl>
      
            <FormControl as={GridItem} colSpan={6}>
              <FormLabel
                htmlFor="street_address"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
                mt="2%">
                Street address
              </FormLabel>
              <Input
              required
              value={street} onChange={(e)=>setStreet(e.target.value)}
                type="text"
                name="street_address"
                id="street_address"
                autoComplete="street-address"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>
      
            <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
              <FormLabel
                htmlFor="city"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
                mt="2%">
                City
              </FormLabel>
              <Input
              required
              value={city} onChange={(e)=>setCity(e.target.value)}
                type="text"
                name="city"
                id="city"
                autoComplete="city"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>
      
            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
              <FormLabel
                htmlFor="state"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
                mt="2%">
                State / Province
              </FormLabel>
              <Input
              required
              value={state} onChange={(e)=>setState(e.target.value)}
                type="text"
                name="state"
                id="state"
                autoComplete="state"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>
      
            <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
              <FormLabel
                htmlFor="postal_code"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: 'gray.50',
                }}
                mt="2%">
                ZIP / Postal
              </FormLabel>
              <Input
              required
              value={pincode} onChange={(e)=>setPincode(e.target.value)}
                type="text"
                name="postal_code"
                id="postal_code"
                autoComplete="postal-code"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
              />
            </FormControl>
          </>
        
        : 
        <>
            <Heading w="100%" textAlign={'center'} fontWeight="normal" marginBottom="20px">
              Other Information
            </Heading>
            <SimpleGrid columns={1} spacing={6}>
              <FormControl as={GridItem} colSpan={[3, 2]}>
                <FormLabel
                  fontSize="sm"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: 'gray.50',
                  }}>
                  Additional Information for the Seller(Optional)
                </FormLabel>
                <InputGroup size="sm">
                  
                  <Input
                    type="tel"
                    
                    focusBorderColor="brand.400"
                    rounded="md"
                  />
                </InputGroup>
              </FormControl>
      
              <FormControl id="email" mt={1}>
                <FormLabel
                  fontSize="sm"
                  fontWeight="md"
                  color="gray.700"
                  _dark={{
                    color: 'gray.50',
                  }}>
                  Delivery Instructions(Optional)
                </FormLabel>
                <Textarea
                  
                  rows={3}
                  shadow="sm"
                  focusBorderColor="brand.400"
                  fontSize={{
                    sm: 'sm',
                  }}
                />
                
              </FormControl>
            </SimpleGrid>
          </>
        
        }
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
                }}
                isDisabled={step === 1}
                colorScheme="white"
                bg="#fc2779"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 3) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 33.33)
                  }
                }}
                colorScheme="white"
                color="white"
                bg="#fc2779"
                variant="solid">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="white"
                color="white"
                bg="#fc2779"
                variant="solid"
                onClick={() => {
                  setSaved(true)
                  toast({
                    title: 'Address Saved Successfully.',
                    
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    
                    colorScheme:'green'
                  })
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    
        </div>
        </div>
    </div>
    </DIV>
  )
}

const DIV = styled.div`
     
      .address{
        padding: 20px;
        display: flex;
        justify-content: space-between;

      }


        .savedinfo{
            width: 35%;
            height: fit-content;
            border: 0.1px solid #dedbdb;
            margin-top: 18px;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
        }
        .savedinfo h1{
            font-size: 15px;
            font-weight: 600;
            opacity: 0.9;
            margin-bottom: 2px;

        }
        .savedinfo p{
            font-size: 14px;
            font-weight: 500;
            opacity: 0.9;
        }

        .chakraAddress{
            width: 40%;
        }
        .upper{
            margin-bottom: 10px;
        }
        .upper h1{
            font-size: 30px;
            font-weight: 700;
           
        }
        .upper p{
            font-size: 14px;
            opacity: 0.7;
        }
        .flex button:nth-child(1){
           padding: 10px 25px 10px 25px;
           border-radius: 10px;
           border: 0.1px solid grey;
           margin: 10px;
           margin-left: 0px;
           font-size: 14px;
           opacity: 0.9;

        }
        .flex button:nth-child(2){
           padding: 10px 35px 10px 35px;
           border-radius: 10px;
           
           margin: 10px;
           margin-left: 0px;
           color: white;
           font-size: 14px;
           
           background-color:#fc2779 ;

        }
    
    .container{
       width: 80%;
       margin: auto;
       margin-top: 20px;
       padding: 10px;
       /* box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px; */
    }
`