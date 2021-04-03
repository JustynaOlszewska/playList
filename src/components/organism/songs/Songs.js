import React, { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch, NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Spinner from "../../molecules/spinner/Spinner";
const ListSongs = lazy(() => import("../../molecules/songs/ListSongs"));
const SongDetails = lazy(() => import("../../molecules/songs/SongDetails"));
const FormAuthors = lazy(() => import("../../organism/FormAuthors.js"));

const Songs = () => {
  const match = useRouteMatch();

  return (
    <>
      <ListSongs />
      <Suspense fallback={<Spinner />}>
        <section>
          <ul>
            <Button color="inherit">
              <NavLink to={`${match.url}/songDetails`}>Song Details</NavLink>
            </Button>
            <Button color="inherit">
              <NavLink to={`${match.url}/addSong`}>Add Song</NavLink>
            </Button>
            <Button color="inherit">
              <NavLink to={`${match.url}/changeSong`}>Change Song</NavLink>
            </Button>
          </ul>
          <Switch>
            <Route path={`${match.path}/songDetails`} component={SongDetails} />
            <Route path={`${match.path}/addSong`}>
              <FormAuthors>Add Song</FormAuthors>
            </Route>
            <Route path={`${match.path}/changeSong`}>
              <FormAuthors>Change Song</FormAuthors>{" "}
            </Route>
          </Switch>
        </section>
      </Suspense>
    </>
  );
};

export default Songs;
