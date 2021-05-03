import React from "react";
import { useRouteMatch } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import UpdateIcon from "@material-ui/icons/Update";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import {
  StyledNavLink,
  StyledUl,
} from "../../../styles/styleComponents/StyledNavBar";
const NavigationPlayList = () => {
  let { url } = useRouteMatch();

  return (
    <StyledUl
      playlist
      style={{ display: "flex", width: "100%", justifyContent: "space-around" }}
    >
      <Button color="inherit">
        <StyledNavLink style={{ color: "black" }} to={`${url}/add`}>
          <ListItemIcon>
            <AddIcon />
            <ListItemText primary="Add playlist" />
          </ListItemIcon>
        </StyledNavLink>
      </Button>
      <Button color="inherit">
        <StyledNavLink style={{ color: "black" }} to={`${url}/update`}>
          <ListItemIcon>
            <UpdateIcon />
            <ListItemText primary="Update playlist" />
          </ListItemIcon>
        </StyledNavLink>
      </Button>
    </StyledUl>
  );
};

export default NavigationPlayList;
