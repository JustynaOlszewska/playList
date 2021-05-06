import React, { useRef } from "react";
import PropTypes from "prop-types";
import { StyledContainerItem } from "../../../styles/styleComponents/playList/StyledItem";
import { useDragDrop } from "../../../hook/playList/useDragDrop";

const Item = ({ item, index, moveItem, id }) => {
  const ref = useRef(null);
  const { drop, drag, handlerId, isDragging } = useDragDrop(
    moveItem,
    index,
    id,
    ref,
    item
  );

  const { title } = item || {};

  drag(drop(ref));

  return (
    <>
      <StyledContainerItem
        ref={ref}
        data-handler-id={handlerId}
        isDragging={isDragging}
      >
        <div className={"color-bar"} />
        <p className={"item-title"}>{title}</p>
      </StyledContainerItem>
    </>
  );
};

Item.propTypes = {
  status: PropTypes.objectOf(PropTypes.string),
  index: PropTypes.number,
  item: PropTypes.shape({
    title: PropTypes.string,
    index: PropTypes.number,
  }),
  moveItem: PropTypes.func,
  id: PropTypes.number,
};

export default React.memo(Item);
