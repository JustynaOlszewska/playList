import React, { lazy } from "react";
import { useQuery } from "react-query";
import { getAllAuthors } from "../../../api/apiAuthors";
import Spinner from "../../molecules/spinner/Spinner";
const FormSongs = lazy(() => import("./FormSongs"));

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
          typeSong="song"
          defaultValue={data}
          isLoading={isLoading}
          allAuthors={data}
        >
          Update Songs
        </FormSongs>
      )}
      {isError && <span>Error: {error.message}</span>}
    </div>
  );
};

export default UpdateSongs;
