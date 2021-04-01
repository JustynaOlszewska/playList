import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Spinner from "./components/molecules/spinner/Spinner";
const NavBar = lazy(() => import("./components/organism/NavBar"));
const Authors = lazy(() => import("./components/pages/Authors"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <div>
        <NavBar />
        <Switch>
          <Route path="/authors" component={Authors} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
