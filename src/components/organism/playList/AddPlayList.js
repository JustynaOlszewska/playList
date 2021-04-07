import React, { lazy } from "react";
import { useMutation } from "react-query";
import PropTypes from "prop-types";

// import { useHistory } from "react-router-dom";
import { addPlayList } from "../../../api/apiPlayList";
import Spinner from "../../molecules/spinner/Spinner";
const FormPlayList = lazy(() => import("./FormPlayList"));
// import { useFormAuthors } from "../../../hook/authors/useFormAuthors";nie usuwj

const AddPlayList = ({ dropsongs }) => {
  //   const { isLoading, onFormSubmit } = useFormAuthors(addPlayList, "/authors");nie usuwaj
  const { mutateAsync, isLoading } = useMutation(addPlayList);

  // const history = useHistory();

  const onFormSubmit = async (data) => {
    //   await mutateAsync(id ? { ...data, id } : data);z id do update
    await mutateAsync(data);

    //   history.push(path);
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <FormPlayList
          type="add"
          onFormSubmit={onFormSubmit}
          isLoading={isLoading}
          dropsongs={dropsongs}
        >
          Add Songs
        </FormPlayList>
      )}
    </div>
  );
};

AddPlayList.propTypes = {
  dropsongs: PropTypes.func.isRequired,
};
export default AddPlayList;
