import React, { lazy } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import Spinner from "../../molecules/spinner/Spinner";
const FormAuthors = lazy(() => import("./FormAuthors.js"));
import { getAuthor, updateAuthor } from "../../../api/apiAuthors";

const UpdateAuthors = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, error, isLoading, isError } = useQuery(
    ["author", { id }],
    getAuthor
  );
  const { mutateAsync, isLoading: isMutating } = useMutation(updateAuthor);

  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data, id });
    history.push("/authors");
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <FormAuthors
          defaultValue={data}
          onFormSubmit={onFormSubmit}
          isLoading={isMutating}
        />
      )}
      {isError && <span>Error: {error.message}</span>}
    </div>
  );
};

export default UpdateAuthors;
