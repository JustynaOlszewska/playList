import React, { lazy } from "react";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../../../constants/itemType";
import { statuses } from "../../../constants/data";
const PlayListManagement = lazy(() =>
  import("../../molecules/playList/PlayListManagement")
);

const DropWrapper = ({
  onDrop,
  children,
  status,
  playList,
  setPlayList,
  changeStatusItems,
}) => {
  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    canDrop: (item) => {
      const itemIndex = statuses.findIndex((si) => si.status === item.status);
      const statusIndex = statuses.findIndex((si) => si.status === status);
      return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
    },
    drop: (item, monitor) => {
      onDrop(item, monitor, status);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return (
    <div ref={drop} style={{ display: "flex" }}>
      {status === "songs" ? (
        <div style={{ width: "200px", heigth: "400px" }}>
          {React.cloneElement(children, { isOver })}
        </div>
      ) : (
        <PlayListManagement
          isOver={isOver}
          playList={playList}
          setPlayList={setPlayList}
          changeStatusItems={changeStatusItems}
        >
          {React.cloneElement(children, { isOver })}
        </PlayListManagement>
      )}
    </div>
  );
};

DropWrapper.propTypes = {
  children: PropTypes.node,
  status: PropTypes.string,
  onDrop: PropTypes.func,
  playList: PropTypes.array,
  setPlayList: PropTypes.func,
  changeStatusItems: PropTypes.func,
};

export default DropWrapper;
