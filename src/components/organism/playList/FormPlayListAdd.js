import React, { lazy } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import {
  StyledForm,
  StyledInput,
} from "../../../styles/styleComponents/authors/StyledFormAuthors";
import { addPlayList } from "../../../api/apiPlayList";
import { usePlayList } from "../../../hook/playList/usePlayList";
import { schemaValidationPlayList } from "../../../constants/validationForm";
import {
  StyledWrapperFormAdd,
  StyledContainerPlayList,
  StyledAlert,
} from "../../../styles/styleComponents/playList/StyledFormPlayListAdd";
const DropHere = lazy(() => import("../../organism/playList/DropHere"));

const FormPlayListAdd = ({ children, playList, changeStatusItems, type }) => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schemaValidationPlayList),
  });
  const { name: { message = null } = {} } = errors || {};

  const { onSubmit, isLoading } = usePlayList(
    addPlayList,
    playList,
    changeStatusItems,
    reset
  );

  return (
    <StyledWrapperFormAdd>
      <StyledForm add="add" onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          type="text"
          id="name"
          name="name"
          inputRef={register}
          errors={message}
          placeholder="playlist name"
          required
        />
        <StyledContainerPlayList>
          <DropHere playList={playList} text="Drop your favorite songs here">
            {children}
          </DropHere>
        </StyledContainerPlayList>
        <Button variant="outlined" color="primary" type="Submit">
          {isLoading ? "Wait..." : type}
        </Button>
      </StyledForm>
      {message && (
        <StyledAlert severity="error" add="add">
          {message}
        </StyledAlert>
      )}
    </StyledWrapperFormAdd>
  );
};

FormPlayListAdd.propTypes = {
  children: PropTypes.node,
  playList: PropTypes.array,
  changeStatusItems: PropTypes.func,
  type: PropTypes.string,
};

export default FormPlayListAdd;
