import React from "react";
import PropTypes from "prop-types";
import { StyledItems } from "../../../styles/styleComponents/playList/StyledItems";

const Items = ({ children }) => <StyledItems>{children}</StyledItems>;

Items.propTypes = {
  children: PropTypes.node,
  isOver: PropTypes.bool,
};

export default React.memo(Items);
