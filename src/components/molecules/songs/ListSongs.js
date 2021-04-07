import React, { lazy } from "react";
import { useQuery } from "react-query";
import { useRouteMatch, NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { getAllSongs } from "../../../api/apiSongs";
import {
  StyledListSongs,
  StyledUl,
} from "../../../styles/styleComponents/songs/StyledListSongs";
import Spinner from "../../molecules/spinner/Spinner";
const Song = lazy(() => import("../songs/Song"));
const Error = lazy(() => import("../../atom/Error"));

const ListSongs = () => {
  const match = useRouteMatch();

  const { data, error, isLoading, isError } = useQuery("songs", getAllSongs);

  return (
    <StyledListSongs>
      <h2>List of Songs</h2>
      <Button variant="outlined" color="inherit">
        <NavLink style={{ textDecoration: "none" }} to={`${match.url}/addSong`}>
          Add Song
        </NavLink>
      </Button>
      {isLoading ? (
        <Spinner />
      ) : (
        <StyledUl>
          {data.map((song) => (
            <Song key={song.id} song={song} />
          ))}
        </StyledUl>
      )}
      <Error isError={isError} massage={error?.message} />
    </StyledListSongs>
  );
};

export default ListSongs;
