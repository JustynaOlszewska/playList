import React from "react";
import { useDrag } from "react-dnd";
import PropTypes from "prop-types";
import { ItemTypes } from "../../../constants";
// typednd
const SongPlayList = ({ song, index, dropsongs }) => {
  // eslint-disable-next-line
  const [{ isDragging }, dragRef] = useDrag({
    item: {
      type: ItemTypes.SONGSDND,
      index,
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        dropsongs(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return <li ref={dragRef}>{song.title}</li>;
};

SongPlayList.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
  }),
  index: PropTypes.number,
  typednd: PropTypes.string,
  dropsongs: PropTypes.func,
};

export default SongPlayList;
