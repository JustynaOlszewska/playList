import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../molecules/spinner/Spinner";
import {
  StyledListAuthors,
  StyledUl,
} from "../../../styles/styleComponents/StyledAuthors";
import { getAllAuthors } from "../../../api/apiAuthors";

const ListSongs = () => {
  const { data, error, isLoading, isError } = useQuery("songs", getAllAuthors);

  return (
    <StyledListAuthors>
      {isLoading ? (
        <Spinner />
      ) : (
        <StyledUl>
          {data.map((song) => (
            <div key={song.id}>song{song.name}</div>
          ))}
        </StyledUl>
      )}
      {isError && <span>Error: {error.message}</span>}
    </StyledListAuthors>
  );
};

export default ListSongs;
