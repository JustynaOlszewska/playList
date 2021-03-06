import React from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  //eslint-disable-next-line
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1 style={{ fontSize: "3rem", color: "white", textAlign: "center" }}>
          Something went wrong.
        </h1>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object,
};

export default ErrorBoundary;
