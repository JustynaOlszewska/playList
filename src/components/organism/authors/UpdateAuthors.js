import React, { lazy } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../../molecules/spinner/Spinner";
import { getAuthor, updateAuthor } from "../../../api/apiAuthors";
import { useFormAuthors } from "../../../hook/authors/useFormAuthors";
const FormAuthors = lazy(() => import("./FormAuthors"));
const Error = lazy(() => import("../../atom/Error"));

const UpdateAuthors = () => {
  const { id } = useParams();

  const { data, error, isLoading, isError } = useQuery(
    ["author", { id }],
    getAuthor
  );

  const { isLoading: isMutating, onFormSubmit } = useFormAuthors(
    updateAuthor,
    "/authors",
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
      <Error isError={isError} massage={error?.message} />
    </div>
  );
};

export default UpdateAuthors;
