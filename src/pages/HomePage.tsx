import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GenresList from '../components/GenresList'
import PageHeading from '../components/PageHeading'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
    return (
        <Grid 
          templateAreas={{
            base: '"main"',
            lg: `"aside main"`
          }}
    
          templateColumns={{
            base: "1fr",
            lg: "250px 1fr"
          }}
        >
         
          <Show above="lg">
          <GridItem area="aside" padding = "20px 0px">
            <GenresList/>
          </GridItem>
          </Show>
          
          <GridItem area="main" padding = "20px 0px">
            <PageHeading />
            <HStack spacing={5}>
              <PlatformSelector/>
              <SortSelector/>
            </HStack>
            <GameGrid/>
          </GridItem>
        </Grid>
      )
}

export default HomePage