import React, { lazy } from "react";
import { useQuery } from "react-query";
import { getAllAuthors } from "../../../api/apiAuthors";
import Spinner from "../../molecules/spinner/Spinner";
const FormSongs = lazy(() => import("./FormSongs"));

const AddSongs = () => {
  const { data, isLoading, error, isError } = useQuery(
    "authors",
    getAllAuthors
  );

  return (
    <>
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <FormSongs
            type="add"
            defaultValue={data}
            isLoading={isLoading}
            allAuthors={data}
          >
            Add Song
          </FormSongs>
        )}
      </div>
      {isError && <span>Error: {error.message}</span>}
    </>
  );
};

export default AddSongs;
