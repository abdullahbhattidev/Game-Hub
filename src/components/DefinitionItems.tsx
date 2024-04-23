import { Box, Heading } from '@chakra-ui/react';
import React, { ReactNode } from 'react'

interface props{
    terms: string;
    children: ReactNode | ReactNode[]
}

const DefinitionItems = ({terms, children}:props) => {
  return (
    <Box marginY={5}>
        <Heading as="dt" fontSize="md" color="gray.600">{terms}</Heading>
        <dd>{children}</dd>
    </Box>
    
  )
}

export default DefinitionItems