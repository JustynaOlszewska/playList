import styled, { css } from "styled-components";
import { FlexDirection } from "../../helperStyles/FlexDirection";
import TextField from "@material-ui/core/TextField";

export const StyledForm = styled.form`
  ${FlexDirection}
  align-items: center;
  justify-content: center;
  height: 60vh;
  ${({ type }) =>
    type === "add" &&
    css`
      text-transform: uppercase;
      color: red;
    `}
  @media(min-height: 900px) {
    justify-content: flex-start;
  }
`;

export const StyledInput = styled(TextField)`
  margin: 10px 0;
  ${({ typeSong }) =>
    typeSong === "song" &&
    css`
      width: 100%;
    `}
`;
