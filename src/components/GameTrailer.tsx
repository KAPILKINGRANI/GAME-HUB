import useTrailer from "../hooks/useTrailers";
interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { gameTrailer, error, isLoading } = useTrailer(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    //have to use optional chaining if trailer doesn't exists
    //no trailer to be shown
    <video
      src={gameTrailer?.data[480]}
      poster={gameTrailer?.preview}
      controls
    ></video>
  );
};

export default GameTrailer;
