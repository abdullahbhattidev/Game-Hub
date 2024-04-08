import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface props {
    onSearching: (value:string) => void
}

const SearchBar = ({onSearching}:props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form style={{width: "100%"}} onSubmit={(event)=> 
        {
            event.preventDefault();
            if(ref.current) onSearching(ref.current.value);
        }}>
        <InputGroup>
            <InputLeftElement children={<BsSearch/>}/>
            <Input ref={ref}  borderRadius={20} placeholder='Search Games...' variant='filled'/>
        </InputGroup>
    </form>
    
  )
}

export default SearchBar