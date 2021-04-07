import styled from "styled-components";
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
`;

export const StyledUl = styled.ul`
  padding: 0;
`;
