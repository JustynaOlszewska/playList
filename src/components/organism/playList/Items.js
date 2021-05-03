import React from "react";
import PropTypes from "prop-types";

const Items = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#FDDD55",
        boxShadow: "5px 5px 8px #888888",
        height: "400px",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

Items.propTypes = {
  children: PropTypes.node,
  isOver: PropTypes.bool,
};

export default Items;
