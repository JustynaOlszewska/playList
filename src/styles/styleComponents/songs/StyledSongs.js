import styled from "styled-components";
import { FlexCenter } from "../../helperStyles/FlexCenter";

export const StyledSongs = styled.div`
  ${FlexCenter}
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media (min-width: 787px) {
    flex-direction: row;
  }
`;
