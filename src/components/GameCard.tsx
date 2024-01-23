import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Image, Heading, Text, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  const noImageUrl = "./public/no-image-placeholder.webp";
  return (
    <Card
      _hover={{
        transform: "scale(1.1)",
        transition: "transform .15s ease-in",
      }}
      borderRadius={10}
      overflow={"hidden"}
    >
      <Image src={game.background_image || noImageUrl} />
      <CardBody>
        {/* It is Difficult see how we have pass the prop
        a simpler way extract the code written in PlatformIconList here 
        itself */}
        <HStack justifyContent="space - between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}> {game.name}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
