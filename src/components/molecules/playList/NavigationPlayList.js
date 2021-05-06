import React from "react";
import { useRouteMatch } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import UpdateIcon from "@material-ui/icons/Update";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { navigationPlayList } from "../../../constants/data";

import {
  StyledNavLink,
  StyledUl,
} from "../../../styles/styleComponents/StyledNavBar";
const NavigationPlayList = () => {
  let { url } = useRouteMatch();

  return (
    <StyledUl playlist="playlist">
      {navigationPlayList.map(({ pathDetail, primary, add }) => (
        <Button key={primary} color="inherit">
          <StyledNavLink paylist="playlist" to={`${url}${pathDetail}`}>
            <ListItemIcon>
              {add ? <AddIcon /> : <UpdateIcon />}
              <ListItemText primary={primary} />
            </ListItemIcon>
          </StyledNavLink>
        </Button>
      ))}
    </StyledUl>
  );
};

export default NavigationPlayList;
