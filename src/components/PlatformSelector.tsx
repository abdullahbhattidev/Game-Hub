import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

const PlatformSelector = () => {
  const {data, error, isLoading} = usePlatforms()
  const [MenuButtonTag, setMenuButtonTag] = useState("Platform")
  if (error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{MenuButtonTag}</MenuButton>
        <MenuList>
            {data.map(platform => <MenuItem onClick={() => setMenuButtonTag(platform.name)}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector