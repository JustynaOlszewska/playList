import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Spinner from "./components/molecules/spinner/Spinner";
import NavBar from "./components/organism/NavBar";
import { StyledWrapper } from "./styles/styleComponents/StyledApp";
const Authors = lazy(() => import("./components/pages/Authors"));
const Home = lazy(() => import("./components/pages/Home"));
const UpdateAuthors = lazy(() =>
  import("./components/organism/authors/UpdateAuthors")
);
const AddAuthor = lazy(() => import("./components/organism/authors/AddAuthor"));
const Songs = lazy(() => import("./components/pages/Songs"));
const PlayList = lazy(() => import("./components/pages/PlayList"));
const NotFound = lazy(() => import("./components/pages/NotFound.js"));

function App() {
  return (
    <StyledWrapper>
      <NavBar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/playList" component={Home} />
          <Route path="/addAuthor" component={AddAuthor} />
          <Route path="/updateAuthors/:id" component={UpdateAuthors} />
          <Route path="/authors" component={Authors} />
          <Route path="/songs" component={Songs} />
          <Route path="/listPlay" component={PlayList} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </StyledWrapper>
  );
}

export default App;
