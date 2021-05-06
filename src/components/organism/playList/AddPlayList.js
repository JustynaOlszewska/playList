import React, { lazy } from "react";
import PropTypes from "prop-types";
import FormPlayListAdd from "./FormPlayListAdd";
import { StyledWrapperFormPlayListAdd } from "../../../styles/styleComponents/playList/StyledAddPlayList";
const DurationPlayList = lazy(() =>
  import("../../organism/playList/DurationPlayList")
);

const AddPlayList = ({ children, isOver, playList, changeStatusItems }) => {
  return (
    <StyledWrapperFormPlayListAdd>
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
    </StyledWrapperFormPlayListAdd>
  );
};

AddPlayList.propTypes = {
  children: PropTypes.node,
  isOver: PropTypes.bool,
  playList: PropTypes.array,
  changeStatusItems: PropTypes.func,
};

export default AddPlayList;
