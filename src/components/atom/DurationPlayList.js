import React from "react";
import PropTypes from "prop-types";
import { StyledDurationPlayLists } from "../../styles/styleComponents/playList/StyledDurationPlayList";

const DurationPlayList = ({ children }) => (
  <StyledDurationPlayLists>
    <div>
      The total length of my playlist: <p>{children} minutes</p>
    </div>
  </StyledDurationPlayLists>
);

DurationPlayList.propTypes = {
  children: PropTypes.number,
};

export default React.memo(DurationPlayList);
