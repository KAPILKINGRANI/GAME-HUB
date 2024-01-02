import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
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
        <GridItem area="aside" bg="gold">
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
