import React, { Component } from "react";
import PropTypes from "prop-types";

export class TextInput extends Component {
  onSubmit = (event) => {
    const form = event.target;
    event.preventDefault();

    // A) Prevent "trailing space " submissions
    const value = form.input.value.trim();
    // B) Prevent "empty" submissions
    if (!value) return;

    this.props.onSubmit(value);
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="TextForm__input"
          name="input"
          placeholder={this.props.placeholder}
          autoComplete="off"
        />
      </form>
    );
  }
}
TextInput.propTypes = {
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
};
