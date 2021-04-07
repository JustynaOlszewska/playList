import React from "react";
import { useDrop } from "react-dnd";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { ItemTypes } from "../../../constants";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import {
  StyledForm,
  StyledInput,
} from "../../../styles/styleComponents/authors/StyledFormAuthors";

const FormPlayList = ({
  defaultValue,
  onFormSubmit,
  isLoading,
  type,
  dropsongs,
  children,
}) => {
  // eslint-disable-next-line
  const [{ isOver }, addToPlayList] = useDrop(() => ({
    accept: ItemTypes.PAYLISTDND,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  //

  // const myRefSongs = useRef();
  const b = [{ name: "e" }, { name: "d" }];
  const { register, handleSubmit, errors } = useForm({ defaultValue });

  const onSubmit = handleSubmit((data) => {
    // console.log('tasks', data, myRefSongs.current.innerText.split(","))

    // let { name, songs } = data;
    // const x = songs.split(",")
    // songs = x

    onFormSubmit(data);
  });

  return (
    <StyledForm type={type} onSubmit={onSubmit}>
      <h1>{children}</h1>
      <InputLabel htmlFor="name">Playlist name</InputLabel>
      <StyledInput type="text" id="name" name="name" inputRef={register} />
      <label htmlFor="songs">Favorite songs</label>
      <ul ref={addToPlayList} name="songs" id="songs">
        {b.map((e, index) => (
          <li
            index={index}
            typednd={ItemTypes.PAYLISTDND}
            dropsongs={dropsongs}
            key={e.name}
          >
            {e.name}
          </li>
        ))}
      </ul>
      <Button variant="outlined" color="primary" type="Submit">
        {isLoading ? "Wait..." : children.split(" ").slice(0, 1)}
      </Button>
      {errors.exampleRequired && <span>This field is required</span>}
    </StyledForm>
  );
};

FormPlayList.propTypes = {
  defaultValue: PropTypes.number,
  onFormSubmit: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  dropsongs: PropTypes.func,
};

export default FormPlayList;
