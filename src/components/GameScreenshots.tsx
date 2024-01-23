import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { SimpleGrid, Image } from "@chakra-ui/react";
interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { gameScreenShots, error } = useScreenshots(gameId);
  if (error) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      {gameScreenShots.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
