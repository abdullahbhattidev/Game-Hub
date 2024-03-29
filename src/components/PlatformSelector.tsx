import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { platform } from '../hooks/useGames'

interface props {
    onSelectPlatform: (platform: platform) => void
}

const PlatformSelector = ({onSelectPlatform}: props) => {
  const {data, error, isLoading} = usePlatforms()
  const [MenuButtonTag, setMenuButtonTag] = useState("Platforms")
  if (error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{MenuButtonTag}</MenuButton>
        <MenuList>
            {data.map(platform => <MenuItem onClick={() => {
                setMenuButtonTag(platform.name);
                onSelectPlatform(platform)}}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector