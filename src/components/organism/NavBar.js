import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {
  StyledToolbar,
  StyledNavLink,
  StyledUl,
} from "../../styles/styleComponents/StyledNavBar";

const Navbar = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6">Manage your playlists</Typography>
        <StyledUl>
          <Button color="inherit">
            <StyledNavLink to="/authors">Authors</StyledNavLink>
          </Button>
          <Button color="inherit">
            <StyledNavLink to="/songs">Songs</StyledNavLink>
          </Button>
          <Button color="inherit">
            <StyledNavLink to="/listPlay">Playlist</StyledNavLink>
          </Button>
        </StyledUl>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;