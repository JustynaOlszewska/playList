import React, { lazy } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
const UpdatePlayList = lazy(() =>
  import("../../organism/playList/UpdatePlayList")
);
const AddPlayList = lazy(() => import("../../organism/playList/AddPlayList"));

const PlayListManagement = ({
  children,
  isOver,
  playList,
  setPlayList,
  changeStatusItems,
}) => {
  const match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${match.path}/update`}>
          <UpdatePlayList
            setPlayList={setPlayList}
            playList={playList}
            isOver={isOver}
            changeStatusItems={changeStatusItems}
          >
            {React.cloneElement(children, { isOver })}
          </UpdatePlayList>
        </Route>
        <Route path={`${match.path}/add`}>
          <AddPlayList
            playList={playList}
            isOver={isOver}
            changeStatusItems={changeStatusItems}
          >
            {React.cloneElement(children, { isOver })}
          </AddPlayList>
        </Route>
      </Switch>
    </>
  );
};

PlayListManagement.propTypes = {
  children: PropTypes.node,
  isOver: PropTypes.bool,
  playList: PropTypes.array,
  setPlayList: PropTypes.func,
  changeStatusItems: PropTypes.func,
};

export default React.memo(PlayListManagement);
