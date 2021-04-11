import React, { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addSong } from "../../../api/apiSongs";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import { updateSong } from "../../../api/apiSongs";
import {
  StyledInput,
  StyledForm,
} from "../../../styles/styleComponents/authors/StyledFormAuthors";
import { useSongs } from "../../../hook/songs/useSongs";

const schemaValidation = yup.object().shape({
  title: yup
    .string()
    .required("Title field is required")
    .max(30, "Title field should contains max 30 characters"),
  author: yup.string().required("Author fiels is required"),
  duration: yup
    .number()
    .typeError("Duration field must be a number")
    .required("Duration field is required"),
});

const FormSongs = ({ isLoading, type, allAuthors, defaultValue, children }) => {
  const { register, handleSubmit, errors, reset, setValue } = useForm({
    defaultValues: defaultValue,
    resolver: yupResolver(schemaValidation),
  });

  useEffect(() => {
    setValue("title", defaultValue?.title);
    setValue("duration", defaultValue?.duration);
    setValue("author", defaultValue?.author?.name);
  }, [defaultValue]);

  const taskSongs = type === "add" ? addSong : updateSong;
  const { onSubmit } = useSongs(taskSongs, reset, allAuthors);

  return (
    <Fragment>
      <StyledForm
        style={{ position: "relative" }}
        type={type}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>{children}</h1>
        <InputLabel htmlFor="tite">Title of song</InputLabel>
        <StyledInput
          required
          type="text"
          id="title"
          name="title"
          inputRef={register}
          errors={errors.title}
        />
        <InputLabel style={{ margin: "10px 0" }} htmlFor="author">
          Author
        </InputLabel>
        <select
          style={{ width: "80%", margin: "0 0 20px 0" }}
          id="author"
          name="author"
          errors={errors?.author}
          ref={register}
        >
          {allAuthors &&
            allAuthors.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
        </select>
        <InputLabel htmlFor="duration">Duration</InputLabel>
        <StyledInput
          required
          type="number"
          inputProps={{ min: "1", max: "10", step: "1" }}
          id="duration"
          name="duration"
          inputRef={register}
          errors={errors.duration}
        />
        <Button variant="outlined" color="primary" type="submit">
          {isLoading ? "Wait..." : children.split(" ").slice(0, 1)}
        </Button>
        {errors.exampleRequired && <span>This field is required</span>}
        <div style={{ position: "absolute", top: "-30%", width: "100%" }}>
          {errors?.title?.message && (
            <Alert severity="error">
              <p>{errors?.title?.message}</p>
            </Alert>
          )}
          {errors?.author?.message && (
            <Alert severity="error">{errors?.author?.message}</Alert>
          )}
          {errors?.duration?.message && (
            <Alert severity="error">{errors?.duration?.message}</Alert>
          )}
        </div>
      </StyledForm>
    </Fragment>
  );
};

FormSongs.propTypes = {
  defaultValue: PropTypes.shape([
    {
      title: PropTypes.string,
      author: PropTypes.shape({
        name: PropTypes.string,
      }),
      duration: PropTypes.number,
    },
  ]),
  onFormSubmit: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  allAuthors: PropTypes.array,
  refetch: PropTypes.func,
};

export default FormSongs;
