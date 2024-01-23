import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
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
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameTrailer gameId={game.id}></GameTrailer>
      <GameScreenshots gameId={game.id}></GameScreenshots>
    </>
  );
};

export default GameDetailPage;
