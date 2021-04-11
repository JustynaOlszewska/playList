import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import {
  StyledForm,
  StyledInput,
} from "../../../styles/styleComponents/authors/StyledFormAuthors";
const schemaValidation = yup.object().shape({
  name: yup
    .string()
    .required("Title field is required")
    .max(30, "Title field should contains max 30 characters"),
});

const FormAuthors = ({
  defaultValue,
  onFormSubmit,
  isLoading,
  type,
  children,
}) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValue,
    resolver: yupResolver(schemaValidation),
  });

  const { name } = errors;

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });

  return (
    <>
      <StyledForm
        style={{ position: "relative" }}
        type={type}
        onSubmit={onSubmit}
      >
        <h1>{children}</h1>
        <InputLabel htmlFor="name">Author</InputLabel>
        <StyledInput
          defaultValue={defaultValue?.name}
          type="text"
          id="name"
          name="name"
          inputRef={register}
          errors={errors.name}
        />
        <Button variant="outlined" color="primary" type="Submit">
          {isLoading ? "Wait..." : children.split(" ").slice(0, 1)}
        </Button>
        {errors.exampleRequired && <span>This field is required</span>}
        <div style={{ position: "absolute", top: "0", width: "100%" }}>
          {name && (
            <Alert severity="error">
              <p>{name?.message}</p>
            </Alert>
          )}
        </div>
      </StyledForm>
    </>
  );
};

FormAuthors.propTypes = {
  defaultValue: PropTypes.object,
  onFormSubmit: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default FormAuthors;
