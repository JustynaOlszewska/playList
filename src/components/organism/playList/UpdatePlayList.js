import React from "react";
import { useQuery } from "react-query";
import PropTypes from "prop-types";
import FormPlayListUpdate from "./FormPlayListUpdate";
import { getAllPlayList } from "../../../api/apiPlayList";
import { StyleUpdateWrapper } from "../../../styles/styleComponents/playList/StyledUpdatePlayList";
import Spinner from "../../molecules/spinner/Spinner";

const UpdatePlayList = ({
  children,
  isOver,
  playList,
  setPlayList,
  changeStatusItems,
}) => {
  const { data, isLoading } = useQuery("playlists", getAllPlayList);

  return isLoading ? (
    <Spinner />
  ) : (
    <StyleUpdateWrapper>
      <FormPlayListUpdate
        setPlayList={setPlayList}
        playList={playList}
        data={JSON.parse(JSON.stringify(data))}
        changeStatusItems={changeStatusItems}
        type="Update"
      >
        {React.cloneElement(children, { isOver })}
      </FormPlayListUpdate>
    </StyleUpdateWrapper>
  );
};

UpdatePlayList.propTypes = {
  children: PropTypes.node,
  isOver: PropTypes.bool,
  playList: PropTypes.array,
  setPlayList: PropTypes.func,
  changeStatusItems: PropTypes.func,
};

export default React.memo(UpdatePlayList);
