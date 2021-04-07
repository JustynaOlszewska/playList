import React, { lazy } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { StyledListSongs } from "../../../styles/styleComponents/songs/StyledSongsManagement";
const SongDetails = lazy(() => import("./SongDetails"));
const AddSong = lazy(() => import("../../organism/songs/AddSong"));
const UpdateSong = lazy(() => import("../../organism/songs/UpdateSong"));

const SongsManagement = () => {
  const match = useRouteMatch();

  return (
    <StyledListSongs>
      <Switch>
        <Route path={`${match.path}/songDetails/:id`}>
          <SongDetails />
        </Route>
        <Route path={`${match.path}/addSong`}>
          <AddSong>Add Song</AddSong>
        </Route>
        <Route path={`${match.path}/changeSong/:id`}>
          <UpdateSong>Change Song</UpdateSong>{" "}
        </Route>
      </Switch>
    </StyledListSongs>
  );
};

export default SongsManagement;
