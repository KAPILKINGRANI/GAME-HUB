import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //this is for smaller devices
        lg: `"nav nav" "aside main"`, //this for devices with width > 1024px
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      {/*render aside component above large i.e on larger devices  using show(chakra UI*/}
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
