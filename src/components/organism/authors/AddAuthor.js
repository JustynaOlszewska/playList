import React, { lazy } from "react";
import { addAuthor } from "../../../api/apiAuthors";
import Spinner from "../../molecules/spinner/Spinner";
const FormAuthors = lazy(() => import("../FormAuthors.js"));
import { useFormAuthors } from "../../../hook/authors/useFormAuthors";

const AddAuthor = () => {
  const { isLoading, onFormSubmit } = useFormAuthors(addAuthor);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <FormAuthors
          type="add"
          onFormSubmit={onFormSubmit}
          isLoading={isLoading}
        >
          Add Author
        </FormAuthors>
      )}
    </div>
  );
};

export default AddAuthor;
