import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import GameGrid from "./components/GameGrid"
import GenresList from "./components/GenresList"
import NavBar from "./components/NavBar"
import PageHeading from "./components/PageHeading"
import PlatformSelector from "./components/PlatformSelector"
import SortSelector from "./components/SortSelector"


function App() {
  
 
  return (
    <Grid 
      templateAreas={{
        base: '"nav" "main"',
        lg: `"nav nav" "aside main"`
      }}

      templateColumns={{
        base: "1fr",
        lg: "250px 1fr"
      }}
    >
      <GridItem area="nav" paddingRight='20px'>
        <NavBar />
      </GridItem>

      <Show above="lg">
      <GridItem area="aside" padding = "20px 20px">
        <GenresList/>
      </GridItem>
      </Show>
      
      <GridItem area="main" padding = "20px 20px">
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

export default App
