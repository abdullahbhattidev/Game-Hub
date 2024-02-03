import { HStack, Switch, useColorMode, Text } from '@chakra-ui/react'
import React from 'react'

const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode}= useColorMode()
  return (
    <HStack>
        <Switch colorScheme='green' isChecked = {colorMode === "dark"} onChange={()=> toggleColorMode()}/>
        <Text>
            {colorMode.toUpperCase()}
        </Text>
    </HStack>
  )
}

export default ColorModeSwitch