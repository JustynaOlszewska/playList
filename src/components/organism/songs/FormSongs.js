import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import PropTypes from "prop-types";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
// import Select from '@material-ui/core/Select';
import { addSong } from "../../../api/apiSongs";
import { updateSong } from "../../../api/apiSongs";
import {
  StyledForm,
  StyledInput,
} from "../../../styles/styleComponents/authors/StyledFormAuthors";

const FormSongs = ({
  defaultValue,
  isLoading,
  type,
  allAuthors,
  typeSong,
  children,
}) => {
  const { id } = useParams();

  const { register, handleSubmit, errors, reset } = useForm({ defaultValue });

  const queryClient = useQueryClient();
  const taskSongs = type === "add" ? addSong : updateSong;
  const { mutateAsync } = useMutation(taskSongs);

  const onSubmit = handleSubmit((data) => {
    let { author, title, duration } = data;
    const newAuthor = allAuthors.filter((e) => e.name === author);
    onFormSubmit({ title, author: newAuthor[0], duration });
    reset();
  });

  const onFormSubmit = async (data) => {
    await mutateAsync(id ? { ...data, id } : data);
    queryClient.invalidateQueries("songs");
  };

  return (
    <StyledForm type={type} onSubmit={onSubmit}>
      <h1>{children}</h1>
      <InputLabel htmlFor="tite">Title of song</InputLabel>
      <StyledInput
        required
        type="text"
        id="title"
        name="title"
        inputProps={{
          maxLength: 30,
        }}
        inputRef={register}
      />
      <InputLabel style={{ margin: "10px 0" }} htmlFor="author">
        Author
      </InputLabel>
      <select
        style={{ width: "80%", margin: "0 0 20px 0" }}
        id="author"
        name="author"
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
        typeSong={typeSong}
        type="number"
        inputProps={{ min: "1", max: "10", step: "1" }}
        id="duration"
        name="duration"
        ref={register}
      />
      <Button variant="outlined" color="primary" type="Submit">
        {isLoading ? "Wait..." : children.split(" ").slice(0, 1)}
      </Button>
      {errors.exampleRequired && <span>This field is required</span>}
    </StyledForm>
  );
};

FormSongs.propTypes = {
  defaultValue: PropTypes.number,
  onFormSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  typeSong: PropTypes.string,
  children: PropTypes.string.isRequired,
  allAuthors: PropTypes.array,
};

export default FormSongs;
