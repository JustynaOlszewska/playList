import React from "react";
import { NavLink } from "react-router-dom";
import { StyledDiv } from "../../styles/styleComponents/StyledNotFound";

const NotFound = () => (
  <StyledDiv>
    <h4>404 - Not Found!</h4>
    <NavLink to="/playList">Go Home</NavLink>
  </StyledDiv>
);

export default NotFound;
