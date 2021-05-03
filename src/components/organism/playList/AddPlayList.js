import React, { lazy } from "react";
import PropTypes from "prop-types";
import FormPlayListAdd from "./FormPlayListAdd";
const DurationPlayList = lazy(() =>
  import("../../organism/playList/DurationPlayList")
);

const AddPlayList = ({ children, isOver, playList, changeStatusItems }) => {
  return (
    <section style={{ flexGrow: 3, display: "flex" }}>
      <FormPlayListAdd
        playList={playList}
        type="Add"
        changeStatusItems={changeStatusItems}
      >
        {React.cloneElement(children, { isOver })}
      </FormPlayListAdd>
      <DurationPlayList>
        {playList.length &&
          playList
            .map((element) => element.duration)
            .reduce((total, currentValue) => {
              const sum = total + currentValue;
              return sum;
            })}
      </DurationPlayList>
    </section>
  );
};

AddPlayList.propTypes = {
  children: PropTypes.node,
  isOver: PropTypes.bool,
  playList: PropTypes.array,
  changeStatusItems: PropTypes.func,
};

export default AddPlayList;
