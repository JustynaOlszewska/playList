import styled from "styled-components";
import Alert from "@material-ui/lab/Alert";

export const StyledWrapperFormAdd = styled.div`
  display: flex;
  position: relative;
`;

export const StyledContainerPlayList = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const StyledAlert = styled(Alert)`
  position: absolute;
  top: 50%;
  z-index: 3;
  width: 100vw;
`;
