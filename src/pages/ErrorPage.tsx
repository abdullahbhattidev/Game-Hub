import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/NavBar'

const ErrorPage = () => {
  const error = useRouteError()
  return (
    <>
        <NavBar/>
        <Box>
            <Heading> Opss!</Heading>
            <Text>{isRouteErrorResponse(error)? "invalid page access": "an unexpected error occurred" }</Text>
        </Box>
        
    </>
    
  )
}

export default ErrorPage