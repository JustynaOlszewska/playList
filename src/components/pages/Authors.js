import React, { lazy } from "react";
const ListAuthors = lazy(() => import("../organism/authors/ListAuthors"));
// const FormAuthors = lazy(() => import("../organism/authors/FormAuthors"));
// const UpdateAuthors = lazy(() => import("../organism/authors/UpdateAuthors"));

const Authors = () => {
  return (
    <section>
      {/* <FormAuthors/> */}
      <ListAuthors />
      {/* <UpdateAuthors/> */}
    </section>
  );
};

export default Authors;
