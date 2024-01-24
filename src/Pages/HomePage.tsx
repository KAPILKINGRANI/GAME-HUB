import { Box, Grid, Show, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import Navbar from "../components/Navbar";

//The below code previously we wrote in App.tsx but now we want to setting the routes therefore we shift the content here

const HomePage = () => {
  /*
  The selectedGenre variable of the useState can either hold genre or 
  null.that's why we have written like this <Genre | null >
  */
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedOrder, setSelectedOrder] = useState("");
  const [searchText, setSearchText] = useState("");
  const handleSearch = (searchText: string) => {
    setSearchText(searchText);
    setSelectedOrder("popularity");
    setSelectedPlatform(null); //to make sure search for all platforms
    setSelectedGenre(null); //to make sure filter for all genre
  };
  return (
    <>
      {/* here we have done changes in template areas with respect to nav */}
      <GridItem area="nav">
        <Navbar onSearch={(searchText: string) => handleSearch(searchText)} />
      </GridItem>
      <Grid
        templateAreas={{
          base: `"main"`, //this is for smaller devices
          lg: `"aside main"`, //this for devices with width > 1024px
        }}
        //template columns we have added so that aside panel doesn't take the extra space
        //here fr stands for fraction on larger devices aside panel will take 200px
        templateColumns={{
          base: "1fr",
          lg: "300px 1fr",
        }}
      >
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
          <Box paddingLeft={10}>
            <GameHeading Platform={selectedPlatform} Genre={selectedGenre} />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector
                selectedPlatform={selectedPlatform}
                onSelectPlatform={(platform) => setSelectedPlatform(platform)}
              />
              <SortSelector
                selectedOrder={selectedOrder}
                onSelectedOrder={(order) => setSelectedOrder(order)}
              />
            </HStack>
          </Box>

          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
            selectedOrder={selectedOrder}
            searchText={searchText}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
