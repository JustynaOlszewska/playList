import styled, { css } from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from "react-router-dom";

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 767px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;
export const StyledNavLink = styled(NavLink)`
  color: white;
  ${({ playlist }) =>
    playlist === "playlist" &&
    css`
      color: black;
    `};
`;

export const StyledUl = styled.ul`
  padding: 0;
  ${({ playlist }) =>
    playlist === "playlist" &&
    css`
      display: flex;
      width: 100%;
      justify-content: space-around;
    `};
`;
