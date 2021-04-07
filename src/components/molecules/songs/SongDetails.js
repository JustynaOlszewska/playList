import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getSong } from "../../../api/apiSongs";
import PropTypes from "prop-types";
import { StyledDiv } from "../../../styles/styleComponents/songs/StyledSongDetails";
import Spinner from "../../molecules/spinner/Spinner";

const SongDetails = () => {
  const { id } = useParams();

  const { data, error, isLoading, isError } = useQuery(
    ["songs", { id }],
    getSong
  );

  return (
    <StyledDiv>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1>{data.title}</h1>
          <h4>Duration: {data?.duration} seconds</h4>
          <h5>Author: {data?.author?.name || "author unknown"}</h5>
          <h6>Playlists: {data?.playlists}</h6>
        </>
      )}
      {isError && <span>{error.message}</span>}
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
