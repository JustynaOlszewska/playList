import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import {
  StyledForm,
  StyledInput,
} from "../../styles/styleComponents/StyledFormAuthors";

const FormAuthors = ({
  defaultValues,
  onFormSubmit,
  isLoading,
  type,
  children,
}) => {
  const { register, handleSubmit, errors } = useForm({ defaultValues });

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });

  return (
    <StyledForm type={type} onSubmit={onSubmit}>
      <h1>{children}</h1>
      <InputLabel htmlFor="name">Author</InputLabel>
      <StyledInput type="text" id="name" name="name" ref={register} />
      <Button variant="outlined" color="primary" type="Submit">
        {isLoading ? "Wait..." : children.split(" ").slice(0, 1)}
      </Button>
      {errors.exampleRequired && <span>This field is required</span>}
    </StyledForm>
  );
};

FormAuthors.propTypes = {
  defaultValues: PropTypes.number,
  onFormSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default FormAuthors;
