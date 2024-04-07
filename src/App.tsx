import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import { useState } from "react"
import GameGrid from "./components/GameGrid"
import GenresList from "./components/GenresList"
import NavBar from "./components/NavBar"
import PageHeading from "./components/PageHeading"
import PlatformSelector from "./components/PlatformSelector"
import SortSelector from "./components/SortSelector"
import { genres } from "./hooks/useGenres"
import { platform } from "./hooks/usePlatforms"

export interface GameQuery {
  genre : genres | null;
  platform : platform |null;
  ordering : string | null;
  search: string | null;
}


function App() {
  
 const [GameQuery, setGameQuery] = useState<GameQuery> ({} as GameQuery)
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
        <NavBar onSearchingGame={(search)=> setGameQuery({...GameQuery, search})}/>
      </GridItem>

      <Show above="lg">
      <GridItem area="aside" padding = "20px 20px">
        <GenresList highlightSelectGenre={GameQuery.genre} SelectGenre={(genre)=> setGameQuery({...GameQuery,genre})}/>
      </GridItem>
      </Show>
      
      <GridItem area="main" padding = "20px 20px">
        <PageHeading gameQuery={GameQuery}/>
        <HStack spacing={5}>
          <PlatformSelector onSelectPlatform={(platform)=> setGameQuery({...GameQuery, platform}) }/>
          <SortSelector onSelectSortItem={(ordering) => setGameQuery({...GameQuery, ordering}) }/>
        </HStack>
        <GameGrid GameQuery={GameQuery}/>
      </GridItem>
    </Grid>
  )
}

export default App
