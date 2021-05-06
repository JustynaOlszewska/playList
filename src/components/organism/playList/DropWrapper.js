import React, { lazy } from "react";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import { ITEM_TYPE } from "../../../constants/itemType";
import { statuses } from "../../../constants/data";
const PlayListManagement = lazy(() =>
  import("../../molecules/playList/PlayListManagement")
);
import {
  StyledChildrenDrop,
  StyledDrop,
} from "../../../styles/styleComponents/playList/StyledDropWrapper";

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
    <StyledDrop ref={drop}>
      {status === "songs" ? (
        <StyledChildrenDrop>
          {React.cloneElement(children, { isOver })}
        </StyledChildrenDrop>
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
    </StyledDrop>
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

export default React.memo(DropWrapper);
