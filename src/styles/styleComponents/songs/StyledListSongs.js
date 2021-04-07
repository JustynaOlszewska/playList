import styled from "styled-components";
import { FlexDirection } from "../../helperStyles/FlexDirection";

export const StyledListSongs = styled.section`
  ${FlexDirection}
  align-items: center;
  width: 98%;
  min-height: 80vh;
  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const StyledUl = styled.ul`
  ${FlexDirection}
  height: 60%;
  width: 95%;
  padding: 0;
`;
