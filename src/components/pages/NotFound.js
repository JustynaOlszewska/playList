import React from "react";
import { NavLink } from "react-router-dom";
import { StyledDiv } from "../../styles/styleComponents/StyledNotFound";

const NotFound = () => {
  return (
    <StyledDiv>
      <h1>404 - Not Found!</h1>
      <NavLink to="/playList">Go Home</NavLink>
    </StyledDiv>
  );
};

export default NotFound;
