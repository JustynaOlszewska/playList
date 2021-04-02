import React, { lazy } from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { addAuthor } from "../../../api/apiAuthors";
import Spinner from "../../molecules/spinner/Spinner";
const FormAuthors = lazy(() => import("./FormAuthors.js"));

const AddAuthor = () => {
  const history = useHistory();
  const { mutateAsync, isLoading } = useMutation(addAuthor);
  const onFormSubmit = async (data) => {
    await mutateAsync(data);
    history.push("/authors");
  };
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <FormAuthors onFormSubmit={onFormSubmit} isLoading={isLoading} />
      )}
      {/* {isError && <span>Error: {error.message}</span>} */}
    </div>
  );
};

export default AddAuthor;
