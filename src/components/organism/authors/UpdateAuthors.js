import React, { lazy } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../../molecules/spinner/Spinner";
import { getAuthor, updateAuthor } from "../../../api/apiAuthors";
import { useFormAuthors } from "../../../hook/authors/useFormAuthors";
const FormAuthors = lazy(() => import("../FormAuthors.js"));

const UpdateAuthors = () => {
  const { id } = useParams();

  const { data, error, isLoading, isError } = useQuery(
    ["author", { id }],
    getAuthor
  );

  const { isLoading: isMutating, onFormSubmit } = useFormAuthors(
    updateAuthor,
    id
  );

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <FormAuthors
          type="update"
          defaultValue={data}
          onFormSubmit={onFormSubmit}
          isLoading={isMutating}
        >
          Update Authors
        </FormAuthors>
      )}
      {isError && <span>Error: {error.message}</span>}
    </div>
  );
};

export default UpdateAuthors;
