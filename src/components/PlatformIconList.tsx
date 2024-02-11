import React from 'react'
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md"
import {SiNintendo} from "react-icons/si"
import {BsGlobe} from "react-icons/bs"
import { Game, platform } from '../hooks/useGames'
import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface props {
    platforms: {platform: platform} [];
}
const PlatformIconList = ({platforms}: props) => {

    const IconMap : {[key:string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
  return (
    <>
        <HStack paddingY={1.5}>
            {platforms.map(p => <Icon key={p.platform.id} as={IconMap[p.platform.slug]} color={'gray.500'}/>)}
        </HStack>
        
    </>
  )
}

export default PlatformIconList