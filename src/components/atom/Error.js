import React from "react";
import PropTypes from "prop-types";

const Error = ({ isError, message }) =>
  isError && <span>Error: {message}</span>;

Error.propTypes = {
  isError: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

export default React.memo(Error);
