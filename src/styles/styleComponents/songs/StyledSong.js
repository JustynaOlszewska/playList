import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FlexCenter } from "../../helperStyles/FlexCenter";

export const StyledLi = styled.li`
  ${FlexCenter}
  word-wrap: break-word;
  width: 90%;
  margin: 10px 0;
  flex-direction: column;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledNavLink = styled(NavLink)`
  margin: 5px 0;
  text-align: center;
  @media (min-width: 767px) {
    margin: 0;
    text-align: left;
  }
`;
