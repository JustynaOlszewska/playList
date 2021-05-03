import React, { lazy } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
// import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import {
  StyledForm,
  StyledInput,
} from "../../../styles/styleComponents/authors/StyledFormAuthors";
import { addPlayList } from "../../../api/apiPlayList";
import { usePlayList } from "../../../hook/playList/usePlayList";
import Alert from "@material-ui/lab/Alert";
import { schemaValidationPlayList } from "../../../constants/validationForm";
const DropHere = lazy(() => import("../../organism/playList/DropHere"));

const FormPlayListAdd = ({ children, playList, changeStatusItems, type }) => {
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      name: "playlist name",
    },
    resolver: yupResolver(schemaValidationPlayList),
  });
  const { name: { message = null } = {} } = errors || {};

  const { onSubmit, isLoading } = usePlayList(
    addPlayList,
    reset,
    playList,
    changeStatusItems
  );

  return (
    <div style={{ display: "flex", position: "relative" }}>
      <StyledForm
        style={{ height: "500px", width: "200px", justifyContent: "start" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <StyledInput
          type="text"
          id="name"
          name="name"
          inputRef={register}
          errors={message}
          required
        />
        <div
          style={{
            width: "200px",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <DropHere playList={playList} text="Drop your favorite songs here">
            {children}
          </DropHere>
        </div>
        <Button variant="outlined" color="primary" type="Submit">
          {isLoading ? "Wait..." : type}
        </Button>
      </StyledForm>
      {message && (
        <Alert
          severity="error"
          style={{
            position: "absolute",
            top: "50%",
            zIndex: "3",
            width: "100vw",
          }}
        >
          {message}
        </Alert>
      )}
    </div>
  );
};

FormPlayListAdd.propTypes = {
  children: PropTypes.node,
  playList: PropTypes.array,
  changeStatusItems: PropTypes.func,
  type: PropTypes.string,
};

export default FormPlayListAdd;
