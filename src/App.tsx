import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
function App() {
  /*
  The selectedGenre variable of the useState can either hold genre or 
  null.that's why we have written like this <Genre | null >
  */
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //this is for smaller devices
        lg: `"nav nav" "aside main"`, //this for devices with width > 1024px
      }}
      //template columns we have added so that aside panel doesn't take the extra space
      //here fr stands for fraction on larger devices aside panel will take 200px
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      {/*render aside component above large i.e on larger devices  using show(chakra UI*/}
      <Show above="lg">
        <GridItem area="aside" paddingX={10}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectedGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
