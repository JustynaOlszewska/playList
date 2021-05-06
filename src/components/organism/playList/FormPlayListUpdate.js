import React, { lazy } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { StyledForm } from "../../../styles/styleComponents/authors/StyledFormAuthors";
import { updatePlayList } from "../../../api/apiPlayList";
import { schemaValidationPlayList } from "../../../constants/validationForm";
import { usePlayList } from "../../../hook/playList/usePlayList";
import { useId } from "../../../hook/playList/useId";
import {
  StyledFormWrapper,
  StyledInputLabel,
  StyledNativeSelect,
  StyledDiv,
  StyledAlert,
  StyledContainerSongs,
  StyledSong,
} from "../../../styles/styleComponents/playList/StyledFormPlayListUpdate.js";
import Spinner from "../../molecules/spinner/Spinner";
const DropHere = lazy(() => import("./DropHere"));
const Error = lazy(() => import("../../atom/Error"));

const FormPlayListUpdate = ({
  playList,
  data,
  children,
  changeStatusItems,
  type,
}) => {
  const {
    id,
    dataGetPlayListId,
    errorPlayList,
    isLoadingPlayListId,
    isErrorPlayList,
    setIdElement,
  } = useId(data);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schemaValidationPlayList),
  });
  const { name: { message = null } = {} } = errors || {};
  const { songs = {} } = dataGetPlayListId || {};

  const handleClickName = (e) => {
    const newData = data.find((ee) => ee.name === e.target.value);
    setIdElement(newData.id);
  };
  const { onSubmit, isLoading } = usePlayList(
    updatePlayList,
    playList,
    changeStatusItems,
    null,
    dataGetPlayListId,
    id
  );

  return (
    <StyledFormWrapper>
      <StyledForm update="update" onSubmit={handleSubmit(onSubmit)}>
        <StyledInputLabel htmlFor="name">Choose some playlist</StyledInputLabel>
        <StyledNativeSelect
          onClick={handleClickName}
          id="name"
          name="name"
          errors={message}
          inputRef={register}
        >
          {isLoading
            ? "Wait..."
            : data.map(({ name, id }) => <option key={id}>{name}</option>)}
        </StyledNativeSelect>
        <StyledDiv>
          <DropHere playList={playList} text="Drop here songs">
            {children}
          </DropHere>
        </StyledDiv>
        <Button variant="outlined" color="primary" type="Submit">
          {isLoading ? "Wait..." : type}
        </Button>
      </StyledForm>
      {message && <StyledAlert severity="error">{message}</StyledAlert>}
      <StyledContainerSongs>
        {isLoadingPlayListId ? (
          <Spinner />
        ) : (
          songs.map(({ title, id }) => (
            <StyledSong key={id}>{title}</StyledSong>
          ))
        )}
      </StyledContainerSongs>
      <Error isError={isErrorPlayList} massage={errorPlayList?.message} />
    </StyledFormWrapper>
  );
};

FormPlayListUpdate.propTypes = {
  children: PropTypes.node,
  playList: PropTypes.array,
  data: PropTypes.array,
  setPlayList: PropTypes.func,
  changeStatusItems: PropTypes.func,
  type: PropTypes.string,
};

export default FormPlayListUpdate;
