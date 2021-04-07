import React, { lazy } from "react";
import { useQuery } from "react-query";
import { getAllAuthors } from "../../../api/apiAuthors";
import Spinner from "../../molecules/spinner/Spinner";
const FormSongs = lazy(() => import("./FormSongs"));
const Error = lazy(() => import("../../atom/Error"));

const UpdateSongs = () => {
  const { data, isLoading, error, isError } = useQuery(
    "authors",
    getAllAuthors
  );

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <FormSongs
          type="update"
          defaultValue={data}
          isLoading={isLoading}
          allAuthors={data}
        >
          Update Songs
        </FormSongs>
      )}
      <Error isError={isError} massage={error?.message} />
    </div>
  );
};

export default UpdateSongs;
