import styled from "styled-components";

export const StyledDiv = styled.div`
  color: black;
  text-align: center;
  margin: 20px;
  @media (min-width: 300px) and (orientation: portrait) {
    font-size: 2.6rem;
  }
  @media (min-width: 450px) and (orientation: portrait) {
    font-size: 3.7rem;
  }
  @media (min-width: 600px) and (orientation: portrait) {
    font-size: 4rem;
  }
  @media (min-width: 760px) and (orientation: portrait) {
    font-size: 6rem;
  }
  @media (min-width: 480px) and (orientation: landscape) {
    font-size: 2.5rem;
  }
  @media (min-width: 850px) and (orientation: landscape) {
    font-size: 3.7rem;
  }
  @media (min-width: 960px) and (orientation: landscape) {
    font-size: 4rem;
  }
  @media (min-width: 1200px) and (orientation: landscape) {
    font-size: 6rem;
  }
`;
