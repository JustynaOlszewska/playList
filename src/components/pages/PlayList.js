import React, { lazy, useState, useEffect } from "react";
// const SongsPlayList = lazy(() => import("../organism/playList/SongsPlayList"));
// const AddPlayList = lazy(() => import("../organism/playList/AddPlayList"));
import styled from "styled-components";
/////
import { useDrop } from "react-dnd";
import { getAllSongs } from "../../api/apiSongs";
import { ItemTypes } from "../../constants";
import { useQuery } from "react-query";
// const MyPlayList = lazy(() => import("../organism/exercise/MyPlayList"));
const AllSongs = lazy(() => import("../organism/playList/AllSongs"));

/////
const StyledDiv = styled.div`
  display: flex;
`;

const PlayList = () => {
  const [allSongs, setAllSongs] = useState([]);
  ///
  //eslint-disable-next-line
  const [myPlayList, setMyPlayList] = useState([]);
  ///
  const { data } = useQuery("songs", getAllSongs);
  //, error, isLoading, isError pamietac zeby to dodac d tabicyy
  useEffect(() => {
    setAllSongs(data);
  }, [data]);

  //eslint-disable-next-line
  const [{ isOver }, addToPlayList] = useDrop({
    accept: ItemTypes.PLAYLISTDND,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  //eslint-disable-next-line
  const [{ isOver: isSongsOver }, removeFromPlayList] = useDrop({
    accept: ItemTypes.SONGSDND,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const moveSongs = (item) => {
    if (item && item.type === ItemTypes.PLAYLISTDND) {
      setAllSongs((_songsdnd) => [..._songsdnd, myPlayList[item.index]]);
      setMyPlayList((_playlistdnd) =>
        _playlistdnd.filter((_, index) => index !== item.index)
      );
      console.log("dddd");
    } else {
      setMyPlayList((_playlistdnd) => [..._playlistdnd, allSongs[item.index]]);
      setAllSongs((_songsdnd) =>
        _songsdnd.filter((_, index) => index !== item.index)
      );
    }
  };

  return (
    <section>
      <h1>Create and update music playlist</h1>
      <StyledDiv>
        <div>
          <ul ref={removeFromPlayList}>
            {allSongs &&
              allSongs.map((song, index) => (
                <AllSongs
                  songsType={ItemTypes.SONGSDND}
                  key={song.id}
                  onDropSongs={moveSongs}
                  index={index}
                  {...song}
                />
              ))}
          </ul>
        </div>
        <div
          style={{ width: "200px", height: "400px", border: "2px solid black" }}
        >
          <ul ref={addToPlayList}>
            {myPlayList &&
              myPlayList.map((song, index) => (
                <AllSongs
                  songsType={ItemTypes.PLAYLISTDND}
                  key={song.id}
                  onDropSongs={moveSongs}
                  index={index}
                  {...song}
                />
              ))}
          </ul>
        </div>
        {/* <SongsPlayList dropsongs={moveSongs} />
                <AddPlayList dropsongs={moveSongs} /> */}
      </StyledDiv>
    </section>
  );
};

export default PlayList;
