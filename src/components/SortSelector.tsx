import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import useGameStore from '../stores/GameQueryStore';


const SortSelector = () => {
    const SortingArray = [
        {value: '', label:'Relevance'},
        {value: '-added', label:'Date Added'},
        {value: 'name', label:'Name'},
        {value: '-released', label:'Release Date'},
        {value: '-metacritic', label:'Popularity'},
        {value: 'rating', label:'Average Rating'},
    ]
    const[sortMenuTag, setsortMenuTag] = useState('Relevance')
    const onSelectSortItem =useGameStore(s=> s.onSelectSortItem)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by: {sortMenuTag}</MenuButton>
            <MenuList>
                {SortingArray.map(sortList => <MenuItem onClick={() => {
                    setsortMenuTag(sortList.label);
                    onSelectSortItem(sortList.value)
                }} 
                key={sortList.value} value={sortList.value}>{sortList.label}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default SortSelector