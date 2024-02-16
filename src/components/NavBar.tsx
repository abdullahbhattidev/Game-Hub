import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface props{
    onSearchingGame: (value:string) => void
}

function NavBar ({onSearchingGame}:props){
    return (
        <HStack justifyContent="space-between" padding="10px">
            <Image src={logo} boxSize="60px"/>
            <SearchBar onSearching={onSearchingGame}/>
            <ColorModeSwitch/>
        </HStack>
    )
}

export default NavBar