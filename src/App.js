import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Spinner from "./components/molecules/spinner/Spinner";
const NavBar = lazy(() => import("./components/organism/NavBar"));
const Authors = lazy(() => import("./components/pages/Authors"));
const UpdateAuthors = lazy(() =>
  import("./components/organism/authors/UpdateAuthors")
);
const AddAuthor = lazy(() => import("./components/organism/authors/AddAuthor"));
const Home = lazy(() => import("./components/pages/Home"));
const NotFound = lazy(() => import("./components/pages/NotFound.js"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <div>
        <NavBar />
        <Switch>
          <Route path="/playList" component={Home} />
          <Route path="/addAuthor" component={AddAuthor} />
          <Route path="/updateAuthors/:id" component={UpdateAuthors} />
          <Route path="/authors" component={Authors} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
