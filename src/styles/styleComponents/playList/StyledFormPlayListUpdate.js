import styled from "styled-components";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Alert from "@material-ui/lab/Alert";

export const StyledFormWrapper = styled.div`
  display: flex;
  position: relative;
`;
export const StyledInputLabel = styled(InputLabel)`
  margin: 10px 0;
`;
export const StyledNativeSelect = styled(NativeSelect)`
  width: 100px;
  height: 30px;
  margin: 0 0 20px 0;
`;
export const StyledDiv = styled.div`
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
export const StyledContainerSongs = styled.div`
  background-color: #fddd55;
  margin: 0 0 0 15%;
  height: 400px;
  box-shadow: 5px 5px 8px #888888;
`;
export const StyledSong = styled.div`
  width: 200px;
`;
