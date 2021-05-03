import React from "react";
import PropTypes from "prop-types";

const DropHere = ({ playList, children, text }) => {
  return (
    <>
      {playList.length ? (
        <div style={{ width: "100%" }} id="children">
          {children}
        </div>
      ) : (
        <span style={{ margin: "0 auto" }}>{text}</span>
      )}
    </>
  );
};
DropHere.propTypes = {
  playList: PropTypes.array,
  children: PropTypes.number,
  text: PropTypes.string,
};

export default DropHere;
