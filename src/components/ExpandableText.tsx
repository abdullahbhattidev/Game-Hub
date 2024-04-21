import { Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
interface props{
    children?: string
}

const ExpandableText = ({children}:props) => {
  const[expandable, setExpandable] = useState(true)
  const TextLimit = 300;
  let text = ""
  if(children?.length){
     text = children.length>300 && expandable? children.substring(0,TextLimit) + "...": children;
  }
  return (
    <Text>{text}
        <Button size="xs" fontWeight="bold" colorScheme='yellow' marginLeft={1} 
            onClick={()=> setExpandable(!expandable)}>{expandable? "Show More": "Show Less"}
        </Button>
    </Text> 
  )
}

export default ExpandableText