import React, { lazy, useState, useEffect, useCallback } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useQuery } from "react-query";
import {
  StyledContainerHead,
  StyledH2PlayList,
  StyledStatusses,
} from "../../../styles/styleComponents/playList/StyledStatusses";
import { getAllSongs } from "../../../api/apiSongs";
import { statuses } from "../../../constants/data";
import Spinner from "../spinner/Spinner";
const Items = lazy(() => import("./Items"));
const Item = lazy(() => import("../../molecules/playList/Item"));
const DropWrapper = lazy(() => import("../../organism/playList/DropWrapper"));
const Error = lazy(() => import("../../atom/Error"));

const Statusses = () => {
  const match = useRouteMatch();
  const { data, isLoading, isError, error } = useQuery("songs", getAllSongs);

  const [items, setItems] = useState([]);
  const [playList, setPlayList] = useState([]);
  const [isOver, setIsOver] = useState();

  useEffect(() => {
    if (!isLoading) {
      const dataCopy = JSON.parse(JSON.stringify([...data]));
      [dataCopy.map((e) => (e.status = "songs"))];
      setItems(dataCopy);
    }
  }, [data]);

  const changeStatusItems = useCallback(() => {
    const itemsCopy = JSON.parse(JSON.stringify(items));
    const itemsSongs = itemsCopy.filter((item) => item.status === "songs");
    const itemsPlaylist = itemsCopy.filter(
      (item) => item.status === "playList"
    );
    itemsPlaylist.forEach((e) => (e.status = "songs"));
    setItems([...itemsSongs, ...itemsPlaylist]);

    setPlayList([]);
  }, [items]);

  const onDrop = (item, monitor, status) => {
    addToPlayList(item, status);
    setIsOver(isOver);
    setItems((prevState) => {
      const newItems = prevState
        .filter((index) => index.id !== item.id)
        .concat({ ...item, status });
      return [...newItems];
    });
  };

  const addToPlayList = useCallback(
    (item, status) => {
      const newPlayList = playList.some((e) => e.id === item.id);

      if (status === "playList") {
        !newPlayList && setPlayList([...playList, item]);
      } else if (status === "songs") {
        const index = playList.findIndex((e) => e.title === item.title);
        newPlayList && playList.splice(index, 1);
        setPlayList(playList);
      }
    },
    [playList]
  );

  const moveItem = useCallback(
    (dragIndex, hoverIndex) => {
      const item = items[dragIndex];

      setItems((prevState) => {
        const newItems = prevState.filter((i, idx) => idx !== dragIndex);
        newItems.splice(hoverIndex, 0, item);
        return [...newItems];
      });
    },
    [items]
  );

  return (
    <>
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
      <Error isError={isError} massage={error?.message} />
    </>
  );
};

export default Statusses;
