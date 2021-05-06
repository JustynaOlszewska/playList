import React, { lazy, Suspense } from "react";
import { StyledSongs } from "../../styles/styleComponents/songs/StyledSongs";
import Spinner from "../molecules/spinner/Spinner";
const ListSongs = lazy(() => import("../molecules/songs/ListSongs"));
const SongsManagement = lazy(() =>
  import("../molecules/songs/SongsManagement")
);

const Songs = () => (
  <StyledSongs>
    <ListSongs />
    <Suspense fallback={<Spinner />}>
      <SongsManagement />
    </Suspense>
  </StyledSongs>
);

export default Songs;
