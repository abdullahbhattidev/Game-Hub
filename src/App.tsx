import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenresList from "./components/GenresList"
import { useState } from "react"
import { genres } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { platform } from "./hooks/useGames"

export interface GameQuery {
  genre : genres | null;
  platform : platform |null;
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
      <GridItem area="nav">
        <NavBar/>
      </GridItem>
      <Show above="lg">
      <GridItem area="aside" padding = "20px 20px">
        <GenresList highlightSelectGenre={GameQuery.genre} SelectGenre={(genre)=> setGameQuery({...GameQuery,genre})}/>
      </GridItem>
      </Show>
      
      <GridItem area="main" padding = "20px 20px">
        <PlatformSelector onSelectPlatform={(platform)=> setGameQuery({...GameQuery, platform}) }/>
        <GameGrid GameQuery={GameQuery}/>
      </GridItem>
    </Grid>
  )
}

export default App
