import React from "react";
import PropTypes from "prop-types";
import {
  StyledContainerChildren,
  StyledText,
} from "../../../styles/styleComponents/playList/StyledDropHere";

const DropHere = ({ playList, children, text }) => {
  return (
    <>
      {playList.length ? (
        <StyledContainerChildren id="children">
          {children}
        </StyledContainerChildren>
      ) : (
        <StyledText>{text}</StyledText>
      )}
    </>
  );
};
DropHere.propTypes = {
  playList: PropTypes.array,
  children: PropTypes.object,
  text: PropTypes.string,
};

export default DropHere;
