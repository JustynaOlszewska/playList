import React, { lazy } from "react";
import { useRouteMatch } from "react-router-dom";
const Statusses = lazy(() => import("../molecules/playList/Statusses"));
const NavigationPlayList = lazy(() =>
  import("../molecules/playList/NavigationPlayList")
);
import {
  StyledWrapperPlayList,
  StyledH1PlayList,
} from "../../styles/styleComponents/playList/StyledPlayList";

const PlayList = () => {
  const match = useRouteMatch();

  return (
    <StyledWrapperPlayList>
      <NavigationPlayList />
      {match.isExact === true ? (
        <StyledH1PlayList>Manage your playList</StyledH1PlayList>
      ) : (
        <Statusses />
      )}
    </StyledWrapperPlayList>
  );
};

export default PlayList;
