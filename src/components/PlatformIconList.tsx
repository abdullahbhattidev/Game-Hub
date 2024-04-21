import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsGlobe } from "react-icons/bs";
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { platform } from "../entities/platform";

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