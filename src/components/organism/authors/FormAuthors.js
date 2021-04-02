import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const FormAuthors = ({ defaultValues, onFormSubmit, isLoading }) => {
  const { register, handleSubmit, errors } = useForm({ defaultValues });

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <h1>Change Author</h1>
      <label htmlFor="name" />
      <input type="text" id="name" name="name" ref={register} />
      <button type="Submit">{isLoading ? "Wait..." : "Change"}</button>
      {errors.exampleRequired && <span>This field is required</span>}
    </form>
  );
};

FormAuthors.propTypes = {
  defaultValues: PropTypes.number.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default FormAuthors;
