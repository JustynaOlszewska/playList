import React, { useState, useEffect, lazy } from "react";
import { useRouteMatch } from "react-router-dom";

import { useQuery } from "react-query";
import { getAllSongs } from "../../api/apiSongs";
import { statuses } from "../../constants/data";
const Error = lazy(() => import("../atom/Error"));
const Statusses = lazy(() => import("../organism/playList/Statusses"));
const NavigationPlayList = lazy(() =>
  import("../organism/playList/NavigationPlayList")
);

const PlayList = () => {
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

  const changeStatusItems = () => {
    const itemsCopy = JSON.parse(JSON.stringify(items));
    const itemsSongs = itemsCopy.filter((item) => item.status === "songs");
    const itemsPlaylist = itemsCopy.filter(
      (item) => item.status === "playList"
    );
    itemsPlaylist.forEach((e) => (e.status = "songs"));
    setItems([...itemsSongs, ...itemsPlaylist]);

    setPlayList([]);
  };

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

  const addToPlayList = (item, status) => {
    const newPlayList = playList.some((e) => e.id === item.id);

    if (status === "playList") {
      !newPlayList && setPlayList([...playList, item]);
    } else if (status === "songs") {
      const index = playList.findIndex((e) => e.title === item.title);
      newPlayList && playList.splice(index, 1);
      setPlayList(playList);
    }
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex];

    setItems((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NavigationPlayList />
      {match.isExact === true ? (
        <h1 style={{ alignSelf: "center", margin: "15% 0" }}>
          Manage your playList
        </h1>
      ) : (
        <Statusses
          isLoading={isLoading}
          items={items}
          moveItem={moveItem}
          onDrop={onDrop}
          statuses={statuses}
          playList={playList}
          setPlayList={setPlayList}
          changeStatusItems={changeStatusItems}
        />
      )}
      <Error isError={isError} massage={error?.message} />
    </div>
  );
};

export default PlayList;
