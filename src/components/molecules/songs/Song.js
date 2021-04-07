import React from "react";
import { useRouteMatch, NavLink } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { removeSong } from "../../../api/apiSongs";
import {
  StyledLi,
  StyledNavLink,
} from "../../../styles/styleComponents/songs/StyledSong";

const Song = ({ song }) => {
  const match = useRouteMatch();

  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeSong);

  const { title, id } = song;

  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries("songs");
  };

  return (
    <StyledLi>
      <StyledNavLink
        style={{ width: "150px" }}
        to={`${match.url}/songDetails/${id}`}
      >
        {title}
      </StyledNavLink>
      <div>
        <Button variant="outlined" color="primary" onClick={remove}>
          {isLoading ? "wait..." : "Delete"}
        </Button>
        <Button variant="outlined" color="inherit">
          <NavLink
            style={{ textDecoration: "none" }}
            to={`${match.url}/changeSong/${id}`}
          >
            Change Details
          </NavLink>
        </Button>
      </div>
    </StyledLi>
  );
};

Song.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
  }),
};

export default Song;
