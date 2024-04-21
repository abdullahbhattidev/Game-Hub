import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";



function NavBar (){
    const navigate  = useNavigate()
    return (
        <HStack justifyContent="space-between" padding="10px">
            <Image src={logo} boxSize="60px" onClick={()=> navigate("/") }/>
            <SearchBar />
            <ColorModeSwitch/>
        </HStack>
    )
}

export default NavBar