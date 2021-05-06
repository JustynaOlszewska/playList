import styled from "styled-components";

export const StyledContainerItem = styled.div`
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
  font-size: 15px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  z-index: 1;
  background-color: #3f51b5;
  color: white;
  box-shadow: 5px 5px 8px #888888;
  width: 80%;
  text-align: center;
`;
