import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import {
  StyledForm,
  StyledInput,
} from "../../../styles/styleComponents/authors/StyledFormAuthors";

const FormAuthors = ({
  defaultValue,
  onFormSubmit,
  isLoading,
  type,
  children,
}) => {
  const { register, handleSubmit, errors } = useForm({ defaultValue });

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });

  return (
    <StyledForm type={type} onSubmit={onSubmit}>
      <h1>{children}</h1>
      <InputLabel htmlFor="name">Author</InputLabel>
      <StyledInput
        defaultValue={defaultValue?.name}
        type="text"
        id="name"
        name="name"
        inputRef={register}
      />
      <Button variant="outlined" color="primary" type="Submit">
        {isLoading ? "Wait..." : children.split(" ").slice(0, 1)}
      </Button>
      {errors.exampleRequired && <span>This field is required</span>}
    </StyledForm>
  );
};

FormAuthors.propTypes = {
  defaultValue: PropTypes.number,
  onFormSubmit: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default FormAuthors;
