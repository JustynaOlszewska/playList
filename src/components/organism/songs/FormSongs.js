import React, { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import { addSong, updateSong } from "../../../api/apiSongs";
// import { updateSong } from "../../../api/apiSongs";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import {
  StyledInput,
  StyledForm,
} from "../../../styles/styleComponents/authors/StyledFormAuthors";
import { useSongs } from "../../../hook/songs/useSongs";
import { schemaValidationSong } from "../../../constants/validationForm";

const FormSongs = ({ isLoading, type, allAuthors, defaultValue, children }) => {
  const { register, handleSubmit, errors, reset, setValue } = useForm({
    defaultValues: defaultValue,
    resolver: yupResolver(schemaValidationSong),
  });

  const { duration, title, author } = errors;
  const { title: titleValue, duration: durationValue } = defaultValue;
  const { author: name = {} } = defaultValue;

  useEffect(() => {
    setValue("title", titleValue);
    setValue("duration", durationValue);
    setValue("author", name);
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
        <Button
          style={{ margin: "10px 0" }}
          variant="outlined"
          color="primary"
          type="submit"
        >
          {isLoading ? "Wait..." : children.split(" ").slice(0, 1)}
        </Button>
        {errors.exampleRequired && <span>This field is required</span>}
        <div style={{ position: "absolute", top: "-30%", width: "100%" }}>
          {(title || duration || author) && (
            <Alert>
              {title?.message || duration?.message || author?.message}
            </Alert>
          )}
        </div>
      </StyledForm>
    </Fragment>
  );
};

FormSongs.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.shape({
        name: PropTypes.string,
      }),
      duration: PropTypes.number,
    }),
    PropTypes.string,
  ]),
  onFormSubmit: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  allAuthors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    })
  ),
  refetch: PropTypes.func,
};

export default FormSongs;
