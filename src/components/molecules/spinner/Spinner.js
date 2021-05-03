import React from "react";
import { StyledImg } from "../../../styles/styleComponents/StyledSpinner";
import spinner from "./spinner.gif";

const Spinner = () => (
  <>
    <StyledImg src={spinner} alt="loading..." />
  </>
);

export default Spinner;
