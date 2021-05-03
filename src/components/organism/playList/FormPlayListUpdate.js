import React, { useState, lazy } from "react";
import { useForm } from "react-hook-form";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack";
import Alert from "@material-ui/lab/Alert";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { StyledForm } from "../../../styles/styleComponents/authors/StyledFormAuthors";
import { getPlayList, updatePlayList } from "../../../api/apiPlayList";
import Spinner from "../../molecules/spinner/Spinner";
import DropHere from "./DropHere";
// import { usePlayList } from "../../../hook/playList/usePlayList";
import { schemaValidationPlayList } from "../../../constants/validationForm";
const Error = lazy(() => import("../../atom/Error"));

//eslint-disable-next-line
const FormPlayListUpdate = ({
  playList,
  data,
  children,
  changeStatusItems,
  type,
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const findFirstElement = data.find(({ id }) => id);
  const [id, setIdElement] = useState(findFirstElement.id);

  const {
    data: dataGetPlayListId,
    error: errorPlayList,
    isLoading: isLoadingPlayListId,
    isError: isErrorPlayList,
  } = useQuery(["playlists", { id }], getPlayList);

  const { register, handleSubmit, errors } = useForm({
    defaultValues: dataGetPlayListId,
    resolver: yupResolver(schemaValidationPlayList),
  });
  const { name: { message = null } = {} } = errors || {};

  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(updatePlayList);

  const handleClickName = (e) => {
    const newData = data.find((ee) => ee.name === e.target.value);
    setIdElement(newData.id);
  };

  const onSubmit = (data) => {
    if (playList.length !== 0) {
      const copydataGetPlayListId = JSON.parse(
        JSON.stringify(dataGetPlayListId)
      );
      const songs = [
        ...copydataGetPlayListId.songs.map((e) => e.id),
        ...playList.map((element) => element.id),
      ];
      onFormSubmit(data, songs);
      changeStatusItems();
    } else {
      enqueueSnackbar("Your playlist is empty");
    }
  };

  const onFormSubmit = async (data, songs) => {
    const { playLists: name } = data || {};
    await mutateAsync({ name, songs, id });
    queryClient.invalidateQueries("playlists");
  };

  return (
    <div style={{ display: "flex", position: "relative" }}>
      <StyledForm
        onSubmit={handleSubmit(onSubmit)}
        style={{ height: "500px", width: "200px", justifyContent: "start" }}
      >
        <InputLabel style={{ margin: "10px 0" }} htmlFor="name">
          Choose some playlist
        </InputLabel>
        <select
          onClick={handleClickName}
          style={{ width: "100px", height: "30px", margin: "0 0 20px 0" }}
          id="name"
          name="name"
          errors={message}
          ref={register}
        >
          {isLoadingPlayListId ? (
            <Spinner />
          ) : (
            data.map(({ name, id }) => <option key={id}>{name}</option>)
          )}
        </select>
        <div
          style={{
            width: "200px",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <DropHere playList={playList} text="Drop here songs">
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
      <div
        style={{
          backgroundColor: "#FDDD55",
          margin: "0 0 0 15%",
          height: "400px",
          boxShadow: "5px 5px 8px #888888",
        }}
      >
        {isLoadingPlayListId ? (
          <Spinner />
        ) : (
          dataGetPlayListId?.songs.map(({ title, id }) => (
            <div style={{ width: "200px" }} key={id}>
              {title}
            </div>
          ))
        )}
      </div>
      <Error isError={isErrorPlayList} massage={errorPlayList?.message} />
    </div>
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
