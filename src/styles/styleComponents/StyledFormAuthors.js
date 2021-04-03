import styled, { css } from "styled-components";
import { FlexDirection } from "../helperStyles/FlexDirection";

export const StyledForm = styled.form`
  ${FlexDirection}
  align-items: center;
  justify-content: center;
  height: 60vh;
  ${(props) =>
    props.type === "add" &&
    css`
      text-transform: uppercase;
      color: red;
    `}
`;

export const StyledInput = styled.input`
  margin: 10px 0;
`;
