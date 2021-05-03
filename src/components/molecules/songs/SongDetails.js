import React, { lazy } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import PropTypes from "prop-types";
import { getSong } from "../../../api/apiSongs";
import { StyledDiv } from "../../../styles/styleComponents/songs/StyledSongDetails";
import Spinner from "../../molecules/spinner/Spinner";
const Error = lazy(() => import("../../atom/Error"));

const SongDetails = () => {
  const { id } = useParams();

  const { data, error, isLoading, isError } = useQuery(
    ["songs", { id }],
    getSong
  );

  const {
    title = "title unknown",
    duration = "duration unknown",
    author = {},
    playlists = [],
  } = data || {};

  const { name = "author unknown" } = author || {};

  return (
    <StyledDiv>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1>{title}</h1>
          <h4>Duration: {duration} seconds</h4>
          <h5>Author: {name}</h5>
          <ul>
            Playlists:{" "}
            {playlists.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </>
      )}
      <Error isError={isError} massage={error?.message} />
    </StyledDiv>
  );
};

SongDetails.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

export default SongDetails;
