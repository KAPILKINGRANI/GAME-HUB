import { Heading } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
interface Props {
  Genre: Genre | null;
  Platform: Platform | null;
}
const GameHeading = ({ Genre, Platform }: Props) => {
  //Following Heading are possible
  //Games
  //Action Games
  //Xbox Games
  //Xbox Action Games
  const heading = `${Genre?.name || ""} ${Platform?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
