import React from "react";
import useGenres from "../hooks/useGenres";
import { Spinner, list } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner padding={10} />;
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
