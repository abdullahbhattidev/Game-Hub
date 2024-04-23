import { Heading } from '@chakra-ui/react';
import React, { ReactNode } from 'react'

interface props{
    terms: string;
    children: ReactNode | ReactNode[]
}

const DefinitionItems = ({terms, children}:props) => {
  return (
    <>
        <Heading as="dt" fontSize="md" color="gray.600">{terms}</Heading>
        <dd>{children}</dd>
    </>
    
  )
}

export default DefinitionItems