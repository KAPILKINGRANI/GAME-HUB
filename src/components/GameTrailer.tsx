import useTrailer from "../hooks/useTrailers";
import { Box } from "@chakra-ui/react";
interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { gameTrailer, error, isLoading } = useTrailer(gameId);
  if (isLoading) return null;
  if (error) throw error;
  if (!gameTrailer || gameTrailer.length === 0) {
    return <p>No trailer available.</p>;
  }
  return (
    //have to use optional chaining if trailer doesn't exists
    <>
      <Box padding={10} margin={10}>
        <video
          src={gameTrailer?.[0].data[480]}
          poster={gameTrailer?.[0].preview}
          controls
          width={1000}
        ></video>
      </Box>
    </>
  );
};

export default GameTrailer;
