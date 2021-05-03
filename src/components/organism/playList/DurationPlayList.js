import React from "react";
import PropTypes from "prop-types";

const DurationPlayList = ({ children }) => (
  <div
    style={{
      backgroundColor: "#FDDD55",
      margin: "0 0 0 15%",
      height: "400px",
      boxShadow: "5px 5px 8px #888888",
    }}
  >
    <div>
      The total length of my playlist: <p>{children} minutes</p>
    </div>
  </div>
);

DurationPlayList.propTypes = {
  children: PropTypes.number,
};

export default DurationPlayList;
