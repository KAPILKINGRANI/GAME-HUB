import {
  Box,
  Button,
  GridItem,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";
import Navbar from "../components/Navbar";
interface Props {
  onSearch: (searchText: string) => void;
}
const GameDetailPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const { slug } = useParams();
  console.log("Slug:", slug);

  const { game, isLoading, error } = useGame(slug!);
  //by appending ! we are telling that compiler that slug can never be null
  //if game exist then only url contain slug that means slug cannot have value null
  console.log("Game:", game);
  console.log("Is Loading:", isLoading);
  console.log("Error:", error);

  if (isLoading) return <Spinner />;
  //if any error or no game exists
  if (error || !game) {
    console.error("Error or no game:", error);
    return <Text>Error loading game</Text>;
  }

  return (
    <>
      <Box padding={5}>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameTrailer gameId={game.id}></GameTrailer>
        <Box padding={5}>
          <Heading>Screenshots</Heading>
        </Box>
        <GameScreenshots gameId={game.id}></GameScreenshots>
        <Box margin={5}>
          <Button colorScheme="yellow" size="lg" onClick={handleClick}>
            View other games
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default GameDetailPage;
