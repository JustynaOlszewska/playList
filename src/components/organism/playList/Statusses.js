import React, { lazy } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import {
  StyledContainerHead,
  StyledH2PlayList,
  StyledStatusses,
} from "../../../styles/styleComponents/playList/StyledStatusses";
import Spinner from "../../molecules/spinner/Spinner";
const Items = lazy(() => import("../../organism/playList/Items"));
const Item = lazy(() => import("../../organism/playList/Item"));
const DropWrapper = lazy(() => import("../../organism/playList/DropWrapper"));

const Statusses = ({
  statuses,
  onDrop,
  moveItem,
  items,
  isLoading,
  playList,
  setPlayList,
  changeStatusItems,
}) => {
  const match = useRouteMatch();

  return (
    <StyledStatusses>
      {statuses.map((element) => (
        <StyledContainerHead key={element.status}>
          <StyledH2PlayList>{element.status.toUpperCase()}</StyledH2PlayList>
          <DropWrapper
            onDrop={onDrop}
            status={element.status}
            playList={playList}
            setPlayList={setPlayList}
            changeStatusItems={changeStatusItems}
          >
            {isLoading ? (
              <Spinner />
            ) : (
              <Switch>
                {" "}
                <Route path={[`${match.path}/update`, `${match.path}/add`]}>
                  <Items>
                    {items
                      .filter((item) => item.status === element.status)
                      .map((item, idx) => (
                        <Item
                          key={item.id}
                          id={item.id}
                          item={item}
                          index={idx}
                          moveItem={moveItem}
                          status={element}
                        />
                      ))}
                  </Items>
                </Route>{" "}
              </Switch>
            )}
          </DropWrapper>
        </StyledContainerHead>
      ))}
    </StyledStatusses>
  );
};

Statusses.propTypes = {
  isLoading: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
  moveItem: PropTypes.func,
  onDrop: PropTypes.func,
  statuses: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  playList: PropTypes.array,
  setPlayList: PropTypes.func,
  changeStatusItems: PropTypes.func,
  isOver: PropTypes.bool,
};

export default Statusses;
