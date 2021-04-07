import React from "react";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";

const AllSongs = ({ onDropSongs, songsType, index, song }) => {
  //eslint-disable-next-line
  const [{ isDragging }, dragRef] = useDrag({
    item: {
      type: songsType,
      index,
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        onDropSongs(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <li ref={dragRef}>
      {song.title}
      {song.id}
    </li>
  );
};

AllSongs.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
  }),
  index: PropTypes.number,
  songsType: PropTypes.string,
  onDropSongs: PropTypes.func,
};
export default AllSongs;
