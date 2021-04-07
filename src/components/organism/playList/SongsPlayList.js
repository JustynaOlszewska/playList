import React, { lazy, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useDrop } from "react-dnd";
import PropTypes from "prop-types";
import { getAllSongs } from "../../../api/apiSongs";
import { ItemTypes } from "../../../constants";
import { StyledUl } from "../../../styles/styleComponents/songs/StyledListSongs";
import Spinner from "../../molecules/spinner/Spinner";
const SongPlayList = lazy(() =>
  import("../../molecules/playList/SongPlayList")
);

const SongsPlayList = ({ dropsongs }) => {
  const [allSongs, setAllSongs] = useState([]);
  const { data, error, isLoading, isError } = useQuery("songs", getAllSongs);

  useEffect(() => {
    setAllSongs(data);
  }, [data]);

  // eslint-disable-next-line
  const [{ isOver: isSongsOver }, removeFromPlayList] = useDrop(() => ({
    accept: ItemTypes.SONGSDND,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <StyledUl ref={removeFromPlayList}>
          {allSongs &&
            allSongs.map((song, index) => (
              <SongPlayList
                typednd={ItemTypes.SONGSDND}
                dropsongs={dropsongs}
                index={index}
                key={song.id}
                song={song}
              />
            ))}
        </StyledUl>
      )}
      {isError && <span>Error: {error.message}</span>}
    </>
  );
};
SongsPlayList.propTypes = {
  dropsongs: PropTypes.func.isRequired,
};
export default SongsPlayList;
