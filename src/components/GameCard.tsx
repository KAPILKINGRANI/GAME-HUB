import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Image, Heading, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {/* It is Difficult see how we have pass the prop
        a simpler way extract the code written in PlatformIconList here 
        itself */}

        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
