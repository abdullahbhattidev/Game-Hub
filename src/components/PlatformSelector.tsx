import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import useGameStore from '../stores/GameQueryStore'

const PlatformSelector = () => {
  const {data, error, isLoading} = usePlatforms()
  const onSelectPlatforms=useGameStore(s=> s.onSelectPlatforms)
  const [MenuButtonTag, setMenuButtonTag] = useState("Platforms")
  if (error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{MenuButtonTag}</MenuButton>
        <MenuList>
            {data?.results.map(platform => <MenuItem onClick={() => {
                setMenuButtonTag(platform.name);
                onSelectPlatforms(platform)}}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector