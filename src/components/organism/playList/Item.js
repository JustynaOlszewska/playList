import React, { useRef, Fragment } from "react";
import PropTypes from "prop-types";
import { useDrop, useDrag } from "react-dnd";
// import Window from "./Window";
import { ITEM_TYPE } from "../../../constants/itemType";

const Item = ({ item, index, moveItem, status, id }) => {
  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: ITEM_TYPE,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ITEM_TYPE, ...item, index, id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  // const [show, setShow] = useState(false);

  // const onOpen = () => setShow(true);

  // const onClose = () => setShow(false);
  drag(drop(ref));

  return (
    <Fragment>
      <div
        ref={ref}
        style={{
          opacity: isDragging ? 0 : 1,
          fontSize: "15px",
          margin: "10px",
          padding: "10px",
          borderRadius: "5px",
          zIndex: "1",
          backgroundColor: "#3f51b5",
          color: "white",
          boxShadow: "5px 5px 8px #888888",
          width: "80%",
          textAlign: "center",
        }}
        data-handler-id={handlerId}
        // onClick={onOpen}
      >
        <div
          className={"color-bar"}
          style={{ backgroundColor: status.color }}
        />
        <p className={"item-title"}>{item.title}</p>
      </div>
      {/* <Window
                item={item}
                onClose={onClose}
                show={show}
            /> */}
    </Fragment>
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

export default Item;
