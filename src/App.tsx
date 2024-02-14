import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenresList from "./components/GenresList"
import { useState } from "react"
import { genres } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"


function App() {
  const [selectedGenre, setselectedGenres] = useState<genres | null>(null)
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
        <GenresList highlightSelectGenre={selectedGenre} SelectGenre={(genre)=> setselectedGenres(genre)}/>
      </GridItem>
      </Show>
      
      <GridItem area="main" padding = "20px 20px">
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  )
}

export default App
